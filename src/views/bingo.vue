<script lang="ts" setup>
  import { reactive } from "vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import HStack from "../components/HStack.vue";
  import VStack from "../components/VStack.vue";

  interface Cell {
    value: number | "";
    checked: boolean;
  }

  const board: Cell[][] = reactive([[], [], [], [], []]);

  function generateColumn(offset: number) {
    const column: number[] = [];

    function genNumber() {
      const num = Math.floor(Math.random() * 15) + offset + 1;

      if (column.includes(num)) {
        genNumber();
      } else {
        column.push(num);
      }
    }

    for (let i = 0; i < 5; i++) {
      genNumber();
    }

    return column;
  }

  const columns: number[][] = [];
  for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
    columns.push(generateColumn(15 * columnIndex));
  }

  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 5; column++) {
      board[row][column] = {
        value: columns[column][row],
        checked: false,
      };
    }
  }

  board[2][2] = {
    value: "",
    get checked() {
      return true;
    },
    set checked(v) {},
  };
</script>

<template>
  <DocumentDisplay center>
    <VStack class="board" :space="0.5">
      <HStack class="row" :space="0.5">
        <div
          v-for="letter in 'BINGO'"
          class="cell header second-layer text-color checked"
        >
          {{ letter }}
        </div>
      </HStack>

      <HStack v-for="(row, i) in board" class="row" :space="0.5">
        <button
          v-for="(cell, j) in row"
          :key="cell.value"
          :class="{
            'second-layer': cell.checked,
            'checked': cell.checked,
            'lCheck': row[j - 1]?.checked,
            'tCheck': board[i - 1]?.[j]?.checked,
            'rCheck': row[j + 1]?.checked,
            'bCheck': board[i + 1]?.[j]?.checked,
            'tlCheck': board[i - 1]?.[j - 1]?.checked,
          }"
          class="cell"
          @click="cell.checked = !cell.checked"
        >
          {{ cell.value }}
        </button>
      </HStack>
    </VStack>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:not(.second-layer) {
      background-color: transparent;
    }
  }

  .checked.lCheck {
    position: relative;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::before {
      position: absolute;
      left: -0.5rem;
      display: block;
      width: 1rem;
      height: 3rem;
      background-color: var(--layer-background);
      content: "";
    }
  }

  .checked.tCheck {
    position: relative;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &::after {
      position: absolute;
      top: -0.5rem;
      display: block;
      width: 3rem;
      height: 1rem;
      background-color: var(--layer-background);
      content: "";
    }

    &.lCheck.tlCheck::after {
      left: -0.5rem;
      width: 3.5rem;
    }
  }

  .checked.rCheck {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .checked.bCheck {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .header {
    font-weight: bold;
  }
</style>
