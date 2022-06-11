<script lang="ts" setup>
  import { MaybeElement } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { useMovableCanvas } from "../../../composables/useMovableCanvas";

  const canvas = ref<MaybeElement>();
  useMovableCanvas(
    canvas,
    trim`
    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      color = vec4(pos.x, pos.y, 0.5, 1);

      if (
        abs(float(int(pos.x)) - pos.x) < 0.01 ||
        abs(float(int(pos.y)) - pos.y) < 0.01
      ) {
        color = vec4(0, 0, 0, 1);
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
        This is a WebGL debug page. A gradient should be contained within these
        with a bottom-left corner of blue, a top-left of mint, a top-right of
        yellow, and a bottom-right of magenta. There should also be a grid of
        black lines.
      </p>
    </template>
  </FullscreenDisplay>
</template>
