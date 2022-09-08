<script lang="ts" setup>
  import { create } from "random-seed";
  import { computed, Ref } from "vue";
  import { dateOf } from "../composables/useDateOf";
  import MaybeLink from "./MaybeLink.vue";

  const props = defineProps<{
    title: string | Ref<string>;
    date?: number | string | Date;
    description: string | Ref<string>;
    keywords?: string;
    label?: string;
    to?: string;
  }>();

  const colors: Record<string, number> = {
    "": 0,
    "code": 5,
    "math": 2,
    "menu": 0,
    "meta": 6,
    "camp": 1,
    "saurs": 4,
  };

  const color = computed(() => {
    return colors[props.label || ""] || create(props.label).intBetween(1, 6);
  });
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
      <div
        :class="{ [`color-${color}`]: true, bright: !!color }"
        class="corner-clip"
      >
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

  $colors-light: (
    1: #990000,
    2: #996300,
    3: #999900,
    4: #009900,
    5: #000099,
    6: #990099,
  );

  $colors-dark: (
    1: #ff6666,
    2: #ffc966,
    3: #ffff66,
    4: #66ff66,
    5: #8888ff,
    6: #ff66ff,
  );

  .corner-clip {
    height: 100%;
    background-color: #1f1f1f;
    clip-path: polygon(100% 0%, 100% 100%, 0% 0%);

    @each $index, $color in $colors-dark {
      &.color-#{$index} {
        background-color: $color;
      }
    }

    .dark & {
      background-color: white;

      @each $index, $color in $colors-light {
        &.color-#{$index} {
          background-color: $color;
        }
      }
    }
  }

  .corner-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    text-align: center;
    transform-origin: 50% 100%;
    rotate: 45deg;
    color: white;

    .bright & {
      color: black;

      .dark & {
        color: white;
      }
    }

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
