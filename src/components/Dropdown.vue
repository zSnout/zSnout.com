<script lang="ts" setup>
  import { ref, watch } from "vue";

  const { modelValue } = defineProps<{
    modelValue: string;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue: string): void;
  }>();

  const value = ref(modelValue);
  watch(value, (val) => emit("update:modelValue", val));
</script>

<template>
  <select class="field focusline second-layer">
    <slot />
  </select>
</template>

<style scoped>
  .field {
    display: block;
    width: 100%;
    font-size: inherit;
  }
</style>
