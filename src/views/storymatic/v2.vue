<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Editor2 from "../../components/storymatic/Editor2.vue";
  import Viewer2 from "../../components/storymatic/Viewer2.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <DocumentDisplay center explicit-height max-width>
    <HStack
      class="stack"
      :space="0.75"
      style="height: 100%; justify-content: center"
    >
      <Editor2 v-model="code" round style="flex: 1; max-width: 800px" />

      <Viewer2 class="viewer" :code="code" />
    </HStack>
  </DocumentDisplay>
</template>

<style scoped>
  .viewer {
    width: min(400px, 100%);
  }

  @media screen and (max-width: 850px) {
    .stack.stack {
      flex-direction: column;
    }

    .viewer {
      width: 100%;
    }
  }
</style>
