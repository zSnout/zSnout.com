import { tryOnUnmounted, useDebounceFn, useEventListener } from "@vueuse/core";
import { ref } from "vue";

export function useSizedUserMedia(opts?: MediaStreamConstraints) {
  const stream = ref<MediaStream>();

  function getMedia() {
    if (stream.value) {
      stream.value.getTracks().map((track) => track.stop());
    }

    navigator.mediaDevices
      ?.getUserMedia({
        ...opts,
        video: {
          ...(typeof opts?.video === "object" && opts?.video),
          aspectRatio: { ideal: innerWidth / innerHeight },
        },
      })
      .then((media) => (stream.value = media))
      .catch(() => {
        throw new Error("Your device doesn't work with camera applications.");
      });
  }

  getMedia();
  setTimeout(getMedia, 1000);
  useEventListener("resize", useDebounceFn(getMedia, 250));

  tryOnUnmounted(() => {
    if (stream.value) {
      stream.value.getTracks().map((track) => track.stop());
    }
  });

  return stream;
}
