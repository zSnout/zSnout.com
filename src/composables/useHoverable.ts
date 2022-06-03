import { useMediaQuery } from "@vueuse/core";

export const useHoverable = useMediaQuery("(hover: hover) and (pointer: fine)");
