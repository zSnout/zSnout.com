<script lang="ts" setup>
  import { Ref } from "vue";
  import { dateOf } from "../composables/useDateOf";
  import MaybeLink from "./MaybeLink.vue";

  defineProps<{
    title: string | Ref<string>;
    date?: number | string | Date;
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
    <p :class="{ hasLabel: !!label }" class="title text-color">{{ title }}</p>

    <p class="description">
      <span v-if="date" class="text-color">{{ dateOf(date) }}</span>
      <span v-if="date">&nbsp;—</span>

      {{ description }}
    </p>

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    color: white;
    text-align: center;
    transform-origin: 50% 100%;
    rotate: 45deg;

    .dark & {
      color: black;
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-weight: bold;

    &.hasLabel {
      width: calc(100% - 2.5rem);
    }
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
