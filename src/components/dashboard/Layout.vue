<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import HStack from "../HStack.vue";
  import VStack from "../VStack.vue";
  import { Layout } from "./LayoutPicker.vue";
  import Module from "./Module.vue";

  const layout = useLocalStorage<Layout>("dashboard:layout", "quad");
</script>

<template>
  <VStack no-center stretch v-bind="$attrs">
    <Module v-if="layout === 'dual'" :id="1" />

    <HStack v-else no-center stretch>
      <Module :id="1" />

      <Module :id="3" />
    </HStack>

    <Module v-if="layout === 'dual'" :id="2" />

    <HStack v-else no-center stretch>
      <Module :id="2" />

      <Module :id="4" />
    </HStack>
  </VStack>
</template>
