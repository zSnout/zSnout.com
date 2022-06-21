<script lang="ts" setup>
  import Labeled from "./Labeled.vue";

  defineProps<{ label?: string }>();
</script>

<template>
  <Labeled v-if="label" :label="label">
    <slot />
  </Labeled>

  <slot v-else />
</template>
