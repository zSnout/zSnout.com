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
  <EditorContent :editor="editor" />
</template>

<style lang="scss">
  .ProseMirror {
    height: 100%;

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }

    &-focused {
      outline: none;
    }

    li > * {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
