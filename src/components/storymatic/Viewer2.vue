<script lang="ts" setup>
  import { useDebounceFn } from "@vueuse/core";
  import { toRef, watch } from "vue";
  import { useTypewrite } from "../../composables/useTypewrite";
  import Console, { useCompleteConsole } from "../Console.vue";
  import { Storymatic } from "./runner2.js";

  const props = defineProps<{ code: string }>();

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  Storymatic.tooltip = (text, callback) => {
    placeholder.value = text;
    callback?.();
  };

  Storymatic.write = (text, callback) => {
    console.log(text);
    callback?.();
  };

  Storymatic.print = (text, callback) => {
    Storymatic.write(text, () => {
      Storymatic.tooltip("Press Enter to continue...", () => {
        Storymatic.waitFor("Enter", true, () => {
          Storymatic.tooltip("", callback);
        });
      });
    });
  };

  Storymatic.image = (src, callback) => {
    const image = new Image();
    image.src = src;
    console.log(image);
    callback?.();
  };

  Storymatic.line = (callback) => {
    console.line();
    callback?.();
  };

  Storymatic.clear = (callback) => {
    console.clear();
    callback?.();
  };

  Storymatic.type = (text, time, callback) => {
    const { el, done } = useTypewrite(text, time);

    console.log(el);
    done.then(callback);
  };

  Storymatic.input = async (text, callback) => {
    const answer = await console.prompt(text, true);
    callback?.(answer);
  };

  Storymatic.choice = async (text, choices, callback) => {
    // Spreading `choices`, an array, gives an object with
    // array indices as keys and its items as values.

    const answer = await console.select(text, { ...choices });
    callback?.(answer);
  };

  Storymatic.waitFor = async (key, once, callback) => {
    Object.assign(window, { c: console });

    if (once) {
      console.key(key).then(() => callback?.(key));
    } else {
      console.bindKey(key, () => callback?.(key));
    }
  };

  let prev: Storymatic | undefined;
  function start() {
    console.clear();
    if (prev) prev.stopped = true;

    prev = new Storymatic(props.code, (story) => {
      Storymatic.waitingFor.splice(0, Storymatic.waitingFor.length);
      Storymatic.tooltip("", () => {
        Storymatic.clear(() => {
          story.start();
        });
      });
    });

    Object.assign(window, { prev });
  }

  start();
  watch(toRef(props, "code"), useDebounceFn(start, 1000));
</script>

<template>
  <Console
    v-model:field="field"
    v-model:messages="messages"
    :placeholder="placeholder"
    @key="onKey"
    @select="onSelect"
    @submit="onSubmit"
  />
</template>
