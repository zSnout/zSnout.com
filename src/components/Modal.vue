<script lang="ts" setup>
  import { MaybeElement, unrefElement, useEventListener } from "@vueuse/core";
  import { tabbable } from "tabbable";
  import { Ref, ref, toRef, unref, watchEffect } from "vue";
  import HStack from "./HStack.vue";
  import VStack from "./VStack.vue";

  const props = defineProps<{ open: boolean | { value: boolean } }>();
  const open = toRef(props, "open") as Ref<boolean>;
  const buttons = ref<MaybeElement>();
  const dialog = ref<MaybeElement>();

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

    const dialogEl = unrefElement(dialog);
    if (!dialogEl) return;

    const { key } = event;

    if (key !== "Tab" || event.metaKey || event.ctrlKey || event.altKey) return;

    const els = tabbable(dialogEl);
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

  watchEffect(() => {
    if (unref(open)) {
      setTimeout(() => {
        const dialogEl = unrefElement(dialog);
        if (!dialogEl) return;

        const els = tabbable(dialogEl);
        els[0]?.focus();
      }, 100);
    }
  });

  useEventListener("keydown", onKeyDown);
</script>

<template>
  <Teleport to="body">
    <div :class="{ open }" class="wrapper" @click="cancel">
      <VStack
        ref="dialog"
        class="modal second-layer"
        :space="0.75"
        :style="$slots.buttons ? 'padding-bottom: 0' : ''"
      >
        <slot />

        <template v-if="$slots.buttons">
          <div style="flex: 1; margin-top: -0.75 !important" />

          <HStack ref="buttons" class="buttons" :space="0.75">
            <slot name="buttons" />
          </HStack>
        </template>
      </VStack>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--app-width);
    height: var(--app-height);
    padding: var(--padding);
    padding-top: calc(env(safe-area-inset-top, 0) + var(--padding));
    padding-right: calc(env(safe-area-inset-right, 0) + var(--padding));
    padding-bottom: calc(env(safe-area-inset-bottom, 0) + var(--padding));
    padding-left: calc(env(safe-area-inset-left, 0) + var(--padding));
    background-color: transparent;
    visibility: hidden;
    cursor: pointer;
    transition: var(--transitions), visibility 0.3s;
    --padding: 2rem;

    @media (max-width: 400px) {
      --padding: 1.5rem;
    }

    &.open {
      background-color: #0006;
      visibility: visible;
    }
  }

  .modal {
    position: relative;
    top: 2em;
    width: min(500px, 100%);
    min-height: min(300px, 100%);
    max-height: min(700px, 100%);
    padding: 0.75em;
    overflow: auto;
    cursor: initial;
    opacity: 0;
    transition: var(--transitions), opacity 0.3s, top 0.3s;

    .open & {
      top: 0;
      opacity: 1;
    }
  }

  .buttons {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    margin-top: -1.5em !important;
    padding-top: 1.5em;
    padding-bottom: 0.75em;
    background-color: inherit;

    .help + * + & {
      margin-top: -1.2em !important;
    }
  }
</style>
