import { MaybeElementRef, tryOnScopeDispose, unrefElement } from "@vueuse/core";
import { useFocusTrap as vueuseFocusTrap } from "@vueuse/integrations";
import { Ref, unref, watchEffect } from "vue";

export function useFocusTrap(
  element: MaybeElementRef,
  enabled: boolean | Ref<boolean> = true
) {
  const trap = vueuseFocusTrap(element, { allowOutsideClick: true });

  watchEffect(() => {
    if (unref(enabled)) {
      trap.activate();
    } else {
      trap.deactivate();
    }
  });

  tryOnScopeDispose(() => {
    trap.deactivate();
  });
}
