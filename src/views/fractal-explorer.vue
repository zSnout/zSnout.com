<script lang="ts" setup>
  import { useEventListener } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { computed, onMounted, ref } from "vue";
  import Button from "../components/Button.vue";
  import ColorSliders, {
    useColorSliders,
  } from "../components/ColorSliders.vue";
  import ColorSlidersHelp from "../components/ColorSlidersHelp.vue";
  import Dropdown from "../components/Dropdown.vue";
  import Field from "../components/Field.vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import Incrementable from "../components/Incrementable.vue";
  import InlineCheckboxField from "../components/InlineCheckboxField.vue";
  import Labeled from "../components/Labeled.vue";
  import { glsl } from "../composables/useGlsl";
  import { syncOption } from "../composables/useOption";
  import { MovableCanvas2d } from "../composables/webgl/MovableCanvas2d";
  import InlineRangeField from "../components/InlineRangeField.vue";

  const { noSave } = defineProps<{ noSave?: boolean }>();
  const save = !noSave;

  const detail = useClamp(100, 5, 1000);
  if (save) syncOption("detail", detail);

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
  if (save) syncOption("limit", limit);

  function decrementLimit(value: number) {
    if (value <= 2) {
      return (Math.ceil(10 * value) - 1) / 10;
    } else {
      return Math.ceil(value - 1);
    }
  }

  function incrementLimit(value: number) {
    if (value < 2) {
      return (~~(10 * value) + 1) / 10;
    } else {
      return ~~(value + 1);
    }
  }

  const equation = ref("z^2+c");
  if (save) syncOption("equation", equation);

  const theme = ref<
    "simple" | "gradient" | "rotation" | "newton" | "trig" | "exp"
  >("simple");

  if (save) syncOption("theme", theme);

  const themeIntMap = {
    simple: 1,
    gradient: 2,
    rotation: 3,
    newton: 4,
    trig: 5,
    exp: 6,
  };

  const themeInt = computed(() => themeIntMap[theme.value]);

  const sliders = useColorSliders({ save });

  const minIter = ref(0);
  if (save) syncOption("minIter", minIter);

  const darkness = ref(false);
  if (save) syncOption("darkness", darkness);

  const split = ref(false);
  if (save) syncOption("split", split);

  const altColors = ref(false);
  if (save) syncOption("altColors", altColors);

  const initZ = ref(false);
  if (save) syncOption("initZ", initZ);

  const dualPlot = ref(false);
  if (save) syncOption("dualPlot", dualPlot);

  // Some shader code was modified from these sources:
  // https://github.com/NSGolova/FractalSoundWeb
  // https://stackoverflow.com/a/17897228
  // https://gist.github.com/DonKarlssonSan/f87ba5e4e5f1093cb83e39024a6a5e72
  // https://github.com/julesb/glsl-util

  const shader = `
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform float minIter;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform bool initZ;
  uniform bool dualPlot;
  uniform vec2 z_offset;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 mouse;
  uniform float time;

  const float maxIterations = 1000.0;
  const float pi = 3.1415926535;

  ${useColorSliders.toString({
    addDarkness: "if (darkness && theme == 1) hsv.z = mod(i, 0.5);",
  })}

  vec2 div(vec2 a, vec2 b);

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

  #define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
  #define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))

  vec2 cx_tan(vec2 a) {
    return div(cx_sin(a), cx_cos(a));
  }

  vec2 cx_log(vec2 a) {
    float rpart = length(a);
    float ipart = atan(a.y, a.x);
    if (ipart > pi) ipart = ipart - 2.0 * pi;
    return vec2(log(rpart), ipart);
  }

  // This power function is only meant for numbers of the form
  // z ^ c, where c is a complex number like x + 0i.
  vec2 cx_pow(vec2 a, vec2 b) {
    float n = b.x;
    float angle = atan(a.y, a.x);
    float r = length(a);
    float real = pow(r, n) * cos(n*angle);
    float im = pow(r, n) * sin(n*angle);
    return vec2(real, im);
  }

  vec2 cx_exp(vec2 n) {
    return exp(n.x) * vec2(cos(n.y), sin(n.y));
  }

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

  vec3 simplePalette(float i) {
    return use_color_sliders(0.02 * i);
  }

  vec3 gradientPalette(vec3 sz, float i) {
    sz = abs(sz) / i;

    vec3 rgb = use_color_sliders(sin(abs(sz * 5.0)) * 0.45 + 0.5);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 rotationPalette(float t, float i) {
    vec3 rgb = use_color_sliders(2.0 * t / pi);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 newtonPalette(float t, float i) {
    vec3 rgb = use_color_sliders(t / pi);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 trigPalette(float i) {
    float t = i * 0.1 * repetition;

    float n1, n2;
    if (split) {
      n1 = 1.0 / sin(t) * 0.5 + 0.5;
      n2 = 1.0 / tan(t) * 0.5 + 0.5;
    } else {
      n1 = sin(t) * 0.5 + 0.5;
      n2 = cos(t) * 0.5 + 0.5;
    }

    vec3 rgb;
    if (altColors) {
      rgb = vec3(n2, n2, n1);
    } else {
      rgb = vec3(n1, split ? 0.5 : 1.0, n2);
    }

    rgb = use_color_sliders(rgb, false);
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 expPalette(float i) {
    float t = 0.1 * i * repetition;

    float n1, n2;
    if (split) {
      n1 = 1.0 / log(t);
      n2 = 1.0 / exp(t);
    } else {
      n1 = log(t);
      n2 = exp(t);
    }

    n1 = mod(n1, 1.0);
    n2 = mod(n2, 1.0);

    vec3 rgb;
    if (altColors) {
      rgb = vec3(n2, n2, n1);
    } else {
      rgb = vec3(n1, split ? 0.5 : 1.0, n2);
    }

    rgb = use_color_sliders(rgb, false);
    if (darkness) rgb *= mod(i * 0.02, 1.0);

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

  ${["{{EQ}}", "{{EQC}}"]
    .map(
      (v, i) => `
  vec4 color${i}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${i} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${i} == 0 && initZ || theme == 4) z = pos;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = ${v};
      iter++;

      if (length(z) > limit) {
        if (iter < minIter) return vec4(1.0, 1.0, 1.0, 1.0);

        if (theme == 1) {
          return vec4(simplePalette(iter), 1.0);
        } else if (theme == 2) {
          return vec4(gradientPalette(sz, iter), 1.0);
        } else if (theme == 3) {
          return vec4(rotationPalette(atan(sz.x, sz.y), iter), 1.0);
        } else if (theme == 5) {
          return vec4(trigPalette(iter), 1.0);
        } else if (theme == 6) {
          return vec4(expPalette(iter), 1.0);
        }
      }

      if (theme == 4 && length(nz) > limit) iter--;

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
      return vec4(gradientPalette(sz, iter), 1.0);
    } else if (theme == 3) {
      return vec4(rotationPalette(pi - atan(sz.y / sz.x), detail), 1.0);
    } else if (theme == 4) {
      if (altColors) z = nz;
      return vec4(newtonPalette(atan(z.y / z.x), iter), 1.0);
    } else return vec4(0.0, 0.0, 0.0, 1.0);
  }`
    )
    .join("")}

  void main() {
    if (dualPlot) {
      vec2 pos = gl_FragCoord.xy / u_resolution;

      if (pos.y < 0.5 && pos.x > 0.5) {
        gl_FragColor = color0();
      } else {
        gl_FragColor = color1();
      }
    } else {
      gl_FragColor = color0();
    }
  }
  `;

  const canvas = ref<HTMLCanvasElement>();

  const resetPosition = ref<() => void>();
  const setEquation = ref<() => void>();

  onMounted(() => {
    if (!canvas.value) return;

    const gl = new MovableCanvas2d(canvas.value, {
      fragmentString: shader
        .replace("{{EQ}}", glsl(equation.value))
        .replace("{{EQC}}", glsl(equation.value.replace(/m/g, "c"))),
      saveBounds: save,
    });

    const themes = [
      "simple",
      "gradient",
      "rotation",
      "trig",
      "exp",
      "newton",
    ] as const;

    useEventListener("keydown", (event) => {
      if (
        event.target === document.body &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        event.preventDefault();

        switch (event.key) {
          case "ArrowLeft":
            theme.value =
              themes[
                (themes.indexOf(theme.value) - 1 + themes.length) %
                  themes.length
              ];
            break;

          case "ArrowRight":
            theme.value =
              themes[(themes.indexOf(theme.value) + 1) % themes.length];
            break;

          case "ArrowUp":
            detail.value = incrementDetail(detail.value);
            break;

          case "ArrowDown":
            detail.value = decrementDetail(detail.value);
            break;

          case "R":
          case "r":
            resetPosition.value?.();
            break;
        }
      }
    });

    canvas.value.addEventListener("dblclick", (event) => {
      event.preventDefault();

      if (theme.value !== "newton" && !equation.value.includes("m")) {
        initZ.value = !initZ.value;
      } else if (equation.value.includes("m")) {
        dualPlot.value = !dualPlot.value;
      }
    });

    canvas.value.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      if (equation.value.includes("m") || equation.value.includes("t")) {
        const { x, y } = gl.mouseToCoords();

        equation.value = equation.value
          .replace(/m/g, `$(${x}+${y}i)`)
          .replace(/t/g, `@(${gl.time})`);
      } else if (equation.value.includes("$") || equation.value.includes("@")) {
        equation.value = equation.value
          .replace(/\$\s*\([^)]*\)/g, "m")
          .replace(/@\s*\([^)]*\)/g, "t");
      } else if (equation.value.includes("c")) {
        equation.value = equation.value.replace(/c/g, "m");
      } else {
        equation.value = equation.value + "+m";
      }

      if (theme.value !== "newton" && !equation.value.includes("m")) {
        initZ.value = true;
      }

      setEquation.value?.();
    });

    setEquation.value = () =>
      setTimeout(() =>
        gl.load(
          shader
            .replace("{{EQ}}", glsl(equation.value))
            .replace("{{EQC}}", glsl(equation.value.replace(/m/g, "c")))
        )
      );

    gl.on("render", () => {
      gl.setUniform("detail", [detail.value]);
      gl.setUniform("limit", limit.value);
      gl.setUniformOfInt("theme", [themeInt.value]);
      gl.setUniformOfInt("darkness", [darkness.value]);
      gl.setUniform("minIter", minIter.value);
      gl.setUniformOfInt("split", [
        (theme.value === "simple" && equation.value.includes("m")) ||
          split.value,
      ]);
      gl.setUniformOfInt("altColors", [
        (theme.value !== "simple" || equation.value.includes("m")) &&
          altColors.value,
      ]);
      gl.setUniformOfInt("initZ", [
        theme.value === "newton" || equation.value.includes("m") || initZ.value,
      ]);
      gl.setUniformOfInt("dualPlot", [
        equation.value.includes("m") && dualPlot.value,
      ]);
      sliders.setGlsl(gl);

      if (equation.value.includes("m")) {
        const { x, y } = gl.mouseToCoords();
        gl.setUniform("z_offset", x, y);
      } else if (equation.value.includes("$")) {
        const match = equation.value.match(
          /\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/
        );

        if (match) {
          const a = +match[1];
          const b = +match[2];

          gl.setUniform(
            "z_offset",
            Number.isFinite(a) ? a : 0,
            Number.isFinite(b) ? b : 0
          );
        } else {
          gl.setUniform("z_offset", 0, 0);
        }
      } else {
        gl.setUniform("z_offset", 0, 0);
      }
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

        <Button
          v-if="setEquation"
          style="white-space: pre"
          @click="setEquation"
        >
          Apply
        </Button>
      </Labeled>

      <Labeled label="Theme:">
        <Dropdown v-model="theme">
          <option value="simple">Simple</option>
          <option value="gradient">Gradient</option>
          <option value="rotation">Rotation</option>
          <option value="trig">Trigonometric</option>
          <option value="exp">Exponential</option>
          <option value="newton">Newton's Method</option>
        </Dropdown>
      </Labeled>

      <ColorSliders :sliders="sliders" />

      <Labeled label="Darkness Effect?">
        <InlineCheckboxField v-model="darkness" />
      </Labeled>

      <Labeled
        v-if="theme !== 'newton' && theme !== 'simple'"
        :label="
          theme === 'rotation'
            ? 'Alternate Split?'
            : theme === 'trig'
            ? 'Alternate Trig Functions?'
            : theme === 'exp'
            ? 'Invert Exponentials?'
            : 'Split Effect?'
        "
      >
        <InlineCheckboxField v-model="split" />
      </Labeled>

      <Labeled
        v-if="theme === 'newton' || theme === 'trig' || theme === 'exp'"
        :label="theme === 'newton' ? '3D Effect?' : 'Alternate Coloring?'"
      >
        <InlineCheckboxField v-model="altColors" />
      </Labeled>

      <Labeled
        v-if="theme !== 'newton' && !equation.includes('m')"
        label="Initialize Z?"
      >
        <InlineCheckboxField v-model="initZ" />
      </Labeled>

      <Labeled v-if="equation.includes('m')" label="Dual Coloring?">
        <InlineCheckboxField v-model="dualPlot" />
      </Labeled>

      <Labeled label="Minimum Iterations">
        <InlineRangeField v-model="minIter" :max="detail" :min="0" />
      </Labeled>
    </template>

    <template #buttons>
      <Button v-if="resetPosition" @click="resetPosition">
        Reset Position
      </Button>
    </template>

    <template #help>
      <h1>Moving the Explorer</h1>

      <p>
        On mobile, move the image using one finger and pinch to zoom using two
        fingers.
      </p>

      <p>
        On desktop, click and drag using a mouse or trackpad to move the image
        and scroll using a mouse or pinch on a trackpad using two fingers to
        zoom.
      </p>

      <h1>Adjusting Detail</h1>

      <p>
        If you zoom in for a while, the fractal will start to have flat edges.
        To combat this, increase the "Detail Level." Increasing it makes your
        computer slower and uses more battery, so adjust this carefully.
      </p>

      <h1>Fractal Size</h1>

      <p>
        If you see sharp cutoffs at the edges of a fractal, try increasing the
        "Fractal Size" to see more of the image. Alternatively, shrink the value
        to crop certain parts of your fractal.
      </p>

      <h1>The Equation</h1>

      <p>
        When creating a fractal, try putting interesting equations into the
        "Equation" field. The Z and C variables are standard in fractals. Check
        out
        <a
          href="https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile"
          target="_blank"
        >
          this video behind the Mandelbrot Set
        </a>
        for more information. Additionally, zSnout provides M (the current mouse
        position), P (also the mouse position), T (the time that the page has
        been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^
        operators.
      </p>

      <p>
        Setting a new equation requires modifying several aspects of a program,
        so it will not be automatically applied unless you select the "Apply"
        button.
      </p>

      <p>
        If you have an equation with M and/or T, right-click the canvas to
        replace the M and T variables with their values. This does
        <i>not</i>
        affect the P variable.
      </p>

      <h1>Choosing a Theme</h1>

      <p>
        The Fractal Explorer has six different color themes. You may select one
        via a dropdown. When using an equation without C or M (e.g. z - (z^3 -
        1) / 3z^2), it is recommended to use "Newton's Method" or check
        "Initialize Z".
      </p>

      <p>
        If your equation has M, "Initialize Z" will automatically be checked and
        hidden. This does not apply to P.
      </p>

      <h1>Theme Checkboxes</h1>

      <p>
        At the bottom of the options page, you will find two to three
        checkboxes. These are specific to each theme. You may select or deselect
        any of these to produce unique results for each theme. The best way to
        understand what they do is to play around with them and learn by doing,
        not reading.
      </p>

      <ColorSlidersHelp
        note='Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").'
        page="Fractal Explorer"
      />

      <h1>Quick Actions</h1>

      <p>
        Right-clicking the canvas modifies your equation. It will primarily swap
        M and T for your current mouse position and time, while leaving P
        unaffected. If the current equation does not contain M or T,
        right-clicking will swap all instances of C for M.
      </p>

      <p>
        Double clicking will toggle "Dual Coloring" or "Initialize Z," depending
        on which one is currently shown.
      </p>

      <p>The left and right arrow keys swap through the various themes.</p>

      <p>The up and down arrows adjust the detail level.</p>

      <p>The R button resets the position of your fractal.</p>
    </template>

    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
