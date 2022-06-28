import { MaybeRef } from "@vueuse/core";
import { computed, Ref, ref, unref } from "vue";

export function useDataUrl(
  source: MaybeRef<ImageData | undefined>,
  transform?: (data: ImageData) => ImageData | void
): Ref<string | undefined> {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return ref(undefined);

  return computed(() => {
    try {
      let data = unref(source);
      if (!data) return;

      if (transform) data = transform(data) ?? data;
      canvas.width = data.width;
      canvas.height = data.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(data, 0, 0);

      return canvas.toDataURL("image/png");
    } catch {}
  });
}
