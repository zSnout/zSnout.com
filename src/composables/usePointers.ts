import { useEventListener, UsePointerState } from "@vueuse/core";
import { reactive } from "vue";

export function useActivePointers() {
  const down = reactive(new Map<number, UsePointerState>());

  useEventListener("pointerdown", (event) => {
    const {
      height,
      pointerId,
      pointerType,
      pressure,
      tiltX,
      tiltY,
      twist,
      width,
      x,
      y,
    } = event;

    down.set(pointerId, {
      height,
      pointerId,
      pointerType: (pointerType as any) || null,
      pressure,
      tiltX,
      tiltY,
      twist,
      width,
      x,
      y,
    });
  });

  useEventListener("pointerup", (event) => {
    down.delete(event.pointerId);
  });

  useEventListener("pointercancel", (event) => {
    down.delete(event.pointerId);
  });

  return down;
}
