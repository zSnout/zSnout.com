import { MaybeElementRef, tryOnScopeDispose } from "@vueuse/core";
import { useFocusTrap as vueuseFocusTrap } from "@vueuse/integrations/useFocusTrap";
import { Ref, unref, watchEffect } from "vue";

export function useFocusTrap(
  element: MaybeElementRef,
  enabled: boolean | Ref<boolean> = true
) {
  const trap = vueuseFocusTrap(element, { immediate: unref(enabled) });

  watchEffect(() => {
    unref(element);

    if (unref(enabled) && unref(element)) {
      trap.activate();
      console.log("activating");
    } else {
      trap.deactivate();
      console.log("deactivating");
    }
  });

  tryOnScopeDispose(() => {
    trap.deactivate();
  });
}
