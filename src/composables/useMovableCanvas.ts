import { MaybeElementRef, useEventListener, usePointer } from "@vueuse/core";
import { watch } from "fs";
import { computed, ref, unref } from "vue";
import {
  Bounds,
  BoundsLike,
  CoordinateCanvasOptions,
  CoordinatesLike,
  pointerToCoords,
  useCoordinateCanvas,
} from "./useCoordinateCanvas";

export function getZoomRegion(
  bounds: BoundsLike,
  cursor: CoordinatesLike
): Bounds {
  return {
    xStart: computed(
      () => unref(bounds.xStart) + (unref(cursor.x) - unref(bounds.xStart)) / 10
    ),
    xEnd: computed(
      () => unref(bounds.xEnd) + (unref(cursor.x) - unref(bounds.xEnd)) / 10
    ),
    yStart: computed(
      () => unref(bounds.yStart) + (unref(cursor.y) - unref(bounds.yStart)) / 10
    ),
    yEnd: computed(
      () => unref(bounds.yEnd) + (unref(cursor.y) - unref(bounds.yEnd)) / 10
    ),
  };
}

export async function useMovableCanvas(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: CoordinateCanvasOptions
) {
  const data = await useCoordinateCanvas(canvasRef, shader, opts);
  const { canvas, bounds, onDispose, size, useUniform } = data;

  const pointer = usePointer();
  const lastPointer = { x: ref(pointer.x.value), y: ref(pointer.y.value) };
  const zoom = getZoomRegion(bounds, pointerToCoords(bounds, size, pointer));

  if (opts?.uniforms !== false) {
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

  const coords = pointerToCoords(bounds, size, pointer);
  const lastCoords = pointerToCoords(bounds, size, lastPointer);

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

  return data;
}
