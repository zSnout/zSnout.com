import { MaybeElementRef, MaybeRef } from "@vueuse/core";
import { computed, reactive, resolveComponent, unref } from "vue";
import { CanvasSize } from "./useCanvas";
import { map } from "./useMap";
import { useWebGL, WebGLOptions, WebGLProgram } from "./useWebGL";

export interface CoordinateCanvasOptions
  extends Omit<WebGLOptions, "vertShader"> {
  bounds: Bounds;
}

export interface Bounds {
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface CoordinateCanvas extends WebGLProgram {
  bounds: Bounds;
}

export function mouseToCoords(
  bounds: Bounds,
  size: CanvasSize,
  x: MaybeRef<number>,
  y: MaybeRef<number>
): Coordinates {
  const coords = normalize(bounds, size);

  const mouse = computed(() => {
    return {
      x: map(0, size.width.value, coords.xStart, coords.xEnd, unref(x)),
      y: map(size.height.value, 0, coords.yStart, coords.yEnd, unref(y)),
    };
  });

  return reactive({
    x: computed(() => mouse.value.x),
    y: computed(() => mouse.value.y),
  });
}

export function normalize(bounds: Bounds, size: CanvasSize): Bounds {
  const coords = computed<Bounds>(() => {
    const { xStart, xEnd, yStart, yEnd } = bounds;
    const xCenter = xStart + xEnd;
    const yCenter = yStart + yEnd;
    const xRange = (xEnd - xStart) / 2;
    const yRange = (yEnd - yStart) / 2;

    let {
      width: { value: width },
      height: { value: height },
    } = size;

    if (Number.isNaN(width) || width === 0) width = height;
    if (Number.isNaN(height) || height === 0) height = width;
    if (Number.isNaN(width) || width === 0) width = height = 1;

    if (width < height) {
      return {
        xStart,
        xEnd,
        yStart: yCenter - (height / width) * yRange,
        yEnd: yCenter + (height / width) * yRange,
      };
    } else {
      return {
        xStart: xCenter - (width / height) * xRange,
        xEnd: xCenter + (width / height) * xRange,
        yStart,
        yEnd,
      };
    }
  });

  return reactive({
    xStart: computed(() => coords.value.xStart),
    xEnd: computed(() => coords.value.xEnd),
    yStart: computed(() => coords.value.yStart),
    yEnd: computed(() => coords.value.yEnd),
  });
}

export async function useCoordinateCanvas(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: CoordinateCanvasOptions
): Promise<CoordinateCanvas> {
  const bounds = reactive(
    opts?.bounds ?? {
      xStart: -2,
      xEnd: 2,
      yStart: -2,
      yEnd: 2,
    }
  );

  const vertShader = `
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;

  const program = await useWebGL(canvasRef, shader, {
    ...opts,
    vertShader,
  });

  const coords = normalize(bounds, program.size);
  const offset = computed(() => [coords.xStart, coords.yStart]);
  const scale = computed(() => [
    coords.xEnd - coords.xStart,
    coords.yEnd - coords.yStart,
  ]);

  program.useUniform("offset", "f", offset);
  program.useUniform("scale", "f", scale);

  return Object.assign(program, { bounds });
}
