import { computed, unref } from "@vue/reactivity";
import { MaybeRef } from "@vueuse/core";

export function useDisplay(value: MaybeRef<number>) {
  return computed(() => {
    return unref(value).toLocaleString();
  });
}
