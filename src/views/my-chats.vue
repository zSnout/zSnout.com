<script lang="ts">
  const chats = ref<ChatPreview[]>([]);

  socket.on("chat:index", (index) => (chats.value = index));
</script>

<script lang="ts" setup>
  import { ref, watchEffect } from "vue";
  import { ChatPreview } from "../../shared.client";
  import Button from "../components/Button.vue";
  import Card from "../components/Card.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import LogInForm from "../components/LogInForm.vue";
  import Modal from "../components/Modal.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import Title from "../components/Title.vue";
  import { session, socket, username } from "../main";

  const isLogInOpen = ref(false);
  const isTitlePickerOpen = ref(false);
  const title = ref("");

  watchEffect(() => {
    socket.emit("chat:request:index", session.value);
  });
</script>

<template>
  <DocumentDisplay>
    <Title>{{ username ? `${username}'s` : "My" }} Chats</Title>

    <p v-if="!session">
      Looks like you're not logged in.
      <span class="link" @click="isLogInOpen = true">Log in</span>
      or
      <span class="link" @click="isLogInOpen = true">create an account</span>
      to access the Chat app.
    </p>

    <CardGrid v-if="session && chats.length < 100" style="margin-bottom: 2em">
      <Button @click="(isTitlePickerOpen = true), (title = '')">
        Create a Chat
      </Button>
    </CardGrid>

    <SearchableCardGrid
      v-if="session && chats.length"
      placeholder="Search your chat groups..."
    >
      <Card
        v-for="chat in chats"
        class="card text-color"
        :description="
          chat.level === 'manage'
            ? 'You manage this chat.'
            : chat.level === 'comment'
            ? 'You may comment on this chat.'
            : chat.level === 'view'
            ? 'You can view this chat.'
            : 'You cannot access this chat.'
        "
        :title="chat.title"
        :to="`/chat?id=${chat.id}`"
      />
    </SearchableCardGrid>
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />

  <Modal :open="isTitlePickerOpen">
    <p>Pick a title for your chat.</p>

    <Field
      v-model="title"
      autocomplete="off"
      placeholder="Title..."
      @keydown.enter="
        title &&
          (socket.emit('chat:create', session, title),
          (isTitlePickerOpen = false))
      "
    />

    <template #buttons>
      <Button
        @click="
          title &&
            (socket.emit('chat:create', session, title),
            (isTitlePickerOpen = false))
        "
      >
        OK
      </Button>

      <Button cancel @click="isTitlePickerOpen = false">Cancel</Button>
    </template>
  </Modal>
</template>
