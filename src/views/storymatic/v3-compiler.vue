<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Compiler3 from "../../components/storymatic/Compiler3.vue";
  import Editor3 from "../../components/storymatic/Editor3.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <DocumentDisplay center explicit-height max-width>
    <HStack
      class="stack"
      :space="0.75"
      stretch
      style="height: 100%; justify-content: center"
    >
      <Editor3 v-model="code" round style="max-width: 800px" />

      <Compiler3 :code="code" round style="max-width: 800px" />
    </HStack>
  </DocumentDisplay>
</template>

<style scoped>
  @media screen and (max-width: 850px) {
    .stack.stack {
      flex-direction: column;
    }
  }
</style>
