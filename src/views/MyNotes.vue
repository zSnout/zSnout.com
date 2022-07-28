<script lang="ts">
  const notes = ref<NotePreview[]>([]);

  socket.on("notes:index", (index) => (notes.value = index));
</script>

<script lang="ts" setup>
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Title from "../components/Title.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import { ref, watchEffect } from "vue";
  import { NotePreview } from "../../shared.client";
  import { session, socket, username } from "../main";
  import LogInForm from "../components/LogInForm.vue";
  import Button from "../components/Button.vue";
  import Modal from "../components/Modal.vue";
  import Field from "../components/Field.vue";
  import Card from "../components/Card.vue";
  import GridSpacer from "../components/GridSpacer.vue";
  import HStack from "../components/HStack.vue";
  import CardGrid from "../components/CardGrid.vue";

  const isLogInOpen = ref(false);
  const isTitlePickerOpen = ref(false);
  const title = ref("");

  watchEffect(() => {
    socket.emit("notes:request:index", session.value);
  });
</script>

<template>
  <DocumentDisplay>
    <Title>{{ username ? `@${username}'s` : "My" }} Notes</Title>

    <p v-if="!session">
      Looks like you're not logged in.
      <span @click="isLogInOpen = true">Log in</span>
      or
      <span @click="isLogInOpen = true">create an account</span>
      to access the Notes app.
    </p>

    <CardGrid v-if="session" style="margin-bottom: 2em">
      <Button @click="(isTitlePickerOpen = true), (title = '')">
        New Note
      </Button>
    </CardGrid>

    <SearchableCardGrid
      v-if="session && notes.length"
      placeholder="Search your notes..."
    >
      <RouterLink v-for="note in notes" :to="`/note?id=${note.id}`">
        <Card
          class="card text-color"
          :description="note.desc"
          :title="note.title"
        />
      </RouterLink>
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

<style scoped>
  .card :deep(*) {
    text-decoration: none !important;
  }
</style>
