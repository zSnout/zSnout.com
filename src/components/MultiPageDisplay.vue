<script lang="ts" setup>
  import { useCssVar } from "@vueuse/core";
  import Aside from "./Aside.vue";
  import Footer from "./Footer.vue";
  import Navigation from "./Navigation.vue";

  const props = defineProps<{ snap?: boolean }>();
  const snap = useCssVar("--snap");
  snap.value = props.snap ? "y mandatory" : "none";
</script>

<template>
  <Navigation :aside="!!$slots.aside">
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

  <div :class="{ aside: !!$slots.aside }" class="content">
    <slot />
  </div>

  <Aside v-if="$slots.aside">
    <slot name="aside" />
  </Aside>

  <Footer class="footer" :aside="!!$slots.aside" />
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }

  html {
    scroll-snap-type: var(--snap);
    scroll-padding-top: calc(3.5rem + 1px);

    @media (max-width: 400px) {
      scroll-padding-top: calc(2.5rem + 1px);
    }
  }
</style>

<style lang="scss" scoped>
  .content {
    position: relative;
    z-index: 2;
  }

  .footer {
    scroll-snap-align: start;
  }
</style>
