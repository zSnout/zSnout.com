<template>
  <header>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: calc(5.5em + 1px);

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }

    @media (max-width: 400px) {
      top: calc(4em + 1px);
    }
  }
</style>
