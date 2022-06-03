<script lang="ts" setup>
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";
</script>

<template>
  <Navigation :floating="false" />

  <SafeArea bottom top>
    <slot />
  </SafeArea>
</template>

<style lang="scss" scoped>
  :global(#app) {
    display: flex;
    flex-direction: column;
  }
</style>
