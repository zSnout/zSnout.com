<script lang="ts" setup>
  const { size } = defineProps<{ size?: number | `${number}` }>();
</script>

<template>
  <div v-for="() in +(size ?? 1)" class="spacer">
    <slot>i</slot>
  </div>
</template>

<style scoped>
  .spacer {
    flex: 1;
    color: transparent;
    user-select: none;
  }
</style>
