<script lang="ts">
  export const modules = {
    "": "Blank Space",
    "scratch-pad": "Scratch Pad",
  } as const;

  export type ModuleName = keyof typeof modules;

  export const ids = [1, 2, 3, 4, 5, 6] as const;
  export type Id = typeof ids extends readonly (infer T)[] ? T : never;
</script>

<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import ScratchPad from "./ScratchPad.vue";

  const { id } = defineProps<{ id: Id }>();
  const module = useLocalStorage<ModuleName>(`module-${id}`, "");
</script>

<template>
  <ScratchPad v-if="module === 'scratch-pad'" />
  <div v-else />
</template>
