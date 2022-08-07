<script lang="ts" setup>
  import { useDeviceOrientation, usePointer, useRafFn } from "@vueuse/core";
  import generate, { MazeCell } from "generate-maze";
  import { computed, ref, watch } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const mazeImage = ref<HTMLCanvasElement>();
  const maze = ref<MazeCell[][]>();

  const size = 32;
  const ball = 12;
  const diff = size / 2;
  const indic = size / 4; // amount to move to indicate direction
  let maxX = 0;
  let maxY = 0;

  const playerX = ref(0);
  const playerY = ref(0);

  const { beta, gamma } = useDeviceOrientation();
  const { x: px, y: py } = usePointer();

  const x = computed(() => beta.value ?? (180 * px.value) / innerWidth - 90);
  const y = computed(() => gamma.value ?? (180 * py.value) / innerWidth - 90);

  const dir = computed(() =>
    x.value < -30 && x.value < -Math.abs(y.value)
      ? "right"
      : x.value > 30 && x.value > Math.abs(y.value)
      ? "left"
      : y.value < -30 && y.value < -Math.abs(x.value)
      ? "down"
      : y.value > 30 && y.value > Math.abs(x.value)
      ? "up"
      : "none"
  );

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onResize } = info;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device does not support HTML5 canvases.");

    function makeMaze() {
      if (!maze.value && canvas.width > 4 * size && canvas.height > 4 * size) {
        const x = ~~(canvas.width / size) - 2;
        const y = ~~(canvas.height / size) - 2;

        maze.value = generate(x, y, true, ~~(Math.random() * 1000000));
        maxX = x;
        maxY = y;
      }
    }

    makeMaze();
    if (!maze.value) onResize(makeMaze);

    useRafFn(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      let px = playerX.value * size + size + diff;
      let py = playerY.value * size + size + diff;

      px += dir.value === "left" ? -indic : dir.value === "right" ? indic : 0;
      py += dir.value === "up" ? -indic : dir.value === "down" ? indic : 0;

      ctx.fillStyle = "black";

      ctx.moveTo(px, py);
      ctx.arc(px, py, ball, 0, 2 * Math.PI);

      ctx.fill();
    });

    setInterval(() => {
      if (!maze.value) return;

      const d = dir.value;
      const c = maze.value?.[playerY.value][playerX.value];

      playerX.value +=
        d === "left" && !c.left ? -1 : d === "right" && !c.right ? 1 : 0;

      playerY.value +=
        d === "up" && !c.top ? -1 : d === "down" && !c.bottom ? 1 : 0;

      playerX.value = Math.max(0, Math.min(maxX, playerX.value));
      playerY.value = Math.max(0, Math.min(maxY, playerY.value));
    }, 1000);
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
          ctx.lineWidth = 2;
          ctx.strokeStyle = "black";
          ctx.lineCap = "round";

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
    }

    drawMaze();
    onResize(() => setTimeout(drawMaze, 100));
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="mazeImage" class="maze-image" />

    <canvas ref="canvas" class="main" />
  </FullscreenDisplay>
</template>

<style scoped>
  .maze-image {
    z-index: 1;
  }

  .main {
    z-index: 2;
    background-color: transparent;
  }
</style>
