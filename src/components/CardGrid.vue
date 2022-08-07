<script lang="ts" setup>
  import {
    useEventListener,
    useResizeObserver,
    useStorage,
  } from "@vueuse/core";
  import { ref, watch } from "vue";
  import { tabbable } from "tabbable";
  import Button from "./Button.vue";

  const { sizes } = withDefaults(
    defineProps<{ sizes?: ("normal" | "small" | "icon")[] }>(),
    { sizes: () => ["normal"] }
  );

  const cols = ref(4);
  const grid = ref<HTMLElement>();
  const size = ref<"normal" | "small" | "icon">(sizes[0]);

  const preferred = useStorage<"normal" | "small" | "icon">(
    "preferred-grid-size",
    size.value
  );

  if (sizes.includes(preferred.value)) size.value = preferred.value;

  function nextSize() {
    size.value = sizes[(sizes.indexOf(size.value) + 1) % sizes.length];
    preferred.value = size.value;
  }

  function checkCols() {
    if (grid.value) {
      const styles = getComputedStyle(grid.value);
      cols.value = styles.gridTemplateColumns.split(" ").length;
    }
  }

  useResizeObserver(grid, checkCols);
  watch(size, checkCols);

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
  <div
    ref="grid"
    :class="{
      'no-desc': size === 'small' || size === 'icon',
      'no-title': size === 'icon',
    }"
    class="grid"
  >
    <Button v-if="sizes.length > 1" class="resizer" @click="nextSize">
      Change Grid Size
    </Button>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(12em, 100%), 1fr));
    gap: 0.75rem;

    &.no-desc {
      grid-template-columns: repeat(auto-fill, minmax(min(8em, 100%), 1fr));
    }

    &.no-title {
      grid-template-columns: repeat(auto-fill, minmax(min(6em, 100%), 1fr));
      gap: 0.25rem;

      .resizer {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>
