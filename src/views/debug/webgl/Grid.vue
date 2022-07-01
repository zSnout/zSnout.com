<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { CoordinateCanvas2d } from "../../../composables/webgl/CoordinateCanvas2d";

  const canvas = ref<HTMLCanvasElement>();

  const shader = `
  void main() {
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

    <template #options>
      <p><strong>What is this?</strong></p>

      <p>
        This is a WebGL debug page. A gradient should be contained within these
        with a bottom-left corner of blue, a top-left of mint, a top-right of
        yellow, and a bottom-right of magenta. There should also be a grid of
        black lines.
      </p>
    </template>
  </FullscreenDisplay>
</template>
