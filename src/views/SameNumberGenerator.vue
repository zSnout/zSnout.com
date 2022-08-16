<script lang="ts" setup>
  import { create } from "random-seed";
  import { computed, ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import HStack from "../components/HStack.vue";
  import NumericField from "../components/NumericField.vue";
  import Spacer from "../components/Spacer.vue";
  import VStack from "../components/VStack.vue";

  const min = ref(1);
  const max = ref(10);
  const inst = ref(1);
  const password = ref("");

  const gen = computed(() => {
    inst.value = 1;
    const minSeed = create("" + min.value).intBetween(0, 0xffffff);
    const maxSeed = create("" + max.value).intBetween(0, 0xffffff);

    return {
      generator: create(password.value + minSeed * maxSeed),
      values: [] as number[],
    };
  });

  const number = computed(() => {
    const { generator, values } = gen.value;
    return (values[inst.value] ??= generator.intBetween(min.value, max.value));
  });

  const ordinal = computed(() => {
    let char = inst.value.toString();
    char = char[char.length - 1];

    return inst.value + ([, "st", "nd", "rd"][+char] || "th");
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
          v-model="password"
          placeholder="Optional password..."
          type="password"
        />

        <HStack stretch>
          <Button :disabled="inst <= 1" @click="inst--">
            Previous number...
          </Button>

          <Button @click="inst++">Next number...</Button>
        </HStack>

        <Spacer />

        <p class="result">{{ ordinal }} number: {{ number }}</p>
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
