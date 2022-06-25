<script lang="ts" setup>
  import { debouncedRef, useDebounceFn } from "@vueuse/core";
  import ace from "ace-builds";
  import { reactive, toRef, watch } from "vue";
  import Console from "../Console.vue";
  import { useEvaluateLambda } from "./useEvaluateLambda";

  const props = defineProps<{
    code: string;
  }>();

  defineEmits<{
    (event: "init", editor: ace.Ace.Editor): void;
    (event: "save", value: string): void;
  }>();

  const code = toRef(props, "code");

  watch(code, () => {
    if (messages.length === 1) {
      messages.push({
        type: "log",
        id: Math.random(),
        content: "Waiting for input to finish...",
      });
    }
  });

  const compiled = useEvaluateLambda(debouncedRef(code, 1000));

  watch(compiled, (result: string | number) => {
    messages.splice(0, messages.length, {
      type: "log",
      id: Math.random(),
      content: result,
    });
  });

  const messages = reactive([
    { type: "log" as const, id: Math.random(), content: compiled },
  ]);

  watch(compiled, () => {});
</script>

<template>
  <Console :field="''" :messages="messages" />
</template>
