import {
  MaybeElementRef,
  tryOnScopeDispose,
  unrefElement,
  useElementSize,
} from "@vueuse/core";
import { Ref, watchEffect } from "vue";

export interface CanvasSize {
  width: Ref<number>;
  height: Ref<number>;
}

export interface CanvasInfo {
  canvas: HTMLCanvasElement;
  size: CanvasSize;
  onDispose(hook: () => void): void;
  onResize(hook: () => void): void;
}

export function useCanvas(canvas: MaybeElementRef) {
  const onDispose: (() => void)[] = [];
  tryOnScopeDispose(() => onDispose.forEach((hook) => hook()));

  return new Promise<CanvasInfo>((resolve) => {
    const stop = watchEffect(() => {
      const el = unrefElement(canvas);

      if (el instanceof HTMLCanvasElement) {
        const { width, height } = useElementSize(el);

        const onResize: (() => void)[] = [];
        if (typeof stop === "function") onDispose.push(stop);

        const resizer = watchEffect(() => {
          el.width = width.value;
          el.height = height.value;
          onResize.forEach((hook) => hook());
        });

        onDispose.push(resizer);

        resolve({
          canvas: el,
          onDispose: (hook) => onDispose.push(hook),
          onResize: (hook) => onResize.push(hook),
          size: { width, height },
        });
      }
    });
  });
}
