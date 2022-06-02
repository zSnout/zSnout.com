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
    let item = { ...link, id: Math.random() };

    links.push(item);
    tryOnScopeDispose(() => removeItem(item));

    return item;
  }
</script>

<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { tryOnScopeDispose } from "@vueuse/core";
  import { reactive } from "vue";
  import LogoWithName from "./LogoWithName.vue";
  import SafeAreaLR from "./SafeAreaLR.vue";

  defineProps<{ floating: boolean }>();
</script>

<template>
  <nav class="navigation">
    <UseScreenSafeArea top>
      <SafeAreaLR>
        <div class="navbar">
          <LogoWithName class="logo" invert />

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
        </div>
      </SafeAreaLR>
    </UseScreenSafeArea>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    position: sticky;
    top: 0;
    background-color: #c5d8da;
    border-bottom: 1px solid #066567;

    .dark & {
      background-color: #345558;
      border-bottom-color: #72a8aa;
    }
  }

  .navbar {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 3.5rem;
    padding: 0.75rem 0;
  }

  .logo {
    height: 2rem;
    margin-right: auto;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(1px 1px 2px #0008);

      .dark & {
        filter: drop-shadow(1px 1px 2px #fff);
      }
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
