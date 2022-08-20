<script lang="ts" setup>
  import Title from "../../components/Title.vue";
  import Navigation from "../../components/v6/Navigation.vue";
  import SafeAreaLR from "../../components/v6/SafeAreaLR.vue";
  import SafeAreaTB from "../../components/v6/SafeAreaTB.vue";
  import SearchBar from "../../components/v6/SearchBar.vue";
  import { homeIcons } from "../../composables/useHomeIcons";

  const tips = [
    'Double-click the "Escape" key to go home and focus the search bar.',
    "Bookmark a fractal page to save its location and equation forever.",
    'Hit the giant "zSnout" icon to go to the homepage.',
    "In the Fractal Generator, you can right-click to save a picture on desktop.",
    "Copy the URL of a chess page (standard or auto flip) to save your game.",
    "You're looking at the sixth major version of zSnout.",
    'Right-click the giant "zSnout" icon to choose a new theme.',
    'Right-click the "Theme" button in the Fractal Explorer to go to the previous theme.',
  ];

  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60 * 1000;
  const msInDay = 1000 * 60 * 60 * 24;
  const day = Math.floor((Date.now() - timezoneOffset) / msInDay) - 19061;
  let dailyTip = tips[day % tips.length];

  if (today.getMonth() == 2 && today.getDate() == 15)
    // Special message for my dog Zorro's birthday on March 15
    dailyTip = "Today is the birthday of the original zSnout, my dog Zorro.";

  if (today.getMonth() == 3 && today.getDate() == 1)
    // April Fools' Message
    dailyTip = "Happy Halloween!";

  if (today.getMonth() == 3 && today.getDate() == 3)
    // zSnout Anniversary
    dailyTip = "Today is the anniversary of when zSnout was created in 2019!";
</script>

<template>
  <Navigation class="navbar">
    <slot name="nav" />
  </Navigation>

  <SafeAreaLR class="document" keep-height>
    <SafeAreaTB>
      <main>
        <Title>Welcome to zSnout!</Title>

        <p>
          zSnout is collection of different projects created for fun by Zachary
          Sakowitz during COVID-19. Our source code is publicly available on our
          <a href="https://github.com/zSnout/zsnout.com">GitHub page,</a>
          meaning that anybody can help out by contributing code or reporting an
          <a href="https://github.com/zSnout/zsnout.com/issues/new/choose">
            issue or bug.
          </a>
          You can also
          <a href="https://store.zsnout.com/">buy a fractal shirt.</a>
        </p>

        <p class="daily-tip">Daily tip: {{ dailyTip }}</p>

        <SearchBar class="link-outer" :links="homeIcons" autofocus />
      </main>
    </SafeAreaTB>
  </SafeAreaLR>
</template>

<style lang="scss" scoped>
  .daily-tip {
    margin-block-start: -0.5em;
  }

  .link-outer {
    margin: 1em 0;
  }

  .document {
    position: relative;
    top: calc(2em + 13px + max(12px, env(safe-area-inset-top)));
    z-index: 1;
    height: calc(100% - 2em - 13px - max(12px, env(safe-area-inset-top)));
  }

  main {
    position: relative;
    min-height: 100%;
  }

  .navbar {
    z-index: 3;
  }
</style>
