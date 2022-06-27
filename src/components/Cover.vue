<script lang="ts" setup>
  import { useElementSize } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import { height as windowHeight, width } from "../main";

  const els = document.getElementsByClassName("nav-root");
  let height: Ref<number>;

  if (els[0]) {
    ({ height } = useElementSize(els[0] as HTMLElement, void 0, {
      box: "border-box",
    }));
  } else {
    height = ref(58);
  }
</script>

<template>
  <div
    class="cover"
    :style="`height: calc(${windowHeight - height}px - ${
      width < 400 ? 3 : 4
    }em)`"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2em;

    @media (max-width: 400px) {
      margin-bottom: 1.5em;
    }
  }
</style>
