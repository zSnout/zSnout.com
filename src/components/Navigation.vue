<script lang="ts">
  const links = reactive<NavLink[]>([]);

  interface NavLink {
    id: number;
    title: string;
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
</script>

<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { tryOnScopeDispose } from "@vueuse/core";
  import { reactive, ref } from "vue";
  import { RouterLink } from "vue-router";
  import { isDark } from "../composables/isDark";
  import GithubIcon from "./GithubIcon.vue";
  import LogoWithName from "./Logo.vue";
  import SafeArea from "./SafeArea.vue";
  import ThemeIcon from "./ThemeIcon.vue";
  import OptionsIcon from "./OptionsIcon.vue";
  import Modal from "./Modal.vue";
  import HStack from "./HStack.vue";
  import Spacer from "./Spacer.vue";

  const open = ref(false);
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

          <OptionsIcon
            v-if="$slots.options"
            class="options"
            role="button"
            @click="open = !open"
          />

          <ThemeIcon class="icon" @click="isDark = !isDark" />

          <a
            class="icon"
            href="https://github.com/zsnout/zsnout-next"
            target="_blank"
          >
            <GithubIcon class="icon" />
          </a>
        </HStack>
      </SafeArea>
    </UseScreenSafeArea>

    <Modal :open="open">
      <slot name="options" />

      <template #buttons>
        <Button cancel @click="open = !open">OK</Button>
      </template>
    </Modal>
  </nav>
</template>

<style lang="scss" scoped>
  .nav-root {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #f0f0f0;

    .dark & {
      background-color: #202124;
    }

    @supports (backdrop-filter: blur(8px)) {
      background-color: #f0f0f080;
      border-bottom: none;
      backdrop-filter: blur(8px);

      .dark & {
        background-color: #20212480;
      }
    }
  }

  .navbar {
    height: 3.5rem;
    padding: 0.75rem 0;
  }

  .logo-outer {
    margin-right: auto;
  }

  .logo {
    height: 2rem;

    .hover &:hover {
      cursor: pointer;
      filter: drop-shadow(1px 1px 2px #0008);

      .dark & {
        filter: drop-shadow(1px 1px 2px #fffc);
      }
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
