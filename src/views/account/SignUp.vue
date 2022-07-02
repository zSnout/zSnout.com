<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../../components/Button.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Field from "../../components/Field.vue";
  import Spacer from "../../components/Spacer.vue";
  import VStack from "../../components/VStack.vue";
  import { useApi } from "../../composables/useApi";
  import { router, session, username as _username } from "../../main";

  const username = ref("");
  const password = ref("");
  const email = ref("");
  const error = ref("");
  const disabled = ref(false);

  async function logIn() {
    disabled.value = true;

    const result = await useApi({
      api: "account",
      method: "PUT",
      body: {
        username: username.value,
        password: password.value,
        email: email.value,
      },
      resultKeys: ["session", "username"],
      desc: "create accounts",
    });

    if (result instanceof Error) {
      error.value = result.message;
    } else {
      session.value = result.session;
      _username.value = result.username;

      router.replace("/");
    }

    disabled.value = false;
  }
</script>

<template>
  <DocumentDisplay center>
    <form style="min-width: min(500px, 100%)">
      <VStack>
        <Field
          v-model="username"
          autocomplete="username"
          maxlength="32"
          placeholder="Username..."
          @input="error = ''"
        />

        <Field
          v-model="password"
          autocomplete="password"
          placeholder="Password..."
          type="password"
          @input="error = ''"
        />

        <Field
          v-model="email"
          autocomplete="email"
          placeholder="Email Address..."
          type="email"
          @input="error = ''"
        />

        <Spacer :size="2" />

        <Button @click="logIn">Sign Up</Button>

        <p v-if="error">Error: {{ error }}</p>
      </VStack>
    </form>
  </DocumentDisplay>
</template>
