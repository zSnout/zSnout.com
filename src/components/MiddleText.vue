<template>
  <div class="middle">
    <slot />
  </div>
</template>

<style scoped>
  .middle {
    width: 500px;
    max-width: min(500px, calc(100vw - 3rem));
    text-align: left;
  }
</style>
