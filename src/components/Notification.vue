<script lang="ts" setup>
  defineProps<{ open: boolean }>();
</script>

<template>
  <Transition appear name="notif">
    <div v-if="open" class="notification second-layer">
      <slot />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .notification {
    position: fixed;
    bottom: 1rem;
    left: calc(1rem + env(safe-area-inset-left, 0));
    z-index: 8;
    display: block;
    width: min(300px, var(--app-width) - 2rem);
    user-select: none;
  }

  .notif-enter-active {
    transition: all 0.3s ease-out !important;
  }

  .notif-leave-active {
    transition: all 0.3s ease-in !important;
  }

  .notif-enter-from,
  .notif-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
