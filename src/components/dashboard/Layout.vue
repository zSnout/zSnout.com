<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import HStack from "../HStack.vue";
  import VStack from "../VStack.vue";
  import { Layout } from "./LayoutPicker.vue";
  import Module from "./Module.vue";

  const layout = useLocalStorage<Layout>("dashboard:layout", "quad");
</script>

<template>
  <VStack class="stack" no-center stretch v-bind="$attrs">
    <Module v-if="layout === 'dualVert'" :id="1" />

    <HStack v-else no-center stretch>
      <Module :id="1" />

      <Module :id="3" />
    </HStack>

    <Module v-if="layout === 'dualVert'" :id="2" />

    <HStack v-else-if="layout === 'quad'" no-center stretch>
      <Module :id="2" />

      <Module :id="4" />
    </HStack>
  </VStack>
</template>

<style scoped>
  .stack {
    width: min(100%, 1600px);
    height: 100%;
    max-height: calc(var(--app-height) - 3.5em - 4em);
  }
</style>
