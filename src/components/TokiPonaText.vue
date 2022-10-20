<script lang="ts" setup>
  const { content } = defineProps<{ content: string }>();

  const matches = content.match(/_[^_]*_|[^_]*/);
</script>

<template>
  <template v-for="match in matches">
    <em v-if="match.startsWith('_')">{{ match.slice(1, -1) }}</em>
    <span v-else>{{ match }}</span>
  </template>
</template>
