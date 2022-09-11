<script lang="ts" setup>
  import { useElementSize, useEventListener } from "@vueuse/core";
  import { ref } from "vue";

  const props = defineProps<{ open: boolean }>();
  const emit = defineEmits<(event: "update:open", value: boolean) => void>();

  const x = ref(0);
  const y = ref(0);

  function onMove(event: MouseEvent) {
    if (!props.open || event.type === "contextmenu") {
      x.value = event.pageX;
      y.value = event.pageY;
    }
  }

  useEventListener("mousedown", onMove, { passive: true });
  useEventListener("mousemove", onMove, { passive: true });
  useEventListener("pointerdown", onMove, { passive: true });
  useEventListener("pointermove", onMove, { passive: true });
  useEventListener("contextmenu", onMove, { passive: true });

  useEventListener("keydown", (event) => {
    if (!event.altKey && !event.ctrlKey && !event.metaKey && props.open) {
      emit("update:open", false);
    }
  });

  const menu = ref<HTMLElement>();
  const { height } = useElementSize(menu, undefined, { box: "border-box" });
</script>

<template>
  <div
    ref="menu"
    :class="{ open }"
    class="menu second-layer"
    :style="{
      top: `min(${Math.max(y, 8)}px, var(--app-height) - 0.5rem - ${height}px)`,
      left: `min(${Math.max(x, 8)}px, var(--app-width) - 0.5rem - 10rem)`,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    z-index: 10;
    width: 10em;
    padding: 0.3rem !important;

    &:not(.open) {
      display: none;
    }
  }
</style>
