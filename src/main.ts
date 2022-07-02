import { useCssVar, useStorage, useWindowSize } from "@vueuse/core";
import { useRegisterSW } from "virtual:pwa-register/vue";
import { createApp, watchEffect } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import { isDark } from "./composables/isDark";
import { isHoverable } from "./composables/isHoverable";
import { useApi } from "./composables/useApi";

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

router.onError((error) => {
  alert(
    `An error occurred. zSnout will be reloaded once you close this message.\n\n${error}`
  );

  location.reload();
});

window.onerror = (_, source, line, col, error) => {
  // Chrome throws an error while typing in the console;
  // this is a workaround to prevent from reloading the page.
  if (source === location.href) return;

  alert(
    `An error occurred in ${source}:${line}:${col}. zSnout will be reloaded once you close this message.\n\n${error}`
  );

  location.reload();
};

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

export const { width: appWidth, height: appHeight } = useWindowSize();

const appWidthVar = useCssVar("--app-width");
watchEffect(() => (appWidthVar.value = appWidth.value + "px"));

const appHeightVar = useCssVar("--app-height");
watchEffect(() => (appHeightVar.value = appHeight.value + "px"));

if (typeof Object.hasOwn !== "function") {
  Object.hasOwn = Object.prototype.hasOwnProperty.call;
}

export function showOptions() {
  document
    .querySelector("svg.icon.options")
    ?.dispatchEvent(new MouseEvent("click"));
}

window.addEventListener("keydown", (event) => {
  if (
    event.key === "," &&
    !event.shiftKey &&
    !event.altKey &&
    (navigator.userAgent.includes("Mac")
      ? event.metaKey && !event.ctrlKey
      : event.ctrlKey && !event.metaKey)
  ) {
    event.preventDefault();
    showOptions();
  }
});

export const session = useStorage("session", "");
export const username = useStorage("username", "");

useApi({
  api: "account/check-login",
  method: "POST",
  desc: "reauthenticate accounts",
  resultKeys: ["session", "username"],
}).then((value) => {
  if (value instanceof Error) {
    session.value = "";
    username.value = "";
  } else {
    username.value = value.username;
  }
});

declare global {
  interface EventTarget {
    checked: boolean;
    value: string;
  }
}
