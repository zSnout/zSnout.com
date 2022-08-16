<script lang="ts" setup>
  import { Ref } from "vue";
  import Link from "./Link.vue";

  defineProps<{
    title: string | Ref<string>;
    description: string | Ref<string>;
    keywords?: string;
    to?: string;
  }>();
</script>

<template>
  <Link
    v-if="to"
    class="card second-layer hoverline focusline"
    :data-keywords="keywords"
    :to="to"
  >
    <p class="title text-color">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </Link>

  <div
    v-else
    class="card second-layer hoverline focusline"
    :data-keywords="keywords"
  >
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

    .no-desc & {
      display: none;
    }
  }
</style>
