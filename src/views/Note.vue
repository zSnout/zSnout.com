<script lang="ts" setup>
  import StarterKit from "@tiptap/starter-kit";
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import { useDebounceFn, useThrottleFn } from "@vueuse/shared";
  import { onUnmounted, ref, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import LogInForm from "../components/LogInForm.vue";
  import { session, socket, username } from "../main";

  const id = "" + useRoute().query.id;
  const state = ref<"waiting" | "invalid" | "editing">("waiting");
  const isLogInOpen = ref(false);

  socket.on("notes:note", (noteId, content) => {
    if (noteId === id) {
      if (content === false) {
        state.value = "invalid";
      } else {
        state.value = "editing";
        editor.commands.setContent(content, false);
      }
    }
  });

  watchEffect(() => {
    socket.emit("notes:request:note", session.value, id);
  });

  const editor = new Editor({
    extensions: [StarterKit],
  });

  const isSynced = ref(true);

  const syncNote = useDebounceFn(
    () => {
      isSynced.value = true;
      socket.emit("notes:update:note", session.value, id, editor.getHTML());
    },
    500,
    { maxWait: 1000 }
  );

  editor.on("update", () => {
    isSynced.value = false;
    syncNote();
  });

  onUnmounted(() => {
    socket.emit("notes:update:note", session.value, id, editor.getHTML());
    editor.destroy();
  });
</script>

<template>
  <DocumentDisplay>
    <p v-if="!session">
      You have to
      <span class="link" @click="isLogInOpen = true">log in</span>
      before you can edit a note.
    </p>

    <p v-else-if="state === 'waiting'">
      Hey @{{ username }}! We're fetching your note right now...
    </p>

    <p v-else-if="state === 'invalid'">
      Sorry @{{ username }}, but it looks like you don't own this note. Let's
      <RouterLink to="/my-notes">go back to your notes.</RouterLink>
    </p>

    <template v-else>
      <p>
        {{
          isSynced
            ? "Your note is synced in the cloud."
            : "Syncing your note..."
        }}
      </p>

      <EditorContent :editor="editor" />
    </template>
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />
</template>

<style>
  .ProseMirror > :first-child {
    margin-top: 0;
  }

  .ProseMirror > :last-child {
    margin-bottom: 0;
  }

  .ProseMirror-focused {
    outline: none;
  }
</style>
