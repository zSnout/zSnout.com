<script lang="ts" setup>
  import { ref } from "vue";
  import BookmarkIcon from "./BookmarkIcon.vue";
  import OptionsIcon from "./OptionsIcon.vue";
  import Modal from "./Modal.vue";
  import SafeArea from "./SafeArea.vue";
  import HStack from "./HStack.vue";
  import { UseScreenSafeArea } from "@vueuse/components";

  defineProps<{ fullscreen?: boolean }>();

  const open = ref(false);
  const help = ref(false);
</script>

<template>
  <BookmarkIcon
    class="bookmark-icon"
    :fullscreen="fullscreen"
    :class="{ fullscreen }"
  />

  <OptionsIcon
    :open="open"
    v-if="$slots.options || $slots.help"
    class="options fullscreen"
    role="button"
    @click="(open = true), (help = false)"
  />

  <Modal :open="open">
    <div class="help" v-if="!$slots.options || ($slots.help && help)">
      <slot name="help" />
    </div>

    <slot name="options" v-else />

    <template #buttons>
      <Button cancel @click="open = !open" slot>OK</Button>

      <Button @click="help = !help" v-if="$slots.help && $slots.options">
        {{ help ? "Back to Options" : "Help" }}
      </Button>

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

<style scoped lang="scss">
  .fullscreen.options,
  .fullscreen.bookmark-icon {
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

  .help {
    > :deep(*) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }

    :deep(h1) {
      font-size: 1.2em;
      margin-top: 1rem;
    }
  }

  .indicator {
    position: fixed;
    bottom: 0;
    z-index: 3;
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
