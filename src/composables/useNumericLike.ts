import { MaybeRef } from "@vueuse/core";
import { computed, ComputedRef, isRef, Ref, unref } from "vue";

export function useNumericLike(
  value?: Ref<NumericLike>
): ComputedRef<number | undefined>;
export function useNumericLike(value?: NumericLike): number | undefined;
export function useNumericLike(
  value?: MaybeRef<NumericLike>
): number | undefined;
export function useNumericLike(value?: MaybeRef<NumericLike>) {
  if (isRef(value)) {
    return computed(() => {
      let val = unref(value);

      if (val === null || val === undefined) return undefined;
      if (typeof val === "string") val = parseFloat(val);
      if (typeof val === "bigint") val = Number(val);
      if (!Number.isFinite(val)) return undefined;

      return val;
    });
  }

  let val = unref(value);

  if (val === null || val === undefined) return undefined;
  if (typeof val === "string") val = parseFloat(val);
  if (typeof val === "bigint") val = Number(val);
  if (!Number.isFinite(val)) return undefined;

  return val;
}

export type NumericLike = number | string | bigint | null | undefined;
