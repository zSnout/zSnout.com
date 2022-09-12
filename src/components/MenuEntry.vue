<script lang="ts" setup>
  defineProps<{ disabled?: boolean }>();
</script>

<template>
  <button :class="{ disabled }" class="entry" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .entry {
    display: block;
    width: 100%;
    padding: 0.25em 0.5em;
    font-size: 1rem;
    text-align: left;
    background-color: transparent;
    border: 0;
    border-radius: 0.125em;
    transition: 0s;

    &.disabled {
      opacity: 0.5;
    }

    .hover &:not(.disabled):hover {
      color: white;
      background-color: rgb(95 150 249);
    }

    .dark.hover &:not(.disabled):hover {
      background-color: rgb(94 132 228);
    }
  }
</style>
