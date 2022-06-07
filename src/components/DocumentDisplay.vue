<script lang="ts" setup>
  import { MaybeElement, useResizeObserver } from "@vueuse/core";
  import { ref } from "vue";
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";

  defineProps<{ center?: boolean }>();

  const navbar = ref<MaybeElement>();
  const navHeight = ref(58);

  useResizeObserver(
    navbar,
    (entries) => {
      const height = entries[0].borderBoxSize?.[0].blockSize;
      if (typeof height === "number") navHeight.value = height;
    },
    { box: "border-box" }
  );
</script>

<template>
  <Navigation ref="navbar">
    <template #options v-if="$slots.options">
      <slot name="options" />
    </template>

    <template #buttons v-if="$slots.buttons">
      <slot name="buttons" />
    </template>
  </Navigation>

  <SafeArea
    :flex="center"
    :min-height="`calc(var(--app-height) - ${navHeight}px)`"
    bottom
    top
  >
    <slot />
  </SafeArea>
</template>

<style lang="scss" scoped>
  :global(#app) {
    display: flex;
    flex-direction: column;
  }
</style>
