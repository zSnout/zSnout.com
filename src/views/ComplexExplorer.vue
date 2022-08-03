<script lang="ts" setup>
  import { useElementSize, useEventListener, useRafFn } from "@vueuse/core";
  import { onMounted, ref } from "vue";
  import Button from "../components/Button.vue";
  import ColorSliders, {
    useColorSliders,
  } from "../components/ColorSliders.vue";
  import Field from "../components/Field.vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import HStack from "../components/HStack.vue";
  import Labeled from "../components/Labeled.vue";
  import { glsl } from "../composables/useGlsl";
  import { syncOption } from "../composables/useOption";
  import { MovableCanvas2d } from "../composables/webgl/MovableCanvas2d";

  const time = ref(1);
  const isAnimating = ref(false);
  const isReverse = ref(false);
  const isPointerDown = ref(false);
  const progress = ref<HTMLElement>();
  const { width } = useElementSize(progress);

  useRafFn(() => {
    if (!isAnimating.value) return;

    if (time.value > 1) {
      isAnimating.value = false;
      time.value = 1;
    } else if (time.value < 0) {
      isReverse.value = false;
      time.value = 0;
    } else if (isReverse.value) {
      time.value = (200 * time.value - 10) / 200;
    } else if (isAnimating.value) {
      time.value = (200 * time.value + 1) / 200;
    }
  });

  function animate() {
    time.value = 1;
    isAnimating.value = true;
    isReverse.value = true;
  }

  function pause() {
    if (isAnimating.value) {
      isAnimating.value = false;
    } else {
      isAnimating.value = true;
    }
  }

  function setTime(event: PointerEvent) {
    event.preventDefault();

    if (event.type === "pointerdown") {
      isPointerDown.value = true;
      progress.value?.setPointerCapture(event.pointerId);
    } else if (event.type === "pointerup") {
      isPointerDown.value = false;
    }

    if (!isPointerDown.value) return;

    time.value = Math.min(1, Math.max(0, event.offsetX / width.value));
    isAnimating.value = false;
  }

  function onTouchMove(event: TouchEvent) {
    if (!isPointerDown.value) return;

    event.preventDefault();

    if (progress.value) {
      const x =
        event.changedTouches[0].pageX -
        progress.value.getBoundingClientRect().x;

      time.value = Math.min(1, Math.max(0, x / width.value));
      isAnimating.value = false;
    }
  }

  const equation = ref("z^2");
  syncOption("equation", equation);

  const sliders = useColorSliders();

  // Some shader code was modified from these sources:
  // https://github.com/NSGolova/FractalSoundWeb
  // https://stackoverflow.com/a/17897228

  const shader = `
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${useColorSliders}

  vec3 palette(vec2 z) {
    vec3 rgb = use_color_sliders(atan(z.y, z.x) / pi2);
    vec2 z2 = z * z;
    float d = sqrt(z2.x + z2.y);
    if (d < 1.0) rgb *= d;

    return rgb;
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
    for (int i = 1; i < 10; i++) {
      if (i >= count) break;
      result = mult(result, a);
    }

    return result;
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    vec2 z = pos;
    z = {{EQ}};
    z = time * z + (1.0 - time) * pos;

    gl_FragColor = vec4(palette(z), 1.0);
  }
  `;

  const canvas = ref<HTMLCanvasElement>();

  const resetPosition = ref<() => void>();
  const setEquation = ref<() => void>();

  onMounted(() => {
    if (!canvas.value) return;

    const gl = new MovableCanvas2d(canvas.value, {
      fragmentString: shader.replace("{{EQ}}", glsl(equation.value)),
      saveBounds: true,
    });

    setEquation.value = () => setTimeout(() => location.reload());

    gl.on("render", () => {
      sliders.setGlsl(gl);
      gl.setUniform("time", time.value);
    });

    resetPosition.value = () => {
      gl.setBounds({
        xStart: -2,
        xEnd: 2,
        yStart: -2,
        yEnd: 2,
      });
    };
  });

  useEventListener("pointerup", setTime);
</script>

<template>
  <FullscreenDisplay>
    <template #options>
      <Labeled label="Equation:">
        <Field v-model="equation" />

        <Button
          v-if="setEquation"
          style="white-space: pre"
          @click="setEquation"
        >
          Apply
        </Button>
      </Labeled>

      <ColorSliders :sliders="sliders" />
    </template>

    <template #buttons>
      <Button v-if="resetPosition" @click="resetPosition">
        Reset Position
      </Button>
    </template>

    <template #indicator>
      <HStack style="width: 100%; align-items: center">
        <progress
          ref="progress"
          class="progress"
          :value="time"
          max="1"
          @pointerdown="setTime"
          @pointermove="setTime"
          @touchmove="onTouchMove"
        />

        <span class="play" @click="time === 1 ? animate() : pause()">▶</span>
      </HStack>
    </template>

    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>

<style scoped>
  .progress {
    flex: 1;
    height: 3em;
  }
</style>
