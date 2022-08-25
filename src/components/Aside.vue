<script lang="ts" setup>
  defineProps<{ open: boolean }>();
</script>

<template>
  <aside class="aside">
    <slot />
  </aside>
</template>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    z-index: 3;
    overflow: auto;

    @media (min-width: 1080px) {
      $safe-area-center: 50%;
      $safe-area-width: min(1000px, 100% - 8em - 200px);
      $safe-area-left: calc(-100px - 2em + 1em);

      top: 3.5rem + 2rem;
      left: calc(
        $safe-area-center + $safe-area-width / 2 + $safe-area-left + 2em
      );
      width: 200px;
      height: calc(100% - 3.5rem - 4rem);
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }
  }
</style>
