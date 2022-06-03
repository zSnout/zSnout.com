<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style scoped>
  .title {
    padding: 0.5em;
    padding-top: 0;
    font-weight: 900;
    letter-spacing: -0.25px;
    border-bottom: 2px solid currentColor;
  }
</style>
