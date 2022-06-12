<script lang="ts" setup>
  defineProps<{
    space?: number;
    stretch?: boolean;
    wraps?: boolean;
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
    flex-direction: row;
    flex-wrap: v-bind("wraps ? 'wrap' : 'invalid'");
    gap: v-bind("`${space ?? 0.5}em`");
    align-items: center;

    > :deep(*) {
      flex: v-bind("stretch ? '1' : 'invalid'");
      text-align: v-bind("stretch ? 'center' : 'invalid'");
    }

    &.stack > :deep(*) {
      margin: 0;
    }
  }
</style>
