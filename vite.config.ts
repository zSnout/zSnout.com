import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { sync } from "fast-glob";

const jsfile = /\.([jt]sx?|vue)($|\?)/;
const images = sync("./public/images/**/*.png");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: "remove-trim",
      transform(code, id) {
        if (process.env.NODE_ENV === "development")
          return code.replace(/trim\s*`/g, "`");

        if (jsfile.test(id)) {
          return code.replace(/trim\s*(`[^`]*`)/g, (match) => {
            return match
              .slice(4)
              .replace(/\s+/g, " ")
              .replace(/\B \b|\b \B|\B \B/g, "");
          });
        }
      },
    },
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
    VitePWA(),
  ],
});