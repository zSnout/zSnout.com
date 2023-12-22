<script lang="ts" setup>
  import { RouterLink } from "vue-router";

  const { to, forceReload } = defineProps<{
    forceReload?: boolean;
    to: string;
  }>();

  const isRelative = /^\.{0,2}\/(?!\/)/.test(to);
</script>

<template>
  <RouterLink v-if="isRelative && !forceReload" :to="to">
    <slot />
  </RouterLink>

  <a v-else :href="to" :target="forceReload ? undefined : '_blank'">
    <slot />
  </a>
</template>
