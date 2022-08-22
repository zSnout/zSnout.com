<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import { computed } from "vue";
  import SafeArea from "./SafeArea.vue";

  const isMobile = useMediaQuery("(max-width: 400px)");
  const navHeight = computed(() => (isMobile ? "3.5" : "2.5"));
</script>

<template>
  <SafeArea
    class="page-content"
    :min-height="`calc(var(--app-height) - ${navHeight}rem)`"
    bottom
    top
  >
    <div class="content">
      <slot />
    </div>
  </SafeArea>
</template>

<style lang="scss" scoped>
  .page-content {
    position: fixed;
    top: 3.5rem;
    left: 0;
    z-index: 2;
    width: var(--app-width);
    height: var(--app-height);

    @media (max-width: 400px) {
      top: 2.5rem;
    }
  }

  .content {
    position: relative;
    height: 100%;
  }
</style>
