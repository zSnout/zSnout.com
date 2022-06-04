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
    class="second-layer focusline"
    :autocomplete="autocomplete ?? 'off'"
    :placeholder="placeholder"
    :type="type ?? 'text'"
    style="display: block"
  />
</template>
