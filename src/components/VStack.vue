<script lang="ts" setup>
  defineProps<{
    center?: boolean;
    space?: number;
  }>();
</script>

<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: column;
    gap: v-bind("`${space ?? 0.5}em`");

    > :deep(*) {
      text-align: v-bind("center ? 'center' : 'invalid'");
    }
  }
</style>
