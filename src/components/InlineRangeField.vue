<script lang="ts" setup>
  import { ref } from "vue";

  const props = defineProps<{
    modelValue: number;
    autocomplete?: string;
    min?: number;
    max?: number;
    step?: number | "any";
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue: number): void;
  }>();

  const field = ref<HTMLElement>();

  function onTouchMove(event: TouchEvent) {
    event.preventDefault();

    if (event.touches.length !== 1) return;
    if (!field.value) return;

    const { x, width } = field.value.getBoundingClientRect();
    const pos = (event.touches[0].clientX - x) / width;

    const { max = 100, min = 0, step } = props;
    let value = pos * (max - min) + min;
    if (step !== "any" && step) value = ~~(value / step) * step;
    // Using `step` instead of `step !== undefined` also checks 0.

    emit("update:modelValue", value);
  }
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
    @pointerdown="($event.target as HTMLElement).setPointerCapture($event.pointerId)"
    @touchmove="onTouchMove"
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
