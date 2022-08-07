<script lang="ts" setup>
  import { useRafFn } from "@vueuse/core";
  import generate, { MazeCell } from "generate-maze";
  import { ref, watch } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const mazeImage = ref<HTMLCanvasElement>();
  const maze = ref<MazeCell[][]>();
  let mazeImageData: ImageData | undefined;

  const size = 24;

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize } = info;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device does not support HTML5 canvases.");

    function makeMaze() {
      if (!maze.value && canvas.width > 96 && canvas.height > 96) {
        maze.value = generate(
          ~~(canvas.width / 24) - 2,
          ~~(canvas.height / 24) - 2
        );
      }
    }

    makeMaze();
    if (!maze.value) onResize(makeMaze);

    useRafFn(() => {
      if (!mazeImageData) return;

      ctx.putImageData(mazeImageData, 0, 0);
    });
  });

  useCanvas(mazeImage, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize } = info;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device does not support HTML5 canvases.");

    function drawMaze() {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!maze.value) return;

      for (const row of maze.value) {
        for (const cell of row) {
          ctx.fillStyle = "black";
          const x = cell.x * size + size;
          const y = cell.y * size + size;

          if (cell.top) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + size, y);
            ctx.stroke();
          }

          if (cell.left) {
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + size);
            ctx.stroke();
          }

          if (cell.right) {
            ctx.moveTo(x + size, y);
            ctx.lineTo(x + size, y + size);
            ctx.stroke();
          }

          if (cell.bottom) {
            ctx.moveTo(x, y + size);
            ctx.lineTo(x + size, y + size);
            ctx.stroke();
          }
        }
      }

      mazeImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    drawMaze();
    onResize(drawMaze);
    watch(maze, drawMaze);
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="mazeImage" />

    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
