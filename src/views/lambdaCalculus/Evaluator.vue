<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor from "../../components/lambda/Editor.vue";
  import Evaluator from "../../components/lambda/Evaluator.vue";
  import initial from "../../components/lambda/preset.txt?raw";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(initial);
</script>

<template>
  <EditorAndViewer>
    <Editor v-model="code" round />

    <Evaluator :code="code" round />
  </EditorAndViewer>
</template>
