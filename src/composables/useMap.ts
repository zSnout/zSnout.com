import { MaybeRef } from "@vueuse/core";
import { computed, unref } from "vue";

export function map(
  inputStart: number,
  inputEnd: number,
  outputStart: number,
  outputEnd: number,
  value: number
) {
  inputStart = inputStart;
  inputEnd = inputEnd;
  outputStart = outputStart;
  outputEnd = outputEnd;
  value = value;

  return (
    ((value - inputStart) / (inputEnd - inputStart)) * (outputEnd - outputStart)
  );
}
