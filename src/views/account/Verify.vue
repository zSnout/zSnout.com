<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Title from "../../components/Title.vue";
  import { error, router, socket } from "../../main";

  error.value = "";
  const code = useRoute().query.code;

  async function verifyMe() {
    if (typeof code !== "string") {
      error.value = "Sorry, the code you used is invalid. Try again later.";
      return;
    }

    socket.emit("account:verify", code);
    socket.once("account:complete-login", () => router.replace("/"));
  }

  verifyMe();
</script>

<template>
  <DocumentDisplay center>
    <Title>Verifying your account...</Title>

    <p v-if="error">{{ error }}</p>

    <RouterLink v-if="error" to="/">Go back to zSnout.</RouterLink>
  </DocumentDisplay>
</template>
