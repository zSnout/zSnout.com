<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import { usePointer } from "@vueuse/core";
  import { ref } from "vue";
  import { appHeight, appWidth } from "../main";

  defineProps<{
    sensitivity?: number;
    src: string;
  }>();

  const visible = ref(false);

  const x = Math.random();
  const y = Math.random();

  const { x: px, y: py } = usePointer();

  const padding = computed(() => {
    if (appWidth.value < 400) {
      return "(2.5em + 1px + 1.5em)";
    } else {
      return "(3.5em + 1px + 2em)";
    }
  });

  const lrPadding = computed(() => {
    if (appWidth.value < 400) {
      return "1.5em";
    } else {
      return "2em";
    }
  });
</script>

<template>
  <img
    class="image"
    :src="src"
    :style="{
      display: visible ? undefined : 'none',
      top: `calc(${padding} + (var(--app-height) - ${padding} - 2em - 320px) * ${y} + ${
        py - appHeight / 2
      }px / 100 * ${sensitivity ?? 1})`,
      left: `calc(${lrPadding} + (var(--app-width) - 2 * ${lrPadding} - 320px) * ${x} + ${
        px - appWidth / 2
      }px / 100 * ${sensitivity ?? 1})`,
    }"
    @load="visible = true"
  />
</template>

<style scoped>
  .image {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 320px;
    height: 320px;
    opacity: 0.3;
    filter: blur(0.5em);
  }
</style>
