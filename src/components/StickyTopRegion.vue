<template>
  <div class="sticky">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .sticky {
    position: sticky;
    top: 3.5rem;
    z-index: 3;
    width: calc(100% + 2rem);
    margin-top: -2rem !important;
    padding: 1rem;
    font-weight: 300;
    font-size: 1.5em;
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);

    &:not(.center &) {
      margin-left: -1rem;
    }

    @media (max-width: 400px) {
      top: 2.5rem;
      margin-top: -1.5rem !important;
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }
  }
</style>
