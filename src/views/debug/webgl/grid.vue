<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { CoordinateCanvas2d } from "../../../composables/webgl/CoordinateCanvas2d";

  const canvas = ref<HTMLCanvasElement>();

  const shader = `
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;

  onMounted(() => {
    if (!canvas.value) return;
    new CoordinateCanvas2d(canvas.value, { fragmentString: shader });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #help>
      <h1>What is this?</h1>

      <p>
        This is a WebGL debug page. A gradient should be contained within these
        with a bottom-left corner of blue, a top-left of mint, a top-right of
        yellow, and a bottom-right of magenta. There should also be a grid of
        black lines.
      </p>
    </template>
  </FullscreenDisplay>
</template>
