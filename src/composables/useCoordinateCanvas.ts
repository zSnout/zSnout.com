import { MaybeElementRef, MaybeRef, useMouse, usePointer } from "@vueuse/core";
import { computed, reactive, ref, Ref, unref } from "vue";
import { CanvasSize } from "./useCanvas";
import { map, useMap } from "./useMap";
import { useWebGL, WebGLOptions, WebGLProgram } from "./useWebGL";

export interface CoordinateCanvasOptions extends WebGLOptions {
  bounds: BoundsLike;
}

export interface Bounds {
  xStart: Ref<number>;
  xEnd: Ref<number>;
  yStart: Ref<number>;
  yEnd: Ref<number>;
}

export interface BoundsLike {
  xStart: MaybeRef<number>;
  xEnd: MaybeRef<number>;
  yStart: MaybeRef<number>;
  yEnd: MaybeRef<number>;
}

export interface Coordinates {
  x: Ref<number>;
  y: Ref<number>;
}

export interface CoordinatesLike {
  x: MaybeRef<number>;
  y: MaybeRef<number>;
}

export interface CoordinateCanvas extends WebGLProgram {
  bounds: Bounds;
}

export function pointerToCoords(
  bounds: BoundsLike,
  size: CanvasSize,
  x: MaybeRef<number>,
  y: MaybeRef<number>
): Coordinates {
  const coords = normalize(bounds, size);

  // Y coordinates are inverted because we run yStart from the bottom of the
  // screen whereas browsers set the minimum y value at the top of the screen.

  return {
    x: useMap(0, size.width, coords.xStart, coords.xEnd, x),
    y: useMap(size.height, 0, coords.yStart, coords.yEnd, y),
  };
}

export function normalize(bounds: BoundsLike, size: CanvasSize): Bounds {
  const coords = computed<BoundsLike>(() => {
    const { xStart, xEnd, yStart, yEnd } = bounds;
    const xCenter = unref(xStart) + unref(xEnd);
    const yCenter = unref(yStart) + unref(yEnd);
    const xRange = (unref(xEnd) - unref(xStart)) / 2;
    const yRange = (unref(yEnd) - unref(yStart)) / 2;

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

  return {
    xStart: computed(() => unref(coords.value.xStart)),
    xEnd: computed(() => unref(coords.value.xEnd)),
    yStart: computed(() => unref(coords.value.yStart)),
    yEnd: computed(() => unref(coords.value.yEnd)),
  };
}

const structs = `
struct Bounds {
  float xStart;
  float xEnd;
  float yStart;
  float yEnd;
};

struct Coordinates {
  float x;
  float y;
};
`;

const vertShader = `
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;

export async function useCoordinateCanvas(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: CoordinateCanvasOptions
): Promise<CoordinateCanvas> {
  const bounds: Bounds = {
    xStart: ref(opts?.bounds?.xStart ?? -2),
    xEnd: ref(opts?.bounds?.xEnd ?? 2),
    yStart: ref(opts?.bounds?.yStart ?? -2),
    yEnd: ref(opts?.bounds?.yEnd ?? 2),
  };

  const program = await useWebGL(canvasRef, structs + shader, {
    ...opts,
    vertShader: structs + (opts?.vertShader ?? vertShader),
  });

  const coords = normalize(bounds, program.size);

  const offset = computed<[number, number]>(() => [
    coords.xStart.value,
    coords.yStart.value,
  ]);

  const scale = computed(() => [
    coords.xEnd.value - coords.xStart.value,
    coords.yEnd.value - coords.yStart.value,
  ]);

  program.useUniform("offset", "f", offset);
  program.useUniform("scale", "f", scale);

  program.useUniform("bounds.xStart", "f", bounds.xStart);
  program.useUniform("bounds.xEnd", "f", bounds.xEnd);
  program.useUniform("bounds.yStart", "f", bounds.yStart);
  program.useUniform("bounds.yEnd", "f", bounds.yEnd);

  const pointer = usePointer();
  const cursor = pointerToCoords(bounds, program.size, pointer.x, pointer.y);

  program.useUniform("pointer.x", "f", cursor.x);
  program.useUniform("pointer.y", "f", cursor.y);

  return Object.assign(program, { bounds });
}
