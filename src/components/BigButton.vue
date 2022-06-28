<script lang="ts" setup>
  import Button from "./Button.vue";
</script>

<template>
  <Button class="button">
    <slot />
  </Button>
</template>

<style scoped>
  .button {
    width: min(max(50%, 500px), 100%);
    height: min(max(33%, 300px), 100%);
    font-size: 2em;
  }
</style>
