<script lang="ts" setup>
  import { useDark } from "@vueuse/core";
  import LogoWithNameDark from "./LogoWithNameDark.vue";
  import LogoWithNameLight from "./LogoWithNameLight.vue";

  const isDark = useDark();
  LogoWithNameDark;
  LogoWithNameLight;

  withDefaults(defineProps<{ invert?: boolean }>(), { invert: false });
</script>

<template>
  <LogoWithNameDark v-if="invert !== isDark" />
  <LogoWithNameLight v-else />
</template>
