<script lang="ts" setup>
  import "ace-builds";
  import "ace-builds/src-noconflict/mode-javascript";
  import { componentChars } from "mdurl/encode";
  import { computed, toRef } from "vue";
  import { useCompileLambda } from "../../composables/useCompileLambda";
  import { toJS } from "../../composables/useEvaluateLambda";
  import AceEditor from "../AceEditor.vue";

  const props = defineProps<{ code: string; round?: boolean }>();
  const compiled = useCompileLambda(toRef(props, "code"));

  const model = computed<string>({
    get() {
      return typeof compiled.value === "string"
        ? compiled.value
        : toJS(compiled.value);
    },
    set(v) {},
  });
</script>

<template>
  <AceEditor v-model="model" :round="round" mode="javascript" readonly />
</template>
