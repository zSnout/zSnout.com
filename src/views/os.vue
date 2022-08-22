<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import Button from "../components/Button.vue";
  import MiddleText from "../components/MiddleText.vue";
  import MovableFrame from "../components/MovableFrame.vue";
  import VStack from "../components/VStack.vue";

  const maxZIndex = ref(0);

  const pages = reactive<
    { id: number; zIndex: number; left: number; top: number }[]
  >([]);
</script>

<template>
  <div
    class="page"
    @click="
      $event.target === $event.currentTarget &&
        pages.length < 10 &&
        pages.push({
          id: Math.random(),
          zIndex: ++maxZIndex,
          top: $event.clientY,
          left: $event.clientX,
        })
    "
  >
    <MiddleText>
      <VStack>
        <p>
          This is zSnout OS. Click an empty space to create a window there.
          Then, you may:
        </p>

        <p>
          move the window by dragging the
          <strong>three dots</strong>
          in the top middle,
        </p>

        <p>
          activate split screen by clicking the
          <strong>three dots</strong>
          in the top middle,
        </p>

        <p>
          resize the window via the
          <strong>bottom left</strong>
          or
          <strong>bottom right</strong>
          corners, or
        </p>

        <p>
          close the window by clicking the red button in the
          <strong>top left.</strong>
        </p>

        <a
          class="no-link"
          href="/"
          style="display: block; width: 100%; margin-top: 1em"
        >
          <Button style="width: 100%">Go Back Home</Button>
        </a>
      </VStack>
    </MiddleText>
  </div>

  <MovableFrame
    v-for="page in pages"
    :key="page.id"
    :left="page.left"
    :style="{ zIndex: page.zIndex }"
    :top="page.top"
    @close="
      pages.splice(
        pages.findIndex(({ id }) => id === page.id),
        1
      )
    "
    @interact="page.zIndex != maxZIndex && (page.zIndex = ++maxZIndex)"
  />
</template>

<style scoped>
  p {
    user-select: none;
    pointer-events: none;
  }

  .page {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--app-width);
    height: var(--app-height);
  }
</style>
