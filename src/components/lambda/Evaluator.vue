<script lang="ts" setup>
  import { debouncedRef } from "@vueuse/core";
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

  const ref = debouncedRef(code, 1000);
  const compiled = useEvaluateLambda(ref);

  function msgs(result: typeof compiled.value) {
    return [
      ...result.output.split(/\n+/g).map((content) => {
        console.log(content);

        return {
          type: "log" as const,
          id: Math.random(),
          content,
        };
      }),
      {
        type: "log" as const,
        id: Math.random(),
        content: result.result,
      },
    ];
  }

  watch(ref, () => {
    messages.splice(0, messages.length, ...msgs(compiled.value));
  });

  const messages = reactive(msgs(compiled.value));
</script>

<template>
  <Console :field="''" :messages="messages" />
</template>
