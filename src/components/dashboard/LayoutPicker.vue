<script lang="ts">
  export const layouts = {
    single: "one large module",
    quad: "2 by 2 grid",
    dualVert: "2 modules stacked on top of each other",
    dualHoriz: "2 modules stacked next to each other",
  };

  export type Layout = keyof typeof layouts;
</script>

<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import Dropdown from "../Dropdown.vue";
  import HStack from "../HStack.vue";
  import VStack from "../VStack.vue";
  import ModulePicker from "./ModulePicker.vue";

  const layout = useLocalStorage<Layout>("dashboard:layout", "quad");
  if (!(layout.value in layouts)) layout.value = "quad";
</script>

<template>
  <Dropdown v-model="layout">
    <option v-for="(name, value) in layouts" :value="value">{{ name }}</option>
  </Dropdown>

  <VStack stretch v-bind="$attrs">
    <ModulePicker v-if="layout === 'dualVert' || layout === 'single'" :id="1" />

    <HStack v-else stretch>
      <ModulePicker :id="1" />

      <ModulePicker :id="3" />
    </HStack>

    <ModulePicker v-if="layout === 'dualVert'" :id="2" />

    <HStack v-else-if="layout === 'quad'" stretch>
      <ModulePicker :id="2" />

      <ModulePicker :id="4" />
    </HStack>
  </VStack>
</template>
