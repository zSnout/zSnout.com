<script lang="ts" setup>
  import { useDark } from "../composables/useDark";
  import LogoWithNameDark from "./LogoWithNameDark.vue";
  import LogoWithNameLight from "./LogoWithNameLight.vue";

  withDefaults(defineProps<{ invert?: boolean }>(), { invert: false });
</script>

<template>
  <LogoWithNameDark v-if="invert !== useDark" />
  <LogoWithNameLight v-else />
</template>
