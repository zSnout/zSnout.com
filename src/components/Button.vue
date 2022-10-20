<script lang="ts" setup>
  defineProps<{
    cancel?: boolean;
    center?: boolean;
    pre?: boolean;
  }>();
</script>

<template>
  <button
    :class="{ cancel, center, pre }"
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

    &:not([disabled]) {
      cursor: pointer;
    }

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.pre {
      white-space: pre;
    }
  }
</style>
