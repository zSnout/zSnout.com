<script lang="ts" setup>
  import Editor3 from "../../components/storymatic/Editor3.vue";
  import Viewer3 from "../../components/storymatic/Viewer3.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <EditorAndViewer>
    <Editor3 v-model="code" round />

    <Viewer3 :code="code" />
  </EditorAndViewer>
</template>
