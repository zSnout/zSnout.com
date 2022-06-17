import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const jsfile = /\.([jt]sx?|vue)($|\?)/;

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
    VitePWA(),
  ],
});
