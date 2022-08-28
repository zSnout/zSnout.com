<script lang="ts" setup>
  import { Chess, ShortMove, SQUARES } from "chess.js";
  import { Api } from "chessground/api";
  import { Dests } from "chessground/types";
  import { ref } from "vue";
  import Chessboard from "../components/Chessboard.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import InlineButton from "../components/InlineButton.vue";
  import Spacer from "../components/Spacer.vue";
  import { syncOption } from "../composables/useOption";
  import { shuffle } from "../composables/useShuffle";

  const game = Chess();
  const dests: Dests = new Map();
  let api: Api;

  // If a mode returns a single move, it executes that move.
  // If it returns an array of moves, they are presented to the player as a choice.
  // If it returns a Promise, it must resolve to a move or undefined, and that move will be executed.
  // If it returns undefined or a Promise resolving to undefined, that mode loses.

  const modes: Record<
    string,
    () => ShortMove | undefined | ShortMove[] | Promise<ShortMove | undefined>
  > = {
    "Player"() {
      return game.moves({ verbose: true });
    },
    "Invincible"() {
      const moves: ShortMove[] = [];

      for (const from of SQUARES) {
        const piece = game.get(from);
        if (piece?.color !== game.turn()) continue;

        for (const to of SQUARES) {
          const piece = game.get(to);
          if (piece?.color === game.turn() || piece?.type === "k") continue;

          moves.push({ from, to, promotion: "q" });
        }
      }

      return moves;
    },
    "Random"() {
      const moves = game.moves({ verbose: true });
      return moves[Math.floor(moves.length * Math.random())];
    },
    "Prefer Capturing"() {
      const pieceOrder = ["k", "q", "r", "b", "n", "p", undefined];

      const moves = shuffle(game.moves({ verbose: true }));
      moves.sort(
        ({ captured: a }, { captured: b }) =>
          pieceOrder.indexOf(a) - pieceOrder.indexOf(b)
      );

      return moves[0];
    },
    "Refuse Capturing"() {
      const pieceOrder = ["k", "q", "r", "b", "n", "p", undefined];

      const moves = shuffle(game.moves({ verbose: true }));
      moves.sort(
        ({ captured: a }, { captured: b }) =>
          pieceOrder.indexOf(b) - pieceOrder.indexOf(a)
      );

      return moves[0];
    },
    "Use Weak Pieces"() {
      const pieceOrder = ["k", "q", "r", "b", "n", "p", undefined];

      const moves = shuffle(game.moves({ verbose: true }));
      moves
        .sort(
          ({ piece: a }, { piece: b }) =>
            pieceOrder.indexOf(b) - pieceOrder.indexOf(a)
        )
        .sort(
          ({ captured: a }, { captured: b }) =>
            pieceOrder.indexOf(b) - pieceOrder.indexOf(a)
        );

      return moves[0];
    },
  };

  const modeKeys = Object.keys(modes);
  const white = ref("Player");
  const black = ref("Player");
  const autoFlip = ref(false);
  const instant = ref(false);
  const gameOver = ref(false);
  const orientation = ref<"white" | "black">("white");
  const fen = ref(game.fen());
  const turn = ref<"w" | "b">(game.turn());

  syncOption("white", white);
  syncOption("black", black);
  syncOption("autoFlip", autoFlip);
  syncOption("instant", instant);
  syncOption("fen", fen);
  syncOption("orientation", orientation);

  game.load(fen.value);
  turn.value = game.turn();

  function reset() {
    game.reset();
    turn.value = "w";
    gameOver.value = false;

    if (autoFlip.value) {
      api?.set({ orientation: "white", fen: game.fen() });
    }

    playTurn();
  }

  function setAutoFlip(flip: boolean) {
    autoFlip.value = flip;

    if (flip) {
      orientation.value = game.turn() === "w" ? "white" : "black";
      api?.set({ orientation: orientation.value });
    }
  }

  function flip() {
    if (autoFlip.value) {
      autoFlip.value = false;
    }

    api?.toggleOrientation();
    orientation.value = api.state.orientation;
  }

  function makeDests(moves: ShortMove[]): Dests {
    dests.clear();

    for (const move of moves) {
      const to = dests.get(move.from) || [];
      to.push(move.to);

      dests.set(move.from, to);
    }

    return dests;
  }

  function allowMoves(moves: ShortMove[]) {
    if (!api) return;

    api.state.turnColor = api.state.movable.color =
      (turn.value = game.turn()) === "w" ? "white" : "black";

    if (autoFlip.value) {
      api?.set({ orientation: game.turn() === "w" ? "white" : "black" });
    }

    api.state.movable.dests = makeDests(moves);
    api.state.movable.free = false;

    api.state.movable.events.after = (from, to) => {
      if (from === "a0" || to === "a0") {
        api.cancelMove();
      } else if (!moves.some((move) => move.from === from && move.to === to)) {
        api.cancelMove();
      } else {
        makeMove({ from, to, promotion: "q" });
      }
    };
  }

  function onReady(_api: Api) {
    api = _api;

    if (autoFlip.value) {
      orientation.value = turn.value === "w" ? "white" : "black";
    }

    api.set({
      blockTouchScroll: true,
      fen: game.fen(),
      orientation: orientation.value,
      premovable: { enabled: false },
      animation: { enabled: false },
    });

    requestAnimationFrame(() => {
      api.set({ animation: { enabled: true } });
    });

    playTurn();
  }

  function setWhite(mode: string) {
    white.value = mode;
    if (game.turn() === "w") playTurn();
  }

  function setBlack(mode: string) {
    black.value = mode;
    if (game.turn() === "b") playTurn();
  }

  // If a player mode resolves asynchronously, we generate a new asyncId and make
  // sure it matches when the mode finally resolves. This allows the user to pick
  // a new mode in the middle of, say, Stockfish computing a turn.
  let asyncId = 0;

  function wait() {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, instant.value ? 0 : 500);
    });
  }

  function playTurn() {
    const mode = modes[game.turn() === "w" ? white.value : black.value];
    const result = mode();
    asyncId++;

    if (Array.isArray(result)) {
      allowMoves(result);
    } else if (result) {
      allowMoves([]);
      const myId = asyncId;

      Promise.all([result, wait()]).then(([move]) => {
        if (myId === asyncId) {
          if (move) {
            makeMove(move);
          } else {
            allowMoves([]);
            gameOver.value = true;
          }
        }
      });
    } else {
      allowMoves([]);
      gameOver.value = true;
    }
  }

  function makeMove(move: ShortMove) {
    const turn = game.turn();

    if (!game.move(move)) {
      const piece = game.remove(move.from);

      if (piece) {
        if (
          piece.color === "w" &&
          piece.type === "p" &&
          move.to.endsWith("8")
        ) {
          piece.type = "q";
        }

        if (
          piece.color === "b" &&
          piece.type === "p" &&
          move.to.endsWith("1")
        ) {
          piece.type = "q";
        }

        game.put(piece, move.to);
      }
    }

    game.load(
      game.fen().replace(/ [bw] /, () => (turn === "b" ? " w " : " b "))
    );

    fen.value = game.fen();
    api.set({ fen: game.fen(), lastMove: [move.from, move.to] });
    playTurn();
  }
</script>

<template>
  <DocumentDisplay :class="{ gameOver }" center>
    <Chessboard @ready="onReady" />

    <template #aside>
      <nav>
        <ul>
          <li>
            <InlineButton @click="reset">Reset</InlineButton>
          </li>

          <li>
            <InlineButton @click="flip">Flip Board</InlineButton>
          </li>

          <li>
            <InlineButton :active="autoFlip" @click="setAutoFlip(!autoFlip)">
              Auto-Flip?
            </InlineButton>
          </li>

          <li>
            <InlineButton :active="instant" @click="instant = !instant">
              Instantly Move AIs?
            </InlineButton>
          </li>

          <li>
            <InlineButton :active="turn === 'w'">White</InlineButton>

            <ul>
              <li v-for="mode in modeKeys">
                <InlineButton :active="white === mode" @click="setWhite(mode)">
                  {{ mode }}
                </InlineButton>
              </li>
            </ul>
          </li>

          <li>
            <InlineButton :active="turn === 'b'">Black</InlineButton>

            <ul>
              <li v-for="mode in modeKeys">
                <InlineButton :active="black === mode" @click="setBlack(mode)">
                  {{ mode }}
                </InlineButton>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </template>
  </DocumentDisplay>
</template>

<style scoped>
  .gameOver .chessboard {
    filter: grayscale(1);
  }
</style>
