<script lang="ts" setup>
  import ace from "ace-builds";
  import { toRef } from "vue";
  import JSONViewer from "../JSONViewer.vue";
  import { useCompileLambda } from "./useCompileLambda";

  const props = defineProps<{
    code: string;
    readonly?: boolean;
    placeholder?: string;
    round?: boolean;
  }>();

  defineEmits<{
    (event: "init", editor: ace.Ace.Editor): void;
    (event: "save", value: string): void;
  }>();

  const compiled = useCompileLambda(toRef(props, "code"));
</script>

<template>
  <JSONViewer
    :round="round"
    :value="compiled"
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
  />
</template>
