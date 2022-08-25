import Katex from "@traptitech/markdown-it-katex";
import vue from "@vitejs/plugin-vue";
import { sync } from "fast-glob";
import Prism from "markdown-it-prism";
import TOC from "markdown-it-toc-done-right";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";

const jsfile = /\.([jt]sx?|vue|md)($|\?)/;
const images = sync("./public/images/**/*.png");
const publicFiles = sync("./public/**/*").filter(
  (e) => !e.startsWith("./public/images/") && !e.includes("404.html")
);

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
        });

        const render: (src: string, env?: any) => string = md.render;
        md.render = function (src: string, env?: any) {
          return render
            .call(this, src, env)
            .replace(/<pre(?:[^>]*)>/g, (match) =>
              match.includes("class")
                ? match.replace('class="', 'class="second-layer ')
                : match.replace(">", ' class="second-layer">')
            )
            .replace(/<code>/g, '<code class="second-layer">')
            .replace(/<table>/g, '<table class="second-layer">')
            .replace(/<p>\s*<img/g, '<p class="non-text"><img')
            .replace(/<nav[^>]*>/g, "<template #aside>")
            .replace(/<\/nav>/g, "</template>");
        };
      },
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
