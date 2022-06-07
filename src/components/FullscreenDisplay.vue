<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { RouterLink } from "vue-router";
  import LogoDark from "./LogoDark.vue";
  import SafeArea from "./SafeArea.vue";
  import Modal from "./Modal.vue";
  import { ref } from "vue";
  import OptionsIcon from "./OptionsIcon.vue";
  import Button from "./Button.vue";
  import HStack from "./HStack.vue";
  import Spacer from "./Spacer.vue";
  import LogoLight from "./LogoLight.vue";

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
          class="options"
          role="button"
          @click="open = !open"
        />
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
    width: 100vw;
  }

  .padding {
    padding-top: 0.75em;

    @media screen and (max-width: 400px) {
      padding-top: 0.5em;
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

    .hover &:hover {
      transform: rotate(45deg);
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
    width: 100vw;
    height: var(--app-height);

    > :deep(canvas) {
      width: 100%;
      height: 100%;
    }
  }
</style>
