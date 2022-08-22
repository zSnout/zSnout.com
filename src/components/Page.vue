<template>
  <section class="page">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    width: var(--app-width);
    min-height: calc(var(--app-height) - 3.5rem);
    overflow: hidden;
    scroll-snap-align: start;

    @media (max-width: 400px) {
      min-height: calc(var(--app-height) - 2.5rem);
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }
  }
</style>
