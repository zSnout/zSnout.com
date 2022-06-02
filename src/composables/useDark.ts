import { computedEager, useDark } from "@vueuse/core";
import { computed } from "vue";
import { usePrinting } from "./usePrinting";

const isRawDark = useDark();
const isDark = computed(() => isRawDark.value && !usePrinting);
export { isDark as useDark };
