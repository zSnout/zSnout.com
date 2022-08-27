<script lang="ts" setup>
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import MiddleText from "../components/MiddleText.vue";
  import NumericField from "../components/NumericField.vue";
  import { computed, ref } from "vue";
  import { isDark } from "../composables/isDark";
  import Title from "../components/Title.vue";

  const canvas = ref<HTMLCanvasElement>();
  const number = ref(17);

  const result = computed(() => {
    let val = Math.max(1, Math.round(number.value));
    const seq = [val];

    while (val !== 1) {
      if (val % 2 === 0) {
        val /= 2;
      } else {
        val = 3 * val + 1;
      }

      seq.push(val);
    }

    if (seq.length === 1) seq.push(seq[0]);

    if (canvas.value) {
      const sz = Math.max(seq.length - 1, 10);
      const w = (canvas.value.width = 50 * sz);
      const h = (canvas.value.height = 10 * sz);

      const ctx = canvas.value.getContext("2d")!;
      if (!ctx) return seq;

      const max = Math.max(...seq);
      const yOf = (value: number) => h - ((value - 1) * (h - 1)) / max;
      const xOf = (index: number) => (index / (seq.length - 1)) * w;

      if (isDark.value) {
        ctx.strokeStyle = "white";
      } else {
        ctx.strokeStyle = "dark";
      }

      let index = 0;
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
      ctx.beginPath();
      ctx.moveTo(xOf(0), yOf(seq[0]));

      for (const item of seq.slice(1)) {
        ctx.lineTo(xOf(++index), yOf(item));
      }

      ctx.lineWidth = h / 40;
      ctx.stroke();
    }

    return seq;
  });
</script>

<template>
  <DocumentDisplay center>
    <MiddleText>
      <Title>Collatz Evaluator</Title>

      <div class="sticky">
        <NumericField v-model="number" />

        <canvas ref="canvas" class="canvas" height="200" />
      </div>

      <p class="result">{{ result.join(", ") }}</p>
    </MiddleText>

    <template #help>
      <p>
        To generate a Collatz sequence for a number, you start with a positive
        integer. If the number is even, halve it. If it is odd, multiply it by
        three and add one. Repeat this until you get stuck in a loop.
      </p>

      <p>
        The Collatz conjecture states that every positive integer eventually
        gets stuck in the 4-2-1 loop. Try finding a Collatz sequence by entering
        any number you like into the evaluator!
      </p>

      <p>
        The graph shows the peaks and valleys of the sequence based off of your
        number.
      </p>
    </template>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .sticky {
    position: sticky;
    top: 3.5rem + 2rem;

    @media (max-width: 400px) {
      top: 2.5rem + 1.5rem;
    }
  }

  .canvas {
    width: 100%;
    height: 100px;
  }

  .result {
    overflow: auto;
  }
</style>
