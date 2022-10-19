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

  const titleEl = ref<HTMLElement>();
  const { height: titleHeight } = useElementSize(titleEl);

  const loaded = ref(false);

  const enableTransitions = ref(false);
  setTimeout(() => (enableTransitions.value = true), 100);
</script>

<template>
  <MaybeLink
    :class="{ t: enableTransitions }"
    class="card second-layer hoverline focusline"
    :force-reload="forceReload"
    :to="to"
    style="padding: 0"
    tabindex="0"
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
      class="overlay"
      :style="{ 'height': `${height}px`, '--title-height': `${titleHeight}px` }"
    >
      <div class="flex-top" />

      <div class="subtitle text-color">
        <p ref="titleEl" class="large">
          <span class="subtitle-inner">
            {{ title }}
          </span>
        </p>

        <div class="flex-inner" />

        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>

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
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;

    .no-desc & {
      display: block;
    }

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

  .image,
  .overlay {
    top: 0;
    width: 100%;
    margin-bottom: -0.375em;
    background-color: white;

    .no-title & {
      margin-bottom: -0.5em;
    }

    .hover .no-title .card:hover > & {
      margin-bottom: -1em;
    }
  }

  .image {
    .dark & {
      opacity: 0.8;
    }

    .hover .card:hover > & {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    top: calc(100% - var(--title-height) - 0.25em);
    display: flex;
    flex-direction: column;
    width: calc(100% + 1px);
    height: 100%;
    background: transparent;

    .t & {
      transition: var(--transitions), top 0.3s;
    }
  }

  .subtitle {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding: 0.5em;
    padding-top: 0.125em;
    color: white;
    filter: contrast(5);
    -webkit-backdrop-filter: blur(0.5em);
    backdrop-filter: blur(0.5em);
    mix-blend-mode: difference;
    transition: var(--transitions);

    .no-desc & {
      padding-bottom: 0.125em;
      font-size: 0.75em;
    }

    .no-title & {
      display: none;
    }
  }

  .large {
    display: flex;
    flex-direction: row;
    margin: 0;
    font-weight: bold;
    font-size: 1.25em;
    text-align: center;
  }

  .subtitle-inner {
    flex: 1;
    white-space: pre;
  }

  .description {
    margin: 0;
    padding-bottom: 0.25em;
    color: black;
    font-weight: bold;
    font-size: 0.9em;
    filter: invert(1);
    mix-blend-mode: difference;

    .no-desc & {
      display: none;
    }
  }

  .flex-top,
  .flex-inner,
  .subtitle-inner {
    transition: var(--transitions), flex 0.3s;
  }

  .flex-top {
    flex: 1;
  }

  .flex-inner {
    flex: 0;
  }

  .card:active,
  .card:focus,
  .hover :not(.no-desc) .card:hover {
    .overlay {
      top: 0;
    }

    .subtitle {
      height: 100%;
    }

    .subtitle-inner {
      flex: initial;
    }

    .flex-top {
      flex: 0;
    }

    .flex-inner {
      flex: 1;
    }
  }
</style>
