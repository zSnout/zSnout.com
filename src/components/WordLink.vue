<script lang="ts" setup>
  defineProps<{
    comma?: boolean;
    word: string;
  }>();
</script>

<!-- prettier-ignore -->
<template>
  <a :href="`#${word}`">{{ word }}</a>{{ comma ? ", " : "" }}
</template>
