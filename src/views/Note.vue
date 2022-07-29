<script lang="ts" setup>
  import Collaboration from "@tiptap/extension-collaboration";
  import StarterKit from "@tiptap/starter-kit";
  import { Editor } from "@tiptap/vue-3";
  import { onUnmounted } from "vue";
  import { useRoute } from "vue-router";
  import * as Y from "yjs";
  import DocumentDisplay from "../components/DocumentDisplay.vue";

  const { id } = useRoute().params;

  const doc = new Y.Doc();

  const editor = new Editor({
    extensions: [
      StarterKit.configure({ history: false }),
      Collaboration.configure({ document: doc }),
    ],
  });

  onUnmounted(() => editor.destroy());
</script>

<template>
  <DocumentDisplay>
    <p>Sorry, editing notes hasn't been added yet.</p>
  </DocumentDisplay>
</template>
