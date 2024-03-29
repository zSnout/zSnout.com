<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import Modal from "../components/Modal.vue";
  import Title from "../components/Title.vue";
  import {
    connected,
    error,
    session,
    socket,
    username,
    willNotifyForBlog,
  } from "../main";
  import InlineButton from "../components/InlineButton.vue";

  const isLogOutOtherDevicesOpen = ref(false);
  const logOutOtherDevicesMessage = ref("");

  const open = ref(false);
  const isFieldShown = ref(false);
  const message = ref("");
  const oldPassword = ref("");
  const newPassword = ref("");
  const verifyNewPassword = ref("");
  const type = ref<"username" | "password">("username");

  socket.on("account:done:reset-session", () => {
    logOutOtherDevicesMessage.value =
      "Your other devices have been logged out.";

    setTimeout(() => {
      isLogOutOtherDevicesOpen.value = false;
    }, 1000);
  });

  function logOutOtherDevices() {
    isLogOutOtherDevicesOpen.value = true;
    logOutOtherDevicesMessage.value = "Logging out your other devices...";
    socket.emit("account:reset-session", session.value, true);
  }

  function change(_type: "username" | "password") {
    open.value = true;
    isFieldShown.value = true;
    message.value = `Pick a new ${(type.value = _type)} below.`;

    if (_type === "username") {
      oldPassword.value = username.value;
    } else {
      oldPassword.value = "";
    }

    newPassword.value = "";
    verifyNewPassword.value = "";
  }

  function confirmSet() {
    const mode = type.value;

    if (mode === "password") {
      socket.emit(
        "account:update:password",
        session.value,
        oldPassword.value,
        newPassword.value
      );
    } else if (mode === "username") {
      socket.emit("account:update:username", session.value, oldPassword.value);
    }

    isFieldShown.value = false;

    function onError() {
      socket.off(`account:done:update:${mode}`, onDone);

      isFieldShown.value = true;
    }

    function onDone() {
      socket.off("error", onError);

      message.value = `Your ${mode} has been changed.`;
      setTimeout(() => (open.value = false), 1000);
    }

    socket.once("error", onError);
    socket.once(`account:done:update:${mode}`, onDone);
  }
</script>

<template>
  <DocumentDisplay>
    <Title>{{ username }}'s Account</Title>

    <CardGrid>
      <Button @click="(username = ''), (session = ''), $router.push('/')">
        Log Out
      </Button>

      <Button @click="logOutOtherDevices">Log Out Other Devices</Button>

      <Button @click="change('username')">Change Username</Button>

      <Button @click="change('password')">Change Password</Button>
    </CardGrid>

    <p v-if="session">
      You
      {{ willNotifyForBlog ? "are currently receiving" : "will not receive" }}
      notifications for updates to the zSnout blog.

      <template v-if="connected">
        Click
        <InlineButton
          @click="
            socket.emit('blog:update:will-notify', session, !willNotifyForBlog)
          "
        >
          here
        </InlineButton>
        to opt-{{ willNotifyForBlog ? "out of" : "in to" }} notifications.
      </template>

      <template v-else>
        You cannot change notification settings when offline.
      </template>
    </p>

    <p v-else>
      <InlineButton @click="open = true">Log in</InlineButton>
      to a zSnout account or
      <InlineButton @click="open = true">sign up</InlineButton>
      to receive notification for new blog posts.
    </p>
  </DocumentDisplay>

  <Modal :open="isLogOutOtherDevicesOpen">
    <p>{{ logOutOtherDevicesMessage }}</p>

    <template #buttons>
      <p></p>
    </template>
  </Modal>

  <Modal :open="open">
    <p>{{ message }}</p>

    <Field
      v-if="isFieldShown"
      v-model="oldPassword"
      :autocomplete="type"
      :placeholder="type === 'password' ? 'Old Password' : 'New Username'"
      :type="type === 'password' ? 'password' : 'text'"
      @input="error = ''"
    />

    <template v-if="type === 'password' && isFieldShown">
      <Field
        v-model="newPassword"
        autocomplete="new-password"
        placeholder="New Password"
        type="password"
        @input="error = ''"
      />

      <Field
        v-model="verifyNewPassword"
        autocomplete="new-password"
        placeholder="Verify Password"
        type="password"
        @input="error = ''"
      />
    </template>

    <p
      v-if="(type === 'password' && newPassword !== verifyNewPassword) || error"
    >
      {{
        type === "password" && newPassword !== verifyNewPassword
          ? "Your passwords should match."
          : error
      }}
    </p>

    <template #buttons v-if="isFieldShown">
      <Button @click="confirmSet">OK</Button>

      <Button cancel @click="open = false">Cancel</Button>
    </template>
  </Modal>
</template>
