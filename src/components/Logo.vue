<script lang="ts" setup>
  import { isDark } from "../composables/isDark";
  import LogoWithNameDark from "./LogoDark.vue";
  import LogoWithNameLight from "./LogoLight.vue";

  withDefaults(defineProps<{ invert?: boolean }>(), { invert: false });
</script>

<template>
  <LogoWithNameDark v-if="invert !== isDark" />
  <LogoWithNameLight v-else />
</template>
