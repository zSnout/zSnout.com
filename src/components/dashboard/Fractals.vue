<script lang="ts" setup>
  import FractalExplorer from "../../views/fractal-explorer.vue";
</script>

<template>
  <div class="explorer second-layer">
    <FractalExplorer no-save />
  </div>
</template>

<style scoped>
  .second-layer {
    padding: 0 !important;
    overflow: hidden;
  }
</style>
