<script lang="ts" setup>
  import { useEventListener } from "@vueuse/core";
  import { Chessground } from "chessground";
  import { Api } from "chessground/api";
  import "chessground/assets/chessground.base.css";
  import "chessground/assets/chessground.brown.css";
  import "chessground/assets/chessground.cburnett.css";
  import { Config } from "chessground/config";
  import { onMounted, ref } from "vue";

  const { config } = defineProps<{ config?: Config }>();
  const emit = defineEmits<{ (event: "ready", api: Api): void }>();

  const board = ref<HTMLElement>();

  function onResize() {
    const { value } = board;

    if (value && value.parentElement) {
      const parent = value.parentElement;
      parent.removeChild(value);

      const { width, height } = parent.getBoundingClientRect();
      value.style.width = Math.min(width, height) + "px";
      value.style.height = Math.min(width, height) + "px";
      parent.appendChild(value);
    }
  }

  onMounted(() => {
    if (board.value) {
      onResize();
      useEventListener("resize", onResize);

      const api = Chessground(board.value, config);
      emit("ready", api);
    }
  });
</script>

<template>
  <div ref="board" class="chessboard" />
</template>

<style lang="scss" scoped>
  .chessboard {
    max-width: 500px;
    max-height: 500px;
    border-radius: 8px;
    touch-action: none;
    -webkit-touch-callout: none;
    aspect-ratio: 1 / 1;

    :deep(cg-board) {
      border-radius: 8px;
    }
  }
</style>
