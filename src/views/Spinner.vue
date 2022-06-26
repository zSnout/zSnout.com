<script lang="ts" setup>
  import {
    useClamp,
    useEventListener,
    useIntervalFn,
    usePointer,
    useRafFn,
  } from "@vueuse/core";
  import { reactive, watch } from "vue";
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";
  import HStack from "../components/HStack.vue";
  import Spacer from "../components/Spacer.vue";
  import { computed } from "@vue/reactivity";

  const canvas = ref<HTMLCanvasElement>();
  const pointer = usePointer();
  const isDown = ref(false);
  const rotation = ref(0);
  const speed = useClamp(Math.PI / 360, Math.PI / 1440, Math.PI / 8);

  useCanvas(canvas).then((info) => {
    const { canvas, onDispose, onResize, size } = info;
    const ctx = canvas.getContext("2d")!;

    const maxDist = computed(() =>
      Math.min(size.width.value / 2, size.height.value / 2)
    );

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
        maxDist.value,
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

        if (dist > maxDist.value) {
          lastX = NaN;
          lastY = NaN;
          return;
        }

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
        <span @click="speed -= Math.min(Math.PI / 1440)">Slow Down</span>

        <Spacer />

        <span @click="speed += Math.min(Math.PI / 1440)">Speed Up</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>
