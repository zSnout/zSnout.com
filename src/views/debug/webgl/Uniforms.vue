<script lang="ts" setup>
  import { MaybeElement, useInterval } from "@vueuse/core";
  import { computed, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { useWebGL } from "../../../composables/useWebGL";

  const canvas = ref<MaybeElement>();
  useWebGL(
    canvas,
    trim`
    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      if (pos.x < left) {
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
        This is a WebGL debug page. The left side should be a yellow bar, the
        right a green bar, the top blue, and the bottom red. A gradient should
        be contained within these with a bottom-left corner of blue, a top-left
        of mint, a top-right of yellow, and a bottom-right of magenta.
      </p>
    </template>
  </FullscreenDisplay>
</template>
