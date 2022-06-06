import { MaybeElementRef, unrefElement, useElementSize } from "@vueuse/core";
import { watchEffect } from "vue";

export interface CanvasInfo {
  canvas: HTMLCanvasElement;
  onResize(hook: () => void): void;
}

export function useCanvas(canvas: MaybeElementRef) {
  return new Promise<CanvasInfo>((resolve) => {
    watchEffect(() => {
      const el = unrefElement(canvas);

      if (el instanceof HTMLCanvasElement) {
        const { width, height } = useElementSize(el);

        const onResize: (() => void)[] = [];

        watchEffect(() => {
          el.width = width.value;
          el.height = height.value;
          onResize.forEach((hook) => hook());
        });

        resolve({
          canvas: el,
          onResize: (hook) => onResize.push(hook),
        });
      }
    });
  });
}
