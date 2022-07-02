<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../../components/Button.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Field from "../../components/Field.vue";
  import Spacer from "../../components/Spacer.vue";
  import VStack from "../../components/VStack.vue";
  import { error, socket } from "../../main";

  const username = ref("");
  const password = ref("");
  const email = ref("");
  const disabled = ref(false);

  error.value = "";

  function signUp() {
    disabled.value = true;

    socket.emit("account:create", username.value, password.value, email.value);
    socket.once("error", () => (disabled.value = false));
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

        <Button @click="signUp">Sign Up</Button>

        <p v-if="error">Error: {{ error }}</p>
      </VStack>
    </form>
  </DocumentDisplay>
</template>
