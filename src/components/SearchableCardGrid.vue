<script lang="ts" setup>
  import { useMutationObserver, VueInstance } from "@vueuse/core";
  import { onMounted, ref, useCssModule, watchEffect } from "vue";
  import CardGrid from "./CardGrid.vue";
  import Field from "./Field.vue";

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
  <Field v-model="field" class="field" placeholder="Type to search zSnout..." />

  <CardGrid ref="grid" class="grid">
    <slot />
  </CardGrid>
</template>

<style lang="scss" module>
  // The double class here fixes issues with specificity.
  .hidden.hidden {
    display: none;
  }
</style>

<style lang="scss" scoped>
  // The `top` property adds the Navigation height, Navigation border, and DocumentDisplay padding.

  .field {
    position: sticky;
    top: calc(3.5em + 1px + 2em);
    z-index: 2;
    width: calc(100% - 4em);
    margin-left: 2em;

    @media (max-width: 400px) {
      top: calc(2.5em + 1px + 1.5em);
    }
  }
</style>
