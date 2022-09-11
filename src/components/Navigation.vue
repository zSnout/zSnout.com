<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { RouterLink } from "vue-router";
  import { isDark } from "../composables/isDark";
  import GithubIcon from "./GithubIcon.vue";
  import HStack from "./HStack.vue";
  import ListIcon from "./ListIcon.vue";
  import LogoWithName from "./Logo.vue";
  import SafeArea from "./SafeArea.vue";
  import SharedNav from "./SharedNav.vue";
  import Spacer from "./Spacer.vue";
  import ThemeIcon from "./ThemeIcon.vue";
</script>

<template>
  <nav class="nav-root">
    <UseScreenSafeArea top>
      <SafeArea :aside="!!$slots.aside">
        <HStack class="navbar">
          <RouterLink class="logo-outer" to="/home">
            <LogoWithName class="logo" invert />
          </RouterLink>

          <Spacer />

          <ListIcon v-if="$slots.aside">
            <slot name="aside" />
          </ListIcon>

          <SharedNav>
            <template #buttons v-if="$slots.buttons">
              <slot name="buttons" />
            </template>

            <template #help v-if="$slots.help">
              <slot name="help" />
            </template>

            <template #indicator v-if="$slots.indicator">
              <slot name="indicator" />
            </template>

            <template #options v-if="$slots.options">
              <slot name="options" />
            </template>
          </SharedNav>

          <ThemeIcon class="icon" role="button" @click="isDark = !isDark" />

          <a
            class="icon"
            href="https://github.com/zsnout/zsnout.com"
            target="_blank"
          >
            <GithubIcon class="icon" />
          </a>
        </HStack>
      </SafeArea>
    </UseScreenSafeArea>
  </nav>
</template>

<style lang="scss" scoped>
  .nav-root {
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: white;
    border-bottom: 1px solid #3c3c3c1f;

    .dark & {
      background-color: #202124;
      border-bottom-color: #5454547a;
    }

    @supports (backdrop-filter: blur(0.5em)) or
      (-webkit-backdrop-filter: blur(0.5em)) {
      background-color: #ffffff80;
      -webkit-backdrop-filter: blur(0.5em);
      backdrop-filter: blur(0.5em);

      .dark & {
        background-color: #20212480;
      }
    }
  }

  .navbar {
    height: 3.5rem;
    padding: 0.75rem 0;
    touch-action: manipulation;
  }

  .logo-outer {
    margin-right: auto;
  }

  .logo {
    height: 2rem;
    cursor: pointer;

    .hover &:hover {
      filter: drop-shadow(1px 1px 2px #0008);
    }

    .dark.hover &:hover {
      filter: drop-shadow(1px 1px 2px #fffc);
    }
  }

  svg.icon {
    height: 100%;
  }

  @media screen and (max-width: 400px) {
    .navbar {
      height: 2.5rem;
      padding: 0.5rem 0;
    }

    .logo {
      height: 1.5rem;
    }
  }
</style>
