<script lang="ts" setup>
  import { useEventListener } from "@vueuse/core";
  import { reactive } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import HStack from "../components/HStack.vue";
  import Spacer from "../components/Spacer.vue";
  import VStack from "../components/VStack.vue";

  let size = 0;
  const clicks: boolean[][] = [];
  const lights = reactive<boolean[][]>([]);
  let solution: boolean[][] | undefined;

  function isCellSolved(cell: boolean) {
    return cell;
  }

  function isRowSolved(row: boolean[]) {
    return row.every(isCellSolved);
  }

  function isSolved() {
    return lights.every(isRowSolved);
  }

  function solveRow(row: number) {
    for (let col = 0; col < size; col++) {
      if (!lights[row - 1][col]) {
        onClick(row, col);
      }
    }
  }

  function solveBoardMirrored(index: number) {
    resetRaw();

    for (let col = 0; col < size / 2; col++) {
      const isClicked = index & (2 ** col);

      if (isClicked) {
        onClick(0, col);

        if (col != size - col) {
          onClick(0, size - 1 - col);
        }
      }
    }

    for (let row = 1; row < size; row++) {
      solveRow(row);
    }
  }

  function solveBoardStandard(index: number) {
    resetRaw();

    for (let col = 0; col < size; col++) {
      const isClicked = index & (2 ** col);

      if (isClicked) {
        onClick(0, col);
      }
    }

    for (let row = 1; row < size; row++) {
      solveRow(row);
    }
  }

  function createSolution() {
    const mirrorMax = 2 ** Math.ceil(size / 2);

    for (let index = 0; index < mirrorMax; index++) {
      solveBoardMirrored(index);

      if (isSolved()) {
        solution = clicks.map((row) => [...row]);
        return true;
      }
    }

    const standardMax = 2 ** size;

    for (let index = 0; index < standardMax; index++) {
      solveBoardStandard(index);

      if (isSolved()) {
        solution = clicks.map((row) => [...row]);
        return true;
      }
    }

    solution = undefined;
    return false;
  }

  const rowToFalse = () => Array<boolean>(size).fill(false);

  function resetArray(array: boolean[][]) {
    const base = Array.from({ length: size });
    array.splice(0, lights.length, ...base.map(rowToFalse));
  }

  function resetRaw() {
    resetArray(lights);
    resetArray(clicks);
  }

  function reset(solution = true) {
    if (solution) {
      resetArray(clicks);
      createSolution();
    }

    resetRaw();

    for (let i = 0; i < 1000; i++) {
      shuffleOnce();
    }
  }

  size = 5;
  reset();

  function shuffleOnce() {
    onClick(Math.floor(Math.random() * size), Math.floor(Math.random() * size));
  }

  function flip(i: number, j: number) {
    if (i >= 0 && i < size) {
      if (j >= 0 && j < size) {
        lights[i][j] = !lights[i][j];
      }
    }
  }

  function onClick(i: number, j: number) {
    clicks[i][j] = !clicks[i][j];
    flip(i, j);
    flip(i - 1, j);
    flip(i + 1, j);
    flip(i, j - 1);
    flip(i, j + 1);
  }

  function easier() {
    size--;
    if (size < 3) size = 3;

    reset();
  }

  function harder() {
    size++;
    reset();
  }

  function unShuffle() {
    lights.map((row) => row.fill(false));
    clicks.map((row) => row.fill(false));
  }

  function hint(real = true) {
    if (!solution) return;

    type CellData = [row: number, col: number, clicked: boolean];

    const cells = solution
      .flatMap((row, i) => row.map<CellData>((cell, j) => [i, j, cell]))
      .filter(
        ([row, col, clicked]) => (real ? !clicked : clicked) == clicks[row][col]
      );

    if (cells.length == 0) return;

    const [row, col] = cells[Math.floor(Math.random() * cells.length)];
    onClick(row, col);
  }

  useEventListener("keydown", (event) => {
    if (!event.altKey && !event.ctrlKey && !event.metaKey) {
      if (event.key == "a") {
        const locations: [row: number, col: number][] = [];

        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
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

        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (!lights[row][col]) {
              locations.push([row, col]);
            }
          }
        }

        for (const [row, col] of locations) {
          onClick(row, col);
        }
      }

      if (event.key == "h") {
        hint();
      }

      if (event.key == "H") {
        hint(false);
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
        <Button @click="reset(false)">Shuffle</Button>

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
