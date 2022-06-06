<script lang="ts" setup>
  const { size } = defineProps<{ size?: number | string }>();
</script>

<template>
  <div v-for="() in +(size ?? 1)" class="spacer" />
</template>

<style scoped>
  .spacer {
    flex: 1;
  }
</style>
