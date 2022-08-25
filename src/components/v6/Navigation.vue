<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import { ref, watch } from "vue";
  import { RouterLink } from "vue-router";
  import Logo from "../Logo.vue";
  import SafeAreaLR from "./SafeAreaLR.vue";
  import SafeAreaTB from "./SafeAreaTB.vue";

  defineProps<{
    floating?: boolean;
  }>();

  let bp = useMediaQuery(`(max-width: ${415}px)`);

  watch(bp, (val) => {
    if (!val) {
      isNavDrawerOpen.value = false;
      isNavDrawerVisible.value = false;
    }
  });

  let isNavDrawerOpen = ref(false);
  let isNavDrawerVisible = ref(false);

  let timeoutID = 0;
  function toggleDrawer() {
    if (isNavDrawerOpen.value && isNavDrawerVisible.value) {
      isNavDrawerVisible.value = false;
      let myID = (timeoutID = setTimeout(() => {
        if (myID == timeoutID) isNavDrawerOpen.value = false;
      }, 1000) as any as number);
    } else {
      isNavDrawerOpen.value = true;
      isNavDrawerVisible.value = false;
      setTimeout(() => (isNavDrawerVisible.value = true));
    }
  }
</script>

<template>
  <nav :class="{ navigation: true, floating }">
    <SafeAreaLR>
      <div class="aligner">
        <RouterLink class="logo-link" to="/">
          <Logo class="logo" invert />
        </RouterLink>

        <span class="expander" />

        <div
          :class="{
            'nav-links': true,
            'passed-breakpoint': bp,
            'drawer-open': isNavDrawerOpen,
          }"
        >
          <Teleport v-if="isNavDrawerOpen" to="#app">
            <div :class="{ 'mobile-nav-outer': true, floating }">
              <div
                :class="{
                  'mobile-nav-bg': true,
                  'visible': isNavDrawerVisible,
                }"
              />

              <SafeAreaLR class="drawer-outer" keep-height keep-width>
                <SafeAreaTB
                  :class="{ drawer: true, visible: isNavDrawerVisible }"
                  explicit-height
                >
                  <slot />
                </SafeAreaTB>
              </SafeAreaLR>
            </div>
          </Teleport>

          <template v-else>
            <slot />
          </template>
        </div>
      </div>
    </SafeAreaLR>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 7;
    box-sizing: content-box;
    height: 2em;
    padding: 12px 0;
    padding-top: max(12px, env(safe-area-inset-top));
    background-color: var(--nav-background);
    border-bottom: 1px solid var(--nav-border);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    --nav-background: #c5d8da;
    --nav-border: #066567;

    &.theme-stpatrick {
      --nav-background: #c5dacf;
    }

    .dark & {
      --nav-background: #345558;
      --nav-border: #72a8aa;
    }

    &.floating {
      background-color: transparent;
      border-bottom: 0;
    }
  }

  .drawer {
    position: relative;
    top: -100vh;
    height: 100%;
    overflow-y: auto;
    transition: top 1s;

    &.visible {
      top: 0;
    }
  }

  .drawer-outer {
    position: absolute;
    top: calc(2em + 13px + max(12px, env(safe-area-inset-top)));
    z-index: 1;
    height: calc(100% - 2em - 13px - max(12px, env(safe-area-inset-top)));
  }

  .drawer-open {
    @media (max-width: 400px) {
      display: block;
    }
  }

  .aligner {
    display: flex;
    flex-direction: row;
    align-items: center;

    .floating & {
      padding: 0.5em;
      background-color: #fff8;
      border-radius: 0.5em;
      -webkit-backdrop-filter: blur(0.5em);
      backdrop-filter: blur(0.5em);

      .dark & {
        background-color: #0008;

        @supports (backdrop-filter: blur(0.5em)) or
          (-webkit-backdrop-filter: blur(0.5em)) {
          background-color: #0008;
        }
      }
    }
  }

  .expander {
    flex-grow: 1;
  }

  .mobile-nav {
    display: none;
  }

  .mobile-nav-outer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
  }

  .mobile-nav-bg {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #dcecee;
    opacity: 0;
    transition: opacity 1s, -webkit-backdrop-filter 1s, backdrop-filter 1s;

    .dark & {
      background-color: #2f3035;
    }

    &.visible {
      opacity: 0.75;
    }

    .floating & {
      background-color: #dcecee40;

      .dark & {
        background-color: #2f303540;
      }

      &.visible {
        opacity: 1;
        -webkit-backdrop-filter: blur(0.5em);
        backdrop-filter: blur(0.5em);
      }
    }
  }

  .passed-breakpoint {
    &.mobile-nav {
      display: inline-flex;
    }

    &.nav-links {
      display: none;
    }
  }

  .mobile-nav-prefix {
    @media (max-width: 300px) {
      display: none;
    }
  }

  .logo-link {
    display: inline-flex;
    align-items: center;
    height: 2em;

    .hover &:focus {
      outline: none;

      .logo {
        background-color: #0002;
      }
    }
  }

  .logo {
    display: inline-block;
    box-sizing: content-box;
    height: 2em;
    padding: 0.5em;
    border-radius: 0.25em;
    transition: background-color 0.3s;

    @media (max-width: 400px) {
      height: 1.5em;
    }
  }
</style>
