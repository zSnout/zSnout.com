import {
  MaybeElementRef,
  MaybeRef,
  usePointer,
  useWindowSize,
} from "@vueuse/core";
import { computed, ref, Ref, unref } from "vue";
import { CanvasSize } from "./useCanvas";
import { useMap } from "./useMap";
import { useWebGL, WebGLOptions, WebGLProgram } from "./useWebGL";
import "../composables/useRouteOption";

export interface CoordinateCanvasOptions extends WebGLOptions {
  bounds?: BoundsLike;
  uniforms?: boolean;
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
  offset: Offset;
  scale: Scale;
}

export interface Offset extends Coordinates {}
export interface Scale extends Coordinates {}

export function pointerToCoords(
  offset: Offset,
  scale: Scale,
  pointer: CoordinatesLike
): Coordinates {
  const window = useWindowSize();

  // Y coordinates are inverted because we run yStart from the bottom of the
  // screen whereas browsers set the minimum y value at the top of the screen.

  const x = useMap(0, window.width, 0, 1, pointer.x);
  const y = useMap(window.height, 0, 0, 1, pointer.y);

  return {
    x: computed(() => x.value * scale.x.value + offset.x.value),
    y: computed(() => y.value * scale.y.value + offset.y.value),
  };
}

export function useAdjusters(bounds: BoundsLike, size: CanvasSize) {
  const window = useWindowSize();
  bounds = normalize(bounds, size);

  const offset = computed(() => {
    const xStart = unref(bounds.xStart);
    const xEnd = unref(bounds.xEnd);
    const yStart = unref(bounds.yStart);
    const yEnd = unref(bounds.yEnd);

    if (window.width.value > window.height.value) {
      return {
        x: (xStart - (xEnd - xStart) / 2) / 2,
        y: yStart,
      };
    } else {
      return {
        x: xStart,
        y: (yStart - (yEnd - yStart) / 2) / 2,
      };
    }
  });

  return {
    offset: {
      x: computed(() => offset.value.x),
      y: computed(() => offset.value.y),
    } as Offset,
    scale: {
      x: computed(() => unref(bounds.xEnd) - unref(bounds.xStart)),
      y: computed(() => unref(bounds.yEnd) - unref(bounds.yStart)),
    } as Scale,
  };
}

export function useVec2(coords: CoordinatesLike): Ref<[number, number]> {
  return computed(() => [unref(coords.x), unref(coords.y)]);
}

export function normalize(bounds: BoundsLike, size: CanvasSize): Bounds {
  const newBounds = computed<BoundsLike>(() => {
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
    xStart: computed(() => unref(newBounds.value.xStart)),
    xEnd: computed(() => unref(newBounds.value.xEnd)),
    yStart: computed(() => unref(newBounds.value.yStart)),
    yEnd: computed(() => unref(newBounds.value.yEnd)),
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

  const { offset, scale } = useAdjusters(bounds, program.size);

  program.useUniform("offset", "f", useVec2(offset));
  program.useUniform("scale", "f", useVec2(scale));

  if (opts?.uniforms === true) {
    program.useUniform("bounds.xStart", "f", bounds.xStart);
    program.useUniform("bounds.xEnd", "f", bounds.xEnd);
    program.useUniform("bounds.yStart", "f", bounds.yStart);
    program.useUniform("bounds.yEnd", "f", bounds.yEnd);

    const pointer = usePointer();
    const cursor = pointerToCoords(offset, scale, pointer);

    program.useUniform("pointer.x", "f", cursor.x);
    program.useUniform("pointer.y", "f", cursor.y);
  }

  return Object.assign(program, { bounds, offset, scale });
}
