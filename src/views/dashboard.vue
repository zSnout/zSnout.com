<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import Layout from "../components/dashboard/Layout.vue";
  import LayoutPicker from "../components/dashboard/LayoutPicker.vue";
  import Logo from "../components/dashboard/Logo.vue";
  import ModulePicker from "../components/dashboard/ModulePicker.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Modal from "../components/Modal.vue";
  import Navbar from "../components/Navbar.vue";
  import OptionsIcon from "../components/OptionsIcon.vue";
  import Spacer from "../components/Spacer.vue";
  import ThemeIcon from "../components/ThemeIcon.vue";
  import { isDark } from "../composables/isDark";

  const options = ref(false);
  const { location } = window;
</script>

<template>
  <DocumentDisplay center max-width no-footer>
    <template #navigation>
      <Navbar>
        <div class="logo-outer">
          <Logo class="logo" invert />
        </div>

        <Spacer />

        <ThemeIcon class="fullscreen icon theme" @click="isDark = !isDark" />

        <OptionsIcon class="fullscreen icon" @click="options = true" />
      </Navbar>
    </template>

    <Layout class="embed" />
  </DocumentDisplay>

  <Modal :open="options">
    <LayoutPicker :module="ModulePicker" dropdown />

    <template #buttons>
      <Button cancel @click="(options = false), location.reload()">OK</Button>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
  .icon {
    height: 2em;
    overflow: visible;
    cursor: pointer;
    filter: drop-shadow(1px 1px 2px #0008);
    transition: var(--transitions), transform 0.3s;

    @media screen and (max-width: 400px) {
      height: 1.5em;
    }

    :deep(path) {
      fill: black !important;
      stroke-width: 0 !important;

      .dark & {
        fill: white !important;
      }
    }
  }
</style>
