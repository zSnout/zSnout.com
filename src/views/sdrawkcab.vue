<script lang="ts" setup>
  import { ref } from "vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import MiddleText from "../components/MiddleText.vue";
  import { username } from "../main";
  import Field from "../components/Field.vue";

  const text = ref("Welcome to zSnout.");
  if (username.value) {
    text.value = `Welcome to zSnout, ${username.value}`;
  }
</script>

<template>
  <DocumentDisplay center>
    <MiddleText>
      <Field v-model="text" placeholder="Type some text..." />

      <p>{{ text.split("").reverse().join("") }}</p>
    </MiddleText>
  </DocumentDisplay>
</template>
