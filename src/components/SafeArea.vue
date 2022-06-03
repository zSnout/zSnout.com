<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";

  defineProps<{
    top?: boolean;
    bottom?: boolean;
    keepHeight?: boolean;
  }>();
</script>

<template>
  <UseScreenSafeArea
    :class="{ 'keep-height': keepHeight }"
    class="safe-area"
    :bottom="bottom"
    left
    right
  >
    <div :class="{ bottom, top, 'keep-height': keepHeight }" class="padding">
      <div class="content" v-bind="$attrs">
        <slot />
      </div>
    </div>
  </UseScreenSafeArea>
</template>

<style lang="scss" scoped>
  .safe-area.keep-height {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .keep-height {
    flex: 1;
  }

  .padding {
    display: flex;
    justify-content: center;
    padding: 0 2rem;

    @media (max-width: 400px) {
      padding: 0 1.5rem;
    }
  }

  .top {
    padding-top: 2rem;
  }

  .bottom {
    padding-bottom: 2rem;
  }

  @media (max-width: 400px) {
    .padding {
      padding: 0 1.5rem;
    }

    .top {
      padding-top: 1.5rem;
    }

    .bottom {
      padding-bottom: 1.5rem;
    }
  }

  .content {
    width: min(1000px, 100%);
  }
</style>
