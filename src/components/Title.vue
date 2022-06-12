<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
  .title {
    padding: 0 0.5em 0.3em 0.5em;
    color: #13474b;
    font-weight: 900;
    letter-spacing: 0.25px;
    border-bottom: 2px solid currentColor;

    .dark & {
      color: #a3d5d6;
    }
  }
</style>
