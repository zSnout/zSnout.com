import {
  tryOnScopeDispose,
  useCssVar,
  useStorage,
  useWindowSize,
} from "@vueuse/core";
import { io, Socket } from "socket.io-client";
import { DisconnectDescription } from "socket.io-client/build/esm/socket";
import { useRegisterSW } from "virtual:pwa-register/vue";
import { createApp, defineAsyncComponent, ref, watchEffect } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ClientToServer, ServerToClient } from "../shared.client";
import App from "./App.vue";
import { isDark } from "./composables/isDark";
import { isHoverable } from "./composables/isHoverable";

function transformRoutes(
  routes: Record<string, () => Promise<any>>,
  ext: string
) {
  return Object.entries(routes).map<RouteRecordRaw>(([path, module]) => ({
    path: path
      .slice(7, -ext.length)
      .replace(/index$/i, "")
      .replace(/\/\[(\w+)\](?=\/)/g, (char) => `/:${char.slice(2, -1)}`),
    component: module,
  }));
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...transformRoutes(import.meta.glob("./views/**/*.vue"), ".vue"),
    ...transformRoutes(import.meta.glob("./views/**/*.md"), ".md"),
    { path: "/:path(.*)", component: () => import("./views/404.vue") },
  ],
});

router.onError((error) => {
  if (import.meta.hot) {
    location.reload();
  } else {
    alert(
      `An error occurred. zSnout will be reloaded once you close this message.\n\n${error}`
    );

    location.reload();
  }
});

window.onerror = (_, source, line, col, error) => {
  // Chrome throws an error while typing in the console;
  // this is a workaround to prevent from reloading the page.
  if (source === location.href) return;

  if (import.meta.hot) {
    location.reload();
  } else {
    alert(
      `An error occurred in ${source}:${line}:${col}. zSnout will be reloaded once you close this message.\n\n${error}`
    );

    location.reload();
  }
};

const titleCache = new Map<string, string>();

function simpleTitle(path: string) {
  if (titleCache.has(path)) {
    return titleCache.get(path)!;
  }

  // Update server/cli.ts when this is changes.

  const title = path
    .replace(/-./g, (match) => " " + match[1].toLocaleUpperCase())
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bAscii\b/g, "ASCII")
    .replace(/\bGithub\b/g, "GitHub")
    .replace(/\bLets\b/g, "Let's")
    .replace(/\bOs\b/g, "Operating System")
    .replace(/\bPascals\b/g, "Pascal's")
    .replace(/Tick Oat Two/g, "Tick-oaT-Two")
    .replace(/\bWebgl\b/g, "WebGL")
    .replace(/\bYoutube\b/g, "YouTube")
    .replace(/\bZsnout\b/g, "zSnout")
    .replace(/\b3d\b/g, "3D")
    .replace(/(?!^)\bAny\b(?!$)/g, "any")
    .replace(/(?!^)\bFor\b(?!$)/g, "for")
    .replace(/(?!^)\bIs\b(?!$)/g, "is")
    .replace(/(?!^)\bOf\b(?!$)/g, "of")
    .replace(/(?!^)\bOn\b(?!$)/g, "on")
    .replace(/(?!^)\bThe\b(?!$)/g, "the");

  titleCache.set(path, title);
  return title;
}

export function titleOf(path: string, deep = false): string {
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

router.afterEach(() => {
  scrollTo({
    behavior: "auto",
    left: 0,
    top: 0,
  });
});

const Prose = defineAsyncComponent(() => import("./components/Prose.vue"));

export const app = createApp(App);
app.component("Prose", Prose);
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

  const metaThemeEl = document.querySelector("meta[name='theme-color']");
  metaThemeEl?.setAttribute(
    "content",
    CSS.supports("backdrop-filter", "blur(0.5em)") ||
      CSS.supports("-webkit-backdrop-filter", "blur(0.5em)")
      ? isDark.value
        ? "#171819"
        : "#f7f7f7"
      : isDark.value
      ? "#202124"
      : "#ffffff"
  );
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

export const socket = io() as Socket<ServerToClient, ClientToServer>;

export const connected = ref(socket.connected);
socket.on("connect", () => (connected.value = true));
socket.on("disconnect", () => (connected.value = false));

export const session = useStorage("session", "");
export const username = useStorage("username", "");
export const willNotifyForBlog = useStorage("willNotifyForBlog", false);

export const error = ref("");

if (session.value) {
  socket.emit("account:check-session", session.value);
  socket.emit("blog:request:will-notify", session.value);
}

socket.on("account:update:session", (value) => (session.value = value));
socket.on("account:update:username", (value) => (username.value = value));
socket.on(
  "blog:update:will-notify",
  (value) => (willNotifyForBlog.value = value)
);
socket.on("error", (err) => (error.value = err));

export const timeLeftBeforeAccountDeletion = ref<false | number>(false);
socket.on(
  "account:needs-verification",
  (value) => (timeLeftBeforeAccountDeletion.value = value)
);

interface SocketReservedEvents {
  connect: () => void;
  connect_error: (err: Error) => void;
  disconnect: (
    reason: Socket.DisconnectReason,
    description?: DisconnectDescription
  ) => void;
}

export function useSocketListener<K extends keyof ServerToClient>(
  event: K,
  callback: ServerToClient[K]
): () => void;
export function useSocketListener<K extends keyof SocketReservedEvents>(
  event: K,
  callback: SocketReservedEvents[K]
): () => void;
export function useSocketListener(event: any, callback: any) {
  socket.on(event, callback as any);
  const stop = () => socket.off(event, callback as any);

  tryOnScopeDispose(stop);
  return stop;
}

if (new URL(location.href).searchParams.has("rr")) {
  setTimeout(() => {
    // Everyone should have memorized this URL by now.
    location.href = "https://youtube.com/watch?v=dQw4w9WgXcQ";
  }, 5000);
}
