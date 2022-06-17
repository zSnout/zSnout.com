<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import { MaybeElement, useClamp } from "@vueuse/core";
  import { ref, watchEffect } from "vue";
  import Button from "../components/Button.vue";
  import Dropdown from "../components/Dropdown.vue";
  import Field from "../components/Field.vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import Incrementable from "../components/Incrementable.vue";
  import InlineCheckboxField from "../components/InlineCheckboxField.vue";
  import InlineRangeField from "../components/InlineRangeField.vue";
  import Labeled from "../components/Labeled.vue";
  import { useDisplay } from "../composables/useDisplay";
  import { glsl } from "../composables/useGlsl";
  import { useMovableCanvas } from "../composables/useMovableCanvas";
  import { syncOption } from "../composables/useOption";
  import { useRound } from "../composables/useRound";

  const detail = useClamp(100, 5, 1000);
  syncOption("detail", detail);

  function decrementDetail(value: number) {
    if (value <= 10) {
      return 5;
    } else if (value <= 25) {
      return 5 * Math.ceil((value - 5) / 5);
    } else if (value <= 50) {
      return 25;
    } else {
      return 50 * Math.ceil((value - 50) / 50);
    }
  }

  function incrementDetail(value: number) {
    if (value < 10) {
      return 10;
    } else if (value < 25) {
      return 5 * ~~((value + 5) / 5);
    } else if (value < 50) {
      return 50;
    } else {
      return 50 * ~~((value + 50) / 50);
    }
  }

  const limit = useClamp(2, 0.1, Infinity);
  syncOption("limit", limit);

  function decrementLimit(value: number) {
    if (value <= 2) {
      return Math.ceil(10 * (value - 0.1)) / 10;
    } else {
      return Math.ceil(value - 1);
    }
  }

  function incrementLimit(value: number) {
    if (value < 2) {
      return ~~(10 * (value + 0.1)) / 10;
    } else {
      return ~~(value + 1);
    }
  }

  const equation = ref("z^2+c");
  syncOption("equation", equation);

  const theme = ref<"simple" | "gradient" | "rotation" | "newton">("simple");
  syncOption("theme", theme);

  const themeIntMap = { simple: 1, gradient: 2, rotation: 3, newton: 4 };
  const themeInt = computed(() => themeIntMap[theme.value]);

  const colorOffset = ref(0);
  syncOption("colorOffset", colorOffset);

  const repetition = ref(1);
  syncOption("repetition", repetition);

  const spectrum = ref(1);
  syncOption("spectrum", spectrum);

  const darkness = ref(false);
  syncOption("darkness", darkness);

  const split = ref(false);
  syncOption("split", split);

  // Some shader code was modified from these sources:
  // https://github.com/NSGolova/FractalSoundWeb
  // https://stackoverflow.com/a/17897228

  const shader = trim`
  in vec2 pos;
  out vec4 color;

  uniform int detail;
  uniform float limit;
  uniform int theme;
  uniform float colorOffset;
  uniform float repetition;
  uniform float spectrum;
  uniform bool darkness;
  uniform bool split;

  float pi = 3.1415926535;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec3 simplePalette(int i) {
    float hue = mod(0.02 * repetition * float(i), 1.0);
    vec3 hsv = vec3(1.0 - hue * spectrum, 1, 1);

    if (darkness) hsv.z = mod(0.02 * float(i), 1.0);
    hsv.x = mod(hsv.x + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec3 gradientPalette(vec3 sz, int i) {
    sz = abs(sz) / float(i) * repetition;

    vec3 hsv = rgb2hsv(sin(abs(sz * 5.0)) * 0.45 + 0.5);
    vec3 rgb = hsv2rgb(vec3(hsv.x * spectrum + colorOffset, hsv.yz));
    if (darkness) rgb *= mod(float(i) * 0.02, 1.0);

    return rgb;
  }

  vec3 rotationPalette(float t, int i) {
    float hue = mod(2.0 * t / pi * repetition, 1.0);

    vec3 rgb = hsv2rgb(vec3(1.0 - hue * spectrum + colorOffset, 1, 1));
    if (darkness) rgb *= mod(float(i) * 0.02, 1.0);

    return rgb;
  }

  vec3 newtonPalette(float t) {
    float hue = mod(t / pi * repetition, 1.0) * spectrum;
    hue = mod(hue + colorOffset, 1.0);
    return hsv2rgb(vec3(1.0 - hue, 1, 1));
  }

  vec2 cube(vec2 a) {
    float x2 = a.x * a.x;
    float y2 = a.y * a.y;
    float d = x2 - y2;
    return vec2(a.x * (d - y2 - y2), a.y * (d + x2 + x2));
  }

  vec2 sqr(vec2 a) {
    return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
  }

  vec2 mult(vec2 a, vec2 b) {
    float x = a.x * b.x - a.y * b.y;
    float y = a.x * b.y + a.y * b.x;
    return vec2(x, y);
  }

  vec2 div(vec2 a, vec2 b) {
    float denom = 1.0 / (b.x * b.x + b.y * b.y);
    return vec2(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y) * denom;
  }

  vec2 power(vec2 a, vec2 b) {
    int count = int(b.x);
    if (count <= 1) return a;

    vec2 result = a;
    for (int i = 1; i < count; i++) {
      result = mult(result, a);
    }

    return result;
  }

  void main() {
    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (theme == 4 || theme == 1 && split) z = pos;

    int iter = 0;
    for (int i = 0; i < detail; i++) {
      ppz = pz;
      pz = z;
      z = {{EQ}};
      iter++;

      if (length(z) > limit) {
        if (theme == 1) {
          color = vec4(simplePalette(iter), 1);
          return;
        } else if (theme == 2) {
          color = vec4(gradientPalette(sz, iter), 1);
          return;
        } else if (theme == 3) {
          color = vec4(rotationPalette(atan(sz.x, sz.y), iter), 1);
          return;
        }
      }

      nz += z;
      sz.x += dot(z - pz, pz - ppz);
      sz.y += dot(z - pz, z - pz);
      sz.z += dot(z - ppz, z - ppz);

      if (split) {
        sz += sign(vec3(float(z), float(pz), float(ppz)));
      }

      if (theme == 3 && !split) {
        sz -= sign(vec3(float(z), float(pz), float(ppz)));
      }
    }

    if (theme == 2) {
      color = vec4(gradientPalette(sz, iter), 1);
    } else if (theme == 3) {
      color = vec4(rotationPalette(pi - atan(sz.y / sz.x), detail), 1);
    } else if (theme == 4) {
      if (darkness) z = nz;
      color = vec4(newtonPalette(atan(z.y / z.x)), 1);
    } else color = vec4(0, 0, 0, 1);
  }
  `;

  const canvas = ref<MaybeElement>();
  const zoomLevel = useRound(ref(1), 100);
  const zoomLevelOut = useDisplay(zoomLevel);

  let destroy: (() => void) | undefined;
  let resetPosition = ref<() => void>();

  function reload() {
    destroy?.();

    useMovableCanvas(
      canvas,
      shader.replace("{{EQ}}", glsl(equation.value))
    ).then((gl) => {
      gl.useUniform("detail", "i", detail);
      gl.useUniform("limit", "f", limit);
      gl.useUniform("theme", "i", themeInt);
      gl.useUniform("colorOffset", "f", colorOffset);
      gl.useUniform("repetition", "f", repetition);
      gl.useUniform("spectrum", "f", spectrum);
      gl.useUniform("darkness", "f", darkness);
      gl.useUniform("split", "f", split);

      gl.onDispose(
        watchEffect(() => {
          zoomLevel.value = 4 / (gl.bounds.xEnd.value - gl.bounds.xStart.value);
        })
      );

      resetPosition.value = () => {
        gl.bounds.xStart.value = -2;
        gl.bounds.xEnd.value = 2;
        gl.bounds.yStart.value = -2;
        gl.bounds.yEnd.value = 2;
      };

      destroy = gl.destroy;
    });
  }

  reload();
</script>

<template>
  <FullscreenDisplay>
    <template #options>
      <Incrementable
        v-model="detail"
        :decrement="decrementDetail"
        :increment="incrementDetail"
        label="Detail Level:"
      />

      <Incrementable
        v-model="limit"
        :decrement="decrementLimit"
        :increment="incrementLimit"
        label="Fractal Size:"
      />

      <Labeled label="Equation:">
        <Field v-model="equation" />
        <Button style="white-space: pre" @click="reload">Apply Equation</Button>
      </Labeled>

      <Labeled label="Theme:">
        <Dropdown v-model="theme">
          <option value="simple">Simple</option>
          <option value="gradient">Gradient</option>
          <option value="rotation">Rotation</option>
          <option value="newton">Newton's Method</option>
        </Dropdown>
      </Labeled>

      <Labeled label="Color Offset:">
        <InlineRangeField v-model="colorOffset" :max="1" :min="0" step="any" />
      </Labeled>

      <Labeled label="Color Repetition:">
        <InlineRangeField v-model="repetition" :max="10" :min="0" step="any" />
      </Labeled>

      <Labeled label="Color Spectrum:">
        <InlineRangeField v-model="spectrum" :max="1" :min="0" step="any" />
      </Labeled>

      <Labeled :label="theme === 'newton' ? '3D Effect?' : 'Darkness Effect?'">
        <InlineCheckboxField v-model="darkness" />
      </Labeled>

      <Labeled
        v-if="theme !== 'newton'"
        :label="
          theme === 'simple'
            ? 'Mimic Newton\'s Method?'
            : theme === 'rotation'
            ? 'Alternate Split?'
            : 'Split Effect?'
        "
      >
        <InlineCheckboxField v-model="split" />
      </Labeled>
    </template>

    <template #buttons>
      <Button v-if="resetPosition" @click="resetPosition">
        Reset Position
      </Button>
    </template>

    <template #indicator>Zoom Level: {{ zoomLevelOut }}</template>

    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
