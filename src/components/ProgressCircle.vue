<script lang="ts" setup>
  import { isDark } from "../composables/isDark";

  const props = withDefaults(
    defineProps<{
      max?: number;
      min?: number;
      progress: number;
      action?: () => void;
    }>(),
    { max: 1, min: 0 }
  );

  function onClick(event: Event) {
    if (event.target instanceof HTMLElement) {
      event.target.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth",
      });
    }

    props.action?.();
  }
</script>

<template>
  <div
    :class="{ action: !!action }"
    class="progress"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="progress"
    :style="{
      '--progress': `${progress * (max - min) + min}turn`,
      'color': isDark ? '#066567' : '#2c8d8d',
      '--bg': isDark ? 'black' : 'white',
    }"
    role="progressbar"
    @click="onClick"
  >
    <div class="inner text-color">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .progress {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    background: radial-gradient(
        var(--bg),
        var(--bg) 2.5rem,
        transparent 2.49rem,
        transparent
      ),
      conic-gradient(
        currentColor 0,
        currentColor var(--progress),
        var(--background-color) calc(var(--progress) + 0.001turn),
        var(--background-color) 1turn
      );
    border-radius: 50%;
    transition: var(--transitions), --progress 0.3s, background 0.3s;
    user-select: none;

    .hover &.action:hover,
    &.action:focus {
      background: radial-gradient(
          var(--bg),
          var(--bg) 2.5rem,
          var(--bg) 2.4999rem,
          var(--bg) 2.7499rem,
          transparent 2.75rem,
          transparent
        ),
        conic-gradient(
          currentColor 0,
          currentColor var(--progress),
          var(--background-color) calc(var(--progress) + 0.001turn),
          var(--background-color) 1turn
        );
      cursor: pointer;
    }
  }

  .inner {
    width: 6rem;
  }
</style>
