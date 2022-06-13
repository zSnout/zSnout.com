<script lang="ts" setup>
  import Field from "./Field.vue";

  defineProps<{
    modelValue: number;
    autocomplete?: string;
    placeholder?: string;
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();
</script>

<template>
  <Field
    :autocomplete="autocomplete"
    :model-value="'' + modelValue"
    :placeholder="placeholder"
    type="number"
    @update:model-value="$emit('update:modelValue', +$event)"
  />
</template>
