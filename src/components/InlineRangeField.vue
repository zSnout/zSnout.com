<script lang="ts" setup>
  import { MaybeElement, unrefElement } from "@vueuse/core";
  import RangeTouch from "rangetouch";
  import { onMounted, onScopeDispose, ref } from "vue";

  defineProps<{
    modelValue: number;
    autocomplete?: string;
    min?: number;
    max?: number;
    step?: number | "any";
  }>();

  defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();

  let destroy: (() => void) | undefined;
  onScopeDispose(() => destroy?.());

  const field = ref<MaybeElement>();
  onMounted(() => {
    const el = unrefElement(field);
    if (!el) return;

    const range = new RangeTouch(el);
    destroy = () => range.destroy;
  });
</script>

<template>
  <input
    ref="field"
    class="field"
    :autocomplete="autocomplete ?? 'off'"
    :max="max"
    :min="min"
    :step="step"
    :value="modelValue"
    type="range"
    @input="$emit('update:modelValue', +$event.target!.value)"
  />
</template>

<style lang="scss" scoped>
  .field {
    width: 100%;
    font-size: inherit;
    background-color: transparent;
    border: 0;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
</style>
