<template>
  <Teleport to="body">
    <div class="container">
      <slot />
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .container {
    position: fixed;
    top: calc(3.5em + 1px);
    right: 0;
    bottom: 0;
    left: 0;

    @media (max-width: 400px) {
      top: calc(2.5em + 1px);
    }
  }
</style>
