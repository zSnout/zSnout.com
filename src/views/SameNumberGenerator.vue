<script lang="ts" setup>
  import { create } from "random-seed";
  import { computed, ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import NumericField from "../components/NumericField.vue";

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
    <div class="fields">
      <NumericField v-model="min" placeholder="Minimum" />
      <NumericField v-model="max" placeholder="Maximum" />
      <Field
        v-model="passkey"
        class="wide"
        placeholder="Optional passkey..."
        type="password"
      />
      <Button class="wide" @click="inst++">Generate another number...</Button>
    </div>

    <p class="result">Here's a number: {{ number }}</p>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .fields {
    display: grid;
    grid-template-columns: repeat(2, min(250px, 50% - 0.25em));
    gap: 0.5em;
    max-width: 500px;
    margin-bottom: 0.5em;
    font-weight: bold;
    font-size: 1.5em;

    input {
      margin-bottom: 0;
      text-align: center;
    }
  }

  .wide {
    grid-column: 1 / 3;
    font-size: 0.75em;
  }

  .result {
    font-size: 1.5em;
  }
</style>
