<script lang="ts" setup>
  import { MaybeElement } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useWebGL } from "../composables/useWebGL";

  const canvas = ref<MaybeElement>();
  useWebGL(
    canvas,
    `
    precision highp float;
    in vec2 pos;
    out vec4 color;
    void main() {
      if (pos.x < 0.01) {
        color = vec4(1, 1, 0, 1);
      } else if (pos.y < 0.01) {
        color = vec4(1, 0, 0, 1);
      } else if (pos.x > 0.99) {
        color = vec4(0, 1, 0, 1);
      } else if (pos.y > 0.99) {
        color = vec4(0, 0, 1, 1);
      } else {
        color = vec4(pos.x, pos.y, 0.5, 1);
      }
    }`
  ).then((gl) => {
    gl.render();
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
