import { computed, Ref } from "vue";

export function dateOf(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function useDateOf(date: Ref<string | undefined>) {
  return computed(() => dateOf(date.value));
}
