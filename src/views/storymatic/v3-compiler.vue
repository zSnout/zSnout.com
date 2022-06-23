<script lang="ts" setup>
  import Compiler3 from "../../components/storymatic/Compiler3.vue";
  import Editor3 from "../../components/storymatic/Editor3.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <EditorAndViewer>
    <Editor3 v-model="code" round />

    <Compiler3 :code="code" round />
  </EditorAndViewer>
</template>
