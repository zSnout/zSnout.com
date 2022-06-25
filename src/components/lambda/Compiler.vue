<script lang="ts" setup>
  import "ace-builds";
  import "ace-builds/src-noconflict/mode-javascript";
  import { toRef } from "vue";
  import AceEditor from "../AceEditor.vue";
  import { useCompileLambda } from "./useCompileLambda";
  import { toJS } from "./useEvaluateLambda";

  const props = defineProps<{ code: string; round?: boolean }>();
  const compiled = useCompileLambda(toRef(props, "code"));
</script>

<template>
  <AceEditor
    :model-value="typeof compiled === 'string' ? compiled : toJS(compiled)"
    :round="round"
    mode="javascript"
    readonly
  />
</template>
