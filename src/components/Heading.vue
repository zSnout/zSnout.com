<template>
  <h2 class="heading">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
  .heading {
    margin: 1em 0 0.75em 0;
    color: #25575b;
    font-weight: 900;
    font-size: 1.5em;
    letter-spacing: 0.25px;
    scroll-margin-top: 3.5rem + 2rem;

    @media (max-width: 400px) {
      scroll-margin-top: 2.5rem + 1.5rem;
    }

    .dark & {
      color: #a3d5d6;
    }
  }
</style>
