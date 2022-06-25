import { useBrowserLocation } from "@vueuse/core";
import { computed } from "vue";

const location = useBrowserLocation();

export function useLocationHash(initial?: string) {
  if (typeof initial === "string" && !globalThis.location.hash.slice(1)) {
    const url = new URL(globalThis.location.href);
    url.hash = encodeURIComponent(initial);
    globalThis.location.replace(url);
  }

  return computed<string>({
    get() {
      return decodeURIComponent(location.value.hash?.slice(1) || "");
    },
    set(value) {
      const url = new URL(globalThis.location.href);
      url.hash = encodeURIComponent(value);
      globalThis.location.replace(url);
    },
  });
}
