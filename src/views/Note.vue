<script lang="ts" setup>
  import StarterKit from "@tiptap/starter-kit";
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import { useDebounceFn } from "@vueuse/shared";
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

  editor.on(
    "update",
    useDebounceFn(() =>
      socket.emit("notes:update:note", session, id, editor.getHTML())
    )
  );

  onUnmounted(() => editor.destroy());
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

    <EditorContent v-else :editor="editor" />
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />
</template>
