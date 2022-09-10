<template>
  <header>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: calc(3.5rem + 1px);
    width: calc(100% + 2rem);
    margin-top: -2rem !important;
    margin-left: -1rem;
    padding: 0 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-weight: 300;
    font-size: 1.5em;
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);

    @media (max-width: 400px) {
      top: calc(2.5rem + 1px);
      margin-top: -1.5rem !important;
      padding-top: 1.5rem;
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }
  }
</style>
