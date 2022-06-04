<script lang="ts" setup>
  import { RouterLink } from "vue-router";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import { useTitle } from "../composables/useTitle";

  useTitle("Oops, 404");
</script>

<template>
  <DocumentDisplay center>
    <h1>Oops, 404! Guess we haven't made this yet...</h1>
    <p>
      How about
      <RouterLink replace to="/">going back home?</RouterLink>
    </p>
  </DocumentDisplay>
</template>
