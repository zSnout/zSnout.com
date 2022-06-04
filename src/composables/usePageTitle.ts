import { MaybeRef, useTitle } from "@vueuse/core";
import { isRef, watchEffect } from "vue";

const docTitle = useTitle();

export function usePageTitle(title: MaybeRef<string>) {
  if (isRef(title)) {
    watchEffect(() => (docTitle.value = title.value));
  } else {
    docTitle.value = `${title} | zSnout`;
  }
}
