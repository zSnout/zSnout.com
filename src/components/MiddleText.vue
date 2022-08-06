<template>
  <div class="middle">
    <slot />
  </div>
</template>

<style scoped>
  .middle {
    width: 500px;
    max-width: min(500px, 100%);
    text-align: left;
  }
</style>
