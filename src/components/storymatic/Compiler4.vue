<script lang="ts" setup>
  import "ace-builds";
  import "ace-builds/src-noconflict/mode-javascript";
  import { computed } from "vue";
  import AceEditor from "../AceEditor.vue";
  import { compile, transpile } from "storymatic";

  const props = defineProps<{ code: string; round?: boolean }>();

  const story = computed(() =>
    transpile(compile(props.code), {
      typescript: true,
    })
  );
</script>

<template>
  <AceEditor :model-value="story" :round="round" mode="javascript" readonly />
</template>
