<script lang="ts" setup>
  import { useCssVar, useEventListener, useOnline } from "@vueuse/core";
  import { syncRefs } from "@vueuse/shared";
  import { onMounted, ref } from "vue";
  import { RouterView } from "vue-router";
  import ContextMenu from "./components/ContextMenu.vue";
  import MenuEntry from "./components/MenuEntry.vue";
  import { isDark } from "./composables/isDark";
  import Notification from "./components/Notification.vue";

  const online = useOnline();
  const addThis = ref<(url?: string) => void>();

  import("./components/BookmarkIcon.vue").then((module) => {
    addThis.value = module.addThis;
  });

  const connected = ref(false);
  import("./main").then((module) => syncRefs(module.connected, connected));

  const colorable = "color background-color shadow box-shadow text-shadow";

  const transitions = useCssVar("--transitions", document.documentElement, {
    initialValue: "none",
  });

  onMounted(() => {
    transitions.value = colorable.split(" ").join(" 0.3s, ") + " 0.3s";
  });

  const isCtxOpen = ref(false);
  const link = ref<Element>();
  const canvas = ref<HTMLCanvasElement>();
  const hide = () => (isCtxOpen.value = false);

  useEventListener("contextmenu", (event) => {
    if (event.defaultPrevented) {
      return;
    }

    canvas.value = undefined;
    if (event.target instanceof HTMLCanvasElement) {
      canvas.value = event.target;
    }

    link.value = undefined;
    for (const el of event.composedPath()) {
      if (el instanceof HTMLInputElement) {
        return;
      }

      if (
        el instanceof HTMLAnchorElement ||
        el instanceof HTMLButtonElement ||
        (el instanceof Element && el.role === "button")
      ) {
        link.value = el;
        break;
      }
    }

    event.preventDefault();
    isCtxOpen.value = true;
  });

  const { HTMLAnchorElement, HTMLButtonElement } = window;
  const nextTick = () => new Promise((resolve) => setTimeout(resolve, 10));

  async function spamIt() {
    if (link.value) {
      const button = link.value;

      for (const _ of Array<void>(100).fill()) {
        await nextTick();
        button.dispatchEvent(new MouseEvent("click"));
      }
    }
  }

  function is<Element>(
    a: unknown,
    b: new (...args: any[]) => Element
  ): a is Element {
    return a instanceof b;
  }

  function download(url: string, name = "") {
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = url;
    anchor.download = name;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
  }

  function saveCanvas() {
    const { value: cv } = canvas;
    if (!cv) return;

    cv.toBlob((blob) => {
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const path = location.pathname.split("/");
      const name = path[path.length - 1] || path[path.length - 2] || "picture";
      // If we're in an index file, the path ends with `/` so we default to the segment before it.

      download(url, `${name}.png`);
    }, "image/png");
  }
</script>

<template>
  <RouterView />

  <ContextMenu v-model:open="isCtxOpen">
    <MenuEntry @click="hide(), addThis?.()">Bookmark Page</MenuEntry>

    <MenuEntry
      v-if="is(link, HTMLAnchorElement)"
      @click="addThis?.((link as HTMLAnchorElement).href), hide()"
    >
      Bookmark Link
    </MenuEntry>

    <MenuEntry
      v-if="is(link, HTMLButtonElement) || link?.role === 'button'"
      @click="hide(), spamIt()"
    >
      Spam It
    </MenuEntry>

    <MenuEntry v-if="canvas" @click="hide(), saveCanvas()">
      Save Picture
    </MenuEntry>

    <MenuEntry @click="hide(), (isDark = !isDark)">
      {{ isDark ? "Light" : "Dark" }} Mode
    </MenuEntry>
  </ContextMenu>

  <Notification :open="online && !connected">
    Connecting to zServer...
  </Notification>
</template>

<style lang="scss">
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
  }

  :not(.ace-editor *):not(.chessboard *) {
    transition: var(--transitions);
  }

  body,
  svg,
  path,
  a,
  button,
  input,
  select,
  .text-color.text-color,
  .prose :where(:not(a):not(pre *):not(.katex *):not(.katex)),
  aside.aside * {
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    .dark &:where(:not(.light)) {
      color: white;
    }
  }

  a,
  button,
  select,
  canvas {
    -webkit-user-select: none;
    user-select: none;
  }

  input {
    -webkit-user-select: text;
    user-select: text;
  }

  html {
    height: var(--app-height);
  }

  body,
  #app {
    min-height: var(--app-height);
  }

  body {
    margin: 0;
    line-height: 1.5;
    background-color: #f0f0f0;
    overscroll-behavior: none;
    --background-color: #f0f0f0;

    .dark & {
      background-color: #0f0f0f;
      --background-color: #0f0f0f;
    }
  }

  a,
  .link {
    color: #008383;
    text-decoration: none;
    cursor: pointer;

    :where(.hover) &:where(:hover:not(.no-link)) {
      text-decoration: underline;
    }

    .dark & {
      color: #42b8b8;
    }
  }

  .link.active {
    color: #008383 !important;

    .dark & {
      color: #42b8b8;
    }
  }

  a.no-color {
    color: inherit;
  }

  a,
  button {
    touch-action: manipulation;
  }

  canvas {
    touch-action: none;
  }

  .drop-shadow {
    filter: drop-shadow(0 3px 6px #ddd);

    .dark &:not(.light) {
      filter: drop-shadow(0 3px 6px #151515);
    }
  }

  .shadow,
  .second-layer:not([disabled]),
  .second-layer.selected[disabled],
  .shadow-force,
  .prose table,
  .prose code:not(pre code),
  .prose pre {
    box-shadow: 0 3px 6px 1px #ddd;

    .dark &:not(.light) {
      box-shadow: 0 3px 6px 1px #151515;
    }

    .shadow,
    .second-layer,
    .prose table,
    .prose code:not(pre code),
    .prose pre {
      box-shadow: none;
    }
  }

  .second-layer,
  .prose table,
  .prose code:not(pre code),
  .prose pre {
    padding: 0.5rem 0.75rem;
    background-color: var(--layer-background);
    border-radius: 0.25rem;
    --layer-background: white;

    &[disabled]:not(.selected) {
      opacity: 0.5;
    }

    .dark &:where(:not(.light)) {
      --layer-background: #1f1f1f;
    }

    .second-layer,
    .prose table,
    .prose code:not(pre code),
    .prose pre {
      --layer-background: #f0f0f0;

      .dark &:where(:not(.light)) {
        --layer-background: #0f0f0f;
      }
    }

    &.blur {
      @supports (backdrop-filter: blur(0.5em)) or
        (-webkit-backdrop-filter: blur(0.5em)) {
        -webkit-backdrop-filter: blur(0.5em);
        backdrop-filter: blur(0.5em);
        --layer-background: #ffffff80;

        .dark &:where(:not(.light)) {
          --layer-background: #1f1f1f80;
        }

        .second-layer & {
          --layer-background: #f0f0f080;

          .dark &:where(:not(.light)) {
            --layer-background: #0f0f0f80;
          }
        }
      }
    }
  }

  .outline,
  .hoverline,
  .focusline {
    border: none;
    border-radius: 0.25rem;
  }

  .outline,
  .hover .hoverline:not([disabled]):hover,
  .hover .focusline:not([disabled]):focus {
    &.second-layer {
      padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
      border: 1px solid #066567;
      outline: none;
    }

    &:not(.second-layer) {
      outline: 1px solid #066567;
    }
  }

  .dark .outline,
  .dark hr,
  .dark blockquote,
  .dark q,
  .dark.hover .hoverline:hover,
  .dark.hover .focusline:focus {
    &:where(:not(.light)) {
      border-color: #2c8d8d;
      outline-color: #2c8d8d;
    }
  }

  hr {
    margin: 1em 0;
    border: none;
    border-top: 1px solid #066567;
  }

  blockquote,
  q {
    border-left: 2px solid #066567;
  }
</style>
