<script lang="ts" setup>
  defineProps<{
    modelValue: string;
    type?: string;
    autocomplete?: string;
    placeholder?: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();
</script>

<template>
  <input
    class="second-layer field focusline"
    :autocomplete="autocomplete ?? 'off'"
    :placeholder="placeholder"
    :type="type ?? 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target!.value)"
  />
</template>

<style lang="scss" scoped>
  .field {
    display: block;
    width: 100%;
    margin-bottom: 1.33rem;
    font-size: inherit;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
</style>
