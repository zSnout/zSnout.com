<script lang="ts" setup>
  import { RouterLink } from "vue-router";
  import { isDark } from "../composables/isDark";
  import GithubIcon from "./GithubIcon.vue";
  import ListIcon from "./ListIcon.vue";
  import LogoWithName from "./Logo.vue";
  import Navbar from "./Navbar.vue";
  import SharedNav from "./SharedNav.vue";
  import Spacer from "./Spacer.vue";
  import ThemeIcon from "./ThemeIcon.vue";

  defineProps<{
    small?: boolean;
  }>();
</script>

<template>
  <Navbar :aside="!!$slots.aside">
    <RouterLink class="logo-outer" to="/home">
      <LogoWithName class="logo" invert />
    </RouterLink>

    <Spacer />

    <ListIcon v-if="$slots.aside" :small="small">
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

    <a class="icon" href="https://github.com/zsnout/zsnout.com" target="_blank">
      <GithubIcon class="icon" />
    </a>
  </Navbar>
</template>
