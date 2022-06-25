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
    if (
      messages[messages.length - 1].content !== "Waiting for input to finish..."
    ) {
      messages.push({
        type: "log",
        id: Math.random(),
        content: "Waiting for input to finish...",
      });
    }
  });

  const compiled = useEvaluateLambda(debouncedRef(code, 1000));

  function msgs(result: typeof compiled.value) {
    if (typeof result === "string") {
      return [
        {
          type: "log" as const,
          id: Math.random(),
          content: result,
        },
      ];
    } else {
      return result.map((content) => ({
        type: "log" as const,
        id: Math.random(),
        content,
      }));
    }
  }

  watch(compiled, (result) => {
    messages.splice(0, messages.length, ...msgs(result));
  });

  const messages = reactive(msgs(compiled.value));
</script>

<template>
  <Console :field="''" :messages="messages" />
</template>
