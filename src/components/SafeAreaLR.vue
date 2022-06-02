<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";

  defineProps<{
    top?: boolean;
    bottom?: boolean;
  }>();
</script>

<template>
  <UseScreenSafeArea :bottom="bottom" :top="top" left right>
    <div class="padding">
      <div class="content">
        <slot />
      </div>
    </div>
  </UseScreenSafeArea>
</template>

<style lang="scss" scoped>
  .padding {
    display: flex;
    justify-content: center;
    padding: 0 2rem;

    @media (max-width: 400px) {
      padding: 0 1.5rem;
    }
  }

  .content {
    width: min(1000px, 100%);
  }
</style>
