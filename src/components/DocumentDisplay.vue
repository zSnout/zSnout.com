<script lang="ts" setup>
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";
</script>

<template>
  <Navigation :floating="false" />

  <div class="safe-area">
    <SafeArea :class="$style.document" bottom keep-height top>
      <slot />
    </SafeArea>
  </div>
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
</style>

<style lang="scss" scoped>
  .safe-area {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>

<style lang="scss" module>
  .document > {
    :first-child {
      margin-top: 0;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
</style>
