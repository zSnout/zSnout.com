<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { ref } from "vue";
  import BookmarkIcon from "./BookmarkIcon.vue";
  import Button from "./Button.vue";
  import HelpIcon from "./HelpIcon.vue";
  import HStack from "./HStack.vue";
  import Modal from "./Modal.vue";
  import OptionsIcon from "./OptionsIcon.vue";
  import SafeArea from "./SafeArea.vue";

  defineProps<{ fullscreen?: boolean }>();

  const open = ref(false);
</script>

<!-- Make sure to update DocumentDisplay, FullscreenDisplay, and Navigation when changing slots. -->

<template>
  <BookmarkIcon
    :class="{ [$style.icon]: fullscreen }"
    :fullscreen="fullscreen"
  />

  <OptionsIcon
    v-if="$slots.options"
    :class="{ [$style.icon]: fullscreen }"
    :open="open"
    @click="open = true"
  />

  <HelpIcon
    v-if="$slots.help"
    :class="{ [$style.icon]: fullscreen, fullscreen }"
  >
    <slot name="help" />
  </HelpIcon>

  <Modal :open="open && !!$slots.options">
    <slot name="options" />

    <template #buttons>
      <Button cancel @click="open = !open">OK</Button>

      <slot name="buttons" />
    </template>
  </Modal>

  <UseScreenSafeArea v-if="$slots.indicator" class="indicator" bottom>
    <SafeArea>
      <HStack class="padding">
        <slot name="indicator" />
      </HStack>
    </SafeArea>
  </UseScreenSafeArea>
</template>

<style lang="scss" module>
  .icon {
    height: 2em;
    overflow: visible;
    cursor: pointer;
    filter: drop-shadow(1px 1px 2px #0008);
    transition: var(--transitions), transform 0.3s;
    fill: white;

    @media screen and (max-width: 400px) {
      height: 1.5em;
    }

    :deep(path) {
      stroke: black;
      stroke-width: 1.25em;
      paint-order: stroke fill markers;
    }
  }
</style>

<style lang="scss" scoped>
  .indicator {
    position: fixed;
    bottom: 0;
    z-index: 5;
    width: var(--app-width);
    touch-action: manipulation;

    .padding {
      padding-bottom: 0.75rem;
      overflow: visible;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      text-shadow: black 1px 1px, black -1px 1px, black 1px -1px,
        black -1px -1px, black 1px 1px 6px;
      user-select: none;

      @media screen and (max-width: 400px) {
        padding-bottom: 0.5rem;
      }
    }
  }
</style>
