<script lang="ts" setup>
  import { useDark } from "@vueuse/core";
  import { RouterView } from "vue-router";

  Object.assign(window, { useDark });
</script>

<template>
  <RouterView />
</template>

<style>
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
  }

  html,
  body,
  #app {
    min-height: 100vh;
  }

  body {
    margin: 0;
    color: white;
    background: #202124;
  }

  #app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
</style>
