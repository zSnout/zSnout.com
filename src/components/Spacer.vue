<script lang="ts" setup>
  import { NumericLike, useNumericLike } from "../composables/useNumericLike";

  const { size } = defineProps<{ size?: NumericLike }>();
</script>

<template>
  <div v-for=" in useNumericLike(size) ?? 1" class="spacer" />
</template>

<style scoped>
  .spacer {
    flex: 1;
  }
</style>
