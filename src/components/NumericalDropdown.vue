<script lang="ts" setup>
  import Dropdown from "./Dropdown.vue";

  defineProps<{ modelValue: number }>();
  defineEmits<(event: "update:modelValue", value: number) => void>();
</script>

<template>
  <Dropdown
    :model-value="'' + modelValue"
    @update:model-value="$emit('update:modelValue', +$event)"
  >
    <slot />
  </Dropdown>
</template>
