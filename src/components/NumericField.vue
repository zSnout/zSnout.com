<script lang="ts" setup>
  import { ref, watch } from "vue";
  import Field from "./Field.vue";

  const { modelValue } = defineProps<{
    modelValue: number;
    autocomplete?: string;
    placeholder?: string;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();

  const value = ref("" + modelValue);

  watch(value, (val) => {
    const numeric = parseFloat(val);

    if (Number.isSafeInteger(numeric)) {
      emit("update:modelValue", numeric);
    }
  });
</script>

<template>
  <Field
    v-model="value"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    type="number"
  />
</template>
