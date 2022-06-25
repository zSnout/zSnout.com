<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Compiler from "../../components/lambda/Compiler.vue";
  import Editor from "../../components/lambda/Editor.vue";
  import { useLocationHash } from "../../composables/useLocationHash";
  import initial from "../../components/lambda/preset.txt?raw";

  const code = useLocationHash(initial);
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor v-model="code" round />

    <Compiler :code="code" round />
  </EditorAndViewer>
</template>
