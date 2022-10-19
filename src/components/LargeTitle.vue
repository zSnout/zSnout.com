<script lang="ts" setup>
  import Title from "./Title.vue";
</script>

<template>
  <Title class="title">
    <slot />
  </Title>
</template>

<style lang="scss" scoped>
  .title.title {
    font-size: min(3em, 10vw);
  }
</style>
