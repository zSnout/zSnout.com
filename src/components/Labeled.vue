<script lang="ts" setup>
  import HStack from "./HStack.vue";

  defineProps<{ label: string }>();
</script>

<template>
  <label class="label">
    <HStack>
      <span class="nowrap text-color">{{ label }}</span>

      <slot />
    </HStack>
  </label>
</template>

<style lang="scss" scoped>
  .label {
    display: block;

    > div {
      align-items: center;
    }
  }

  .nowrap {
    white-space: nowrap;
  }
</style>
