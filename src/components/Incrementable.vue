<script lang="ts" setup>
  import HStack from "./HStack.vue";
  import IconButton from "./IconButton.vue";
  import MinusIcon from "./MinusIcon.vue";
  import PlusIcon from "./PlusIcon.vue";
  import InlineNumericField from "./InlineNumericField.vue";

  withDefaults(
    defineProps<{
      modelValue: number;
      decrement?(value: number): number;
      increment?(value: number): number;
      label?: string;
    }>(),
    {
      decrement: (value: number) => value - 1,
      increment: (value: number) => value + 1,
    }
  );

  defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();

  function onClick({ target }: Event) {
    (target as HTMLElement).querySelector("input")?.focus();
  }
</script>

<template>
  <HStack>
    <IconButton @click="$emit('update:modelValue', decrement(modelValue))">
      <MinusIcon />
    </IconButton>

    <p class="label" @click="onClick">
      {{ label }}
      <InlineNumericField
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </p>

    <IconButton @click="$emit('update:modelValue', increment(modelValue))">
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
