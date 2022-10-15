<script lang="ts" setup>
  import { useClamp } from "@vueuse/math";
  import { onMounted, ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import Incrementable from "../components/Incrementable.vue";
  import Labeled from "../components/Labeled.vue";
  import { syncOption } from "../composables/useOption";
  import { MovableCanvas2d } from "../composables/webgl/MovableCanvas2d";

  const shift = useClamp(0, 0, Infinity);
  syncOption("shift", shift);

  const shader = `
  uniform float shift;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  bool is_prime(float number) {
    float max = sqrt(number);

    for (float i = 2.0; i < 10000000.0; i++) {
      if (i > max) break;
      if (mod(number, i) == 0.0) return false;
    }

    return true;
  }

  vec3 color_for(float number) {
    if (is_prime(number)) {
      return vec3(0.0);
    } else {
      return vec3(1.0);
    }

    return hsv2rgb(
      vec3(
        number / 20.0,
        1.0,
        1.0
      )
    );
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    float x = floor(pos.x);
    float y = floor(pos.y);
    float ring = max(abs(x + 0.5) + 0.5, abs(y + 0.5) + 0.5);
    float prev = 2.0 * (ring - 1.0) * 2.0 * (ring - 1.0) + shift; // end of previous ring
    float adj = 2.0 * ring - 1.0;
    float number;

    if (x == -ring && y < ring - 1.0) {
      // left edge
      number = -y + prev + ring - 1.0;
    } else if (y == -ring) {
      // bottom edge
      number = x + prev + ring + adj;
    } else if (x == ring - 1.0) {
      // right edge
      number = y + prev + ring + 2.0 * adj;
    } else {
      // top edge
      number = -x + prev + ring - 1.0 + 3.0 * adj;
    }

    gl_FragColor = vec4(color_for(number), 1.0);
  }
  `;

  const canvas = ref<HTMLCanvasElement>();

  onMounted(() => {
    if (!canvas.value) return;

    const size = Math.min(innerWidth, innerHeight) / 8;

    const gl = new MovableCanvas2d(canvas.value, {
      fragmentString: shader,
      saveBounds: true,
      bounds: {
        xStart: -size,
        xEnd: size,
        yStart: -size,
        yEnd: size,
      },
    });

    gl.on("render", () => {
      gl.setUniform("shift", shift.value);
    });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <Labeled label="Spiral Shift">
        <Incrementable v-model="shift" />
      </Labeled>
    </template>
  </FullscreenDisplay>
</template>
