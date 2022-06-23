<script lang="ts" setup>
  import { loadPyodide } from "hoodmane-pyodide/pyodide";
  import Console, { useCompleteConsole } from "../Console.vue";
  import { useNavLink } from "../Navigation.vue";
  import runner from "./runner1.py?raw";

  const props = defineProps<{ code: string }>();

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  const pyodide = loadPyodide({
    stderr: console.error,
    stdout: console.log,
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
  });

  useNavLink({
    title: "Execute",
    onEnter: true,
    async action() {
      console.clear();
      placeholder.value = "";

      const py = await pyodide;

      py.globals.set("code", props.code);

      Object.assign(window, {
        async prompt(placeholder: string, required: boolean) {
          return console.prompt(placeholder, required);
        },
        wait(time = 1) {
          return new Promise((resolve) => {
            setTimeout(resolve, time * 1000);
          });
        },
      });

      py.globals.set(
        "prompt",
        async (placeholder: string, required: boolean) => {
          return console.prompt(placeholder, required);
        }
      );

      py.globals.set("wait", (time = 1) => {
        return new Promise((resolve) => {
          setTimeout(resolve, time * 1000);
        });
      });

      py.runPythonAsync(runner + `\nawait story(code).run()`);
    },
  });
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
