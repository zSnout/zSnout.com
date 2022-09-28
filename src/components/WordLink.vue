<!-- Used in language/index.md. -->

<script lang="ts" setup>
  defineProps<{
    comma?: boolean;
    isText?: boolean;
    word: string;
  }>();

  function clearField() {
    const field = document.getElementById("language-field");
    if (!field) return;

    field.value = "";
  }
</script>

<!-- prettier-ignore -->
<template>
  <template v-if="isText || word[0].toUpperCase() === word[0]">
    {{ word }}{{ comma ? ", " : "" }}
  </template>

  <template v-else>
    <a :href="`#word-${word}`" @click="clearField">{{ word }}</a>{{ comma ? ", " : "" }}
  </template>
</template>
