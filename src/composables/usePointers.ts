import { useEventListener, UsePointerState } from "@vueuse/core";
import { reactive } from "vue";

export function useActivePointers() {
  const down = reactive(new Map<number, UsePointerState>());

  useEventListener("pointerdown", (event) => {
    down.set(event.pointerId, {
      ...event,
      pointerType: (event.pointerType as any) || null,
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
