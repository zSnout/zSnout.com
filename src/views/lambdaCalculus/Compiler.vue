<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Compiler from "../../components/lambdaCalculus/Compiler.vue";
  import Editor from "../../components/lambdaCalculus/Editor.vue";
  import initial from "../../components/lambdaCalculus/preset.txt?raw";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(initial);
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor v-model="code" round />

    <Compiler :code="code" round />
  </EditorAndViewer>
</template>
