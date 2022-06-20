<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import Button from "./Button.vue";
  import HStack from "./HStack.vue";
  import LogoLight from "./LogoLight.vue";
  import Modal from "./Modal.vue";
  import OptionsIcon from "./OptionsIcon.vue";
  import SafeArea from "./SafeArea.vue";
  import Spacer from "./Spacer.vue";

  defineProps<{ options?: boolean }>();

  const open = ref(false);
</script>

<template>
  <UseScreenSafeArea class="nav" top>
    <SafeArea>
      <HStack class="padding">
        <RouterLink to="/">
          <LogoLight class="logo" invert />
        </RouterLink>

        <Spacer />

        <OptionsIcon
          v-if="$slots.options"
          class="options fullscreen"
          role="button"
          @click="open = !open"
        />
      </HStack>
    </SafeArea>
  </UseScreenSafeArea>

  <UseScreenSafeArea v-if="$slots.indicator" class="indicator" bottom>
    <SafeArea>
      <HStack class="padding">
        <slot name="indicator" />
      </HStack>
    </SafeArea>
  </UseScreenSafeArea>

  <Modal :open="open">
    <slot name="options" />

    <template #buttons>
      <Button cancel @click="open = !open">OK</Button>

      <slot name="buttons" />
    </template>
  </Modal>

  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    z-index: 3;
    width: var(--app-width);

    .padding {
      padding-top: 0.75em;
      overflow: hidden;

      @media screen and (max-width: 400px) {
        padding-top: 0.5em;
      }
    }
  }

  .indicator {
    position: fixed;
    bottom: 0;
    z-index: 3;
    width: var(--app-width);

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

  .logo {
    box-sizing: content-box;
    height: 2em;
    filter: drop-shadow(1px 1px 2px #0008);

    @media screen and (max-width: 400px) {
      height: 1.5em;
    }

    .hover &:hover {
      cursor: pointer;
      filter: drop-shadow(1px 1px 2px #fffc);
    }

    :deep(g > path:not(:first-child)) {
      fill: white;
      stroke: black;
      stroke-width: 0.2em;
      paint-order: stroke fill markers;
    }
  }

  .options {
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

  .content {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: var(--app-width);
    height: var(--app-height);

    > :deep(canvas) {
      width: var(--app-width);
      height: var(--app-height);
    }
  }
</style>
