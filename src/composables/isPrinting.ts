import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

export const isPrinting = ref(false);
useEventListener("beforeprint", () => (isPrinting.value = true));
useEventListener("afterprint", () => (isPrinting.value = false));
