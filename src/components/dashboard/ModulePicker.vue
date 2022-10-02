<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import Dropdown from "../Dropdown.vue";
  import { ModuleName, modules } from "./Module.vue";

  const { id } = defineProps<{ id: number }>();
  const module = useLocalStorage<ModuleName>(`module-${id}`, "");
</script>

<template>
  <Dropdown v-model="module">
    <option v-for="(name, value) in modules" :key="value" :value="value">
      {{ name }}
    </option>
  </Dropdown>
</template>
