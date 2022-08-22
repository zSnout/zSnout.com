<script lang="ts" setup>
  import SafeArea from "./SafeArea.vue";
  import Spacer from "./Spacer.vue";

  defineProps<{
    center?: boolean;
    maxWidth?: boolean;
  }>();
</script>

<template>
  <template v-if="center">
    <div class="centered">
      <Spacer />

      <SafeArea :max-width="maxWidth" bottom top>
        <slot />
      </SafeArea>

      <Spacer />
    </div>
  </template>

  <div v-else style="flex: 1; display: flex">
    <SafeArea :max-width="maxWidth" bottom style="flex: 1" top>
      <slot />
    </SafeArea>
  </div>
</template>

<style scoped>
  .centered {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
