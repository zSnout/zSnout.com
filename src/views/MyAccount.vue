<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Modal from "../components/Modal.vue";
  import Title from "../components/Title.vue";
  import { session, socket, username } from "../main";

  const isLogOutOtherDevicesOpen = ref(false);
  const logOutOtherDevicesMessage = ref("");

  socket.on("account:done:reset-session", () => {
    logOutOtherDevicesMessage.value =
      "Your other devices have been logged out.";

    setTimeout(() => {
      isLogOutOtherDevicesOpen.value = false;
    }, 1000);
  });
</script>

<template>
  <DocumentDisplay>
    <Title>My Account</Title>

    <CardGrid>
      <Button @click="(username = ''), (session = ''), $router.push('/')">
        Log Out
      </Button>

      <Button
        @click="
          (logOutOtherDevicesMessage = 'Logging out your other devices...'),
            socket.emit('account:reset-session', session, true)
        "
      >
        Log Out Other Devices
      </Button>
    </CardGrid>
  </DocumentDisplay>

  <Modal :open="isLogOutOtherDevicesOpen">
    <p>{{ logOutOtherDevicesMessage }}</p>

    <template #buttons></template>
  </Modal>
</template>
