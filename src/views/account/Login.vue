<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../../components/Button.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Field from "../../components/Field.vue";
  import Labeled from "../../components/Labeled.vue";
  import Spacer from "../../components/Spacer.vue";
  import VStack from "../../components/VStack.vue";
  import { useApi } from "../../composables/useApi";
  import { router, session, username as _username } from "../../main";

  const username = ref("");
  const password = ref("");
  const error = ref("");
  const disabled = ref(false);

  async function logIn() {
    disabled.value = true;

    const result = await useApi({
      api: "account",
      method: "POST",
      body: { username: username.value, password: password.value },
      resultKeys: ["session", "username"],
      desc: "log users in",
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
        <Labeled label="Username">
          <Field
            v-model="username"
            autocomplete="username"
            maxlength="32"
            placeholder="Username..."
            @input="error = ''"
          />
        </Labeled>

        <Labeled label="Password">
          <Field
            v-model="password"
            autocomplete="password"
            placeholder="Password..."
            type="password"
            @input="error = ''"
          />
        </Labeled>

        <Spacer :size="2" />

        <Button @click="logIn">Log In</Button>

        <p v-if="error">Error: {{ error }}</p>
      </VStack>
    </form>
  </DocumentDisplay>
</template>
