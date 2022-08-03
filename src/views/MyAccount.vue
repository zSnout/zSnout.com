<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import Modal from "../components/Modal.vue";
  import Title from "../components/Title.vue";
  import { error, session, socket, username } from "../main";

  const isLogOutOtherDevicesOpen = ref(false);
  const logOutOtherDevicesMessage = ref("");

  const open = ref(false);
  const isFieldShown = ref(false);
  const message = ref("");
  const field = ref("");
  const field2 = ref("");
  const field3 = ref("");
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
      field.value = username.value;
    } else {
      field.value = "";
    }

    field2.value = "";
    field3.value = "";
  }

  function confirmSet() {
    const mode = type.value;

    if (mode === "password") {
      socket.emit(
        `account:update:password`,
        session.value,
        field.value,
        field2.value
      );
    } else if (mode === "username") {
      socket.emit("account:update:username", session.value, field.value);
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
    <Title>@{{ username }}'s Account</Title>

    <CardGrid>
      <Button @click="(username = ''), (session = ''), $router.push('/')">
        Log Out
      </Button>

      <Button @click="logOutOtherDevices">Log Out Other Devices</Button>

      <Button @click="change('username')">Change Username</Button>

      <Button @click="change('password')">Change Password</Button>
    </CardGrid>
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
      v-model="field"
      :autocomplete="type"
      :placeholder="type === 'password' ? 'Old Password' : 'New Username'"
      :type="type === 'password' ? 'password' : 'text'"
      @input="error = ''"
    />

    <template v-if="type === 'password' && isFieldShown">
      <Field
        v-model="field2"
        autocomplete="new-password"
        placeholder="New Password"
        type="password"
        @input="error = ''"
      />

      <Field
        v-model="field3"
        autocomplete="new-password"
        placeholder="Verify Password"
        type="password"
        @input="error = ''"
      />
    </template>

    <p v-if="(type === 'password' && field2 !== field3) || error">
      {{
        type === "password" && field2 !== field3
          ? "Your passwords should match."
          : error
      }}
    </p>

    <template #buttons>
      <p v-if="!isFieldShown"></p>

      <template v-else>
        <Button @click="confirmSet">OK</Button>

        <Button cancel @click="open = false">Cancel</Button>
      </template>
    </template>
  </Modal>
</template>
