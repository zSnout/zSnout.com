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
  path,
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
      background-color: #0f0f0f;
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

  .shadow,
  .second-layer,
  .shadow-force {
    box-shadow: 0 3px 6px 1px #ddd;

    .dark & {
      box-shadow: 0 3px 6px 1px #151515;
    }

    .shadow,
    .second-layer {
      box-shadow: none;
    }
  }

  .second-layer {
    padding: 0.5rem 0.75rem;
    background-color: var(--layer-background);
    border-radius: 0.25rem;
    --layer-background: white;

    .dark & {
      --layer-background: #1f1f1f;
    }

    .second-layer {
      --layer-background: #f0f0f0;

      .dark & {
        --layer-background: #0f0f0f;
      }
    }

    &.blur {
      @supports (backdrop-filter: blur(0.5em)) {
        backdrop-filter: blur(0.5em);
        --layer-background: #ffffff80;

        .dark & {
          --layer-background: #1f1f1f80;
        }

        .second-layer & {
          --layer-background: #f0f0f080;

          .dark & {
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
  .dark hr,
  .dark blockquote,
  .dark q,
  .dark.hover .hoverline:hover,
  .dark.hover .focusline:focus {
    border-color: #2c8d8d;
    outline-color: #2c8d8d;
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
