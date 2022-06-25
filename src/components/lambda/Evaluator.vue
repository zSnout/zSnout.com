<script lang="ts" setup>
  import { debouncedRef } from "@vueuse/core";
  import ace from "ace-builds";
  import { toRef } from "vue";
  import Console from "../Console.vue";
  import { useEvaluateLambda } from "./useEvaluateLambda";

  const props = defineProps<{
    code: string;
  }>();

  defineEmits<{
    (event: "init", editor: ace.Ace.Editor): void;
    (event: "save", value: string): void;
  }>();

  const compiled = useEvaluateLambda(debouncedRef(toRef(props, "code"), 1000));
</script>

<template>
  <Console
    :field="''"
    :messages="[
      {
        type: 'log',
        id: Math.random(),
        content: compiled,
      },
    ]"
  />
</template>
