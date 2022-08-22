<script lang="ts" setup>
  import SafeArea from "./SafeArea.vue";
</script>

<template>
  <SafeArea bottom style="flex: 1" top>
    <slot />
  </SafeArea>
</template>
