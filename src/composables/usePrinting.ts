import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

export const usePrinting = ref(false);
useEventListener("beforeprint", () => (usePrinting.value = true));
useEventListener("afterprint", () => (usePrinting.value = false));
