<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { RouterLink } from "vue-router";
  import HStack from "./HStack.vue";
  import LogoLight from "./LogoLight.vue";
  import SafeArea from "./SafeArea.vue";
  import SharedNav from "./SharedNav.vue";
  import Spacer from "./Spacer.vue";
</script>

<template>
  <UseScreenSafeArea class="nav fullscreen" top>
    <SafeArea>
      <HStack class="padding">
        <RouterLink to="/home">
          <LogoLight class="logo" invert />
        </RouterLink>

        <Spacer />

        <SharedNav fullscreen>
          <template #buttons v-if="$slots.buttons">
            <slot name="buttons" />
          </template>

          <template #help v-if="$slots.help">
            <slot name="help" />
          </template>

          <template #indicator v-if="$slots.indicator">
            <slot name="indicator" />
          </template>

          <template #options v-if="$slots.options">
            <slot name="options" />
          </template>
        </SharedNav>
      </HStack>
    </SafeArea>
  </UseScreenSafeArea>

  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    z-index: 10;
    width: var(--app-width);
    touch-action: manipulation;

    .padding {
      padding-top: 0.75em;
      overflow: visible;

      @media screen and (max-width: 400px) {
        padding-top: 0.5em;
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

  .content {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: var(--app-width);
    height: var(--app-height);

    > :deep(canvas) {
      position: fixed;
      top: 0;
      left: 0;
      width: var(--app-width);
      height: var(--app-height);
    }
  }
</style>
