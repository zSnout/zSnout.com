<script lang="ts" setup>
  import { useMutationObserver, VueInstance } from "@vueuse/core";
  import { onMounted, ref, useCssModule, watch, watchEffect } from "vue";
  import Field from "./Field.vue";
  import Grid from "./Grid.vue";

  const field = ref("");
  const grid = ref<VueInstance>();
  const module = useCssModule();

  function keywordsOf(element: Element) {
    const text = element.children[0]?.textContent ?? element.textContent;
    const keywords = (element as HTMLElement).dataset?.keywords;

    return `${text} ${keywords}`.toLowerCase();
  }

  function isMatched(element: Element, query: string[]) {
    if (query.length === 1 && !query[0]) return true;

    const keywords = keywordsOf(element);
    return query.every((e) => keywords.includes(e));
  }

  function filter() {
    const query = field.value.trim().split(/\s+/g);
    const el = grid.value?.$el as HTMLElement | undefined;
    if (!el) return;

    for (let child of el.children) {
      child.classList.toggle(module.hidden, !isMatched(child, query));
    }
  }

  useMutationObserver(grid, filter, { subtree: true, childList: true });
  watchEffect(filter);
  onMounted(filter);
</script>

<template>
  <Field v-model="field" placeholder="Type to search zSnout..." />

  <Grid ref="grid">
    <slot />
  </Grid>
</template>

<style lang="scss" module>
  // The double class here fixes issues with specificity.
  .hidden.hidden {
    display: none;
  }
</style>
