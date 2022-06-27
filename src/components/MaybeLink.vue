<script lang="ts" setup>
  import Link from "./Link.vue";

  defineProps<{
    to?: string;
    inline?: boolean;
  }>();
</script>

<template>
  <Link v-if="to !== undefined" :to="to">
    <slot />
  </Link>

  <span v-else-if="inline">
    <slot />
  </span>

  <div v-else>
    <slot />
  </div>
</template>
