<script lang="ts" setup>
  import { MaybeElement, useClamp } from "@vueuse/core";
  import { ref } from "vue";
  import Dropdown from "../components/Dropdown.vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import HStack from "../components/HStack.vue";
  import Incrementable from "../components/Incrementable.vue";
  import InlineNumericField from "../components/InlineNumericField.vue";
  import { glsl } from "../composables/useGlsl";
  import { useMovableCanvas } from "../composables/useMovableCanvas";
  import { syncNumericOption, syncOption } from "../composables/useOption";

  const detail = useClamp(100, 5, Infinity);
  syncNumericOption("detail", detail);

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
  syncNumericOption("limit", limit);

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

  const shader = trim`
  in vec2 pos;
  out vec4 color;

  uniform int detail;
  uniform float limit;
  float pi = 3.1415926535;

  vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);

    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
  }

  vec3 palette(float t) {
    float hue = mod(2.0 * t, 1.0);
    return hsl2rgb(vec3(1.0 - hue, 1.0, 0.5));
  }

  vec3 newtonPalette(float t) {
    float hue = t / pi;
    return hsl2rgb(vec3(1.0 - hue, 1.0, 0.5));
  }

  vec2 cube(vec2 a) {
    float x2 = a.x * a.x;
    float y2 = a.y * a.y;
    float d = x2 - y2;
    return vec2(a.x * (d - y2 - y2), a.y * (x2 + x2 + d));
  }

  vec2 sqr(vec2 a) {
    return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
  }

  vec2 rawsqr(vec2 a) {
    return a * a;
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
    if (count <= 1)
      return a;

    vec2 result = a;
    for (int i = 1; i < count; i++) {
      result = mult(result, a);
    }

    return result;
  }

  void main() {
    vec2 z, pz, ppz, nz, c = pos;
    vec3 sz;
    color = vec4(0, 0, 0, 1);

    for (int i = 0; i < detail; i++) {
      ppz = pz;
      pz = z;
      z = {{EQ}};

      if (length(z) > limit) {
        color = vec4(palette(float(i) * 0.01), 1);
        return;
      }
    }
  }
  `;

  const theme = ref<"rainbow">("rainbow");
  syncOption("theme", theme);

  const equation = ref("z^2+c");
  syncOption("equation", equation);

  const canvas = ref<MaybeElement>();

  useMovableCanvas(canvas, shader.replace("{{EQ}}", glsl(equation.value))).then(
    (gl) => {
      gl.useUniform("detail", "i", detail);
      gl.useUniform("limit", "f", limit);
    }
  );
</script>

<template>
  <FullscreenDisplay>
    <template #options>
      <Incrementable
        v-model="detail"
        :decrement="decrementDetail"
        :increment="incrementDetail"
      >
        Detail Level:
        <InlineNumericField v-model="detail" />
      </Incrementable>

      <Incrementable
        v-model="limit"
        :decrement="decrementLimit"
        :increment="incrementLimit"
      >
        Fractal Size:
        <InlineNumericField v-model="limit" />
      </Incrementable>

      <HStack stretch>
        <Dropdown v-model="theme">
          <option value="rainbow">Rainbow</option>
        </Dropdown>
      </HStack>
    </template>

    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
