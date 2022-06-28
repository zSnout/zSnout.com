import { MaybeRef } from "@vueuse/core";
import { unref, watchEffect } from "vue";

export function useVideoFromStream(stream: MaybeRef<MediaStream | undefined>) {
  const video = document.createElement("video");

  watchEffect(() => {
    const _stream = unref(stream);

    if (_stream) {
      video.srcObject = _stream;
    } else {
      video.srcObject = null;
    }
  });

  return video;
}
