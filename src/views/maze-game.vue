<script lang="ts" setup>
  import { useEventListener, useRafFn } from "@vueuse/core";
  import generate, { MazeCell } from "generate-maze";
  import { computed, ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useCanvas } from "../composables/useCanvas";
  import VStack from "../components/VStack.vue";
  import HStack from "../components/HStack.vue";

  const canvas = ref<HTMLCanvasElement>();
  const mazeImage = ref<HTMLCanvasElement>();
  const maze = ref<MazeCell[][]>();

  const size = 32;
  const ball = 12;
  const diff = size / 2;
  let maxX = 0;
  let maxY = 0;

  const playerX = ref(0);
  const playerY = ref(0);

  function move(x: number, y: number, force = false) {
    if (!maze.value) return;
    if (x && y) return;

    const c = maze.value?.[playerY.value][playerX.value];

    if (force) {
      playerX.value += x;
      playerY.value += y;
    } else {
      playerX.value += x === -1 && !c.left ? -1 : x === 1 && !c.right ? 1 : 0;
      playerY.value += y === -1 && !c.top ? -1 : y === 1 && !c.bottom ? 1 : 0;
    }

    playerX.value = Math.max(0, Math.min(maxX, playerX.value));
    playerY.value = Math.max(0, Math.min(maxY, playerY.value));
  }

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

      const px = playerX.value * size + size + diff;
      const py = playerY.value * size + size + diff;

      ctx.fillStyle = "black";

      ctx.moveTo(px, py);
      ctx.arc(px, py, ball, 0, 2 * Math.PI);

      ctx.fill();
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

  const w = "ArrowUp W w".split(" ");
  const a = "ArrowLeft A a".split(" ");
  const s = "ArrowDown S s".split(" ");
  const d = "ArrowRight D d".split(" ");

  useEventListener("keydown", (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      if (a.includes(event.key)) {
        event.preventDefault();
        move(-1, 0, event.altKey);
      } else if (d.includes(event.key)) {
        event.preventDefault();
        move(1, 0, event.altKey);
      } else if (w.includes(event.key)) {
        event.preventDefault();
        move(0, -1, event.altKey);
      } else if (s.includes(event.key)) {
        event.preventDefault();
        move(0, 1, event.altKey);
      }
    }
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="mazeImage" class="maze-image" />

    <canvas ref="canvas" class="main" />

    <VStack class="controls dark" :space="1 / 16" stretch>
      <HStack :space="1 / 16" stretch>
        <div />
        <div class="btn second-layer w" @click="move(0, -1)">^</div>
        <div />
      </HStack>

      <HStack :space="1 / 16" stretch>
        <div class="btn second-layer a" @click="move(-1, 0)">&lt;</div>
        <div />
        <div class="btn second-layer d" @click="move(1, 0)">&gt;</div>
      </HStack>

      <HStack :space="1 / 16" stretch>
        <div />
        <div class="btn second-layer s" @click="move(0, 1)">v</div>
        <div />
      </HStack>
    </VStack>
  </FullscreenDisplay>
</template>

<style lang="scss" scoped>
  .maze-image {
    z-index: 1;
  }

  .main {
    z-index: 2;
    background-color: transparent;
  }

  .controls {
    position: fixed;
    bottom: 1em;
    left: 1em;
    z-index: 3;
    width: 10em;
    height: 10em;
    padding: 0 !important;
    user-select: none;
  }

  .spacer,
  .btn {
    padding: 0 !important;
    color: white;
    font-size: 2em;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .w,
  .d {
    border-bottom-left-radius: 0.5em;
  }

  .s,
  .d {
    border-top-left-radius: 0.5em;
  }

  .w,
  .a {
    border-bottom-right-radius: 0.5em;
  }

  .s,
  .a {
    border-top-right-radius: 0.5em;
  }
</style>
