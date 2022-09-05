import Katex from "@traptitech/markdown-it-katex";
import vue from "@vitejs/plugin-vue";
import { createBuilder } from "@yankeeinlondon/builder-api";
import { sync } from "fast-glob";
import Prism from "markdown-it-prism";
import TOC from "markdown-it-toc-done-right";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";
import anchor from "markdown-it-anchor";
import { read } from "gray-matter";
import { create } from "random-seed";
import { PreRenderedChunk } from "rollup";
import { createHash } from "node:crypto";

const jsfile = /\.(tsx?|vue|md)($|\?)/;
const images = sync("./public/images/**/*.png");

const articles = sync("./src/views/blog/**/*.md").map((src) => {
  const path = src.slice("./src/views".length);
  const { data: frontmatter, excerpt } = read(src, {
    excerpt: true,
    excerpt_separator: "\n\n",
  });

  return {
    path,
    frontmatter: {
      excerpt,
      ...frontmatter,
    },
  };
});

const addToc = createBuilder("post-markdown", "metaExtracted")
  .options<{}>()
  .initializer()
  .handler(async (payload) => {
    if (payload.md.includes("[notoc]")) {
      payload.frontmatter.hasToc = false;
      payload.md = payload.md.replaceAll("[notoc]", "");
    } else {
      payload.frontmatter.hasToc = true;
      payload.md = `[toc]\n\n${payload.md}`;
    }

    return payload;
  })
  .meta();

const navStart = /<nav[^>]*>/;
const navRegex = /<nav[^>]*>.*?<\/nav>/;

const moveTocToAside = createBuilder("post-markdown", "sfcBlocksExtracted")
  .options<{}>()
  .initializer()
  .handler(async (payload) => {
    const nav = payload.templateBlock.match(navRegex);
    if (nav && payload.frontmatter.hasToc) {
      payload.templateBlock = payload.templateBlock
        .replace(navRegex, "")
        .replace(
          "</prose>",
          nav[0]
            .replace(navStart, "<template #aside><nav>")
            .replace("</nav>", "</nav></template>") + "</prose>"
        );
    }

    return payload;
  })
  .meta();

function generateHash(source: {}) {
  const hash = createHash("sha256");
  hash.update(source.toString());

  return parseInt(hash.digest("hex"), 16).toString(36).slice(0, 12);
}

function getHashOf(chunkInfo: PreRenderedChunk) {
  const hash = createHash("sha256");

  for (let key of Object.keys(chunkInfo.modules).sort()) {
    hash.update(chunkInfo.modules[key].code || "");
  }

  return parseInt(hash.digest("hex"), 16).toString(36).slice(0, 12);
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames(chunkInfo) {
          const hash = getHashOf(chunkInfo);
          return `assets/${chunkInfo.name}.${hash}.js`;
        },
        chunkFileNames(chunkInfo) {
          const hash = getHashOf(chunkInfo);
          return `assets/${chunkInfo.name}.${hash}.js`;
        },
        assetFileNames(chunkInfo) {
          const name = chunkInfo.name;
          if (!name) {
            return `assets/${chunkInfo.name}`;
          }

          const dotIndex = name.lastIndexOf(".");
          if (dotIndex === -1) {
            return `assets/${name}`;
          }

          const beforeDot = name.slice(0, dotIndex);
          const afterDot = name.slice(dotIndex + 1);
          const hash = generateHash(chunkInfo.source);

          return `assets/${beforeDot}.${hash}.${afterDot}`;
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["path"],
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement(tag) {
            return (
              tag === "semantics" || tag === "annotation" || tag.startsWith("m")
            );
          },
        },
      },
    }),
    Markdown({
      wrapperComponent: "Prose",
      markdownItSetup(md) {
        md.use(anchor);
        md.use(Katex, { throwOnError: false });
        md.use(Prism);
        md.use(TOC, {
          containerClass: "second-layer table-of-contents",
          listType: "ul",
          level: 2,
        });
      },
      builders: [addToc(), moveTocToAside()],
    }),
    {
      name: "fix-storymatic",
      transform(code, id) {
        if (jsfile.test(id)) {
          return code.replace(/_Storymatic/g, "Storymatic");
        }
      },
    },
    {
      name: "image-list",
      resolveId(id) {
        if (id === "virtual:image-list") {
          return "\0virtual:image-list";
        }
      },
      load(id) {
        if (id === "\0virtual:image-list") {
          return `export default ['${images
            .map((e) => e.slice(8))
            .join("', '")}']`;
        }
      },
    },
    {
      name: "blog-articles",
      resolveId(id) {
        if (id === "virtual:blog-articles") {
          return "\0virtual:blog-articles";
        }
      },
      load(id) {
        if (id === "\0virtual:blog-articles") {
          return `export default ${JSON.stringify(articles)}`;
        }
      },
    },
    VitePWA({
      registerType: "autoUpdate",
    }),
    {
      name: "socket.io",
      configureServer: process.argv.includes("build")
        ? undefined
        : async (server) => {
            if (server.httpServer) {
              return import("./server/index.js").then((e) =>
                e.makeIO(server.httpServer!)
              );
            }
          },
    },
  ],
});
