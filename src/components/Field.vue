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

<style scoped>
  .field {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
</style>
