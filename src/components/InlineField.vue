<script lang="ts" setup>
  import { toRef, watch } from "vue";

  const props = defineProps<{
    modelValue: string;
    type?: string;
    autocomplete?: string;
    placeholder?: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();

  watch(toRef(props, "modelValue"), console.log);
</script>

<template>
  <input
    class="field"
    :autocomplete="autocomplete ?? 'off'"
    :placeholder="placeholder"
    :style="{ width: modelValue.length + 2 + 'ch' }"
    :type="type ?? 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target!.value)"
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
