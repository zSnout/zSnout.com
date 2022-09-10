<template>
  <div class="sticky">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .sticky {
    position: sticky;
    bottom: 0;
    width: calc(100% + 2rem);
    margin-bottom: -2rem !important;
    padding: 0 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-weight: 300;
    font-size: 1.5em;
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);

    &:not(.center &) {
      margin-left: -1rem;
    }

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
