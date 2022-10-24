<script lang="ts" setup>
  import { useElementSize, useRafFn } from "@vueuse/core";
  import { onMounted, reactive, ref } from "vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import VStack from "../components/VStack.vue";
  import HStack from "../components/HStack.vue";
  import Button from "../components/Button.vue";
  import Spacer from "../components/Spacer.vue";

  const src = ref("");
  const image = document.createElement("img");
  const canvasRef = ref<HTMLCanvasElement>();
  const pieces: Piece[][] = [];

  let emptyRow = 0;
  let emptyCol = 0;

  interface Piece {
    data?: ImageData;
  }

  onMounted(() => {
    const pictures = import.meta.glob<typeof import("*.webp")>(
      "../pictures/slide-puzzle/*.webp",
      { eager: true }
    );

    const sources = Object.keys(pictures);
    const importSource = sources[Math.floor(sources.length * Math.random())];

    image.src = src.value = pictures[importSource].default;
    image.onload = restart;
  });

  let numRows = 4;
  let numCols = 4;
  let asyncId = 0;

  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function restart() {
    const myId = ++asyncId;

    const canvas = canvasRef.value!;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device doesn't support HTML5 canvases.");

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const rowSize = canvas.height / numRows;
    const colSize = canvas.width / numCols;

    ctx.drawImage(image, 0, 0);

    pieces.splice(0, pieces.length);

    for (let row = 0; row < numRows; row++) {
      const pieceRow: Piece[] = [];
      const y = rowSize * row;

      for (let col = 0; col < numCols; col++) {
        pieceRow.push({
          data: ctx.getImageData(colSize * col, y, colSize, rowSize),
        });
      }

      pieces.push(pieceRow);
    }

    emptyRow = Math.floor(numRows * Math.random());
    emptyCol = Math.floor(numCols * Math.random());
    pieces[emptyRow][emptyCol].data = undefined;

    await wait(5000);
    if (asyncId !== myId) return;

    for (let i = 0; i < 60 * numRows * numCols; i++) {
      shuffleOnce();
    }
  }

  function render() {
    const canvas = canvasRef.value!;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    if (!pieces.length) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rowSize = canvas.height / numRows;
    const colSize = canvas.width / numCols;

    for (let row = 0; row < numRows; row++) {
      const pieceRow = pieces[row];
      const y = rowSize * row;

      for (let col = 0; col < numCols; col++) {
        const { data } = pieceRow[col];

        if (data) {
          ctx.putImageData(data, colSize * col, y);
        }
      }
    }
  }

  const shufflers: readonly (readonly [
    isValid: () => boolean,
    run: () => void
  ])[] = [
    [
      () => emptyCol !== 0,
      () => {
        const row = pieces[emptyRow];
        [row[emptyCol], row[emptyCol - 1]] = [row[emptyCol - 1], row[emptyCol]];

        emptyCol--;
      },
    ],
    [
      () => emptyRow !== 0,
      () => {
        [pieces[emptyRow][emptyCol], pieces[emptyRow - 1][emptyCol]] = [
          pieces[emptyRow - 1][emptyCol],
          pieces[emptyRow][emptyCol],
        ];

        emptyRow--;
      },
    ],
    [
      () => emptyCol !== numCols - 1,
      () => {
        const row = pieces[emptyRow];
        [row[emptyCol], row[emptyCol + 1]] = [row[emptyCol + 1], row[emptyCol]];

        emptyCol++;
      },
    ],
    [
      () => emptyRow !== numRows - 1,
      () => {
        [pieces[emptyRow][emptyCol], pieces[emptyRow + 1][emptyCol]] = [
          pieces[emptyRow + 1][emptyCol],
          pieces[emptyRow][emptyCol],
        ];

        emptyRow++;
      },
    ],
  ];

  function shuffleOnce() {
    const opts = shufflers
      .filter(([isValid]) => isValid())
      .map(([, run]) => run);

    opts[Math.floor(opts.length * Math.random())]();
  }

  function makePuzzleEasier() {
    numRows--;
    numCols--;
    if (numRows < 2) numRows = 2;
    if (numCols < 2) numCols = 2;

    restart();
  }

  function makePuzzleHarder() {
    numRows++;
    numCols++;
    restart();
  }

  const { width, height } = useElementSize(canvasRef);

  function onClick(event: MouseEvent) {
    const xPercent = event.offsetX / width.value;
    const yPercent = event.offsetY / height.value;

    const row = Math.floor(yPercent * numRows);
    const col = Math.floor(xPercent * numCols);

    if (
      (row == emptyRow && (col == emptyCol - 1 || col == emptyCol + 1)) ||
      (col == emptyCol && (row == emptyRow - 1 || row == emptyRow + 1))
    ) {
      [pieces[row][col], pieces[emptyRow][emptyCol]] = [
        pieces[emptyRow][emptyCol],
        pieces[row][col],
      ];

      emptyRow = row;
      emptyCol = col;
    }
  }

  useRafFn(render);
</script>

<template>
  <DocumentDisplay center>
    <VStack class="outer">
      <canvas
        ref="canvasRef"
        class="puzzle second-layer"
        style="padding: 0"
        @pointerdown="onClick"
      />

      <HStack>
        <Button @click="makePuzzleEasier">Easier</Button>

        <Spacer />

        <Button @click="restart">Reset</Button>

        <Spacer />

        <Button @click="makePuzzleHarder">Harder</Button>
      </HStack>
    </VStack>
  </DocumentDisplay>
</template>

<style scoped>
  .puzzle {
    max-width: calc(var(--app-width) - 4em);
    max-height: calc(var(--app-height) - 3.5em - 4em - 2.5em);
  }

  .outer {
    max-height: calc(var(--app-height) - 3.5em - 4em);
  }
</style>
