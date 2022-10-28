<script lang="ts">
  const stories = ref<StoryPreview[]>([]);

  socket.on("story:index", (index) => (stories.value = index));
</script>

<script lang="ts" setup>
  import { ref, watchEffect } from "vue";
  import { StoryPreview } from "../../shared.client";
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
    socket.emit("story:request:index", session.value);
  });
</script>

<template>
  <DocumentDisplay>
    <Title>{{ username ? `${username}'s` : "My" }} Stories</Title>

    <p v-if="!session">
      Looks like you're not logged in.
      <span class="link" @click="isLogInOpen = true">Log in</span>
      or
      <span class="link" @click="isLogInOpen = true">create an account</span>
      to access the Stories app.
    </p>

    <CardGrid v-if="session && stories.length < 100" style="margin-bottom: 2em">
      <Button @click="(isTitlePickerOpen = true), (title = '')">
        New Story
      </Button>
    </CardGrid>

    <SearchableCardGrid
      v-if="session && stories.length"
      placeholder="Search your stories..."
    >
      <Card
        v-for="story in stories"
        class="card text-color"
        :description="`${story.activeThreadCount} active threads.`"
        :title="story.title"
        :to="`/story?id=${story.id}`"
      />
    </SearchableCardGrid>
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />

  <Modal :open="isTitlePickerOpen">
    <p>Pick a title for your story.</p>

    <Field
      v-model="title"
      autocomplete="off"
      placeholder="Title..."
      @keydown.enter="
        title &&
          (socket.emit('story:create', session, title),
          (isTitlePickerOpen = false))
      "
    />

    <template #buttons>
      <Button
        @click="
          title &&
            (socket.emit('story:create', session, title),
            (isTitlePickerOpen = false))
        "
      >
        OK
      </Button>

      <Button cancel @click="isTitlePickerOpen = false">Cancel</Button>
    </template>
  </Modal>
</template>
