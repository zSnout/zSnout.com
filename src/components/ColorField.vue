<script lang="ts" setup>
  defineProps<{
    autocomplete?: string;
    modelValue: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();
</script>

<template>
  <input
    class="shadow field focusline"
    :autocomplete="autocomplete || 'off'"
    :style="`background-color: ${modelValue}`"
    :value="modelValue"
    type="color"
    @change="$emit('update:modelValue', $event.target!.value)"
    @input="$emit('update:modelValue', $event.target!.value)"
  />
</template>

<style scoped>
  .field {
    display: block;
    flex: 1;
    padding: 0;
    border: 0;
    appearance: none;
  }
</style>
