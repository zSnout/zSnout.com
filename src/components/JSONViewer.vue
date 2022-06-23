<script lang="ts" setup>
  import ace from "ace-builds";
  import AceEditor from "./AceEditor.vue";

  defineProps<{
    value?: any;
    round?: boolean;
  }>();

  defineEmits<{
    (event: "init", editor: ace.Ace.Editor): void;
    (event: "save", value: string): void;
  }>();
</script>

<template>
  <AceEditor
    :modelValue="JSON.stringify(value, undefined, '  ')"
    :round="round"
    mode="storymatic3"
    readonly
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
  />
</template>
