import { computed } from "@vue/reactivity";
import {
  MaybeRef,
  syncRef,
  syncRefs,
  tryOnScopeDispose,
  useUrlSearchParams,
} from "@vueuse/core";
import {
  toRef,
  unref,
  WritableComputedRef,
  Ref,
  watchEffect,
  watch,
} from "vue";
import { useRoute } from "vue-router";

const params = useUrlSearchParams("history");

export interface Options {
  string: string;
  number: number;
  boolean: boolean;
}

export function useOption(name: string, initial?: string) {
  if (params[name] === undefined && initial !== undefined) {
    params[name] = initial;
  }

  return computed<string>({
    get() {
      return "" + params[name];
    },
    set(value) {
      params[name] = value;
    },
  });
}

export function useNumericOption(name: string, initial?: number) {
  const option = useOption(name, "" + initial);

  return computed<number>({
    get() {
      return parseFloat(option.value);
    },
    set(value) {
      option.value = "" + value;
    },
  });
}

export function syncNumericOption(name: string, ref: Ref<number>) {
  const option = useNumericOption(name, ref.value);
  ref.value = option.value;

  const stop = syncRef(option, ref, { direction: "rtl" });
  tryOnScopeDispose(stop);

  return stop;
}
