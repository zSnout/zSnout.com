<script lang="ts" setup>
  import { useEventListener } from "@vueuse/core";
  import { reactive } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import HStack from "../components/HStack.vue";
  import Spacer from "../components/Spacer.vue";
  import VStack from "../components/VStack.vue";

  let rows = 0;
  let cols = 0;
  const lights = reactive<boolean[][]>([]);

  function init(pattern: readonly (readonly boolean[])[]) {
    rows = pattern.length;
    cols = pattern[0].length;
    lights.splice(0, lights.length, ...pattern.map((row) => [...row]));

    for (let i = 0; i < 1000; i++) {
      shuffleOnce();
    }
  }

  function reset() {
    init(Array.from({ length: rows }, () => Array<boolean>(cols).fill(true)));
  }

  rows = 5;
  cols = 5;
  reset();

  function shuffleOnce() {
    flip(Math.floor(Math.random() * rows), Math.floor(Math.random() * cols));
  }

  function flip(i: number, j: number) {
    if (i >= 0 && i < rows) {
      if (j >= 0 && j < cols) {
        lights[i][j] = !lights[i][j];
      }
    }
  }

  function onClick(i: number, j: number) {
    flip(i, j);
    flip(i - 1, j);
    flip(i + 1, j);
    flip(i, j - 1);
    flip(i, j + 1);
  }

  function easier() {
    rows--;
    if (rows < 3) rows = 3;

    cols--;
    if (cols < 3) cols = 3;

    reset();
  }

  function harder() {
    rows++;
    cols++;
    reset();
  }

  function unShuffle() {
    lights.map((row) => row.fill(false));
  }

  useEventListener("keydown", (event) => {
    if (!event.altKey && !event.ctrlKey && !event.metaKey) {
      if (event.key == "a") {
        const locations: [row: number, col: number][] = [];

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (lights[row][col]) {
              locations.push([row, col]);
            }
          }
        }

        for (const [row, col] of locations) {
          onClick(row, col);
        }
      }

      if (event.key == "A") {
        const locations: [row: number, col: number][] = [];

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (!lights[row][col]) {
              locations.push([row, col]);
            }
          }
        }

        for (const [row, col] of locations) {
          onClick(row, col);
        }
      }
    }
  });
</script>

<template>
  <DocumentDisplay center>
    <VStack>
      <HStack v-for="(row, i) in lights">
        <div
          v-for="(cell, j) in row"
          :class="{ 'lighted': cell, 'second-layer': cell, 'outline': !cell }"
          class="cell"
          @click="onClick(i, j)"
        />
      </HStack>

      <Spacer />

      <HStack stretch>
        <Button @click="reset">Shuffle</Button>

        <Button @click="unShuffle">Reset</Button>
      </HStack>

      <HStack stretch>
        <Button @click="easier">Easier</Button>

        <Button @click="harder">Harder</Button>
      </HStack>
    </VStack>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .cell {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    transition: var(--transitions), outline 0.3s;
  }

  :where(.cell) {
    outline: transparent 1px solid;
  }
</style>
