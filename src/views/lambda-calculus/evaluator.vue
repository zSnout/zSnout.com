<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor from "../../components/lambdaCalculus/Editor.vue";
  import Evaluator from "../../components/lambdaCalculus/Evaluator.vue";
  import initial from "../../components/lambdaCalculus/preset.txt?raw";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(initial);
</script>

<template>
  <EditorAndViewer>
    <Editor v-model="code" round />

    <Evaluator :code="code" round />
  </EditorAndViewer>
</template>
