<script lang="ts" setup>
  import { unrefElement } from "@vueuse/core";
  import { onMounted, ref, VueElement } from "vue";
  import VStack from "./VStack.vue";

  const gridEl = ref<VueElement>();

  onMounted(() => {
    const grid = unrefElement(gridEl);
    if (!grid) return;

    const labels = [...grid.getElementsByClassName("label")];
    const spans = labels.map((e) => e.children[0].children[0] as HTMLElement);
    const maxWidth = Math.max(...spans.map((e) => e.clientWidth));

    spans.map((e) => (e.style.minWidth = `${maxWidth}px`));
  });
</script>

<template>
  <VStack ref="gridEl" class="grid">
    <slot />
  </VStack>
</template>
