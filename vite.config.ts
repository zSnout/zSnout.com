import Katex from "@traptitech/markdown-it-katex";
import vue from "@vitejs/plugin-vue";
import { createBuilder } from "@yankeeinlondon/builder-api";
import { sync } from "fast-glob";
import { read } from "gray-matter";
import anchor from "markdown-it-anchor";
import Prism from "markdown-it-prism";
import TOC from "markdown-it-toc-done-right";
import { createHash } from "node:crypto";
import { PreRenderedChunk } from "rollup";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";

const jsFile = /\.(tsx?|vue|md)($|\?)/;
const images = sync("./public/images/**/*.webp");

// There's some weird things going on with YAML dates so I'll just offset them...
function offsetDate(dateStr: any) {
  const date = new Date(dateStr);
  return date.getTime() + 24 * 60 * 60 * 1000;
}

const articles = sync("./src/views/blog/**/*.md").map((src) => {
  const path = src.slice("./src/views".length);

  const { data, excerpt } = read(src, {
    excerpt: true,
    excerpt_separator: "\n\n",
  });

  return {
    path,
    frontmatter: {
      excerpt,
      ...data,
      date: data.date ? offsetDate(data.date) : undefined,
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

    if (payload.frontmatter.date) {
      payload.frontmatter.date = offsetDate(payload.frontmatter.date);
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

  return parseInt(hash.digest("hex"), 16).toString(36).slice(0, 8);
}

function getHashOf(chunkInfo: PreRenderedChunk) {
  const hash = createHash("sha256");

  for (let key of Object.keys(chunkInfo.modules).sort()) {
    hash.update(chunkInfo.modules[key].code || "");
  }

  return parseInt(hash.digest("hex"), 16).toString(36).slice(0, 8);
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
          const hash = generateHash(chunkInfo.source);

          const name = chunkInfo.name?.split("/").at(-1) || undefined;
          if (!name) {
            return `assets/${hash}`;
          }

          const dotIndex = name.lastIndexOf(".");
          if (dotIndex === -1) {
            return `assets/${name}`;
          }

          const beforeDot = name.slice(0, dotIndex);
          const afterDot = name.slice(dotIndex + 1);

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
        if (jsFile.test(id)) {
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
