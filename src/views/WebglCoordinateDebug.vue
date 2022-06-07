<script lang="ts" setup>
  import { MaybeElement } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useMovableCanvas } from "../composables/useMovableCanvas";

  const canvas = ref<MaybeElement>();
  useMovableCanvas(
    canvas,
    `
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float xStart;
    uniform float xEnd;
    uniform float yStart;
    uniform float yEnd;
    uniform float x;
    uniform float y;
    uniform float xs;
    uniform float xe;
    uniform float ys;
    uniform float ye;

    void main() {
      vec2 z;

      color = vec4(0, 0, 0, 1);

      for (int i = 0; i < 100; i++) {
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

        if (z.x * z.x + z.y * z.y > 4.0) {
          color = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1);
        }
      }

      if (xs < pos.x && pos.x < xe && ys < pos.y && pos.y < ye) {
        color = vec4(color.x, color.y, 1, 1);
      } else if (xStart < pos.x && pos.x < xEnd && yStart < pos.y && pos.y < yEnd) {
        color = vec4(1, color.yz, 1);
      }

      if (abs(x - pos.x) < (xEnd - xStart) / 100.0 && abs(y - pos.y) < (yEnd - yStart) / 100.0) {
        color = vec4(color.zz, 1, 1);
      }
    }`
  );
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <p><strong>What is this?</strong></p>

      <p>
        This is a WebGL debug page. It should contain a crude rendition of the
        Mandelbrot Set. This is used for testing purposes and helps demonstrate
        different features of the MovableCanvas mixin.
      </p>
    </template>
  </FullscreenDisplay>
</template>
