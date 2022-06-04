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
    transition: var(--transitions);
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
</style>
