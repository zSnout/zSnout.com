import Katex from "@traptitech/markdown-it-katex";
import vue from "@vitejs/plugin-vue";
import { createBuilder } from "@yankeeinlondon/builder-api";
import { sync } from "fast-glob";
import Prism from "markdown-it-prism";
import TOC from "markdown-it-toc-done-right";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";

const jsfile = /\.(tsx?|vue|md)($|\?)/;
const images = sync("./public/images/**/*.png");
const publicFiles = sync("./public/**/*").filter(
  (e) => !e.startsWith("./public/images/") && !e.includes("404.html")
);

const addToc = createBuilder("post-markdown", "metaExtracted")
  .options<{}>()
  .initializer()
  .handler(async (payload) => {
    if (!payload.md.includes("[notoc]")) {
      payload.md = `[toc]\n\n${payload.md}`;
    } else {
      payload.md = payload.md.replaceAll("[notoc]", "");
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
    if (nav) {
      payload.templateBlock = payload.templateBlock
        .replace(navRegex, "")
        .replace(
          "</prose>",
          nav[0]
            .replace(navStart, "<template #aside>")
            .replace("</nav>", "</template>") + "</prose>"
        );
    }

    return payload;
  })
  .meta();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      wrapperComponent: "Prose",
      markdownItSetup(md) {
        md.use(Prism);
        md.use(Katex, { throwOnError: false });
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
    VitePWA({
      workbox: {
        additionalManifestEntries: publicFiles.map((entry) => entry.slice(8)),
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
