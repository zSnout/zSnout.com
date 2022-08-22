<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { useCssVar } from "@vueuse/core";
  import { onUnmounted } from "vue";
  import { session } from "../main";
  import HStack from "./HStack.vue";
  import Logo from "./Logo.vue";
  import Navigation from "./Navigation.vue";
  import SafeArea from "./SafeArea.vue";
  import VStack from "./VStack.vue";

  const props = defineProps<{ snap?: boolean }>();
  const snap = useCssVar("--snap");
  snap.value = props.snap ? "y mandatory" : "none";
</script>

<template>
  <Navigation>
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

  <div class="content">
    <slot />
  </div>

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

              <p>
                zSnout promises never to share any of your personal information
                with third parties.
              </p>
            </VStack>

            <VStack>
              <RouterLink class="no-color" to="/">Homepage</RouterLink>

              <RouterLink v-if="session" class="no-color" to="/my-account">
                My Account
              </RouterLink>

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
          </HStack>
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

  html {
    scroll-snap-type: var(--snap);
    scroll-padding-top: calc(3.5rem + 1px);

    @media (max-width: 400px) {
      scroll-padding-top: calc(2.5rem + 1px);
    }
  }
</style>

<style lang="scss" scoped>
  .content {
    position: relative;
    z-index: 2;
  }

  .footer {
    z-index: 3;
    border-radius: 0;
    box-shadow: none !important;
    scroll-snap-align: start;
  }
</style>
