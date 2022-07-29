<script lang="ts" setup>
  import StarterKit from "@tiptap/starter-kit";
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import { useDebounceFn } from "@vueuse/shared";
  import { onUnmounted, ref, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import InlineField from "../components/InlineField.vue";
  import LogInForm from "../components/LogInForm.vue";
  import { session, socket, username } from "../main";
  import HStack from "../components/HStack.vue";

  const id = "" + useRoute().query.id;
  const title = ref("Loading title...");
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

  socket.on("notes:details", (details) => {
    if (details.id === id) {
      title.value = details.title;
    }
  });

  watchEffect(() => {
    socket.emit("notes:request:note", session.value, id);
    socket.emit("notes:request:details", session.value, id);
  });

  const editor = new Editor({
    extensions: [StarterKit],
  });

  const isSynced = ref(true);
  const overflow = ref(false);

  const syncNote = useDebounceFn(
    () => {
      if (!overflow) {
        isSynced.value = true;
        socket.emit("notes:update:note", session.value, id, editor.getHTML());
      }
    },
    500,
    { maxWait: 1000 }
  );

  const setTitle = useDebounceFn(
    () => {
      if (title.value) {
        socket.emit("notes:update:title", session.value, id, title.value);
      }
    },
    500,
    { maxWait: 1000 }
  );

  editor.on("update", () => {
    overflow.value = editor.getHTML().length >= 10000;
    isSynced.value = false;
    syncNote();
  });

  onUnmounted(() => {
    socket.emit("notes:update:note", session.value, id, editor.getHTML());
    socket.emit("notes:update:title", session.value, id, title.value);
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
      <HStack style="margin-bottom: 1em">
        <span>
          {{ overflow ? "Whoops!" : isSynced ? "Synced:" : "Syncing:" }}
        </span>

        <InlineField
          :flex="!overflow"
          :maxlength="100"
          :model-value="title"
          placeholder="Note title..."
          @update:model-value="(title = $event), setTitle()"
        />

        <span v-if="overflow">is too large and cannot be synced.</span>
      </HStack>

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
