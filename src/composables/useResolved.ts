import { reactive } from "vue";

export function useResolved<T>(promises: Iterable<T | PromiseLike<T>>) {
  const result: T[] = reactive([]);

  for (let item of promises) {
    if (
      typeof item === "object" &&
      item != null &&
      "then" in item &&
      typeof item.then === "function"
    ) {
      item.then((e) => result.push(e));
    } else result.push(item as any);
  }

  return result;
}
