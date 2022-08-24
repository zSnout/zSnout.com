<script lang="ts" setup>
  import { UseScreenSafeArea } from "@vueuse/components";
  import { session } from "../main";
  import HStack from "./HStack.vue";
  import Logo from "./Logo.vue";
  import SafeArea from "./SafeArea.vue";
  import VStack from "./VStack.vue";

  defineProps<{ aside?: boolean }>();
</script>

<template>
  <footer class="blur footer second-layer">
    <UseScreenSafeArea bottom>
      <SafeArea :aside="aside" bottom top>
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

<style scoped>
  .footer {
    z-index: 3;
    border-radius: 0;
    box-shadow: none !important;
  }
</style>
