import { MaybeRef, useRafFn } from "@vueuse/core";
import { ref, unref } from "vue";
import { useVideoFromStream } from "./useVideoFromStream";

export function useCurrentFrame(
  stream: HTMLVideoElement | MaybeRef<MediaStream | undefined>,
  width?: MaybeRef<number>,
  height?: MaybeRef<number>
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return ref(undefined);

  let video: HTMLVideoElement;

  if (stream instanceof HTMLVideoElement) {
    video = stream;
  } else {
    video = useVideoFromStream(stream);
  }

  const frame = ref<ImageData>();

  useRafFn(() => {
    canvas.width = unref(width) ?? video.videoWidth;
    canvas.height = unref(height) ?? video.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    frame.value = ctx.getImageData(0, 0, canvas.width, canvas.height);
  });

  return frame;
}
