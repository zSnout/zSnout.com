<script lang="ts" setup>
  import { loadPyodide } from "hoodmane-pyodide";
  import {
    PyodideStderrSymbol,
    PyodideStdoutSymbol,
    PyodideSymbol,
  } from "../../composables/symbols";
  import Console, { useCompleteConsole } from "../Console.vue";
  import { useNavLink } from "../Navigation.vue";
  import runner from "./runner1.py?raw";

  const props = defineProps<{ code: string }>();

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  window[PyodideStderrSymbol] = console.error;
  window[PyodideStdoutSymbol] = console.log;

  if (!window[PyodideSymbol]) {
    window[PyodideSymbol] = loadPyodide({
      stderr: (e) => window[PyodideStderrSymbol](e),
      stdout: (e) => window[PyodideStdoutSymbol](e),
      stdin: () => prompt() || "",
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
    });
  }

  useNavLink({
    title: "Execute",
    onEnter: true,
    async action() {
      console.clear();
      placeholder.value = "";
      Object.assign(window, { prompt: console.prompt });

      const py = await window[PyodideSymbol];

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
