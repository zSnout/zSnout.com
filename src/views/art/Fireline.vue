<script lang="ts" setup>
  import { useClamp } from "@vueuse/math";
  import { ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Spacer from "../../components/Spacer.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { syncOption } from "../../composables/useOption";
  import { randint } from "../../composables/useRandint";

  const canvas = ref<HTMLCanvasElement>();

  const size = useClamp(5, 1, 20);
  syncOption("size", size);

  const count = useClamp(3, 1, 20);
  syncOption("count", count);

  const update = ref<() => void>();

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize, size: _size } = info;
    const { width, height } = _size;
    const ctx = canvas.getContext("2d")!;

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    function fireline(min: number, max: number, bottom: number) {
      let y = (min + max) / 2;
      for (let x = 0; x < width.value; x++) {
        const oldY = y;
        y += randint(-size.value, size.value);
        y = Math.max(min, Math.min(max, y));

        const gradient = ctx.createLinearGradient(x, y, x, bottom);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(1, "yellow");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, 1, bottom - y);

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x - 1, oldY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    let id: number | undefined;

    update.value = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width.value, height.value);

      clearTimeout(id);

      const size = height.value / count.value;
      let i = 0;

      function next() {
        fireline(
          i * size,
          (i + 1) * size,
          Math.min(height.value, (i + 2) * size)
        );

        i++;
        if (i > count.value) return;

        id = setTimeout(next, 100) as any as number;
      }

      next();
    };

    setTimeout(update.value);
    onResize(update.value);
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" @click="update" />

    <template #indicator>
      <HStack>
        <span class="button" @click="(size -= 1), update?.()">Smaller</span>

        <span>/</span>

        <span class="button" @click="(size += 1), update?.()">Larger</span>

        <Spacer />

        <span class="button" @click="(count -= 1), update?.()">Less</span>

        <span>/</span>

        <span class="button" @click="(count += 1), update?.()">More</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .button {
    cursor: pointer;
  }
</style>
