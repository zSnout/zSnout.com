import { useDark } from "@vueuse/core";
import { computed } from "vue";
import { isPrinting } from "./isPrinting";

const isRawDark = useDark();

export const isDark = computed<boolean>({
  get() {
    return isRawDark.value && !isPrinting.value;
  },
  set(value) {
    isRawDark.value = value;
  },
});
