import { tryOnScopeDispose } from "@vueuse/core";

export function useOnDispose() {
  const onDispose: (() => void)[] = [];
  tryOnScopeDispose(() => onDispose.map((hook) => hook()));

  return (hook: () => void) => {
    onDispose.push(hook);
  };
}
