<script lang="ts" setup>
  defineProps<{
    space?: number;
    stretch?: boolean;
    wraps?: boolean | string;
    noCenter?: boolean;
  }>();
</script>

<template>
  <div
    :class="{ stretch, wraps: !!wraps, noCenter }"
    class="stack"
    :style="{
      'gap': `${space ?? 0.5}em`,
      '--wrap-size': typeof wraps === 'string' ? wraps : undefined,
    }"
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

      > :deep(*) {
        min-width: min(var(--wrap-size), 100%);
      }
    }

    &.stretch > :deep(*) {
      flex: 1;
    }

    &.stretch:not(.noCenter) > :deep(*) {
      text-align: center;
    }

    &.stack > :deep(*) {
      margin: 0;
    }
  }
</style>
