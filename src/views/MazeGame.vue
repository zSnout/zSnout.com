<script lang="ts" setup>
  import { useRafFn } from "@vueuse/core";
  import generate, { MazeCell } from "generate-maze";
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";

  const canvas = ref<HTMLCanvasElement>();

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize } = info;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device does not support HTML5 canvases.");

    let maze: MazeCell[][] | undefined;

    function makeMaze() {
      if (!maze && canvas.width > 96 && canvas.height > 96) {
        maze = generate(
          ~~(canvas.width / 24) - 2,
          ~~(canvas.height / 24) - 2,
          true
        );
      }
    }

    makeMaze();
    if (!maze) onResize(makeMaze);

    useRafFn(() => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!maze) return;

      ctx.fillStyle = "black";
      for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
          const cell = maze[i][j];
          const x = 24 * (i + 1);
          const y = 24 * (j + 1);

          if (cell.top) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + 24, y);
            ctx.stroke();
          }

          if (cell.left) {
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 24);
            ctx.stroke();
          }

          if (cell.right) {
            ctx.moveTo(x, y + 24);
            ctx.lineTo(x + 24, y + 24);
            ctx.stroke();
          }

          if (cell.bottom) {
            ctx.moveTo(x + 24, y);
            ctx.lineTo(x + 24, y + 24);
            ctx.stroke();
          }
        }
      }
    });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <canvas ref="canvas2" />
  </FullscreenDisplay>
</template>
