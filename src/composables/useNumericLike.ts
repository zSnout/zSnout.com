import { MaybeRef } from "@vueuse/core";
import { computed, ComputedRef, unref } from "vue";

export function useNumericLike(
  value?: MaybeRef<number | string | bigint | null | undefined>
) {
  return computed(() => {
    let val = unref(value);

    if (val === null || val === undefined) return undefined;
    if (typeof val === "string") val = parseFloat(val);
    if (typeof val === "bigint") val = Number(val);
    if (!Number.isFinite(val)) return undefined;

    return val;
  });
}
