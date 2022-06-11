import {
  MaybeElementRef,
  MaybeRef,
  useEventListener,
  usePointer,
} from "@vueuse/core";
import { computed, ref, toRef, unref } from "vue";
import {
  Bounds,
  BoundsLike,
  CoordinateCanvasOptions,
  CoordinatesLike,
  pointerToCoords,
  useCoordinateCanvas,
} from "./useCoordinateCanvas";
import { syncNumericOption } from "./useOption";
import { useRound } from "./useRound";

export function getZoomRegion(
  bounds: BoundsLike,
  cursor: CoordinatesLike,
  sign: MaybeRef<number>
): Bounds {
  return {
    xStart: computed(
      () =>
        unref(bounds.xStart) +
        (unref(sign) * (unref(cursor.x) - unref(bounds.xStart))) / 10
    ),
    xEnd: computed(
      () =>
        unref(bounds.xEnd) +
        (unref(sign) * (unref(cursor.x) - unref(bounds.xEnd))) / 10
    ),
    yStart: computed(
      () =>
        unref(bounds.yStart) +
        (unref(sign) * (unref(cursor.y) - unref(bounds.yStart))) / 10
    ),
    yEnd: computed(
      () =>
        unref(bounds.yEnd) +
        (unref(sign) * (unref(cursor.y) - unref(bounds.yEnd))) / 10
    ),
  };
}

export async function useMovableCanvas(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: CoordinateCanvasOptions
) {
  const data = await useCoordinateCanvas(canvasRef, shader, opts);
  const { canvas, bounds, offset, onDispose, scale, useUniform } = data;

  const pointer = usePointer();
  const lastPointer = { x: ref(NaN), y: ref(NaN) };
  const strength = ref(0);

  const zoom = getZoomRegion(
    bounds,
    pointerToCoords(offset, scale, pointer),
    strength
  );

  if (opts?.uniforms === true) {
    const zoom = getZoomRegion(
      bounds,
      pointerToCoords(offset, scale, pointer),
      1
    );

    useUniform("zoomRegion.xStart", "f", zoom.xStart);
    useUniform("zoomRegion.xEnd", "f", zoom.xEnd);
    useUniform("zoomRegion.yStart", "f", zoom.yStart);
    useUniform("zoomRegion.yEnd", "f", zoom.yEnd);
  }

  onDispose(
    useEventListener(
      canvas,
      "wheel",
      (event: WheelEvent) => {
        event.preventDefault();

        pointer.x.value = event.offsetX;
        pointer.y.value = event.offsetY;
        strength.value =
          (Math.sqrt(Math.abs(event.deltaY)) * -Math.sign(event.deltaY)) / 10;

        const {
          xStart: { value: xStart },
          xEnd: { value: xEnd },
          yStart: { value: yStart },
          yEnd: { value: yEnd },
        } = zoom;

        bounds.xStart.value = xStart;
        bounds.xEnd.value = xEnd;
        bounds.yStart.value = yStart;
        bounds.yEnd.value = yEnd;
      },
      { passive: false }
    )
  );

  const coords = pointerToCoords(offset, scale, pointer);
  const lastCoords = pointerToCoords(offset, scale, lastPointer);

  onDispose(
    useEventListener(canvas, "pointermove", (event: MouseEvent) => {
      event.preventDefault();

      if (
        Number.isNaN(lastPointer.x.value) ||
        Number.isNaN(lastPointer.y.value)
      ) {
        return;
      }

      pointer.x.value = event.offsetX;
      pointer.y.value = event.offsetY;

      const x = coords.x.value - lastCoords.x.value;
      const y = coords.y.value - lastCoords.y.value;

      bounds.xStart.value -= x;
      bounds.xEnd.value -= x;
      bounds.yStart.value -= y;
      bounds.yEnd.value -= y;

      lastPointer.x.value = pointer.x.value;
      lastPointer.y.value = pointer.y.value;
    })
  );

  onDispose(
    useEventListener(canvas, "pointerdown", (event: PointerEvent) => {
      canvas.setPointerCapture(event.pointerId);
      lastPointer.x.value = event.offsetX;
      lastPointer.y.value = event.offsetY;
    })
  );

  onDispose(
    useEventListener("pointerup", (event: PointerEvent) => {
      canvas.releasePointerCapture(event.pointerId);
      lastPointer.x.value = NaN;
      lastPointer.y.value = NaN;
    })
  );

  function sync(param: keyof typeof bounds) {
    onDispose(syncNumericOption(param, useRound(toRef(bounds, param))));
  }

  sync("xStart");
  sync("xEnd");
  sync("yStart");
  sync("yEnd");

  return data;
}
