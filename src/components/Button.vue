<script lang="ts" setup>
  defineProps<{
    cancel?: boolean;
    center?: boolean;
  }>();
</script>

<template>
  <button
    :class="{ cancel, center }"
    class="button hoverline focusline second-layer"
    type="button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    display: block;
    font-size: inherit;
    cursor: pointer;

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
