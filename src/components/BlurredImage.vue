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

  const x = ref(Math.random());
  const y = ref(Math.random());

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

  const moving = ref(false);

  function randomize() {
    if (moving.value) return;

    moving.value = true;

    setTimeout(() => {
      x.value = Math.random();
      y.value = Math.random();

      setTimeout(() => {
        moving.value = false;
      }, 300);
    });
  }
</script>

<template>
  <img
    :class="{ moving }"
    class="image"
    :src="src"
    :style="{
      display: visible ? undefined : 'none',
      top: `calc(${padding} + (var(--app-height) - ${padding} - ${lrPadding} - 320px) * ${y} + ${
        py - appHeight / 2
      }px / 100 * ${sensitivity ?? 1})`,
      left: `calc(${lrPadding} + (var(--app-width) - 2 * ${lrPadding} - 320px) * ${x} + ${
        px - appWidth / 2
      }px / 100 * ${sensitivity ?? 1})`,
    }"
    draggable="false"
    @click="randomize"
    @load="visible = true"
  />
</template>

<style lang="scss" scoped>
  .image {
    position: fixed;
    z-index: 1;
    width: 320px;
    height: 320px;
    opacity: 0.3;
    filter: blur(0.5em);

    &.moving {
      transition: var(--transitions), top 0.3s, left 0.3s;
    }
  }
</style>
