<script lang="ts" setup>
  import { onMounted, ref } from "vue";

  const { node } = defineProps<{
    node: Node;
  }>();

  const el = ref<HTMLElement>();

  onMounted(() => {
    el.value?.replaceWith(node);
  });
</script>

<template>
  <div ref="el" />
</template>
