<script lang="ts">
  export function useColorSliders(): ColorSliders {
    const colorOffset = ref(0);
    syncOption("colorOffset", colorOffset);

    const repetition = ref(1);
    syncOption("repetition", repetition);

    const noiseLevel = ref(0);
    syncOption("noise", noiseLevel);

    const separation = ref(0);
    syncOption("separation", separation);

    const spectrum = ref(1);
    syncOption("spectrum", spectrum);

    const time = ref(Math.random() * 10000);
    useRafFn(() => (time.value += 0.01));

    return {
      colorOffset,
      noiseLevel,
      repetition,
      separation,
      spectrum,
      time,
      setGlsl,
    };
  }

  export namespace useColorSliders {
    export function toString(options?: { addDarkness?: string }) {
      return `
uniform float colorOffset;
uniform float repetition;
uniform float spectrum;
uniform float separation;
uniform float noiseLevel;
uniform float c_time;

vec3 c_rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 c_hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec4 c_permute(vec4 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec4 c_taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float c_snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  // x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = c_permute(
    c_permute(
      c_permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0)
      ) + i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  // Gradients
  // N*N points uniformly over a square, mapped onto an octahedron.
  float n_ = 1.0 / 7.0; // N = 7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); // mod(p, N * N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j, N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm = c_taylorInvSqrt(
    vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
  );

  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(
    0.6 -
      vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0
  );

  m = m * m;
  return 42.0 * dot(
    m*m, vec4(dot(p0, x0), dot(p1,x1), dot(p2, x2), dot(p3, x3))
  );
}

float c_noise(vec3 v) {
  return (c_snoise(v) + 1.0) / 2.0;
}

vec3 use_color_sliders(float i, vec2 z) {
  float hue = mod(repetition * i, 1.0);
  vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);
  if (separation > 0.0) hsv.x = hsv.x - mod(hsv.x, separation);
  hsv.x = mod(hsv.x + colorOffset, 1.0);
  if (noiseLevel > 0.0) {
    hsv.x += noiseLevel * c_snoise(vec3(i, i, c_time));
  }

  ${options?.addDarkness || ""}

  return c_hsv2rgb(hsv);
}

vec3 use_color_sliders(vec3 rgb, vec2 z) {
  vec3 hsv = c_rgb2hsv(rgb);
  hsv.x = mod(hsv.x * repetition, 1.0);
  hsv.x = 1.0 - hsv.x * spectrum;
  if (separation > 0.0) hsv.x = hsv.x - mod(hsv.x, separation);
  hsv.x = mod(hsv.x + colorOffset, 1.0);
  if (noiseLevel > 0.0) hsv.x += noiseLevel * c_snoise(vec3(i, i, c_time));

  ${options?.addDarkness || ""}

  return c_hsv2rgb(hsv);
}
      `;
    }
  }

  function setGlsl(this: ColorSliders, gl: WebGlCanvas) {
    gl.setUniform("colorOffset", this.colorOffset.value);
    gl.setUniform("noiseLevel", this.noiseLevel.value);
    gl.setUniform("repetition", this.repetition.value);
    gl.setUniform("spectrum", this.spectrum.value);
    gl.setUniform("separation", this.separation.value);
    gl.setUniform("c_time", this.time.value);
  }
</script>

<script lang="ts" setup>
  import { useRafFn } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import { syncOption } from "../composables/useOption.js";
  import { WebGlCanvas } from "../composables/webgl/WebGlCanvas.js";
  import InlineRangeField from "./InlineRangeField.vue";
  import Labeled from "./Labeled.vue";

  export interface ColorSliders {
    colorOffset: Ref<number>;
    noiseLevel: Ref<number>;
    repetition: Ref<number>;
    separation: Ref<number>;
    spectrum: Ref<number>;
    time: Ref<number>;
    setGlsl(this: ColorSliders, gl: WebGlCanvas): void;
  }

  const { options } = defineProps<{ options: ColorSliders }>();
  const { colorOffset, noiseLevel, repetition, separation, spectrum } = options;
</script>

<template>
  <Labeled label="Color Offset:">
    <InlineRangeField v-model="colorOffset" :max="1" :min="0" step="any" />
  </Labeled>

  <Labeled label="Color Repetition:">
    <InlineRangeField v-model="repetition" :max="10" :min="1" step="any" />
  </Labeled>

  <Labeled label="Color Spectrum:">
    <InlineRangeField v-model="spectrum" :max="1" :min="0" step="any" />
  </Labeled>

  <Labeled label="Separation:">
    <InlineRangeField v-model="separation" :max="0.5" :min="0" step="any" />
  </Labeled>

  <Labeled label="Randomness:">
    <InlineRangeField v-model="noiseLevel" :max="1" :min="0" step="any" />
  </Labeled>
</template>
