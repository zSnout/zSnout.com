<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import _images from "virtual:image-list";
  import { computed, StyleValue } from "vue";
  import HStack from "../components/HStack.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import MultiPageDisplay from "../components/MultiPageDisplay.vue";
  import Page from "../components/Page.vue";
  import PageContent from "../components/PageContent.vue";
  import Spacer from "../components/Spacer.vue";
  import VStack from "../components/VStack.vue";
  import { shuffle } from "../composables/useShuffle";
  import { appHeight, appWidth } from "../main";

  const isLarge = useMediaQuery("(min-width: 1000px)");
  const images = shuffle(_images);

  const bg = computed<StyleValue>(() => {
    const x = Math.ceil(appWidth.value / 320);
    const y = Math.ceil(appHeight.value / 320);

    return {
      "background-image": images.map((src) => `url("${src}")`).join(", "),
      "background-repeat": "no-repeat",
      "background-size": "320px 320px",

      "background-position": Array<void[]>(y)
        .fill(Array<void>(x).fill())
        .map((e, i) => e.map((_, j) => `${320 * j}px ${320 * i}px`).join(", "))
        .join(", "),
    };
  });
</script>

<!-- Update README if this gets moved to be the homepage. -->

<template>
  <MultiPageDisplay snap>
    <Page :style="bg">
      <PageContent class="bg" center>
        <LargeTitle>Welcome to zSnout.</LargeTitle>

        <HStack v-if="isLarge" :space="2">
          <Spacer />

          <a class="topic no-link" href="#open-source">
            <VStack>
              open source

              <Spacer :size="3" />
            </VStack>
          </a>

          <a class="topic no-link" href="#free">
            <VStack>
              <Spacer />

              free

              <Spacer :size="2" />
            </VStack>
          </a>

          <a class="topic no-link" href="#adless">
            <VStack>
              <Spacer :size="2" />

              adless

              <Spacer />
            </VStack>
          </a>

          <a class="topic no-link" href="#fun">
            <VStack>
              <Spacer :size="3" />

              fun
            </VStack>
          </a>

          <Spacer />
        </HStack>

        <VStack v-else style="text-align: center">
          <a class="topic no-link" href="#open-source">open source</a>

          <a class="topic no-link" href="#free">free</a>

          <a class="topic no-link" href="#adless">adless</a>

          <a class="topic no-link" href="#fun">fun</a>
        </VStack>

        <p class="read-more">Read more by scrolling down...</p>
      </PageContent>
    </Page>
  </MultiPageDisplay>
</template>

<style lang="scss" scoped>
  .topic {
    font-weight: bold;
    font-size: 2em;
  }

  .read-more {
    font-weight: 300;
    font-size: 1.5em;
    text-align: center;
  }

  .bg {
    background-color: #ffffffc0;
    -webkit-backdrop-filter: blur(0.5em);
    backdrop-filter: blur(0.5em);

    .dark & {
      background-color: #000000c0;
    }
  }
</style>
