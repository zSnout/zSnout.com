<script lang="ts" setup>
  defineProps<{
    modelValue: string;
    type?: string;
    autocomplete?: string;
    placeholder?: string;
    flex?: boolean;
    maxlength?: number;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();
</script>

<template>
  <input
    class="field"
    :autocomplete="autocomplete ?? 'off'"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :style="{
      width: flex ? undefined : modelValue.length + 2 + 'ch',
      flex: flex ? '1' : undefined,
    }"
    :type="type ?? 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target!.value)"
  />
</template>

<style lang="scss" scoped>
  .field {
    font-weight: inherit;
    font-size: inherit;
    background-color: transparent;
    border: 0;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
      appearance: none;
    }
  }
</style>
