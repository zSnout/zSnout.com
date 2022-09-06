<template>
  <TransitionGroup name="list">
    <slot />
  </TransitionGroup>
</template>

<style>
  /* We can't use `scoped` here or the animations break due to Vue's nesting rules. */

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .list-enter-from,
  .list-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }

  .list-leave-active {
    position: absolute;
    width: inherit;
  }
</style>
