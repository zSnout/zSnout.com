<script lang="ts" setup>
  defineProps<{
    modelValue: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();
</script>

<template>
  <select
    class="field focusline second-layer"
    :value="$props.modelValue"
    @change="$emit('update:modelValue', $event.target!.value)"
  >
    <slot />
  </select>
</template>

<style scoped>
  .field {
    display: block;
    width: 100%;
    font-size: inherit;
  }
</style>
