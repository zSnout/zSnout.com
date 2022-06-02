<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
</script>

<template>
  <UseScreenSafeArea left right>
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
    padding: 0 12px;
  }

  .content {
    width: min(1000px, 100%);
  }
</style>
