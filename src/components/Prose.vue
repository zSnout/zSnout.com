<script lang="ts">
  const el = document.createElement("style");
  document.head.append(el);

  watchEffect(() => {
    el.textContent = isDark.value ? prismDark : prismLight;
  });
</script>

<script lang="ts" setup>
  import prismDark from "prismjs/themes/prism-tomorrow.min.css?inline";
  import prismLight from "prismjs/themes/prism.min.css?inline";
  import { Frontmatter } from "vite-plugin-md";
  import { watchEffect } from "vue";
  import { isDark } from "../composables/isDark";
  import { dateOf } from "../composables/useDateOf";
  import DocumentDisplay from "./DocumentDisplay.vue";

  const { frontmatter } = defineProps<{ frontmatter?: Frontmatter }>();
  const { author, date } = frontmatter || {};
</script>

<template>
  <DocumentDisplay small>
    <div class="prose">
      <p v-if="author" class="intro">By {{ author }}</p>

      <p v-if="date" class="intro">Published on {{ dateOf(date) }}</p>

      <slot />
    </div>

    <template #aside v-if="$slots.aside">
      <slot name="aside" />
    </template>
  </DocumentDisplay>
</template>

<style>
  @import "katex/dist/katex.css";
</style>

<style lang="scss" scoped>
  .prose :deep() {
    .intro {
      margin-bottom: 2em;
      color: #404040;
      font-weight: 600;
      font-size: 0.875em;
      line-height: 1.75em;

      .dark & {
        color: #c0c0c0;
        font-weight: 500;
      }

      + .intro {
        margin-top: -2em;
      }
    }

    .table-of-contents {
      margin-bottom: 1em;

      ul {
        padding-left: 1.5em;
        list-style-type: none;
      }

      > ul {
        margin: 0.75em 0.75em;
        padding-left: 0;
      }

      a {
        display: inline-block;
        width: 100%;
        padding-bottom: 0.25em;
        color: inherit;
      }

      li ul {
        margin-top: 0;
      }

      li + li {
        margin-top: 0;
      }
    }

    figure {
      margin: 1em 2.5em;
    }

    img {
      display: block;
      width: 100%;
      max-height: calc(var(--app-height) - /* navbar height */ 3.5rem - 1px);
      margin-bottom: 1rem;
      object-fit: cover;

      @media (max-width: 1079px) {
        position: relative;
        left: -2rem;
        width: var(--app-width);
      }

      @media (max-width: 400px) {
        left: -1.5rem;
        max-height: calc(var(--app-height) - /* navbar height */ 2.5rem - 1px);
      }

      ::after {
        content: attr("alt");
      }
    }

    figure img {
      @media (max-width: 1079px) {
        left: -4.5rem;
      }

      @media (max-width: 400px) {
        left: -4rem;
      }
    }

    h1,
    h2,
    h3 {
      color: #25575b;
      font-weight: 900;
      scroll-margin-top: 3.5rem + 2rem;

      @media (max-width: 400px) {
        scroll-margin-top: 2.5rem + 1.5rem;
      }

      .dark & {
        color: #a3d5d6;
      }
    }

    h1 {
      padding: 0 0.5em 0.3em 0.5em;
      font-size: 2em;
      letter-spacing: 0.25px;
      border-bottom: 2px solid currentColor;
    }

    h2 {
      margin: 1em 0 0.75em 0;
      font-size: 1.5em;
      letter-spacing: 0.25px;
    }

    h3 {
      font-size: 1.25em;
    }

    p {
      margin-top: 0;
      margin-bottom: 1em;
    }

    p:not(.non-text) + p {
      margin-top: -0.5em;
    }

    details {
      margin-bottom: 0.5em;

      > summary:first-child {
        list-style-type: none;
        cursor: pointer;
        user-select: none;

        &::-webkit-details-marker,
        &::marker {
          display: none;
        }

        &::before {
          margin-right: 0.25em;
          content: "\25BA";
        }
      }

      > *:not(summary) {
        padding-left: 1.25em;
      }
    }

    details[open] > summary:first-child {
      margin-bottom: 0.5em;
      &::before {
        content: "\25BC";
      }
    }

    ol,
    ul {
      margin-top: 0;
      margin-bottom: 0.5em;
      padding-left: 2em;

      ol {
        list-style-type: lower-roman;
      }

      ol,
      ul {
        margin-top: 0.25em;
        margin-bottom: 0;

        ol {
          list-style-type: lower-alpha;
        }
      }
    }

    li {
      word-wrap: break-all;

      > p {
        margin-top: 1em;
      }

      + li {
        margin-top: 0.25em;
      }
    }

    blockquote,
    q {
      margin-right: 1em;
      margin-left: 1em;
      padding: 1em 0 1em 1em;
      font-style: italic;

      > :first-child {
        margin-top: 0;
      }

      > :last-child {
        margin-bottom: 0;
      }
    }

    code {
      padding: 0.2em 0.4em;
      font-weight: 500;
      font-size: 0.85em;
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    pre {
      margin: 0;
      margin-bottom: 1.5em;
      padding: 1.5em 1.5em 1em 1.5em;
      overflow-x: auto;
      font-size: 0.85rem;
      white-space: pre-wrap;
      background-color: white;
      border: 0;

      .dark & {
        background-color: #1f1f1f;
      }

      code {
        padding: 0;
        font-weight: normal;
        font-size: 0.85rem;
      }
    }

    table {
      min-width: 50%;
      max-width: 100%;
      margin: 0 0 1em 0;
      overflow-x: auto;
      text-align: center;
      border: 1px solid #404040;
      border-radius: 0;
      border-collapse: collapse;

      thead {
        font-weight: bold;
        background-color: var(--field-background);
      }

      td,
      th {
        padding: 0.5em;
        border: 1px solid #404040;
      }
    }

    > :first-child,
    > .markdown-body > :first-child {
      margin-top: 0;
    }

    > :last-child,
    > .markdown-body > :last-child {
      margin-bottom: 0;
    }
  }
</style>
