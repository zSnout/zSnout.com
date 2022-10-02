<script lang="ts" setup>
  import { isDark } from "../composables/isDark";
  import LogoDark from "./LogoDark.vue";
  import LogoLight from "./LogoLight.vue";

  withDefaults(defineProps<{ invert?: boolean }>(), { invert: false });
</script>

<template>
  <LogoDark v-if="invert !== isDark" />
  <LogoLight v-else />
</template>
