<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import { useEventListener, usePointer, useRafFn } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { reactive, ref, watch } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Spacer from "../../components/Spacer.vue";
  import { useCanvas } from "../../composables/useCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const pointer = usePointer();
  const isDown = ref(false);
  const rotation = ref(0);
  const _drawCircle = ref<() => void>();
  const speed = useClamp(Math.PI / 360, Math.PI / 1440, Math.PI / 8);

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onDispose, onResize, size } = info;
    const { width, height } = size;
    const ctx = canvas.getContext("2d")!;

    const maxDist = computed(() => Math.min(width.value / 2, height.value / 2));

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    let lastX = NaN;
    let lastY = NaN;

    ctx.translate(width.value / 2, height.value / 2);

    function drawCircle() {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(width.value / 2, height.value / 2, maxDist.value, 0, 2 * Math.PI);
      ctx.fill();
    }

    _drawCircle.value = drawCircle;
    drawCircle();
    onResize(drawCircle);

    onDispose(
      watch(reactive({ pointer, rotation }), ({ pointer: { x, y } }) => {
        if (!isDown.value) {
          lastX = NaN;
          lastY = NaN;
          return;
        }

        const dist = Math.hypot(width.value / 2 - x, height.value / 2 - y);

        const angle = Math.atan2(y - height.value / 2, x - width.value / 2);

        if (dist > maxDist.value) {
          lastX = NaN;
          lastY = NaN;
          return;
        }

        [x, y] = [
          width.value / 2 + dist * Math.cos(rotation.value - angle),
          height.value / 2 - dist * Math.sin(rotation.value - angle),
        ];

        if (!isNaN(lastX) && !isNaN(lastY)) {
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        lastX = x;
        lastY = y;
      })
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
        ctx.moveTo(width.value / 2 + i + rand(), height.value / 2 + j + rand());
        ctx.lineTo(width.value / 2 + i + rand(), height.value / 2 + j + rand());
        ctx.stroke();
      }
    });
  });

  useEventListener("pointerdown", () => (isDown.value = true));
  useEventListener("pointerup", () => (isDown.value = false));

  useRafFn(() => (rotation.value += speed.value));
</script>

<template>
  <FullscreenDisplay>
    <canvas
      ref="canvas"
      class="canvas"
      :style="`transform: rotate(${rotation}rad)`"
    />

    <template #indicator>
      <HStack>
        <span class="button" @click="speed -= Math.min(Math.PI / 1440)">
          Slower
        </span>

        <span>/</span>

        <span class="button" @click="speed += Math.min(Math.PI / 1440)">
          Faster
        </span>

        <Spacer />

        <span class="button" @click="_drawCircle">Clear</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .button {
    cursor: pointer;
  }
</style>
