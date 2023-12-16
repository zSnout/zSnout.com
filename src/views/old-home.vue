<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import _images from "virtual:image-list";
  import { computed, ref, StyleValue } from "vue";
  import Button from "../components/Button.vue";
  import HStack from "../components/HStack.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import MiddleText from "../components/MiddleText.vue";
  import MultiPageDisplay from "../components/MultiPageDisplay.vue";
  import Page from "../components/Page.vue";
  import PageContent from "../components/PageContent.vue";
  import Spacer from "../components/Spacer.vue";
  import Title from "../components/Title.vue";
  import VStack from "../components/VStack.vue";
  import { shuffle } from "../composables/useShuffle";
  import { appHeight, appWidth } from "../main";

  const isLarge = useMediaQuery("(min-width: 775px)");
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

  const iconX = ref(Math.random());
  const iconY = ref(Math.random());

  function moveIcon() {
    // The extra code here makes sure that the GitHub logo moves to a different
    // quadrant for maximum effect.

    const xAdj = iconX.value < 0.5 ? 0 : 0.5;
    const yAdj = iconY.value < 0.5 ? 0 : 0.5;

    const [x, y] =
      Math.random() < 0.33
        ? [0.5 - xAdj, yAdj]
        : Math.random() < 0.5
        ? [xAdj, 0.5 - yAdj]
        : [0.5 - xAdj, 0.5 - yAdj];

    iconX.value = Math.random() / 2 + x;
    iconY.value = Math.random() / 2 + y;
  }
</script>

<!-- Update README if this gets moved to be the homepage. -->

<template>
  <MultiPageDisplay>
    <Page :style="bg">
      <PageContent class="content" center>
        <LargeTitle>Welcome to zSnout.</LargeTitle>

        <HStack v-if="isLarge" :space="2">
          <Spacer />

          <VStack :space="0">
            <span class="text-color zsnout-is">zSnout is...</span>

            <Spacer :size="4" />
          </VStack>

          <a class="topic no-link" href="#no-cost">
            <VStack :space="0">
              <Spacer />

              no cost

              <Spacer :size="3" />
            </VStack>
          </a>

          <a class="topic no-link" href="#ad-free">
            <VStack :space="0">
              <Spacer :size="2" />

              ad free

              <Spacer :size="2" />
            </VStack>
          </a>

          <a class="topic no-link" href="#open-source">
            <VStack :space="0">
              <Spacer :size="3" />

              open source

              <Spacer />
            </VStack>
          </a>

          <a class="topic no-link" href="#fun">
            <VStack :space="0">
              <Spacer :size="4" />

              fun
            </VStack>
          </a>

          <Spacer />
        </HStack>

        <VStack v-else style="text-align: center">
          <span class="zsnout-is">zSnout is...</span>

          <a class="topic no-link" href="#no-cost">no cost</a>

          <a class="topic no-link" href="#ad-free">ad free</a>

          <a class="topic no-link" href="#open-source">open source</a>

          <a class="topic no-link" href="#fun">fun</a>
        </VStack>

        <!-- prettier-ignore -->
        <p class="read-more">
          Read more by scrolling down,
          <br />
          or{{ " " }}
          <RouterLink class="no-link" to="/">
            <Button class="link" style="display: inline; text-decoration: none">
              explore the main site
            </Button>
          </RouterLink>.
        </p>
      </PageContent>
    </Page>

    <Page id="no-cost">
      <PageContent class="content" center>
        <div class="icon icon-free" @click="moveIcon">
          <img
            class="icon-image"
            alt="A sticker saying '100% free'"
            draggable="false"
            src="/100-free.webp"
          />
        </div>

        <Title class="fit">No Cost</Title>

        <!-- prettier-ignore -->
        <MiddleText class="desc">
          Making zSnout free is an important goal for us. We've seen too many
          amazing websites ruined by price gates and high costs. zSnout aims to
          be as free as possible. However, web hosting still costs a lot, so
          <a href="https://store.zsnout.com/">buying a shirt would really help us</a>.
        </MiddleText>
      </PageContent>
    </Page>

    <Page id="ad-free">
      <PageContent class="content" center>
        <Title class="fit">Ad Free</Title>

        <MiddleText class="desc">
          Have you ever explored an amazing site but have found it peppered by
          ads? Same here. At zSnout, we don't want to ruin your browsing
          experience by creating intrusive ads, so we choose to omit them.
        </MiddleText>

        <!-- prettier-ignore -->
        <MiddleText class="desc">
          While ads usually help a developer with revenue from the site, we let
          the user choose to help us out with
          <a href="https://store.zsnout.com/">the zSnout store</a>.
        </MiddleText>
      </PageContent>
    </Page>

    <Page id="open-source">
      <PageContent class="content" center>
        <div class="icon icon-github" @click="moveIcon">
          <img
            class="icon-image"
            alt="The GitHub logo"
            draggable="false"
            src="/github.webp"
          />

          <div class="icon-label">
            GitHub's
            <br />
            octocat
          </div>
        </div>

        <Title class="fit">Open Source</Title>

        <MiddleText class="desc">
          Open source is really important to zSnout. We use
          <a href="https://github.com/zSnout/zSnout.com">GitHub</a>
          to manage our website. By making zSnout open source, we also give
          users the opportunity to submit feedback and help us. Click the GitHub
          logo anytime in the navigation bar to head to our codebase.
        </MiddleText>

        <MiddleText class="desc">
          We also use countless open source projects, including
          <a href="https://vuejs.org/">Vue</a>
          <span>,&nbsp;</span>
          <a href="https://typescriptlang.org/">TypeScript</a>
          <span>,&nbsp;</span>
          <a href="https://sass-lang.com/">Sass</a>
          <span>,&nbsp;</span>
          and
          <a href="https://vitejs.dev/">Vite</a>
          <span>.</span>
        </MiddleText>
      </PageContent>
    </Page>

    <Page id="fun" :style="bg">
      <PageContent class="content" center>
        <Title class="fit">Fun</Title>

        <MiddleText class="desc">
          zSnout would not be complete without mentioning how fun it is to go
          around the site and explore every corner of the zSnout world, so let's
          get you exploring! Start out by going to
          <RouterLink to="/">zSnout's homepage</RouterLink>
          and picking out someplace to explore.
        </MiddleText>
      </PageContent>
    </Page>

    <template #aside>
      <nav>
        <ul>
          <li><a href="#no-cost">No Cost</a></li>

          <li><a href="#ad-free">Ad Free</a></li>

          <li><a href="#open-source">Open Source</a></li>

          <li><a href="#fun">Fun</a></li>

          <li><RouterLink to="/">Explore the Site</RouterLink></li>
        </ul>
      </nav>
    </template>
  </MultiPageDisplay>
</template>

<style lang="scss" scoped>
  .zsnout-is {
    font-weight: 300;
    font-size: 1.5rem;
  }

  .topic {
    font-weight: bold;
    font-size: 2em;
  }

  .read-more {
    font-weight: 300;
    font-size: 1.5em;
    text-align: center;
  }

  .content {
    background-color: #ffffffc0;
    -webkit-backdrop-filter: blur(0.5em);
    backdrop-filter: blur(0.5em);

    .dark & {
      background-color: #000000c0;
    }
  }

  #open-source {
    background-image: url("/open-source-word-cloud.webp");
    background-position: center;
    background-size: cover;

    .title,
    .middle {
      margin-left: auto;
      text-align: right;
    }
  }

  .fit {
    width: fit-content;
  }

  .desc {
    margin: 1em 0;
    line-height: 2em;
  }

  .icon {
    position: absolute;
    cursor: pointer;
    transition: var(--transitions), top 0.3s, left 0.3s;
    user-select: none;
  }

  .icon-github {
    top: calc(v-bind("iconX") * (100% - 132px));
    left: calc(v-bind("iconY") * (100% - 132px));
  }

  .icon-github .icon-image {
    background-color: white;
    border: 6px solid white;
    border-radius: 50%;
  }

  .icon-label {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 300;
    text-align: center;
  }

  .icon-github * {
    width: 132px;
    height: 132px;
  }

  #no-cost {
    background-image: url("/images/art/rectangles.webp");
  }

  .icon-free {
    top: calc(v-bind("iconX") * (100% - 165px));
    left: calc((1 - v-bind("iconY")) * (100% - 158px));
  }

  .icon-free * {
    width: 158px;
    height: 165px;
  }

  #ad-free {
    background-color: black;
    background-image: url("/ad-wall.webp");
    background-repeat: no-repeat;
    background-position: center;

    .title,
    .middle {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
  }
</style>
