<script lang="ts" setup>
  import { useInterval } from "@vueuse/core";
  import { computed, onMounted, ref } from "vue";
  import FullscreenDisplay from "../../../components/FullscreenDisplay.vue";
  import { WebGlCanvas } from "../../../composables/webgl/WebGlCanvas";

  const canvas = ref<HTMLCanvasElement>();

  const shader = minify`
  uniform vec2 u_resolution;
  uniform float left;

  varying vec4 v_position;

  void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    if (pos.x < left) {
      gl_FragColor = vec4(1, 1, 0, 1);
    } else if (pos.y < 0.01) {
      gl_FragColor = vec4(1, 0, 0, 1);
    } else if (pos.x > 0.99) {
      gl_FragColor = vec4(0, 1, 0, 1);
    } else if (pos.y > 0.99) {
      gl_FragColor = vec4(0, 0, 1, 1);
    } else {
      gl_FragColor = vec4(pos.xy, 0.5, 1);
    }
  }`;

  onMounted(() => {
    if (!canvas.value) return;

    const gl = new WebGlCanvas(canvas.value, {
      fragmentString: shader,
    });

    const count = useInterval(10);
    const left = computed(() => (count.value / 1000) % 1);
    gl.useUniform("left", left);
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
