<script lang="ts" setup>
  defineProps<{ equal?: boolean; wraps?: boolean }>();
</script>

<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: row;
    flex-wrap: v-bind("wraps ? 'wrap' : 'invalid'");
    gap: 0.75em;
    text-align: center;

    > :deep(*) {
      flex: v-bind("equal ? '1' : 'invalid'");
    }
  }
</style>
