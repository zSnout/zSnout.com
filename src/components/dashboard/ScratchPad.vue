<script lang="ts" setup>
  import StarterKit from "@tiptap/starter-kit";
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import { useLocalStorage } from "@vueuse/core";
  import { useDebounceFn } from "@vueuse/shared";

  const content = useLocalStorage("dashboard:scratch-pad", "");

  const editor = new Editor({
    extensions: [StarterKit],
    content: content.value,
  });

  const syncNote = useDebounceFn(
    () => (content.value = editor.getHTML()),
    500,
    { maxWait: 1000 }
  );

  editor.on("update", () => {
    syncNote();
  });
</script>

<template>
  <EditorContent class="editor" :editor="editor" />
</template>

<style lang="scss">
  .editor,
  .editor > * {
    height: 100%;
    outline: none;
  }
</style>
