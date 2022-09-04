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

const jsfile = /\.(tsx?|vue|md)($|\?)/;
const images = sync("./public/images/**/*.png");

const articles = sync("./src/views/blog/**/*.md").map((src) => {
  const path = src.slice("./src/views".length);
  const { data: frontmatter, excerpt } = read(src);

  return {
    path,
    frontmatter: {
      ...frontmatter,
      excerpt,
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

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["path"],
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
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
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images-cache",
              expiration: {
                purgeOnQuotaError: true,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/socket.io"),
            handler: "NetworkOnly",
            options: {
              cacheName: "api-cache",
            },
          },
          {
            urlPattern: ({ url }) => !url.pathname.startsWith("/socket.io"),
            handler: "NetworkFirst",
            options: {
              cacheName: "main-cache",
            },
          },
        ],
      },
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
