<script lang="ts">
  const notes = ref<NotePreview[]>([]);

  socket.on("notes:index", (index) => (notes.value = index));
</script>

<script lang="ts" setup>
  import { ref, watchEffect } from "vue";
  import { NotePreview } from "../../shared.client";
  import Button from "../components/Button.vue";
  import Card from "../components/Card.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import LogInForm from "../components/LogInForm.vue";
  import Modal from "../components/Modal.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import Title from "../components/Title.vue";
  import { htmlToText } from "../composables/useHtmlToText";
  import { session, socket, username } from "../main";

  const isLogInOpen = ref(false);
  const isTitlePickerOpen = ref(false);
  const title = ref("");

  watchEffect(() => {
    socket.emit("notes:request:index", session.value);
  });
</script>

<template>
  <DocumentDisplay>
    <Title>{{ username ? `${username}'s` : "My" }} Notes</Title>

    <p v-if="!session">
      Looks like you're not logged in.
      <span class="link" @click="isLogInOpen = true">Log in</span>
      or
      <span class="link" @click="isLogInOpen = true">create an account</span>
      to access the Notes app.
    </p>

    <CardGrid v-if="session && notes.length < 100" style="margin-bottom: 2em">
      <Button @click="(isTitlePickerOpen = true), (title = '')">
        New Note
      </Button>
    </CardGrid>

    <SearchableCardGrid
      v-if="session && notes.length"
      placeholder="Search your notes..."
    >
      <Card
        v-for="note in notes"
        class="card text-color"
        :description="htmlToText(note.desc)"
        :title="note.title"
        :to="`/note?id=${note.id}`"
      />
    </SearchableCardGrid>
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />

  <Modal :open="isTitlePickerOpen">
    <p>Pick a title for your note.</p>

    <Field
      v-model="title"
      autocomplete="off"
      placeholder="Title..."
      @keydown.enter="
        title &&
          (socket.emit('notes:create', session, title),
          (isTitlePickerOpen = false))
      "
    />

    <template #buttons>
      <Button
        @click="
          title &&
            (socket.emit('notes:create', session, title),
            (isTitlePickerOpen = false))
        "
      >
        OK
      </Button>

      <Button cancel @click="isTitlePickerOpen = false">Cancel</Button>
    </template>
  </Modal>
</template>
