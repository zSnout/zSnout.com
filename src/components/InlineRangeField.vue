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
    height: 0.5em;
    font-size: inherit;
    background: #d0d0d0;
    border-radius: 0.25em;
    outline: none;
    opacity: 0.7;
    transition: var(--transitions), opacity 0.2s;
    -webkit-appearance: none;
    appearance: none;

    .dark & {
      background: #151515;
    }

    .hover &:hover {
      opacity: 1;
    }
  }
</style>
