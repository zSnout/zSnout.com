<script lang="ts" setup>
  import { Ref } from "vue";
  import Link from "./Link.vue";
  import MaybeLink from "./MaybeLink.vue";

  defineProps<{
    title: string | Ref<string>;
    description: string | Ref<string>;
    keywords?: string;
    label?: string;
    to?: string;
  }>();
</script>

<template>
  <MaybeLink
    class="card second-layer hoverline focusline"
    :to="to"
    :data-keywords="keywords"
  >
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
    display: block;
    text-decoration: none;
    cursor: pointer;
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
