<script lang="ts" setup>
  import { MaybeElement, unrefElement, useEventListener } from "@vueuse/core";
  import { tabbable } from "tabbable";
  import { Ref, ref, toRef } from "vue";
  import { useDisableScroll } from "../composables/useDisableScroll";
  import Button from "./Button.vue";

  const props = defineProps<{ open: boolean | { value: boolean } }>();
  const open = toRef(props, "open") as Ref<boolean>;
  const buttons = ref<MaybeElement>();
  const dialog = ref<HTMLElement>();

  useDisableScroll(document.scrollingElement as HTMLElement | null, open);

  function cancel(event?: Event) {
    if (!open.value) return;

    if (event && event.target !== event.currentTarget) {
      return;
    }

    const el = unrefElement(buttons);
    const cancelButton = el?.getElementsByClassName("cancel")[0];

    if (cancelButton instanceof HTMLElement) {
      cancelButton.click();
    }
  }

  function onKeyDown(event: KeyboardEvent) {
    if (!open.value) return;

    if (event.key === "Escape") {
      event.preventDefault();
      cancel();
    }

    const buttonEl = unrefElement(buttons);
    if (!buttonEl) return;

    const { key } = event;

    if (key !== "Tab" || event.metaKey || event.ctrlKey || event.altKey) return;

    const els = tabbable(buttonEl);
    const allEls = tabbable(document.documentElement);
    const path = event.composedPath();
    const target = path
      .filter((e): e is HTMLElement => e instanceof HTMLElement)
      .find((el) => allEls.includes(el));

    if (!target || !els.includes(target)) {
      els[0]?.focus();
      event.preventDefault();
    } else if (target === els[0] && event.shiftKey) {
      els[els.length - 1]?.focus();
      event.preventDefault();
    } else if (target === els[els.length - 1] && !event.shiftKey) {
      els[0]?.focus();
      event.preventDefault();
    }
  }

  useEventListener("keydown", onKeyDown);
</script>

<template>
  <Teleport to="#app">
    <div :class="{ open }" class="wrapper" @click="cancel">
      <div ref="dialog" class="modal second-layer">
        <div class="content">
          <slot />
        </div>

        <div ref="buttons" class="buttons">
          <slot name="buttons">
            <Button cancel>OK</Button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: var(--padding);
    padding-top: calc(env(safe-area-inset-top, 0) + var(--padding));
    padding-right: calc(env(safe-area-inset-right, 0) + var(--padding));
    padding-bottom: calc(env(safe-area-inset-bottom, 0) + var(--padding));
    padding-left: calc(env(safe-area-inset-left, 0) + var(--padding));
    background-color: transparent;
    visibility: hidden;
    transition: var(--transitions), visibility 0.3s, z-index 0.3s;
    --padding: 2rem;

    @media (max-width: 400px) {
      --padding: 1.5rem;
    }

    &.open {
      z-index: 4;
      background-color: #0008;
      visibility: visible;
    }
  }

  .modal {
    position: relative;
    top: 2em;
    display: flex;
    flex-direction: column;
    min-width: min(500px, 100%);
    max-width: 100%;
    min-height: min(300px, 100%);
    max-height: 100%;
    padding: 0.5em;
    overflow: auto;
    transition: var(--transitions), top 0.3s;

    .buttons {
      display: flex;
      gap: 0.5em;
      margin-top: auto;

      > :deep(button) {
        flex: 1;
      }
    }

    .open & {
      top: 0;
    }
  }

  .content {
    padding: 0.25em;
  }
</style>
