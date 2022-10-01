<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import HStack from "./HStack.vue";
  import SafeArea from "./SafeArea.vue";

  defineProps<{
    aside?: boolean;
    small?: boolean;
  }>();
</script>

<template>
  <nav class="nav-root">
    <UseScreenSafeArea top>
      <SafeArea :aside="aside" :small="small">
        <HStack class="navbar">
          <slot />
        </HStack>
      </SafeArea>
    </UseScreenSafeArea>
  </nav>
</template>

<style lang="scss" scoped>
  .nav-root {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    border-bottom: 1px solid #3c3c3c1f;

    .dark & {
      background-color: #202124;
      border-bottom-color: #5454547a;
    }

    @supports (backdrop-filter: blur(0.5em)) or
      (-webkit-backdrop-filter: blur(0.5em)) {
      background-color: #ffffff80;
      -webkit-backdrop-filter: blur(0.5em);
      backdrop-filter: blur(0.5em);

      .dark & {
        background-color: #20212480;
      }
    }
  }

  .navbar {
    height: calc(3.5rem - 1px);
    padding: 0.75rem 0;
    touch-action: manipulation;
  }

  .navbar :deep(.logo-outer) {
    margin-right: auto;
  }

  .navbar :deep(.logo) {
    height: 2rem;
    cursor: pointer;

    .hover &:hover {
      filter: drop-shadow(1px 1px 2px #0008);
    }

    .dark.hover &:hover {
      filter: drop-shadow(1px 1px 2px #fffc);
    }
  }

  .navbar :deep(svg.icon) {
    height: 100%;
  }

  @media (max-width: 400px) {
    .navbar {
      height: calc(2.5rem - 1px);
      padding: 0.5rem 0;
    }

    .navbar :deep(.logo) {
      height: 1.5rem;
    }
  }
</style>
