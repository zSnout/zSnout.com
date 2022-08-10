<script lang="ts" setup>
  import { useClamp } from "@vueuse/math";
  import { ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { syncOption } from "../../composables/useOption";

  const canvas = ref<HTMLCanvasElement>();
  const draw = ref<() => void>();

  const size = useClamp(10, 3, 1000);
  syncOption("size", size);

  const colors = [
    "#ff0000",
    "#ff9000",
    "#d0d000",
    "#00c000",
    "#0000ff",
    "#9000f0",
  ];

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize, size: _size } = info;
    const { width, height } = _size;
    const ctx = canvas.getContext("2d")!;

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    draw.value = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width.value, height.value);

      for (let i = 0; i < width.value; i += size.value) {
        for (let j = 0; j < height.value; j += size.value) {
          if (1 - j / height.value + Math.random() - 0.5 > 0.5) {
          } else {
            const pos = Math.min((i / width.value) * 5, 4.9999);
            const lhs = Math.floor(pos);
            const color = (pos % 1) + Math.random() - 0.5;

            ctx.fillStyle = colors[color < 0.5 ? lhs : lhs + 1];
            ctx.fillRect(i, j, size.value - 2, size.value - 2);
          }
        }
      }
    };

    draw.value();
    onResize(draw.value);
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" @click="draw" />

    <template #indicator>
      <HStack>
        <span class="button" @click="(size -= 1), draw?.()">Smaller</span>

        <span>/</span>

        <span class="button" @click="(size += 1), draw?.()">Larger</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>
