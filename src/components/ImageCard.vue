<script lang="ts" setup>
  import { useElementSize } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import MaybeLink from "./MaybeLink.vue";

  defineProps<{
    alt: string;
    description: string | Ref<string>;
    forceReload?: boolean;
    keywords?: string;
    label?: string;
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

    <div
      v-if="label"
      class="corner drop-shadow"
      title="This page has a list of other subpages. Click to explore further."
    >
      <div class="corner-clip">
        <div class="corner-text">{{ label }}</div>
      </div>
    </div>
  </MaybeLink>
</template>

<style lang="scss" scoped>
  .card {
    position: relative;
    display: block;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;

    .no-title.no-title & {
      padding-bottom: 0;
      border-radius: 0;
      box-shadow: none;

      .hover &:hover {
        border: 0;
      }
    }
  }

  .corner {
    position: absolute;
    top: -1px;
    right: -1px;
    display: block;
    width: 4em;
    height: 4em;
  }

  .corner-clip {
    height: 100%;
    background-color: #1f1f1f;
    clip-path: polygon(100% 0%, 100% 100%, 0% 0%);

    .dark & {
      background-color: white;
    }
  }

  .corner-text {
    height: 50%;
    color: white;
    text-align: right;
    transform-origin: 50% 50%;
    rotate: 45deg;

    .dark & {
      color: black;
    }
  }

  .image,
  .filter {
    width: calc(100% + 1.5em);
    margin-right: -0.75em;
    margin-bottom: 0.125em;
    margin-left: -0.75em;
    background-color: white;

    .no-title & {
      margin-bottom: -0.5em;
    }

    .hover .card:hover > & {
      width: calc(100% + 1.5em - 2px);
      margin-right: calc(-0.75em + 1px);
      margin-bottom: calc(0.125em + 2px);
      margin-left: calc(-0.75em + 1px);
    }

    .hover .no-title .card:hover > & {
      margin-bottom: -1em;
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

    .no-title & {
      display: none;
    }
  }

  .title {
    margin: 0;
    font-weight: bold;

    .no-title & {
      display: none;
    }
  }

  .description {
    margin: 0;
    margin-top: 0.25em;
    color: #666;
    font-size: 0.9em;

    .dark & {
      color: #aaa;
    }

    .no-desc & {
      display: none;
    }
  }
</style>
