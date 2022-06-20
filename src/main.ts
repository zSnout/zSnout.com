import { useCssVar, useWindowSize } from "@vueuse/core";
import { useRegisterSW } from "virtual:pwa-register/vue";
import { createApp, watchEffect } from "vue";
import {
  createRouter,
  createWebHistory,
  onBeforeRouteUpdate,
  RouteRecordRaw,
} from "vue-router";
import App from "./App.vue";
import { isDark } from "./composables/isDark";
import { isHoverable } from "./composables/isHoverable";

const routes = import.meta.glob("./views/**/*.vue");

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(routes)
    .map<RouteRecordRaw>(([path, module]) => ({
      path: path
        .slice(7, -4)
        .replace(/(Index|Home)$/, "")
        .replace(/\/[A-Z]/g, (char) => char.toLocaleLowerCase())
        .replace(/[A-Z]/g, (char) => `-${char.toLocaleLowerCase()}`),
      component: module,
    }))
    .concat([
      { path: "/:path(.*)", component: routes["./views/404.vue"] },
      { path: "/leopard", redirect: "/leopards" },
    ]),
});

function simpleTitle(path: string) {
  return path
    .replace(/-./g, (match) => " " + match[1].toLocaleUpperCase())
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/Webgl/g, "WebGL")
    .replace(/Ai/g, "AI");
}

function titleOf(path: string, deep = false): string {
  if (path.endsWith("/")) {
    return titleOf(path.slice(0, -1)) + " Pages";
  } else if (path.includes("/")) {
    const split = path.split("/").reverse();

    if (deep) {
      return split.map((dir) => titleOf(dir)).join(" ");
    } else {
      // prettier-ignore
      return `${titleOf(split[0])} | ${titleOf(split.slice(1).join("/"), true)}`;
    }
  } else return simpleTitle(path);
}

router.beforeEach(({ path }, _, next) => {
  if (path === "/") {
    document.title = "zSnout";
  } else {
    document.title = titleOf(path.slice(1)) + " | zSnout";
  }

  next();
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
  document.documentElement.classList.toggle("dark", isDark.value);
});

watchEffect(() => {
  document.documentElement.classList.toggle("hover", isHoverable.value);
});

export const { width, height } = useWindowSize();

const appWidth = useCssVar("--app-width");
watchEffect(() => (appWidth.value = width.value + "px"));

const appHeight = useCssVar("--app-height");
watchEffect(() => (appHeight.value = height.value + "px"));

if (typeof Object.hasOwn !== "function") {
  Object.hasOwn = Object.prototype.hasOwnProperty.call;
}

window.addEventListener("keydown", (event) => {
  if (
    navigator.userAgent.includes("Mac") &&
    event.key === "," &&
    event.metaKey &&
    !event.shiftKey &&
    !event.ctrlKey &&
    !event.altKey
  ) {
    event.preventDefault();

    const svg = document.querySelector("svg.icon.options") as SVGElement;
    svg?.dispatchEvent(new MouseEvent("click"));
  }
});

declare global {
  interface EventTarget {
    checked: boolean;
    value: string;
  }
}
