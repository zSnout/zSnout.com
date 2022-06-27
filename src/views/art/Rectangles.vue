<script lang="ts" setup>
  import { useClamp, useRafFn } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { syncOption } from "../../composables/useOption";
  import { randint } from "../../composables/useRandint";

  const canvas = ref<HTMLCanvasElement>();
  const clear = ref<() => void>();

  const size = useClamp(50, 5, 1000);
  syncOption("size", size);

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onDispose, onResize, size: _size } = info;
    const { width, height } = _size;
    const ctx = canvas.getContext("2d")!;

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    clear.value = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width.value, height.value);
    };

    clear.value();
    onResize(clear.value);

    onDispose(
      useRafFn(() => {
        ctx.fillStyle = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(
          0,
          255
        )})`;
        ctx.strokeStyle = `rgb(${randint(0, 255)}, ${randint(
          0,
          255
        )}, ${randint(0, 255)})`;

        const w = randint(0, size.value);
        const h = randint(0, size.value);
        const x = randint(0, width.value - w);
        const y = randint(0, height.value - h);

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
      }).pause
    );
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #indicator>
      <HStack>
        <span class="button" @click="size -= 1">Smaller</span>

        <span>/</span>

        <span class="button" @click="size += 1">Larger</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .button {
    cursor: pointer;
  }
</style>
