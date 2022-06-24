<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor4 from "../../components/storymatic/Editor4.vue";
  import Viewer4 from "../../components/storymatic/Viewer4.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash();
</script>

<template>
  <EditorAndViewer>
    <Editor4 v-model="code" round />

    <Viewer4 :code="code" round />
  </EditorAndViewer>
</template>
