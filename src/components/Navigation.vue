<script lang="ts">
  const links = reactive<NavLink[]>([]);

  interface NavLink {
    id: number;
    title: string;
    onEnter?: boolean;
    description?: string;
    action?(): void;
    secondaryAction?(): void;
  }

  function removeItem(item: NavLink) {
    while (true) {
      let index = links.indexOf(item);
      if (index === -1) return;
      links.splice(index, 1);
    }
  }

  export function useNavLink(link: Omit<NavLink, "id">) {
    let item: NavLink = reactive({ ...link, id: Math.random() });

    links.push(item);
    tryOnScopeDispose(() => removeItem(item));

    return item;
  }

  useEventListener("keydown", (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.altKey &&
      (navigator.userAgent.includes("Mac")
        ? event.metaKey && !event.ctrlKey
        : event.ctrlKey && !event.metaKey)
    ) {
      event.preventDefault();
      links.forEach((link) => link.onEnter && link.action?.());
    }
  });
</script>

<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { tryOnScopeDispose, useEventListener } from "@vueuse/core";
  import { reactive } from "vue";
  import { RouterLink } from "vue-router";
  import { isDark } from "../composables/isDark";
  import Button from "./Button.vue";
  import GithubIcon from "./GithubIcon.vue";
  import HStack from "./HStack.vue";
  import LogoWithName from "./Logo.vue";
  import SafeArea from "./SafeArea.vue";
  import SharedNav from "./SharedNav.vue";
  import Spacer from "./Spacer.vue";
  import ThemeIcon from "./ThemeIcon.vue";
</script>

<template>
  <nav class="nav-root">
    <UseScreenSafeArea top>
      <SafeArea>
        <HStack class="navbar">
          <RouterLink class="logo-outer" to="/">
            <LogoWithName class="logo" invert />
          </RouterLink>

          <Spacer />

          <template v-for="item in links" :key="item.id">
            <button
              v-if="item.action || item.secondaryAction"
              class="nav-item"
              :title="item.description"
              @click.exact="item.action"
              @click.shift.exact="item.secondaryAction"
            >
              {{ item.title }}
            </button>
          </template>

          <Spacer />

          <SharedNav fullscreen>
            <template #buttons>
              <slot name="buttons" />
            </template>

            <template #indicator>
              <slot name="indicator" />
            </template>

            <template #options>
              <slot name="options" />
            </template>

            <template #help>
              <slot name="help" />
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
    z-index: 3;
    background-color: white;
    border-bottom: 1px solid #3c3c3c1f;

    .dark & {
      background-color: #202124;
      border-bottom-color: #5454547a;
    }

    @supports (backdrop-filter: blur(8px)) {
      background-color: #ffffff80;
      backdrop-filter: blur(8px);

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

  .nav-item {
    padding: 0 0.5em;
    color: inherit;
    font-size: 1rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    appearance: none;

    .hover &:hover {
      text-decoration: underline;
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
