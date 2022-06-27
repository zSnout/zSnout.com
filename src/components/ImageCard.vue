<script lang="ts" setup>
  import { useElementSize } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import Link from "./Link.vue";
  import MaybeLink from "./MaybeLink.vue";

  defineProps<{
    title: string | Ref<string>;
    description: string | Ref<string>;
    keywords?: string;
    to?: string;
    src: string;
  }>();

  const image = ref<HTMLImageElement>();
  const { height } = useElementSize(image);
</script>

<template>
  <MaybeLink
    class="card second-layer hoverline focusline"
    :to="to"
    :data-keywords="keywords"
  >
    <img ref="image" class="image" :src="src" aria-hidden="true" />

    <div
      class="filter"
      :style="`height: ${height}px; top: calc(-${height}px - 0.5em); margin-bottom: calc(-${height}px)`"
      aria-hidden="true"
    />

    <p class="title text-color">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </MaybeLink>
</template>

<style lang="scss" scoped>
  .card {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  .image,
  .filter {
    width: calc(100% + 1.5em);
    margin-right: -0.75em;
    margin-bottom: 0.125em;
    margin-left: -0.75em;
    border-top-left-radius: 0.25em;
    border-top-right-radius: 0.25em;
  }

  .image {
    z-index: 2;
    margin-top: -0.5em;

    .dark & {
      opacity: 0.8;
    }

    .hover .card:hover > & {
      opacity: 1;
    }
  }

  .filter {
    position: relative;
    z-index: 1;
    background: linear-gradient(to bottom, transparent, transparent 60%, white),
      transparent;

    .dark & {
      background: linear-gradient(
          to bottom,
          transparent,
          transparent 75%,
          #1f1f1f
        ),
        transparent;
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-weight: bold;
  }

  .description {
    margin: 0;
    color: #666;
    font-size: 0.9em;

    .dark & {
      color: #aaa;
    }
  }
</style>
