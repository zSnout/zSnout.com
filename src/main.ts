import { useRegisterSW } from "virtual:pwa-register/vue";
import { createApp, watchEffect } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { useDark } from "./composables/useDark";
import { useHoverable } from "./composables/useHoverable";

const routes = import.meta.glob("./views/**/*.vue");

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(routes)
    .map(([path, module]) => ({
      path: path
        .slice(7, -4)
        .replace(/(Index|Home)$/, "")
        .replace(/\/[A-Z]/g, (char) => char.toLowerCase())
        .replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`),
      component: module,
    }))
    .concat({ path: "/:path(.*)", component: routes["./views/404.vue"] }),
});

export const app = createApp(App);
app.use(router).mount("#app");

const loc = new URL(location.href);
const path = loc.searchParams.get("path");
if (path) router.replace(path);

export const serviceWorker = useRegisterSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

watchEffect(() => {
  document.documentElement.classList.toggle("dark", useDark.value);
});

watchEffect(() => {
  document.documentElement.classList.toggle("hover", useHoverable.value);
});
