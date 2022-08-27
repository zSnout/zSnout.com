<script lang="ts" setup>
  defineProps<{ active?: boolean }>();
</script>

<template>
  <button :class="{ active }" class="link">
    <slot />
  </button>
</template>

<style scoped>
  .link {
    padding: 0;
    font-size: inherit;
    text-align: left;
    background-color: transparent;
    border: none;
    box-shadow: none;
    appearance: none;
  }
</style>
