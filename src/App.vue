<script lang="ts" setup>
  import { useCssVar } from "@vueuse/core";
  import { onMounted } from "vue";
  import { RouterView } from "vue-router";

  const colorable = "color background-color shadow box-shadow text-shadow";

  const transitions = useCssVar("--transitions", document.documentElement, {
    initialValue: "none",
  });

  onMounted(() => {
    transitions.value = colorable.split(" ").join(" 0.3s, ") + " 0.3s";
  });
</script>

<template>
  <RouterView />
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

  :not(.ace-editor *) {
    transition: var(--transitions);
  }

  body,
  svg,
  svg *,
  a,
  button,
  input,
  select,
  .text-color {
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    .dark & {
      color: white;
    }
  }

  body,
  #app {
    min-height: var(--app-height);
  }

  html {
    height: var(--app-height);
  }

  body {
    margin: 0;
    line-height: 1.5;
    background-color: #f0f0f0;

    .dark & {
      background-color: #202124;
    }
  }

  a {
    color: #008383;
    text-decoration: none;

    :where(.hover) &:where(:hover) {
      text-decoration: underline;
    }

    .dark & {
      color: #42b8b8;
    }
  }

  a,
  button {
    touch-action: none;
  }

  canvas {
    touch-action: none;
  }

  .second-layer {
    padding: 0.5rem 0.75rem;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 3px 6px 1px #ddd;

    .dark & {
      background-color: #2f2f2f;
      box-shadow: 0 3px 6px 1px #1a1a1a;
    }

    .second-layer {
      background-color: #f0f0f0;
      box-shadow: none;

      .dark & {
        background-color: #202124;
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
  .hover .hoverline:hover,
  .hover .focusline:focus {
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
  .dark.hover .hoverline:hover,
  .dark.hover .focusline:focus {
    border-color: #2c8d8d;
    outline-color: #2c8d8d;
  }
</style>
