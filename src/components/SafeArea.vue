<script lang="ts" setup>
  defineProps<{
    aside?: boolean;
    bottom?: boolean;
    explicitHeight?: boolean;
    flex?: boolean;
    minHeight?: string;
    maxWidth?: boolean;
    small?: boolean;
    top?: boolean;
  }>();
</script>

<template>
  <div class="safe-area">
    <div :class="{ aside }" class="padding">
      <div
        :class="{ bottom, explicitHeight, flex, maxWidth, small, top }"
        class="content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .safe-area {
    padding-right: env(safe-area-inset-right, 0);
    padding-left: env(safe-area-inset-left, 0);
  }

  .padding {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
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
    width: 100%;
    min-height: v-bind(minHeight);

    &:not(.maxWidth) {
      width: min(1000px, 100%);

      &.small {
        width: min(600px, 100%);
      }
    }

    &.explicitHeight {
      height: v-bind(minHeight);
    }

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }

    .aside & {
      @media (min-width: 1080px) {
        position: relative;
        left: calc(-150px - 1em);
        width: min(1000px, 100% - 4em - 300px);
      }

      &.small {
        @media (min-width: 880px) {
          position: relative;
          left: calc(-150px - 1em);
          width: min(600px, 100% - 4em - 300px);
        }
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
