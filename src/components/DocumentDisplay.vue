<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import { computed } from "vue";
  import Footer from "./Footer.vue";
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";

  defineProps<{
    center?: boolean;
    explicitHeight?: boolean;
    maxWidth?: boolean;
    noFooter?: boolean;
    small?: boolean;
  }>();

  const isMobile = useMediaQuery("(max-width: 400px)");
  const navHeight = computed(() => (isMobile.value ? "3" : "3.5"));
</script>

<template>
  <slot name="navigation">
    <Navigation :small="small">
      <template #aside v-if="$slots.aside">
        <slot name="aside" />
      </template>

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
    </Navigation>
  </slot>

  <SafeArea
    :class="{ center }"
    class="page-content"
    :aside="!!$slots.aside"
    :explicit-height="explicitHeight"
    :flex="center"
    :max-width="maxWidth"
    :min-height="`calc(var(--app-height) - ${navHeight}rem)`"
    :small="small"
    bottom
    top
    v-bind="$attrs"
  >
    <slot />
  </SafeArea>

  <Footer v-if="!noFooter" :aside="!!$slots.aside" :small="small" />
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
</style>

<style lang="scss" scoped>
  .page-content {
    z-index: 2;
  }
</style>
