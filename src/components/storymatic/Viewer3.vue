<script lang="ts" setup>
  import { useDebounceFn } from "@vueuse/core";
  import { toRef, watch } from "vue";
  import { useTypewrite } from "../../composables/useTypewrite";
  import Console, { useCompleteConsole } from "../Console.vue";
  import { storyToJS } from "./compiler3";
  import preload from "./runner3.js?raw";

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  const props = defineProps<{
    code: string;
  }>();

  let worker = createWorker(props.code, false);

  watch(
    toRef(props, "code"),
    useDebounceFn((code) => (worker = createWorker(code, true)), 1000)
  );

  function isStringable(
    value: unknown
  ): value is string | number | boolean | bigint {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "bigint"
    );
  }

  function toString(value: unknown): string {
    if (value === null || value === undefined) return "";
    if (isStringable(value)) return "" + value;
    if (typeof value === "function") return `function ${value.name}()`;

    if (Array.isArray(value))
      return value
        .map(toString)
        .filter((e) => e)
        .join("\n");

    if (typeof value === "object")
      return Object.keys(value)
        .map((key) => `${key}: ${(value as any)[key]}`)
        .join("\n");

    return "";
  }

  function onMessage({ data }: MessageEvent) {
    if (typeof data != "object" || data === null) return;

    if (data.type === "print") {
      console.log(data.content);
    } else if (data.type === "typewrite") {
      const _worker = worker;

      for (let message of data.messages) {
        const { el, done } = useTypewrite(message, data.time);
        console.log(el);

        done.then(() => {
          if (_worker !== worker) return;
          worker?.postMessage(undefined);
        });
      }
    } else if (data.type === "input") {
      const _worker = worker;

      console.prompt(data.messages[0], true).then((value) => {
        if (_worker !== worker) return;
        worker?.postMessage(value);
      });
    } else if (data.type === "inputint") {
      const _worker = worker;

      console.prompt(data.messages[0], true).then((value) => {
        if (_worker !== worker) return;

        const int = ~~value;
        if (!Number.isSafeInteger(int)) return;
        worker?.postMessage(int);
      });
    } else if (data.type === "inputfloat") {
      const _worker = worker;

      console.prompt(data.messages[0], true).then((value) => {
        if (_worker !== worker) return;

        const float = parseFloat(value);
        if (!Number.isFinite(float)) return;
        worker?.postMessage(float);
      });
    } else if (data.type === "menu") {
      const _worker = worker;

      console.select(data.messages[0], data.options).then((value) => {
        if (_worker !== worker) return;
        worker?.postMessage(value);
      });
    } else if (data.type === "confirm") {
      const _worker = worker;

      console
        .select(data.messages[0], { true: "Yes", false: "No" })
        .then((value) => {
          if (_worker !== worker) return;
          worker?.postMessage(value === "true");
        });
    } else if (data.type === "pause") {
      const _worker = worker;

      console.prompt("Press Enter to continue...", false).then(() => {
        if (_worker !== worker) return;
        worker?.postMessage(undefined);
      });
    } else if (data.type === "kill") {
      worker?.terminate();
    }
  }

  function createWorker(code: string, checkOldWorker?: boolean) {
    console.clear();
    placeholder.value = "";
    if (checkOldWorker) worker?.terminate();

    try {
      const js =
        "(async()=>{" +
        preload.replace("export {};", "") +
        storyToJS(code) +
        "})()";

      window.console.log(js);

      const worker = new Worker(`data:text/javascript,${js}`, {
        name: Math.random().toString().slice(2),
      });

      worker.onmessage = onMessage;

      worker.onerror = (event) => {
        event.preventDefault();
        console.error(event.message);
      };

      return worker;
    } catch (error: any) {
      console.error(error?.message || error || "An unknown error occurred");
    }
  }
</script>

<template>
  <Console
    v-model:field="field"
    v-model:messages="messages"
    class="console"
    :placeholder="placeholder"
    @key="onKey"
    @select="onSelect"
    @submit="onSubmit"
  />
</template>
