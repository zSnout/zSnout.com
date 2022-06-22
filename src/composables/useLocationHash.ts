import { useBrowserLocation } from "@vueuse/core";
import { computed } from "vue";

const location = useBrowserLocation();

export function useLocationHash() {
  return computed<string>({
    get() {
      return decodeURIComponent(location.value.hash?.slice(1) || "");
    },
    set(value) {
      globalThis.location.hash = encodeURIComponent(value);
    },
  });
}
