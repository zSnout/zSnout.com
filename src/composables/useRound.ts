import { MaybeRef } from "@vueuse/core";
import { computed, Ref, unref } from "vue";

export function useRound(ref: Ref<number>, size: MaybeRef<number> = 1e6) {
  return computed({
    get() {
      return ~~(unref(size) * ref.value) / unref(size);
    },
    set(value) {
      ref.value = value;
    },
  });
}
