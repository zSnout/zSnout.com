<script lang="ts" setup>
  import { onMounted, useCssModule, useSlots } from "vue";

  onMounted(() => {
    const slot = useSlots().default;

    if (slot) {
      for (let el of slot()) {
        el.el?.classList.add(useCssModule()["second-layer"]);
      }
    }
  });
</script>

<template>
  <slot />
</template>

<style lang="scss" module>
  .second-layer {
    padding: 0.5rem 0.75rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px 1px #ddd;

    :global(.dark) & {
      background-color: #2a2a2c;
      box-shadow: 0 3px 6px 1px #1a1a1a;
    }
  }
</style>
