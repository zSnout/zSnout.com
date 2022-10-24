import { Ref } from "vue";
import { Builtin } from "../env";

export type DeepReadonly<T> = T extends Builtin
  ? T
  : T extends ReadonlyMap<infer K, infer V> | Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer V> | ReadonlySet<infer V>
  ? ReadonlySet<DeepReadonly<V>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepReadonly<U>>
  : T extends WeakRef<infer U>
  ? WeakRef<DeepReadonly<U>>
  : T extends Promise<infer U>
  ? Promise<DeepReadonly<U>>
  : T extends Ref<infer U>
  ? Readonly<Ref<DeepReadonly<U>>>
  : T extends Array<infer U> | ReadonlyArray<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends {}
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : Readonly<T>;

export function readonly<T>(item: T) {
  return item as DeepReadonly<T>;
}
