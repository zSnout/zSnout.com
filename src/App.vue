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

  body {
    padding: 0;
    color: white;
    background: #202124;
  }

  #app {
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  a {
    color: aliceblue;
  }
</style>
