import { tryOnUnmounted, useDebounceFn, useEventListener } from "@vueuse/core";
import { ref } from "vue";

export function useSizedUserMedia(opts?: MediaStreamConstraints) {
  const stream = ref<MediaStream>();

  function stop() {
    if (stream.value) {
      stream.value.getTracks().map((track) => track.stop());
    }
  }

  function retry() {
    stop();

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

  retry();
  setTimeout(retry, 1000);
  useEventListener("resize", useDebounceFn(retry, 250));

  tryOnUnmounted(stop);

  return {
    stream,
    stop,
    setOpts(_opts?: MediaStreamConstraints) {
      opts = _opts;
      retry();
    },
    retry,
  };
}
