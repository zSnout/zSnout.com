<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor4 from "../../components/storymatic/Editor4.vue";
  import Compiler4 from "../../components/storymatic/Compiler4.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor4 v-model="code" round />

    <Compiler4 :code="code" round />
  </EditorAndViewer>
</template>
