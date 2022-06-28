<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import { useEventListener } from "@vueuse/core";
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";

  const started = ref(0);

  const mode = ref<"start" | "wait" | "click" | "lost" | number>("start");

  const text = computed(() => {
    if (typeof mode.value === "number") return `${mode.value}ms`;

    return {
      start: "Click to start.",
      wait: "Wait...",
      click: "GO!",
      lost: "You lost.",
    }[mode.value];
  });

  function onClick() {
    if (mode.value === "start") {
      mode.value = "wait";

      setTimeout(() => {
        mode.value = "click";
        started.value = Date.now();
      }, Math.random() * 2000 + 4000);
    } else if (mode.value === "wait") {
      mode.value = "lost";
    } else if (mode.value === "click") {
      mode.value = Date.now() - started.value;
    } else {
      mode.value = "start";
    }
  }

  useEventListener("keydown", (event) => {
    if (
      event.key === " " &&
      !event.shiftKey &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      onClick();
    }
  });
</script>

<template>
  <DocumentDisplay center>
    <Button :class="mode" class="button" @pointerdown="onClick">
      {{ text }}
    </Button>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .button {
    width: min(max(50%, 500px), 100%);
    height: min(max(33%, 300px), 100%);
    font-size: 2em;
    transition: none;

    &.wait {
      background-color: #d0d000;

      .dark & {
        background-color: #808000;
      }
    }

    &.click {
      background-color: #00c000;

      .dark & {
        background-color: #008000;
      }
    }

    &.lost {
      background-color: #c04040;

      .dark & {
        background-color: #802020;
      }
    }
  }
</style>
