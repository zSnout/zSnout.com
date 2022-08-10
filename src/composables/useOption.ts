import { computed } from "@vue/reactivity";
import { syncRef, tryOnScopeDispose, useUrlSearchParams } from "@vueuse/core";
import { Ref } from "vue";

export const params = useUrlSearchParams("history");

export interface Options {
  string: string;
  number: number;
  boolean: boolean;
}

export function useOption(name: string, initial?: string | number | boolean) {
  if (!params[name] && initial !== undefined) {
    if (typeof initial !== "boolean") {
      params[name] = "" + initial;
    }
  }

  return computed<string | number | boolean>({
    get() {
      params[name];

      if (typeof initial === "boolean") return params[name] === "true";
      if (typeof initial === "number") return +params[name];
      return "" + params[name];
    },
    set(value) {
      if (typeof value === "boolean") {
        if (value) params[name] = "true";
        else delete params[name];
        return;
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

  const stop = syncRef<string | number | boolean>(option, ref, {
    direction: "rtl",
  });

  tryOnScopeDispose(stop);

  return stop;
}
