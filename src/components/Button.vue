<template>
  <button class="button hoverline second-layer">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    display: block;
    font-size: inherit;
    cursor: pointer;
  }
</style>
