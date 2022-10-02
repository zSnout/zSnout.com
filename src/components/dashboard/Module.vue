<script lang="ts">
  export const modules = {
    "": "Blank Space",
    "scratch-pad": "Scratch Pad",
  } as const;

  export type ModuleName = keyof typeof modules;
</script>

<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import ScratchPad from "./ScratchPad.vue";

  const { id } = defineProps<{ id: number }>();
  const module = useLocalStorage<ModuleName>(`module-${id}`, "");
</script>

<template>
  <ScratchPad v-if="module === 'scratch-pad'" />
  <div v-else />
</template>
