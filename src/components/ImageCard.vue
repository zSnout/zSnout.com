<script lang="ts" setup>
  import { useElementSize } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import MaybeLink from "./MaybeLink.vue";

  defineProps<{
    alt: string;
    description: string | Ref<string>;
    forceReload?: boolean;
    keywords?: string;
    src: string;
    title: string | Ref<string>;
    to?: string;
  }>();

  const image = ref<HTMLImageElement>();
  const { height } = useElementSize(image);

  const loaded = ref(false);
</script>

<template>
  <MaybeLink
    class="card second-layer hoverline focusline"
    :force-reload="forceReload"
    :to="to"
    :data-keywords="keywords"
  >
    <img
      ref="image"
      class="image"
      :alt="alt"
      :src="src"
      :style="loaded ? '' : 'display: none'"
      aria-hidden="true"
      @load="loaded = true"
    />

    <div
      class="filter"
      :style="{
        height: `${height}px`,
        top: `calc(-${height}px - 0.5em)`,
        marginBottom: `calc(-${height}px)`,
        display: loaded ? undefined : 'none',
      }"
      aria-hidden="true"
    />

    <p class="title text-color">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </MaybeLink>
</template>

<style lang="scss" scoped>
  .card {
    display: block;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
  }

  .image,
  .filter {
    width: calc(100% + 1.5em);
    margin-right: -0.75em;
    margin-bottom: 0.125em;
    margin-left: -0.75em;

    .hover .card:hover > & {
      width: calc(100% + 1.5em - 2px);
      margin-right: calc(-0.75em + 1px);
      margin-bottom: calc(0.125em + 2px);
      margin-left: calc(-0.75em + 1px);
    }
  }

  .image {
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
