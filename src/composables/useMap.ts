import { MaybeRef } from "@vueuse/core";
import { computed, unref } from "vue";

export function map(
  inputStart: number,
  inputEnd: number,
  outputStart: number,
  outputEnd: number,
  value: number
) {
  return (
    ((value - inputStart) * (outputEnd - outputStart)) /
      (inputEnd - inputStart) +
    outputStart
  );
}

export function useRef(
  inputStart: MaybeRef<number>,
  inputEnd: MaybeRef<number>,
  outputStart: MaybeRef<number>,
  outputEnd: MaybeRef<number>,
  value: MaybeRef<number>
) {
  return computed(() => {
    return (
      ((unref(value) - unref(inputStart)) *
        (unref(outputEnd) - unref(outputStart))) /
        (unref(inputEnd) - unref(inputStart)) +
      unref(outputStart)
    );
  });
}
