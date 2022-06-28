import { MaybeRef } from "@vueuse/core";
import { unref, watchEffect } from "vue";

export function useVideoFromStream(
  stream: MaybeRef<MediaStream | undefined>,
  muted?: boolean
) {
  const video = document.createElement("video");
  video.playsInline = true;
  video.muted = muted ?? false;

  watchEffect(() => {
    const _stream = unref(stream);

    if (_stream) {
      video.srcObject = _stream;
    } else {
      video.srcObject = null;
    }

    video.play();
  });

  return video;
}
