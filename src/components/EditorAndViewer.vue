<script lang="ts" setup>
  import { useLocationHash } from "../composables/useLocationHash";
  import DocumentDisplay from "./DocumentDisplay.vue";
  import HStack from "./HStack.vue";

  const { initial } = defineProps<{
    initial?: string;
    dualEditor?: boolean;
  }>();

  const code = useLocationHash(initial);
</script>

<template>
  <DocumentDisplay center explicit-height max-width>
    <HStack
      :class="{ dualEditor }"
      class="stack"
      :space="0.75"
      style="height: 100%; justify-content: center"
    >
      <slot :code="code" />
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

  @media screen and (max-width: 850px) {
    .stack.stack {
      flex-direction: column;
    }

    .stack > :deep(:last-child) {
      width: 100%;
      max-height: 50%;
    }
  }
</style>
