<script lang="ts" setup>
  import { useEventListener, useResizeObserver } from "@vueuse/core";
  import { ref } from "vue";
  import { tabbable } from "tabbable";

  const cols = ref(4);
  const grid = ref<HTMLElement>();

  useResizeObserver(grid, () => {
    if (grid.value) {
      const styles = getComputedStyle(grid.value);
      cols.value = styles.gridTemplateColumns.split(" ").length;
    }
  });

  useEventListener<KeyboardEvent>(grid, "keydown", (event) => {
    const path = event.composedPath();
    const target = path[path.indexOf(grid.value!) - 1];
    if (!target) return;

    const els = tabbable(document.documentElement);
    const idx = els.indexOf(target as HTMLElement);
    if (idx === -1) return;

    switch (event.key) {
      case "ArrowRight":
        els[idx + 1]?.focus();
        break;

      case "ArrowLeft":
        els[idx - 1]?.focus();
        break;

      case "ArrowDown":
        els[Math.min(idx + cols.value, els.length - 1)]?.focus();
        break;

      case "ArrowUp":
        els[Math.max(idx - cols.value, 0)]?.focus();
        break;
    }
  });
</script>

<template>
  <div ref="grid" class="grid">
    <slot />
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(12em, 100%), 1fr));
    gap: 0.75rem;
  }
</style>
