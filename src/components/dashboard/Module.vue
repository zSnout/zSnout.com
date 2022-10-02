<script lang="ts">
  export const modules = {
    "": "Blank Space",
    "scratch-pad": "Scratch Pad",
    "fractals": "Fractals",
  } as const;

  export type ModuleName = keyof typeof modules;

  export const ids = [1, 2, 3, 4, 5, 6] as const;
  export type Id = typeof ids extends readonly (infer T)[] ? T : never;
</script>

<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import Fractals from "./Fractals.vue";
  import ScratchPad from "./ScratchPad.vue";

  const { id } = defineProps<{ id: Id }>();
  const module = useLocalStorage<ModuleName>(`dashboard:module:${id}`, "");
</script>

<template>
  <ScratchPad v-if="module === 'scratch-pad'" />
  <Fractals v-else-if="module === 'fractals'" />
  <div v-else />
</template>
