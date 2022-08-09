import { Ref, watchEffect } from "vue";

export function useVideoFromStream(
  stream: Ref<MediaStream | undefined>,
  muted?: boolean
) {
  const video = document.createElement("video");
  video.playsInline = true;
  video.muted = muted ?? false;

  watchEffect(() => {
    video.srcObject = stream.value ?? null;
    if (video.srcObject) video.play();
  });

  return video;
}
