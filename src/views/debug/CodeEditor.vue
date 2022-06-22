<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../../components/Button.vue";
  import Console, { useCompleteConsole } from "../../components/Console.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Field from "../../components/Field.vue";
  import HStack from "../../components/HStack.vue";
  import InlineCheckboxField from "../../components/InlineCheckboxField.vue";
  import Labeled from "../../components/Labeled.vue";
  import Editor3 from "../../components/storymatic/Editor3.vue";

  const value = ref("");
  const placeholder = ref("placeholder");
  const readonly = ref(false);

  const console = useCompleteConsole();
  const { field, placeholder: _placeholder } = console;
</script>

<template>
  <DocumentDisplay explicit-height max-width>
    <HStack :space="0.75" style="height: 100%">
      <Editor3
        v-model="value"
        :placeholder="placeholder"
        :readonly="readonly"
        round
        style="flex: 1"
        @save="console.console.error"
      />

      <Console
        v-model:field="field"
        v-model:messages="console.messages"
        :placeholder="_placeholder"
        stretch
        style="width: min(50%, 400px)"
        @select="console.onSelect"
        @submit="console.onSubmit"
      />
    </HStack>

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
  </DocumentDisplay>
</template>
