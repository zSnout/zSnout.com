<script lang="ts" setup>
  defineProps<{ space?: number }>();
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
    gap: v-bind("`${space || 0.5}em`");
    text-align: center;
  }
</style>
