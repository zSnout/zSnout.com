import { computed, Ref } from "vue";

export function dateOf(date?: number | string | Date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function useDateOf(date: Ref<number | string | Date | undefined>) {
  return computed(() => dateOf(date.value));
}
