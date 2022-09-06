<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { MovableCanvas2d } from "../../../composables/webgl/MovableCanvas2d";

  const canvas = ref<HTMLCanvasElement>();

  const shader = `
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
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

    <template #help>
      <h1>What is this?</h1>

      <p>
        This is a WebGL debug page. It should contain a simple rendition of the
        Mandelbrot Set. This is used for testing purposes and helps demonstrate
        different features of the MovableCanvas mixin.
      </p>
    </template>
  </FullscreenDisplay>
</template>
