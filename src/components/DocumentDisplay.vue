<script lang="ts" setup>
  import Navigation from "./Navigation.vue";
  import SafeAreaLR from "./SafeAreaLR.vue";
</script>

<template>
  <Navigation :floating="false" />

  <div class="safe-area">
    <SafeAreaLR>
      <slot />
    </SafeAreaLR>
  </div>
</template>
