import { MaybeElementRef } from "@vueuse/core";
import { computed, reactive, watchEffect } from "vue";
import { CanvasSize } from "./useCanvas";
import { useWebGL, WebGLOptions, WebGLProgram } from "./useWebGL";

export interface CoordinateCanvasOptions
  extends Omit<WebGLOptions, "vertShader"> {
  coordinates: Coordinates;
}

export interface Coordinates {
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}

export interface CoordinateCanvas extends WebGLProgram {
  coordinates: Coordinates;
}

export function normalize(
  coordinates: Coordinates,
  size: CanvasSize
): Coordinates {
  const coords = computed<Coordinates>(() => {
    const { xStart, xEnd, yStart, yEnd } = coordinates;
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

  watchEffect(() => console.log(coords.value));

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
  const coordinates = reactive(
    opts?.coordinates ?? {
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

  const coords = normalize(coordinates, program.size);
  const offset = computed(() => [coords.xStart, coords.yStart]);
  const scale = computed(() => [
    coords.xEnd - coords.xStart,
    coords.yEnd - coords.yStart,
  ]);

  program.useUniform("offset", "f", offset);
  program.useUniform("scale", "f", scale);

  return Object.assign(program, { coordinates });
}
