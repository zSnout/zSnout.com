<script lang="ts" setup>
  import { Ref } from "vue";
  import Link from "./Link.vue";

  defineProps<{
    title: string | Ref<string>;
    description: string | Ref<string>;
    keywords?: string;
    to?: string;
    src: string;
  }>();
</script>

<template>
  <Link
    v-if="to"
    class="card second-layer hoverline focusline"
    :to="to"
    :data-keywords="keywords"
  >
    <img class="image" :src="src" aria-hidden="true" />
    <p class="title text-color">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </Link>

  <div
    v-else
    class="card second-layer hoverline focusline"
    :data-keywords="keywords"
  >
    <img class="image" :src="src" aria-hidden="true" />
    <p class="title">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  .image {
    width: calc(100% + 1.5em);
    margin-top: -0.5em;
    margin-right: -0.75em;
    margin-bottom: 0.25em;
    margin-left: -0.75em;
    border-top-left-radius: 0.25em;
    border-top-right-radius: 0.25em;

    .dark & {
      opacity: 0.75;
    }

    .hover .card:hover > & {
      opacity: 1;
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
