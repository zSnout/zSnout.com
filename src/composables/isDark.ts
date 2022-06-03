import { useDark } from "@vueuse/core";
import { computed } from "vue";
import { usePrinting } from "./usePrinting";

const isRawDark = useDark();

export const isDark = computed<boolean>({
  get() {
    return isRawDark.value && !usePrinting.value;
  },
  set(value) {
    isRawDark.value = value;
  },
});
