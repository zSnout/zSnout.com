<script lang="ts" setup>
  import StarterKit from "@tiptap/starter-kit";
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import { useLocalStorage } from "@vueuse/core";
  import { useDebounceFn } from "@vueuse/shared";

  const content = useLocalStorage("dashboard:scratch-pad", "");

  const editor = new Editor({
    extensions: [StarterKit],
    content: content.value || "Edit your scratch pad...",
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
  <div class="container">
    <div class="second-layer dashboard-sp">
      <EditorContent :editor="editor" />
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    display: flex;
    height: 100%;
  }

  .dashboard-sp {
    flex: 1;
  }

  .dashboard-sp > * {
    height: 100%;
  }

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
