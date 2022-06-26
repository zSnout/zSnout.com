<script lang="ts" setup>
  import {
    useEventListener,
    useIntervalFn,
    usePointer,
    useRafFn,
  } from "@vueuse/core";
  import { reactive, watch } from "vue";
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const pointer = usePointer();
  const isDown = ref(false);
  const rotation = ref(0);

  useCanvas(canvas).then((info) => {
    const { canvas, onDispose, onResize, size } = info;
    const ctx = canvas.getContext("2d")!;

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    let lastX = NaN;
    let lastY = NaN;

    ctx.translate(size.width.value / 2, size.height.value / 2);

    function drawCircle() {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(
        size.width.value / 2,
        size.height.value / 2,
        Math.min(size.width.value / 2, size.height.value / 2),
        0,
        2 * Math.PI
      );
      ctx.fill();
    }

    drawCircle();
    onResize(drawCircle);

    onDispose(
      watch(reactive({ pointer, rotation }), ({ pointer: { x, y } }) => {
        if (!isDown.value) {
          lastX = NaN;
          lastY = NaN;
          return;
        }

        const dist = Math.hypot(
          size.width.value / 2 - x,
          size.height.value / 2 - y
        );

        const angle = Math.atan2(
          y - size.height.value / 2,
          x - size.width.value / 2
        );

        console.log(dist, angle);

        [x, y] = [
          size.width.value / 2 + dist * Math.cos(rotation.value - angle),
          size.height.value / 2 - dist * Math.sin(rotation.value - angle),
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
  });

  useEventListener("pointerdown", () => (isDown.value = true));
  useEventListener("pointerup", () => (isDown.value = false));

  useRafFn(() => (rotation.value += Math.PI / 360));
</script>

<template>
  <FullscreenDisplay>
    <canvas
      ref="canvas"
      class="canvas"
      :style="`transform: rotate(${rotation}rad)`"
    />
  </FullscreenDisplay>
</template>
