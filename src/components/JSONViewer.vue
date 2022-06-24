<script lang="ts" setup>
  import "ace-builds";
  import type { Ace } from "ace-builds";
  import "ace-builds/src-noconflict/mode-json";
  import AceEditor from "./AceEditor.vue";

  defineProps<{
    value?: any;
    round?: boolean;
  }>();

  defineEmits<{
    (event: "init", editor: Ace.Editor): void;
    (event: "save", value: string): void;
  }>();
</script>

<template>
  <AceEditor
    :modelValue="JSON.stringify(value, undefined, '  ')"
    :round="round"
    mode="json"
    readonly
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
  />
</template>
