<script lang="ts" setup>
  defineProps<{
    modelValue: number;
    autocomplete?: string;
    min?: number;
    max?: number;
    step?: number | "any";
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();
</script>

<template>
  <input
    class="field"
    :autocomplete="autocomplete ?? 'off'"
    :value="modelValue"
    type="range"
    @input="$emit('update:modelValue', +$event.target!.value)"
  />
</template>

<style lang="scss" scoped>
  .field {
    width: 100%;
    font-size: inherit;
    background-color: transparent;
    border: 0;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
</style>
