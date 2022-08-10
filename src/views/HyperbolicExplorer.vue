<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import ColorSliders, {
    useColorSliders,
  } from "../components/ColorSliders.vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { MovableCanvas2d } from "../composables/webgl/MovableCanvas2d";

  const sliders = useColorSliders();

  const shader = `
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 us_scale;
  uniform vec2 us_offset;
  uniform vec2 u_resolution;

  ${useColorSliders}

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float arcosh(float val) {
    return log(val + sqrt(val * val - 1.0));
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    vec2 center = 0.5 * u_scale + u_offset;
    vec2 square = (gl_FragCoord.xy / u_resolution * us_scale + us_offset) * 1.2;

    if (square.x * square.x + square.y * square.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }

    pos -= center;
    pos *= -1.2;
    if (abs(pos.x) < 0.00001) pos.x = 0.00001;

    /* Poincare to Hyperboloid */
    float a = (1.0 - pos.y * pos.y) / (pos.x * pos.x) - 1.0;
    float b = -2.0 / pos.x;

    float x = -b / a; // other is x = 0
    float y = pos.y / pos.x * x;
    float z = x / pos.x - 1.0;

    x -= 2.0 * center.x;
    y -= 2.0 * center.y;

    float d = floor(abs(x)) + floor(abs(y));
    if (x < 0.0) d -= 1.0;
    if (y < 0.0) d += 1.0;

    gl_FragColor = vec4(use_color_sliders(d / 20.0), 1.0);
  }
  `;

  const canvas = ref<HTMLCanvasElement>();

  const resetPosition = ref<() => void>();

  onMounted(() => {
    if (!canvas.value) return;

    const gl = new MovableCanvas2d(canvas.value, {
      fragmentString: shader,
      saveBounds: true,
      bounds: {
        xStart: -1,
        xEnd: 1,
        yStart: -1,
        yEnd: 1,
      },
    });

    gl.on("render", () => sliders.setGlsl(gl));

    resetPosition.value = () => {
      gl.setBounds({
        xStart: -1,
        xEnd: 1,
        yStart: -1,
        yEnd: 1,
      });
    };
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <ColorSliders :sliders="sliders" />
    </template>
  </FullscreenDisplay>
</template>
