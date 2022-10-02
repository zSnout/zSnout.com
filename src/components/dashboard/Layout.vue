<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import HStack from "../HStack.vue";
  import VStack from "../VStack.vue";
  import { Layout } from "./LayoutPicker.vue";
  import Module from "./Module.vue";

  const layout = useLocalStorage<Layout>("dashboard:layout", "quad");
</script>

<template>
  <VStack class="stack vstack" no-center stretch v-bind="$attrs">
    <Module v-if="layout === 'dualVert' || layout === 'single'" :id="1" />

    <HStack v-else :class="{ row: layout === 'quad' }" no-center stretch>
      <Module :id="1" />

      <Module :id="3" />
    </HStack>

    <Module v-if="layout === 'dualVert'" :id="2" />

    <HStack v-else-if="layout === 'quad'" class="row" no-center stretch>
      <Module :id="2" />

      <Module :id="4" />
    </HStack>
  </VStack>
</template>

<style scoped>
  :global(#app) {
    overflow: hidden;
  }

  .stack {
    height: 100%;
    max-height: calc(var(--app-height) - 3.5em - 4em);
  }

  .row {
    max-height: 50%;
  }

  .vstack {
    width: min(100%, 1600px);
    height: calc(var(--app-height) - 3.5em - 4em);
  }
</style>
