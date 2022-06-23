<script lang="ts" setup>
  import { loadPyodide } from "hoodmane-pyodide";
  import Console, { useCompleteConsole } from "../Console.vue";
  import { useNavLink } from "../Navigation.vue";
  import runner from "./runner1.py?raw";

  const props = defineProps<{ code: string }>();

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  const pyodide = loadPyodide({
    stderr: (e) => console.error(e),
    stdout: (e) => console.log(e),
    stdin: () => prompt() || "",
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
  });

  useNavLink({
    title: "Execute",
    onEnter: true,
    async action() {
      console.clear();
      placeholder.value = "";
      Object.assign(window, { prompt: console.prompt });

      const py = await pyodide;

      py.runPythonAsync(
        `${runner}\nawait story(\n"""\n${props.code}\n""").run()`
      );
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
