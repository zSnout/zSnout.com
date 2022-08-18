<script lang="ts" setup>
  defineProps<{
    space?: number;
    stretch?: boolean;
    wraps?: boolean;
    noCenter?: boolean;
  }>();
</script>

<template>
  <div
    :class="{ stretch, wraps, noCenter }"
    class="stack"
    :style="{ gap: `${space ?? 0.5}em` }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: row;
    width: 100%;

    &.wraps {
      flex-wrap: wrap;
    }

    &.stretch:not(.noCenter) > :deep(*) {
      flex: 1;
      text-align: center;
    }

    // We specify .stack twice to fix specificity issues.
    &.stack > :deep(*) {
      margin: 0;
    }
  }
</style>
