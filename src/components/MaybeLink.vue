<script lang="ts" setup>
  import Link from "./Link.vue";

  defineProps<{
    forceReload?: boolean;
    inline?: boolean;
    to?: string;
  }>();
</script>

<template>
  <Link v-if="to !== undefined" :force-reload="forceReload" :to="to">
    <slot />
  </Link>

  <span v-else-if="inline">
    <slot />
  </span>

  <div v-else>
    <slot />
  </div>
</template>
