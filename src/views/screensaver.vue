<script lang="ts" setup>
  import { MaybeElement, useElementBounding, useRafFn } from "@vueuse/core";
  import { useIntervalFn } from "@vueuse/shared";
  import images from "virtual:image-list";
  import { reactive, ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useRandomItem } from "../composables/useRandomItem";
  import { appWidth } from "../main";

  interface Image {
    id: number;
    size: number;
    speed: number;
    src: string;
    x: number;
    y: number;
  }

  const alive = reactive<Image[]>([]);
  let lastSize: number = 0;

  function generateSize(): number {
    const size = Math.floor(3 * Math.random());

    if (size === lastSize) {
      return generateSize();
    }

    return (lastSize = size);
  }

  function createImage() {
    const size = (generateSize() + 1) * 80;

    alive.push({
      id: Math.random(),
      size,
      speed: size / 160,
      src: useRandomItem(images),
      x: Math.random(),
      y: innerHeight + 16,
    });
  }

  function updateImages() {
    for (const image of alive) {
      if (image.y < -image.size - 100) {
        alive.splice(alive.indexOf(image), 1);
      }

      image.y -= image.speed;
    }
  }

  createImage();
  useIntervalFn(createImage, () => (1920 / appWidth.value) * 1000);
  useRafFn(updateImages);

  const parent = ref<MaybeElement>();
</script>

<template>
  <FullscreenDisplay ref="parent">
    <img
      v-for="image in alive"
      :key="image.id"
      class="image shadow"
      :src="image.src"
      :style="{
        left: `calc(${image.x} * (100% - ${image.size}px))`,
        top: `${image.y}px`,
        width: `${image.size}px`,
        height: `${image.size}px`,
      }"
    />
  </FullscreenDisplay>
</template>

<style scoped>
  .image {
    position: absolute;
    background-color: white;
  }
</style>
