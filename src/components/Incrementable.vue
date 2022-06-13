<script lang="ts" setup>
  import HStack from "./HStack.vue";
  import IconButton from "./IconButton.vue";
  import MinusIcon from "./MinusIcon.vue";
  import PlusIcon from "./PlusIcon.vue";

  const props = withDefaults(
    defineProps<{
      modelValue: number;
      decrement?(value: number): number;
      increment?(value: number): number;
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
    <IconButton
      @click="$emit('update:modelValue', decrement(props.modelValue))"
    >
      <MinusIcon />
    </IconButton>

    <p class="label" @click="onClick">
      <slot>{{ modelValue }}</slot>
    </p>

    <IconButton
      @click="$emit('update:modelValue', increment(props.modelValue))"
    >
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
