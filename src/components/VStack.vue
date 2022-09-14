<script lang="ts" setup>
  defineProps<{
    center?: boolean;
    space?: number;
    stretch?: boolean;
  }>();
</script>

<template>
  <div
    :class="{ center, stretch }"
    class="stack"
    :style="{ gap: `${space ?? 0.5}em` }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: column;

    &.center > :deep(*),
    &.stretch > :deep(*) {
      text-align: center;
    }

    &.stack > :deep(*) {
      margin: 0;
    }

    &.stretch > :deep(*) {
      flex: 1;
    }
  }
</style>
