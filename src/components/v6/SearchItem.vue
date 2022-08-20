<script lang="ts" setup>
  import { RouterLink } from "vue-router";

  defineProps<{
    title: string;
    to: string | (() => void);
    description?: string;
  }>();
</script>

<template>
  <a
    v-if="typeof to == 'function'"
    class="focusline hoverline item second-layer"
    role="button"
    @click="to"
  >
    <div class="name">{{ title }}</div>
    <div class="desc">{{ description }}</div>
  </a>

  <RouterLink v-else class="focusline hoverline item second-layer" :to="to">
    <div class="name">{{ title }}</div>
    <div class="desc">{{ description }}</div>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .item {
    display: inline-block;
    flex: auto;
    padding: 0.5em 0.75em;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .name {
    margin-bottom: 0.25em;
    font-weight: bold;
  }

  .desc {
    color: #666;
    font-size: 0.9em;

    .dark & {
      color: #aaa;
    }
  }
</style>
