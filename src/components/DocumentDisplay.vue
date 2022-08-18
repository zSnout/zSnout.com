<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { MaybeElement, useResizeObserver } from "@vueuse/core";
  import { ref } from "vue";
  import { session } from "../main";
  import HStack from "./HStack.vue";
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";
  import VStack from "./VStack.vue";
  import Logo from "./Logo.vue";

  defineProps<{
    center?: boolean;
    explicitHeight?: boolean;
    maxWidth?: boolean;
  }>();

  const navbar = ref<MaybeElement>();
  const navHeight = ref(58);

  useResizeObserver(
    navbar,
    (entries) => {
      const height = entries[0].borderBoxSize?.[0].blockSize;
      if (typeof height === "number") navHeight.value = height;
    },
    { box: "border-box" }
  );
</script>

<template>
  <Navigation ref="navbar">
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
  </Navigation>

  <SafeArea
    :explicit-height="explicitHeight"
    :flex="center"
    :max-width="maxWidth"
    :min-height="`calc(var(--app-height) - ${navHeight}px)`"
    bottom
    top
  >
    <slot />
  </SafeArea>

  <footer class="blur footer second-layer">
    <UseScreenSafeArea bottom>
      <SafeArea bottom top>
        <VStack :space="1">
          <p>
            <Logo invert style="height: 2em" />
          </p>

          <HStack no-center stretch wraps="400px">
            <VStack>
              <p>&copy; {{ new Date().getFullYear() }} Zachary Sakowitz</p>

              <RouterLink class="no-color" to="/privacy-policy">
                Privacy Policy
              </RouterLink>
            </VStack>

            <VStack>
              <RouterLink class="no-color" to="/">Homepage</RouterLink>

              <RouterLink v-if="session" class="no-color" to="/my-account">
                My Account
              </RouterLink>
            </VStack>
          </HStack>

          <p>
            zSnout promises never to share any of your personal information with
            third parties.
          </p>

          <p>
            All content of the zSnout website is copyrighted under the
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.en.html"
              target="_blank"
            >
              GNU General Public License.
            </a>
          </p>
        </VStack>
      </SafeArea>
    </UseScreenSafeArea>
  </footer>
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
</style>

<style lang="scss" scoped>
  .footer {
    z-index: 2;
    border-radius: 0;
    box-shadow: none !important;
  }
</style>
