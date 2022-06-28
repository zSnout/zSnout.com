export function useRandomItem<T>(array: readonly T[]) {
  return array[~~(Math.random() * array.length)];
}
