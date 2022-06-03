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
  import { reactive } from "vue";
  import { RouterLink } from "vue-router";
  import { isDark } from "../composables/isDark";
  import LogoWithName from "./LogoWithName.vue";
  import SafeArea from "./SafeArea.vue";
  import ThemeIcon from "./ThemeIcon.vue";

  defineProps<{ floating: boolean }>();

  function switchColorScheme() {
    isDark.value = !isDark.value;
  }
</script>

<template>
  <nav class="navigation">
    <UseScreenSafeArea top>
      <SafeArea>
        <div class="navbar">
          <RouterLink class="logo-outer" to="/">
            <LogoWithName class="logo" invert />
          </RouterLink>

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

          <ThemeIcon class="theme" @click="switchColorScheme" />
        </div>
      </SafeArea>
    </UseScreenSafeArea>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #3c3c3c1f;

    .dark & {
      border-bottom-color: #5454547a;
    }
  }

  .navbar {
    display: flex;
    flex-direction: row;
    height: 3.5rem;
    padding: 0.75rem 0;
  }

  .logo-outer {
    margin-right: auto;
  }

  .logo {
    height: 2rem;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(1px 1px 2px #0008);

      .dark & {
        filter: drop-shadow(1px 1px 2px #000);
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
