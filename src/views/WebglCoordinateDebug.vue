<script lang="ts" setup>
  import { MaybeElement, useInterval } from "@vueuse/core";
  import { computed, ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCoordinateCanvas } from "../composables/useCoordinateCanvas";

  const canvas = ref<MaybeElement>();
  useCoordinateCanvas(
    canvas,
    `
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      if (pos.x < -2.0) {
        color = vec4(1, 1, 0, 1);
      } else if (pos.y < -2.0) {
        color = vec4(1, 0, 0, 1);
      } else if (pos.x > 2.0) {
        color = vec4(0, 1, 0, 1);
      } else if (pos.y > 2.0) {
        color = vec4(0, 0, 1, 1);
      } else {
        color = vec4(pos.x, pos.y, 0.5, 1);
      }

      if (abs(float(int(pos.x)) - pos.x) < 0.01) {
        color = vec4(0, 0, 0, 1);
      }

      if (abs(float(int(pos.y)) - pos.y) < 0.01) {
        color = vec4(0, 0, 0, 1);
      }
    }`
  ).then((gl) => {
    const count = useInterval(10, { immediate: true });
    const left = computed(() => (count.value / 1000) % 1);

    gl.useUniform("left", "f", left);
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <p><strong>What is this?</strong></p>

      <p>
        This is a WebGL debug page. In the center of the screen, there should be
        a gradient with a bottom-left corner of blue, a top-left of mint, a
        top-right of yellow, and a bottom-right of magenta. The black lines mark
        a grid on unit squares. If there is space around the gradient, it should
        have a left padding of yellow, a right padding of green, a top padding
        of blue, and a bottom padding of red.
      </p>
    </template>
  </FullscreenDisplay>
</template>
