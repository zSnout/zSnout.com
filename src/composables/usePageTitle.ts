import { MaybeRef, tryOnScopeDispose, useTitle } from "@vueuse/core";
import { isRef, watchEffect } from "vue";

const docTitle = useTitle();

export function usePageTitle(title: MaybeRef<string | undefined>) {
  if (isRef(title)) {
    tryOnScopeDispose(
      watchEffect(() => {
        docTitle.value = title.value ? `${title.value} | zSnout` : "zSnout";
      })
    );
  } else {
    docTitle.value = title ? `${title} | zSnout` : "zSnout";
  }
}
