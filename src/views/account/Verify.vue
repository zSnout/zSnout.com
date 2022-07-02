<script lang="ts" setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Title from "../../components/Title.vue";
  import { useApi } from "../../composables/useApi";
  import { router, session, username as _username } from "../../main";

  const content = ref("");
  const code = useRoute().query.code;

  async function verifyMe() {
    if (typeof code !== "string") {
      content.value = "Sorry, the code you used is invalid. Try again later.";
      return;
    }

    const result = await useApi({
      api: "account/verifyCode",
      method: "PATCH",
      body: { verifyCode: code },
      resultKeys: ["session", "username"],
      desc: "verify accounts",
    });

    if (result instanceof Error) {
      content.value = `Error: ${result.message}`;
    } else {
      session.value = result.session;
      _username.value = result.username;

      router.replace("/");
    }
  }

  verifyMe();
</script>

<template>
  <DocumentDisplay center>
    <Title>Verifying your account...</Title>

    <p v-if="content">{{ content }}</p>

    <RouterLink v-if="content !== 'Verifying your account...'" to="/">
      Go back to homepage
    </RouterLink>
  </DocumentDisplay>
</template>
