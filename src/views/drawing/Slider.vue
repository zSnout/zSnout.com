<script lang="ts" setup>
  import { useEventListener, usePointer, useRafFn } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { reactive, ref, watch } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Spacer from "../../components/Spacer.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { appWidth } from "../../main";

  const canvasA = ref<HTMLCanvasElement>();
  const canvasB = ref<HTMLCanvasElement>();
  const pointer = usePointer();
  const isDown = ref(false);
  const movement = ref(0);
  const _drawRectangle: (() => void)[] = [];
  const speed = useClamp(1, 0.25, 100);

  for (let canvas of [canvasA, canvasB]) {
    useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
      const { canvas, onDispose, onResize, size } = info;
      const { width, height } = size;
      const ctx = canvas.getContext("2d")!;

      if (!ctx) {
        throw new Error("Your device doesn't support HTML5 canvases.");
      }

      let lastX = NaN;
      let lastY = NaN;

      function drawRectangle() {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width.value, height.value);
      }

      _drawRectangle.push(drawRectangle);
      drawRectangle();
      onResize(drawRectangle);

      onDispose(
        watch(
          reactive({ pointer, rotation: movement }),
          ({ pointer: { x, y } }) => {
            if (!isDown.value) {
              lastX = NaN;
              lastY = NaN;
              return;
            }

            x = (x - movement.value) % width.value;
            if (x < 0) x += width.value;

            if (
              !isNaN(lastX) &&
              !isNaN(lastY) &&
              Math.abs(lastX - x) < width.value / 2
            ) {
              ctx.beginPath();
              ctx.moveTo(lastX, lastY);
              ctx.lineTo(x, y);
              ctx.stroke();
            }

            lastX = x;
            lastY = y;
          }
        )
      );

      setTimeout(() => {
        const rand = () => Math.random() * 200 - 100;

        for (let [i, j] of [
          [0, 0],
          [-200, 100],
          [100, 300],
          [70, -250],
        ]) {
          ctx.beginPath();
          ctx.moveTo(
            width.value / 2 + i + rand(),
            height.value / 2 + j + rand()
          );
          ctx.lineTo(
            width.value / 2 + i + rand(),
            height.value / 2 + j + rand()
          );
          ctx.stroke();
        }
      });
    });
  }

  useEventListener("pointerdown", () => (isDown.value = true));
  useEventListener("pointerup", () => (isDown.value = false));

  useRafFn(() => (movement.value += speed.value));

  function normalize(x: number) {
    if (x > innerWidth) return x - 2 * innerWidth;
    return x;
  }
</script>

<template>
  <FullscreenDisplay>
    <canvas
      ref="canvasA"
      class="canvas"
      :style="`transform: translateX(${normalize(
        movement % (2 * appWidth)
      )}px)`"
    />

    <canvas
      ref="canvasB"
      class="canvas"
      :style="`transform: translateX(${normalize(
        (movement + appWidth) % (2 * appWidth)
      )}px)`"
    />

    <template #indicator>
      <HStack>
        <span class="button" @click="speed -= 0.25">Slower</span>

        <span>/</span>

        <span class="button" @click="speed += 0.25">Faster</span>

        <Spacer />

        <span class="button" @click="_drawRectangle.forEach((e) => e())">
          Clear
        </span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .button {
    cursor: pointer;
  }

  .canvas {
    position: fixed;
    top: 0;
  }
</style>
