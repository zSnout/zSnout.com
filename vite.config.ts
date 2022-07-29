import vue from "@vitejs/plugin-vue";
import { sync } from "fast-glob";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const jsfile = /\.([jt]sx?|vue)($|\?)/;
const images = sync("./public/images/**/*.png");
const publicFiles = sync("./public/**/*").filter((e) => !e.endsWith(".png"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
