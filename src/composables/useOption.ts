import { computed } from "@vue/reactivity";
import { syncRef, tryOnScopeDispose, useUrlSearchParams } from "@vueuse/core";
import { Ref, WritableComputedRef } from "vue";

const params = useUrlSearchParams("history");

export interface Options {
  string: string;
  number: number;
  boolean: boolean;
}

export function useOption(name: string, initial?: string | number | boolean) {
  if (typeof initial === "boolean") {
    if (initial) params[name] = "";
    else delete params[name];
  } else if (params[name] === undefined && initial !== undefined) {
    params[name] = "" + initial;
  }

  return computed<string | number | boolean>({
    get() {
      if (typeof initial === "boolean") return params[name] !== undefined;
      if (typeof initial === "number") return +params[name];
      return "" + params[name];
    },
    set(value) {
      if (typeof value === "boolean") {
        if (value) params[name] = "";
        else delete params[name];
      }

      params[name] = "" + value;
    },
  });
}

export function syncOption(
  name: string,
  ref: Ref<string> | Ref<number> | Ref<boolean>
) {
  const option = useOption(name, ref.value);
  ref.value = option.value;

  const stop = syncRef<Ref<string | number | boolean>>(option, ref, {
    direction: "rtl",
  });

  tryOnScopeDispose(stop);

  return stop;
}
