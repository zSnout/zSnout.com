<script lang="ts" setup>
  import { create } from "random-seed";
  import { computed, ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import NumericField from "../components/NumericField.vue";
  import HStack from "../components/HStack.vue";
  import VStack from "../components/VStack.vue";
  import Spacer from "../components/Spacer.vue";

  const min = ref(1);
  const max = ref(10);
  const inst = ref(0);
  const passkey = ref("");

  const gen = computed(() => {
    const minSeed = create("" + min.value).intBetween(0, 0xffffff);
    const maxSeed = create("" + max.value).intBetween(0, 0xffffff);
    return create(passkey.value + minSeed * maxSeed);
  });

  const number = computed(() => {
    inst.value;
    return gen.value.intBetween(min.value, max.value);
  });
</script>

<template>
  <DocumentDisplay center>
    <form class="fields">
      <VStack center>
        <HStack stretch>
          <NumericField v-model="min" placeholder="Minimum" />
          <NumericField v-model="max" placeholder="Maximum" />
        </HStack>

        <Field
          v-model="passkey"
          placeholder="Optional passkey..."
          type="password"
        />

        <Button @click="inst++">Generate another number...</Button>

        <p class="result">Here's a number: {{ number }}</p>
      </VStack>
    </form>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .fields {
    max-width: 500px;
    margin-bottom: 0.5em;
    font-size: 1.25em;
  }

  .result {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
