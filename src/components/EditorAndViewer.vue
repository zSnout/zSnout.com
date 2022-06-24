<script lang="ts" setup>
  import DocumentDisplay from "./DocumentDisplay.vue";
  import HStack from "./HStack.vue";

  defineProps<{ dualEditor?: boolean }>();
</script>

<template>
  <DocumentDisplay center explicit-height max-width>
    <HStack
      :class="{ dualEditor }"
      class="stack"
      :space="0.75"
      style="height: 100%; justify-content: center"
    >
      <slot />
    </HStack>
  </DocumentDisplay>
</template>

<style scoped>
  .stack > :deep(:first-child),
  .dualEditor > :deep(:last-child) {
    flex: 1;
    max-width: 800px;
  }

  .stack:not(.dualEditor) > :deep(:last-child) {
    width: min(400px, 100%);
  }

  @media (max-width: 850px) {
    .stack.stack {
      flex-direction: column;
    }

    .stack > :deep(:last-child) {
      width: 100%;
      max-height: 50%;
    }
  }
</style>
