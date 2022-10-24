import { Ref } from "vue";
import { Builtin } from "../env";

export type DeepMutable<T> = T extends Builtin
  ? T
  : T extends ReadonlyMap<infer K, infer V> | Map<infer K, infer V>
  ? Map<DeepMutable<K>, DeepMutable<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepMutable<K>, DeepMutable<V>>
  : T extends Set<infer V> | ReadonlySet<infer V>
  ? Set<DeepMutable<V>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepMutable<U>>
  : T extends WeakRef<infer U>
  ? WeakRef<DeepMutable<U>>
  : T extends Promise<infer U>
  ? Promise<DeepMutable<U>>
  : T extends Ref<infer U>
  ? Ref<DeepMutable<U>>
  : T extends Array<infer U> | ReadonlyArray<infer U>
  ? Array<DeepMutable<U>>
  : T extends {}
  ? {
      -readonly [K in keyof T]: DeepMutable<T[K]>;
    }
  : T;

export function mutable<T>(item: T) {
  return item as DeepMutable<T>;
}
