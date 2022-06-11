import { computed } from "@vue/reactivity";
import { MaybeRef, useUrlSearchParams } from "@vueuse/core";
import { unref, WritableComputedRef } from "vue";

const params = useUrlSearchParams("history");
(globalThis as any).params = params;

export interface Options {
  string: string;
  number: number;
  boolean: boolean;
}

export function useRouteOption(
  name: string
): WritableComputedRef<string | undefined>;
export function useRouteOption<T extends string | number | boolean>(
  name: string,
  initial: MaybeRef<T>
): WritableComputedRef<T | undefined>;
export function useRouteOption<T extends string | number | boolean>(
  name: string,
  initial?: MaybeRef<T>
): WritableComputedRef<T | undefined> {
  return computed<T | undefined>({
    get() {
      initial = unref(initial);
      const val = params[name];

      if (!(name in params)) return initial ?? undefined;
      if (typeof initial === "string") return ("" + val) as T;
      if (typeof initial === "number") return +val as T;
      if (typeof initial === "boolean") return (val === "true") as T;

      return initial;
    },
    set(value) {
      if (value === undefined) {
        delete params[name];
      } else {
        params[name] = "" + value;
      }
    },
  });
}
