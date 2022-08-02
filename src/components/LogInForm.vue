<script lang="ts" setup>
  import { Ref, ref } from "vue";
  import { error, socket } from "../main";
  import Field from "./Field.vue";
  import Modal from "./Modal.vue";
  import Spacer from "./Spacer.vue";
  import VStack from "./VStack.vue";
  import Button from "./Button.vue";

  const { signUp } = defineProps<{ open: boolean; signUp?: boolean }>();
  const emit = defineEmits<(event: "update:open", open: boolean) => void>();

  const username = ref("");
  const password = ref("");
  const email = ref("");
  const disabled = ref(false);
  const isSigningUp = ref(signUp || false);
  error.value = "";

  socket.on("account:done:verify", () => emit("update:open", false));
  socket.on("error", () => (disabled.value = false));

  function logIn() {
    if (disabled.value) return;
    disabled.value = true;

    if (isSigningUp.value) {
      socket.emit(
        "account:create",
        username.value,
        password.value,
        email.value
      );
    } else {
      socket.emit("account:login", username.value, password.value);
    }
  }
</script>

<template>
  <Modal :open="open">
    <form>
      <VStack>
        <Field
          v-model="username"
          autocomplete="username"
          maxlength="32"
          placeholder="Username"
        />

        <Field
          v-model="password"
          :autocomplete="isSigningUp ? 'new-password' : 'password'"
          placeholder="Password"
          type="password"
        />

        <Field
          v-if="isSigningUp"
          v-model="email"
          autocomplete="email"
          placeholder="Email Address"
        />

        <Spacer :size="2" />

        <p v-if="error">Error: {{ error }}</p>
      </VStack>
    </form>

    <template #buttons>
      <Button :disabled="disabled" @click="logIn">
        {{ isSigningUp ? "Sign Up" : "Log In" }}
      </Button>

      <Button @click="isSigningUp = !isSigningUp">
        {{ isSigningUp ? "Switch to Log In" : "Switch to Sign Up" }}
      </Button>

      <Button cancel @click="$emit('update:open', false)">Cancel</Button>
    </template>
  </Modal>
</template>
