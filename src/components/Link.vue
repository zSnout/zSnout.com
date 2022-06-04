<script lang="ts" setup>
  import { RouterLink } from "vue-router";

  const { to } = defineProps<{ to: string }>();
  const isRelative = /^\/(?!\/)|\.\.?\//.test(to);
</script>

<template>
  <RouterLink v-if="isRelative" :to="to">
    <slot />
  </RouterLink>

  <a :href="to">
    <slot />
  </a>
</template>
