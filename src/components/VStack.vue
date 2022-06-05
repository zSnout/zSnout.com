<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    text-align: center;
  }
</style>
