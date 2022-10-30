<script lang="ts" setup>
  import { vOnLongPress } from "@vueuse/components";
  import { onUnmounted, reactive, ref, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import { ChatMessage, ChatPermissionLevel } from "../../shared.client";
  import Button from "../components/Button.vue";
  import ContextMenu from "../components/ContextMenu.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Dropdown from "../components/Dropdown.vue";
  import Field from "../components/Field.vue";
  import HStack from "../components/HStack.vue";
  import InlineButton from "../components/InlineButton.vue";
  import InlineField from "../components/InlineField.vue";
  import LogInForm from "../components/LogInForm.vue";
  import MenuEntry from "../components/MenuEntry.vue";
  import Modal from "../components/Modal.vue";
  import Spacer from "../components/Spacer.vue";
  import StickyBottomRegion from "../components/StickyBottomRegion.vue";
  import StickyTopRegion from "../components/StickyTopRegion.vue";
  import TrashIcon from "../components/TrashIcon.vue";
  import {
    connected,
    router,
    session,
    socket,
    username,
    useSocketListener,
  } from "../main";

  type Message = ChatMessage & { localOnly?: string };

  const currentMessage = ref<Message>();
  const id = "" + useRoute().query.id;
  const isCtxOpen = ref(false);
  const isLogInOpen = ref(false);
  const message = ref("");
  const messages = reactive<Message[]>([]);
  const permission = ref<ChatPermissionLevel | "waiting">("waiting");
  const title = ref("Loading title...");

  useSocketListener("chat:message:delete", (chatId, messageId) => {
    if (chatId === id) {
      const index = messages.findIndex(({ id }) => id === messageId);

      if (index !== -1) {
        messages.splice(index, 1);
      }
    }
  });

  useSocketListener("chat:message:list", (chatId, _messages) => {
    if (chatId === id) {
      messages.splice(0, messages.length, ..._messages);

      setTimeout(() => scrollTo(0, 1000000));
    }
  });

  useSocketListener("chat:message:update", (chatId, message) => {
    if (chatId === id) {
      let msg: Message | undefined;

      if (message.from === username.value) {
        msg = messages.find((msg) => msg.localOnly === message.content);
      } else {
        msg = messages.find((msg) => msg.id === message.id);
      }

      if (msg) {
        msg.content = message.content;
        msg.from = message.from;
        msg.id = message.id;
        msg.timestamp = message.timestamp;

        delete msg.localOnly;
      } else {
        messages.push(message);
      }

      if (document.body.scrollHeight - window.innerHeight + 8 >= scrollY) {
        setTimeout(() => scrollTo(0, 1000000));
      }
    }
  });

  useSocketListener("chat:update:title", (chatId, _title) => {
    if (chatId === id) {
      title.value = _title;
      document.title = `${title.value} | zSnout`;
    }
  });

  useSocketListener("chat:permission", (chatId, level) => {
    if (chatId === id) {
      permission.value = level;
    }
  });

  watchEffect(() => {
    socket.emit("chat:watch:start", session.value, id);
  });

  useSocketListener("connect", () => {
    socket.emit("chat:watch:start", session.value, id);
  });

  onUnmounted(() => socket.emit("chat:watch:stop", id));

  function onSubmit(event?: Event) {
    event?.preventDefault();

    if (message.value) {
      socket.emit("chat:message:send", session.value, id, message.value);
      messages.push({
        from: username.value,
        content: "Sending your message...",
        id: window.crypto?.randomUUID() || "",
        timestamp: Date.now(),
        localOnly: message.value.slice(0, 1000),
      });

      message.value = "";
    }
  }

  function openCtxMenu(message: Message) {
    currentMessage.value = message;
    isCtxOpen.value = true;
  }

  function deleteMessage() {
    isCtxOpen.value = false;

    if (currentMessage.value) {
      socket.emit(
        "chat:message:delete",
        session.value,
        id,
        currentMessage.value.id
      );
    }
  }

  const isEditOpen = ref(false);
  const editing = ref("");

  function editMessage() {
    if (currentMessage.value && currentMessage.value.from === username.value) {
      isEditOpen.value = true;
      editing.value = currentMessage.value.content;
    }
  }

  function actuallyEdit() {
    if (currentMessage.value) {
      isEditOpen.value = false;
      currentMessage.value.content = editing.value;

      socket.emit(
        "chat:message:update",
        session.value,
        id,
        currentMessage.value.id,
        editing.value
      );
    }
  }

  const isMembersListOpen = ref(false);

  const members = reactive<Record<string, ChatPermissionLevel>>(
    Object.create(null)
  );

  useSocketListener("chat:update:members", (chatId, _members) => {
    if (chatId === id) {
      for (const key in members) {
        delete members[key];
      }

      Object.assign(members, _members);
    }
  });

  function showMembers() {
    if (permission.value !== "manage") return;

    queuedMessages.splice(0, queuedMessages.length);
    socket.emit("chat:request:members", session.value, id);
    isMembersListOpen.value = true;
  }

  const queuedMessages: string[] = [];

  function updateMembers() {
    if (permission.value !== "manage") return;

    for (const message of queuedMessages) {
      socket.emit("chat:message:send", session.value, id, message);
    }

    queuedMessages.splice(0, queuedMessages.length);
    socket.emit("chat:update:members", session.value, id, members);
  }

  const newUser = ref("");

  function addNewUser(event?: Event) {
    event?.preventDefault();
    if (!newUser.value) return;

    members[newUser.value] = "comment";
    queuedMessages.push(`(added ${newUser.value})`);
    newUser.value = "";
  }

  function removeMember(member: string) {
    queuedMessages.push(`(removed ${member})`);
    delete members[member];
  }

  const isLeaveOpen = ref(false);

  function leaveThisChat() {
    isLeaveOpen.value = true;
  }

  function actuallyLeave() {
    isLeaveOpen.value = false;
    socket.emit("chat:leave", session.value, id);
    router.push("/my-chats");
  }
</script>

<template>
  <DocumentDisplay center no-footer>
    <StickyTopRegion class="normalize">
      <p v-if="!connected">
        Looks like you're temporarily offline. zSnout is reconnecting...
      </p>

      <p v-if="!session">
        You're not logged in.
        <InlineButton @click="isLogInOpen = true">Log in</InlineButton>
        or
        <InlineButton @click="isLogInOpen = true">sign up</InlineButton>
        to access this chat.
      </p>

      <p v-else-if="permission === 'none'">
        Looks like you don't have permission to access this chat!
      </p>

      <HStack v-else-if="connected && permission === 'manage'" wraps>
        <InlineField
          :maxlength="100"
          :model-value="title"
          style="flex: 1"
          @update:model-value="
            socket.emit('chat:update:title', session, id, (title = $event))
          "
        />

        <Button pre style="font-size: 1rem" @click="showMembers">
          Edit Members
        </Button>
      </HStack>

      <HStack v-else-if="connected" wraps>
        <p style="flex: 1">{{ title }}</p>

        <Button pre style="font-size: 1rem" @click="leaveThisChat">
          Leave this Chat
        </Button>
      </HStack>

      <p v-else-if="connected">{{ title }}</p>
    </StickyTopRegion>

    <div class="normalize">
      <template
        v-for="(message, index) in messages"
        :key="message.id"
        class="message"
      >
        <div
          v-if="index === 0 || messages[index - 1].from !== message.from"
          class="name"
        >
          {{ message.from }}:
        </div>

        <div
          v-on-long-press="
            (event) => (event.preventDefault(), openCtxMenu(message))
          "
          @contextmenu="$event.preventDefault(), openCtxMenu(message)"
          @mousedown="$event.preventDefault()"
        >
          {{ message.content }}
        </div>
      </template>
    </div>

    <!-- Spacer has default content that says `i`, so we override that with an empty string. -->
    <Spacer>{{ "" }}</Spacer>

    <StickyBottomRegion class="normalize">
      <form
        v-if="permission === 'manage' || permission === 'comment'"
        style="font-size: 1rem"
        @submit="onSubmit"
      >
        <HStack>
          <Field
            v-model="message"
            :maxlength="1000"
            placeholder="Send a message..."
            style="flex: 1"
          />

          <Button @click="onSubmit">Send</Button>
        </HStack>
      </form>
    </StickyBottomRegion>
  </DocumentDisplay>

  <LogInForm v-model:open="isLogInOpen" />

  <ContextMenu v-model:open="isCtxOpen">
    <MenuEntry
      :disabled="currentMessage?.from !== username"
      @click="deleteMessage"
    >
      Delete Message
    </MenuEntry>

    <MenuEntry
      :disabled="currentMessage?.from !== username"
      @click="editMessage"
    >
      Edit Message
    </MenuEntry>
  </ContextMenu>

  <Modal :open="permission === 'manage' && isMembersListOpen">
    <form @submit="addNewUser">
      <HStack>
        <Field v-model="newUser" placeholder="Type someone's username..." />

        <Button pre @click="addNewUser">Add Member</Button>
      </HStack>
    </form>

    <HStack v-for="(_, member) in members" :key="member" class="member">
      <div class="second-layer">
        {{ member }}
      </div>

      <Spacer />

      <div v-if="member === username" class="second-layer">Not Removable</div>

      <template v-else>
        <Dropdown v-model="members[member]" class="level">
          <option value="view">Viewer</option>
          <option value="comment">Commenter</option>
          <option value="manage">Manager</option>
        </Dropdown>

        <div class="second-layer trash-div">
          <TrashIcon class="trash" @click="removeMember(member)" />
        </div>
      </template>
    </HStack>

    <template #buttons>
      <Button @click="updateMembers(), (isMembersListOpen = false)">OK</Button>

      <Button
        cancel
        @click="
          socket.emit('chat:request:members', session, id),
            (isMembersListOpen = false)
        "
      >
        Cancel
      </Button>
    </template>
  </Modal>

  <Modal
    :open="(permission === 'view' || permission === 'comment') && isLeaveOpen"
  >
    <p>
      Are you sure you want to leave {{ title }}? You can always contact the
      chat owner to be re-added.
    </p>

    <template #buttons>
      <Button cancel @click="isLeaveOpen = false">Cancel</Button>

      <Button @click="actuallyLeave">OK</Button>
    </template>
  </Modal>

  <Modal :open="currentMessage?.from === username && isEditOpen">
    <p>Edit your message below, then click OK to send it.</p>

    <Field v-model="editing" :maxlength="1000" />

    <template #buttons>
      <Button @click="actuallyEdit">OK</Button>

      <Button cancel @click="isEditOpen = false">Cancel</Button>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
  .normalize {
    width: 100%;
    text-align: left;

    &.sticky {
      width: calc(100% + 2rem);
    }
  }

  .name {
    position: sticky;
    top: 3.5em + 4.25em;
    margin-left: -2em;
    padding: 0 2em;
    font-weight: bold;
    background-color: var(--background-color);

    &:not(:first-child) {
      margin-top: 1em;
    }

    @media (max-width: 400px) {
      top: 2.5em + 4.5em;
    }
  }

  .member {
    align-items: center;
  }

  .level.level {
    width: auto;
  }

  .trash-div {
    height: 2.5em;
    cursor: pointer;
  }

  .trash {
    width: 1.5em;
    height: 1.5em;
    color: var(--text-color);
  }
</style>
