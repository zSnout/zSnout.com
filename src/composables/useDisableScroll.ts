import { MaybeElementRef, tryOnScopeDispose, unrefElement } from "@vueuse/core";
import disableScroll from "disable-scroll";
import { Ref, unref, watchEffect } from "vue";

export function useDisableScroll(
  element: MaybeElementRef,
  enabled: boolean | Ref<boolean> = true
) {
  watchEffect(() => {
    const el = unrefElement(element);
    const on = unref(enabled);

    if (on && el) {
      disableScroll.on(el);
    } else {
      disableScroll.off();
    }
  });

  tryOnScopeDispose(() => {
    disableScroll.off();
  });
}
