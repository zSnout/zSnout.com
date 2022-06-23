<script lang="ts" setup>
  import "ace-builds";
  import "ace-builds/src-noconflict/mode-javascript";
  import { computed } from "vue";
  import AceEditor from "../AceEditor.vue";
  import { storyToJS } from "./compiler3";

  const props = defineProps<{ code: string; round?: boolean }>();
  const story = computed(() => storyToJS(props.code));
</script>

<template>
  <AceEditor :model-value="story" :round="round" mode="javascript" readonly />
</template>
