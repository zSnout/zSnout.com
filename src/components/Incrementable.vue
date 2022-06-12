<script lang="ts" setup>
  import { ref, watch } from "vue";
  import HStack from "./HStack.vue";
  import IconButton from "./IconButton.vue";
  import MinusIcon from "./MinusIcon.vue";
  import PlusIcon from "./PlusIcon.vue";

  const { modelValue } = defineProps<{
    modelValue: number;
    decrement?(value: number): number;
    increment?(value: number): number;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();

  const model = ref(modelValue);
  watch(model, (value) => emit("update:modelValue", value));
</script>

<template>
  <HStack>
    <IconButton @click="model = decrement?.(model) ?? model - 1">
      <MinusIcon />
    </IconButton>

    <p class="label">
      <slot>{{ model }}</slot>
    </p>

    <IconButton @click="model = increment?.(model) ?? model + 1">
      <PlusIcon />
    </IconButton>
  </HStack>
</template>

<style scoped>
  .label {
    flex: 1;
    align-self: center;
    text-align: center;
  }
</style>
