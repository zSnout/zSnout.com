<script lang="ts" setup>
  import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
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
    background: #f0f0f0;

    .dark & {
      color: white;
      background-color: #202124;
    }
  }

  #app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
</style>
