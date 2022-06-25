import { useBrowserLocation } from "@vueuse/core";
import { computed } from "vue";

const location = useBrowserLocation();

function getHash() {
  if (!location.value.hash) return "";

  let hash = decodeURIComponent(location.value.hash);
  hash = hash?.slice(1);
  if (hash === "#") return "";
  if (hash?.startsWith("#")) return hash.slice(1);

  return hash;
}

function setHash(hash: string) {
  if (!hash) hash = "#";

  const url = new URL(globalThis.location.href);
  url.hash = encodeURIComponent(hash);
  globalThis.location.replace(url);
}

export function useLocationHash(initial?: string) {
  if (initial && !getHash()) {
    setHash(initial);
  }

  return computed<string>({
    get() {
      return getHash();
    },
    set(value) {
      setHash(value);
    },
  });
}
