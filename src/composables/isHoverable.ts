import { useMediaQuery } from "@vueuse/core";

export const isHoverable = useMediaQuery("(hover: hover) and (pointer: fine)");
