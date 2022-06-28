<script lang="ts" setup>
  import "ace-builds";
  import "ace-builds/src-noconflict/mode-javascript";
  import { toRef } from "vue";
  import { useCompileLambda } from "../../composables/useCompileLambda";
  import { toJS } from "../../composables/useEvaluateLambda";
  import AceEditor from "../AceEditor.vue";

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
