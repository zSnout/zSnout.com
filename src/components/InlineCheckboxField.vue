<script lang="ts" setup>
  defineProps<{
    modelValue: boolean;
    type?: string;
    autocomplete?: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: boolean): void;
  }>();
</script>

<template>
  <input
    class="field"
    :autocomplete="autocomplete ?? 'off'"
    :checked="modelValue"
    :type="type ?? 'checkbox'"
    @change="$emit('update:modelValue', $event.target!.checked)"
  />
</template>

<style lang="scss" scoped>
  .field {
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
