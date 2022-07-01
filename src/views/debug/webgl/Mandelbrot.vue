<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { MovableCanvas2d } from "../../../composables/webgl/MovableCanvas2d";

  const canvas = ref<HTMLCanvasElement>();

  const shader = `
  void main() {
    gl_FragColor = vec4(0, 0, 0, 1);

    vec2 z;
    for (int i = 0; i < 100; i++) {
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

      if (z.x * z.x + z.y * z.y > 4.0) {
        gl_FragColor = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1.0);
        break;
      }
    }
  }`;

  onMounted(() => {
    if (!canvas.value) return;
    new MovableCanvas2d(canvas.value, { fragmentString: shader });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <p><strong>What is this?</strong></p>

      <p>
        This is a WebGL debug page. It should contain a simple rendition of the
        Mandelbrot Set. This is used for testing purposes and helps demonstrate
        different features of the MovableCanvas mixin.
      </p>
    </template>
  </FullscreenDisplay>
</template>
