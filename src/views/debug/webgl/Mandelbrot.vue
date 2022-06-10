<script lang="ts" setup>
  import { MaybeElement } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { useMovableCanvas } from "../../../composables/useMovableCanvas";

  const canvas = ref<MaybeElement>();
  useMovableCanvas(
    canvas,
    `
    in vec2 pos;
    out vec4 color;

    uniform Bounds bounds;
    uniform Coordinates pointer;
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
        color = vec4(color.x, color.y, color.z + 0.2, 1);
      }

      if (bounds.xStart < pos.x && pos.x < bounds.xEnd && bounds.yStart < pos.y && pos.y < bounds.yEnd) {
        color = vec4(color.x + 0.2, color.yz, 1);
      }

      if (abs(pointer.x - pos.x) < (bounds.xEnd - bounds.xStart) / 100.0 && abs(pointer.y - pos.y) < (bounds.yEnd - bounds.yStart) / 100.0) {
        color = vec4(color.zz, color.z + 0.2, 1);
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
        This is a WebGL debug page. It should contain a simple rendition of the
        Mandelbrot Set. This is used for testing purposes and helps demonstrate
        different features of the MovableCanvas mixin. The page may show a blue
        box where the viewport is located, which should be centered onscreen. It
        may also show a pink/red box displaying where the canvas will be moved
        to upon zooming. There is also a small box around where the cursor is
        located.
      </p>
    </template>
  </FullscreenDisplay>
</template>
