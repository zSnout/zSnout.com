import { computed } from "@vue/reactivity";
import { Ref } from "vue";

export function useRound(ref: Ref<number>, size = 1e7) {
  return computed({
    get() {
      return ~~(size * ref.value) / size;
    },
    set(value) {
      ref.value = value;
    },
  });
}
