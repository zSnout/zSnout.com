<script setup lang="ts">
  defineProps<{ page: string; note?: string }>();
</script>

<template>
  <h1>Color Sliders</h1>

  <p>
    {{ page }} and many other pages on zSnout share the same set of sliders, so
    it's good to get used to them. The best way to understand the sliders is to
    play with them and experiment on various pages.{{ note && ` ${note}` }}
  </p>
</template>
