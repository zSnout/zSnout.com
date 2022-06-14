import { computed } from "@vue/reactivity";
import { syncRef, tryOnScopeDispose, useUrlSearchParams } from "@vueuse/core";
import { Ref, WritableComputedRef } from "vue";

const params = useUrlSearchParams("history");

export interface Options {
  string: string;
  number: number;
  boolean: boolean;
}

export function useOption(
  name: string,
  initial: number
): WritableComputedRef<number>;
export function useOption(
  name: string,
  initial?: string
): WritableComputedRef<string>;
export function useOption(
  name: string,
  initial?: string | number
): WritableComputedRef<string | number>;
export function useOption(name: string, initial?: string | number) {
  if (params[name] === undefined && initial !== undefined) {
    params[name] = "" + initial;
  }

  return computed<string | number>({
    get() {
      if (typeof initial === "number") return +params[name];
      return "" + params[name];
    },
    set(value) {
      params[name] = "" + value;
    },
  });
}

export function syncOption(name: string, ref: Ref<string> | Ref<number>) {
  const option = useOption(name, ref.value);
  ref.value = option.value;

  const stop = syncRef<Ref<number | string>>(option, ref, { direction: "rtl" });
  tryOnScopeDispose(stop);

  return stop;
}
