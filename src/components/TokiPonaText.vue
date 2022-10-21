<script lang="ts" setup>
  const { content } = defineProps<{ content: string }>();

  const matches = content.match(/_[^_]*_|[^_]*/g);
</script>

<template>
  <template v-for="match in matches">
    <em v-if="match.startsWith('_')" class="text-color">
      {{ match.slice(1, -1) }}
    </em>

    <span v-else class="text-color">
      {{ match }}
    </span>
  </template>
</template>
