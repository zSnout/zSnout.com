<script lang="ts" setup>
  import { useDebounceFn } from "@vueuse/core";
  import { loadPyodide } from "hoodmane-pyodide";
  import { toRef, watch } from "vue";
  import {
    PyodideStderrSymbol,
    PyodideStdoutSymbol,
    PyodideSymbol,
  } from "../../composables/symbols";
  import Console, { useCompleteConsole } from "../Console.vue";
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

  async function start() {
    console.clear();
    placeholder.value = "";
    Object.assign(window, { prompt: console.prompt });

    const py = await window[PyodideSymbol];

    py.runPythonAsync(
      `${runner}\nawait story(\n"""\n${props.code}\n""").run()`
    );
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
