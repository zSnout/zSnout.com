<script lang="ts" setup>
  defineProps<{ cancel?: boolean }>();
</script>

<template>
  <button
    :class="{ cancel }"
    class="button hoverline second-layer"
    type="button"
  >
    <slot />
  </button>
</template>

<style scoped>
  .button {
    display: block;
    font-size: inherit;
    cursor: pointer;
  }
</style>
