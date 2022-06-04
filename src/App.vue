<script lang="ts" setup>
  import { useCssVar } from "@vueuse/core";
  import { onMounted } from "vue";
  import { RouterView } from "vue-router";

  const colorable =
    "color background-color border-left-color\
 border-right-color border-bottom-color border-top-color\
 outline-color shadow box-shadow text-shadow";

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
    color: black;
    transition: var(--transitions);
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;

    .dark & {
      color: white;
    }
  }

  html,
  body,
  #app {
    min-height: 100vh;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;

    .dark & {
      background-color: #202124;
    }
  }

  #app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  a {
    color: #008383;
    text-decoration: none;

    .hover &:hover {
      text-decoration: underline;
    }

    .dark & {
      color: #42b8b8;
    }
  }

  .second-layer {
    padding: 0.5rem 0.75rem;
    background-color: white;
    border: 0 solid #0665ab;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px 1px #ddd;

    &.outline {
      border-width: 1px;
      outline: none;
    }

    .dark & {
      background-color: #2f2f2f;
      border-color: #2c8d8d;
      box-shadow: 0 3px 6px 1px #1a1a1a;
    }

    .hover &.focusline:focus {
      border-width: 1px;
      outline: none;
    }
  }
</style>
