<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../../components/Button.vue";
  import Field from "../../components/Field.vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import InlineCheckboxField from "../../components/InlineCheckboxField.vue";
  import Labeled from "../../components/Labeled.vue";
  import Storymatic3Editor from "../../components/Storymatic3Editor.vue";

  const value = ref("");
  const placeholder = ref("placeholder");
  const readonly = ref(false);
  const alert = window.alert;
</script>

<template>
  <FullscreenDisplay>
    <Storymatic3Editor
      v-model="value"
      class="editor"
      :placeholder="placeholder"
      :readonly="readonly"
      @save="alert"
    />

    <template #indicator>
      {{ value }}
    </template>

    <template #options>
      <HStack :space="0.75" stretch>
        <Button @click="value = '23'">Set to "23"</Button>

        <Button @click="value = '' + Math.random()">
          Set to a random value
        </Button>
      </HStack>

      <Button @click="placeholder = '' + Math.random()">
        Set placeholder to a random value
      </Button>

      <Labeled label="Model Value">
        <Field v-model="value" />
      </Labeled>

      <Labeled label="Placeholder">
        <Field v-model="placeholder" />
      </Labeled>

      <Labeled label="Readonly?">
        <InlineCheckboxField v-model="readonly" />
      </Labeled>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .editor {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--app-width);
    height: var(--app-height);
  }
</style>
