<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import { useElementSize, useScroll } from "@vueuse/core";
  import { ref, Ref } from "vue";
  import { appHeight, appWidth } from "../main";

  const els = document.getElementsByClassName("nav-root");
  let navHeight: Ref<number> = ref(58);

  if (els[0]) {
    ({ height: navHeight } = useElementSize(els[0] as HTMLElement, void 0, {
      box: "border-box",
    }));
  }

  const content = ref<HTMLElement>();
  const { height: contentHeight } = useElementSize(content);

  const { y: scrollY } = useScroll(window);

  const contentOffset = computed(() => {
    const coverHeight = `(${appHeight.value - navHeight.value}px - ${
      appWidth.value < 400 ? 3 : 4
    }em)`;

    const offset = scrollY.value / 2;
    return `min(${offset}px, calc((${coverHeight} - ${contentHeight.value}px) / 2))`;
  });
</script>

<template>
  <div
    class="cover"
    :style="{
      height: `calc(${appHeight - navHeight}px - ${appWidth < 400 ? 3 : 4}em)`,
    }"
  >
    <div ref="content" class="content" :style="`top: ${contentOffset}`">
      <slot />
    </div>
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

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
