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
  dispose(): void;
}

export interface CanvasOptions {
  useDevicePixelRatio?: boolean;
}

export function useCanvas(
  canvas: MaybeElementRef,
  { useDevicePixelRatio = true }: CanvasOptions = {}
) {
  const onDispose: (() => void)[] = [];
  tryOnScopeDispose(() => onDispose.forEach((hook) => hook()));

  return new Promise<CanvasInfo>((resolve) => {
    onDispose.push(
      watchEffect(() => {
        const el = unrefElement(canvas);

        if (el instanceof HTMLCanvasElement) {
          const { width, height } = useElementSize(el);
          const onResize: (() => void)[] = [];

          onDispose.push(
            watchEffect(() => {
              el.width =
                width.value * (useDevicePixelRatio ? devicePixelRatio : 1);
              el.height =
                height.value * (useDevicePixelRatio ? devicePixelRatio : 1);
              onResize.forEach((hook) => hook());
            })
          );

          resolve({
            canvas: el,
            onDispose: (hook) => onDispose.push(hook),
            onResize: (hook) => onResize.push(hook),
            size: { width, height },
            dispose() {
              onDispose.forEach((hook) => hook());
              onDispose.splice(0, onDispose.length);
            },
          });
        }
      })
    );
  });
}
