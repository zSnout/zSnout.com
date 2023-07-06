<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import HStack from "../components/HStack.vue";
  import VStack from "../components/VStack.vue";
  import { shuffle } from "../composables/useShuffle";

  // An AI for the TickoaTTwo game created by Oats Jenkins:
  // https://www.youtube.com/watch?v=ePxrVU4M9uA

  const enum Cell {
    None,
    Horizontal,
    Vertical,
    Both,
  }

  type Player = Cell.Horizontal | Cell.Vertical;

  type Location = readonly [row: number, column: number];

  type Board = Cell[][];
  type ReadonlyBoard = readonly (readonly Cell[])[];

  function isWin(board: ReadonlyBoard) {
    return (
      (board[0][0] == Cell.Both &&
        board[1][0] == Cell.Both &&
        board[2][0] == Cell.Both) ||
      (board[0][1] == Cell.Both &&
        board[1][1] == Cell.Both &&
        board[2][1] == Cell.Both) ||
      (board[0][2] == Cell.Both &&
        board[1][2] == Cell.Both &&
        board[2][2] == Cell.Both) ||
      (board[0][0] == Cell.Both &&
        board[0][1] == Cell.Both &&
        board[0][2] == Cell.Both) ||
      (board[1][0] == Cell.Both &&
        board[1][1] == Cell.Both &&
        board[1][2] == Cell.Both) ||
      (board[2][0] == Cell.Both &&
        board[2][1] == Cell.Both &&
        board[2][2] == Cell.Both) ||
      (board[0][0] == Cell.Both &&
        board[1][1] == Cell.Both &&
        board[2][2] == Cell.Both) ||
      (board[0][2] == Cell.Both &&
        board[1][1] == Cell.Both &&
        board[2][0] == Cell.Both)
    );
  }

  function possibleMoves(
    board: ReadonlyBoard,
    forPlayer: Player,
    [lastRow, lastCol]: Location = [-1, -1]
  ): readonly Location[] {
    const output: Location[] = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if ((lastRow != i || lastCol != j) && !(board[i][j] & forPlayer)) {
          output.push([i, j]);
        }
      }
    }

    return output;
  }

  const characterMap = [" ", "–", "|", "+"];

  /** Assumes that it is `forPlayer`'s turn. */
  function rate(
    board: ReadonlyBoard,
    forPlayer: Player,
    last: Location | undefined
  ): [bestMove: Location | undefined, rating: number] {
    if (isWin(board)) {
      // If the other player won, return -1.
      return [undefined, -1];
    } else {
      // Get all my moves and shuffle them (for randomness).
      const moves = shuffle(possibleMoves(board, forPlayer, last));

      for (const move of moves) {
        // Play each move and get the rating from the other player's POV.

        const next: Board = board.map((row) => row.slice());
        next[move[0]][move[1]] |= forPlayer;

        const [, rating] = rate(next, 3 - forPlayer, move);

        if (rating == -1) {
          // The other player definitely loses; exit early.
          return [move, 1];
        }
      }

      // If the other player can win in all scenarios, we lose.
      return [moves[0], -1];
    }
  }

  const board = reactive<Board>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const human = ref<Player>(Cell.Horizontal);
  const turn = ref<Player>(human.value);
  const last = ref<Location>();
  const evaluation = ref<number>(0);
  let timeoutId: any = 0;

  function play(row: number, col: number) {
    if (turn.value != human.value) {
      return;
    }

    if (board[row][col] & human.value) {
      return;
    }

    if (last.value && last.value[0] == row && last.value[1] == col) {
      return;
    }

    last.value = [row, col];
    board[row][col] |= human.value;
    ai();
  }

  function ai() {
    turn.value = 3 - human.value;

    timeoutId = setTimeout(() => {
      const [best, rating] = rate(board, 3 - human.value, last.value);
      evaluation.value = rating;

      if (!best) {
        return;
      }

      board[best[0]][best[1]] |= 3 - human.value;
      turn.value = human.value;
    }, 1000);
  }

  function reset() {
    board.forEach((row) => (row[0] = row[1] = row[2] = 0));
    turn.value = human.value;
    last.value = undefined;
    clearTimeout(timeoutId);

    if (turn.value == Cell.Vertical) {
      ai();
    }
  }

  function swap() {
    human.value = 3 - human.value;
    reset();
  }
</script>

<template>
  <DocumentDisplay center>
    <VStack style="width: 19rem">
      <!-- prettier-ignore -->
      <p>
        Based on
        <a href="https://www.youtube.com/watch?v=ePxrVU4M9uA">
          TickoaTTwo by Oats Jenkins</a
        >. Fun fact: the second player can always win. Try playing with the AI
        as the second player and you will never win.
      </p>

      <p>
        You are the {{ human == Cell.Horizontal ? "first" : "second" }} player
        ({{ human == Cell.Horizontal ? "red" : "blue" }}).
      </p>

      <p>
        Computer evaluation:
        {{
          evaluation == 0
            ? "undecided"
            : evaluation == -1
            ? "player will win"
            : "AI will win"
        }}.
      </p>

      <HStack stretch>
        <Button @click="reset">Reset</Button>

        <Button @click="swap">Switch</Button>
      </HStack>

      <HStack v-for="row in [0, 1, 2]">
        <div
          v-for="col in [0, 1, 2]"
          class="cell second-layer"
          @click="play(row, col)"
        >
          <p :class="characterMap[board[row][col]]" class="colored">
            {{ characterMap[board[row][col]] }}
          </p>
        </div>
      </HStack>
    </VStack>
  </DocumentDisplay>
</template>

<style scoped>
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  .colored {
    position: relative;
    top: -0.125em;
    transition: none;
  }

  .\+ {
    color: purple;
  }

  .\| {
    color: blue;
  }

  .\– {
    color: red;
  }
</style>
