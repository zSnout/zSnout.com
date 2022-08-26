<script lang="ts" setup>
  defineProps<{ open: boolean }>();
</script>

<template>
  <aside :class="{ open }" class="aside">
    <div class="content">
      <slot />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    z-index: 3;
    overflow: auto;

    @media (min-width: 1080px) {
      $safe-area-center: 50%;
      $safe-area-width: min(1000px, 100% - 8em - 300px);
      $safe-area-left: calc(-150px - 2em + 1em);

      top: 3.5em + 2em;
      left: calc(
        $safe-area-center + $safe-area-width / 2 + $safe-area-left + 2em
      );
      width: 300px;
      height: calc(100% - 3.5em - 4em);
    }

    @media (max-width: 1079px) {
      top: 3.5em;
      left: max(-400px, -100%);
      z-index: 5;
      width: calc(100% + min(400px, 100%));
      height: calc(100% - 3.5em);
      visibility: hidden;
      opacity: 0;
      -webkit-backdrop-filter: blur(0.5em);
      backdrop-filter: blur(0.5em);
      transition: var(--transitions), left 0.3s, opacity 0.3s, visibility 0.3s;

      &.open {
        left: 0;
        visibility: visible;
        opacity: 1;
      }
    }

    @media (max-width: 400px) {
      top: 2.5em;
      height: calc(100% - 2.5em);
    }
  }

  .content :deep() {
    nav {
      ul {
        padding-left: 1em;
        list-style-type: none;
      }

      > ul {
        margin: 0;
        padding-left: 0;
      }

      a {
        display: inline-block;
        width: 100%;
        font-size: 0.875em;
        line-height: 2em;
        text-decoration: none;
      }

      li ul {
        margin-top: 0;
      }

      li + li {
        margin-top: 0;
      }
    }

    > :deep(:first-child) {
      margin-top: 0;
    }

    > :deep(:last-child) {
      margin-bottom: 0;
    }

    @media (max-width: 1079px) {
      max-width: calc(400px - 3em);
      min-height: 100%;
      padding: 1.5em;
      background-color: #ffffffc0;

      .dark & {
        background-color: #000000c0;
      }

      @supports (backdrop-filter: blur(0.5em)) or
        (-webkit-backdrop-filter: blur(0.5em)) {
        background-color: #ffffff80;

        .dark & {
          background-color: #000000c0;
        }
      }
    }
  }
</style>
