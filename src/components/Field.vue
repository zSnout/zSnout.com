<script lang="ts" setup>
  import { ref, watch } from "vue";

  const { modelValue } = defineProps<{
    modelValue: string;
    type?: string;
    autocomplete?: string;
    placeholder?: string;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();

  const value = ref(modelValue);
  watch(value, (val) => emit("update:modelValue", val));
</script>

<template>
  <input
    v-model="value"
    class="second-layer field focusline"
    :autocomplete="autocomplete ?? 'off'"
    :placeholder="placeholder"
    :type="type ?? 'text'"
  />
</template>

<style lang="scss" scoped>
  .field {
    display: block;
    width: 100%;
    margin-bottom: 1.33rem;
    font-size: 1rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
</style>
