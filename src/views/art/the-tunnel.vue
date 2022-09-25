<script lang="ts" setup>
  import { useEventListener, useRafFn } from "@vueuse/core";
  import { useIntervalFn } from "@vueuse/shared";
  import { onUnmounted, ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { randomColor } from "../../composables/useRandomColor";
  import { shuffle } from "../../composables/useShuffle";

  const canvas = ref<HTMLCanvasElement>();

  const colors: [
    leftWall: string,
    rightWall: string,
    topWall: string,
    bottomWall: string,
    centerLaser: string,
    laser1: string,
    laser2: string,
    laser3: string,
    laser4: string
  ] = Array<void>(9).fill().map(randomColor) as any;

  let tickId = 0;
  let shadeLevel = 0;

  let laser1 = -40;
  const laser1Max = 200;

  let laser2 = -440;
  const laser2Max = 300;

  let laser3 = -800;
  let laser3Max = 400;

  let laser4 = -1300;
  let laser4Max = 300;

  let willReverse = false;

  let boxLeft = 0;
  let boxTop = 0;
  let boxWidth = 1;
  let boxHeight = 1;

  const depthLasers: [xPercent: number, yPercent: number][] = [];

  useCanvas(canvas, { useDevicePixelRatio: false }).then((data) => {
    const { canvas, onDispose, onResize } = data;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) throw new Error("Your device doesn't support HTML5 canvases.");

    function tick() {
      clearTimeout(tickId);
      ctx.drawImage(canvas, boxLeft, boxTop, boxWidth, boxHeight);

      if (shadeLevel === 1) {
        ctx.fillStyle = "#00000040";
        ctx.fillRect(boxLeft, boxTop, boxWidth, boxHeight);

        for (const [dx, dy] of depthLasers) {
          const lx = dx * (canvas.width - boxLeft - 128);
          const ly = dy * (canvas.height - boxTop - 32);

          ctx.fillStyle = colors[4];
          ctx.fillRect(lx, ly, 128, 32);
        }
      }

      for (let l = -20; l < laser1 && l < laser1Max; l++) {
        ctx.beginPath();
        ctx.fillStyle = colors[5];
        ctx.arc(
          canvas.width - (laser1Max - l),
          canvas.height - l,
          20,
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.closePath();
      }

      for (let l = -20; l < laser2 && l < laser2Max; l++) {
        ctx.beginPath();
        ctx.fillStyle = colors[6];
        ctx.arc(laser2Max - 1.5 * l, canvas.height - l, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }

      for (let l = -20; l < laser3 && l < laser3Max; l++) {
        ctx.beginPath();
        ctx.fillStyle = colors[7];
        ctx.arc(
          canvas.width / 2 + laser3Max - l / 2,
          canvas.height - l,
          20,
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.closePath();
      }

      for (let l = -20; l < laser4 && l < laser4Max; l++) {
        ctx.beginPath();
        ctx.fillStyle = colors[8];
        ctx.arc(canvas.width - (laser4Max - 1.5 * l), l, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }

      tickId = setTimeout(tick, 100);
    }

    function init() {
      const boxPc = Math.random() * 0.15 + 0.8;
      boxWidth = Math.floor(boxPc * canvas.width);
      boxHeight = Math.floor(boxPc * canvas.height);
      boxLeft = Math.floor(Math.random() * (canvas.width - boxWidth));
      boxTop = Math.floor(Math.random() * (canvas.height - boxHeight));

      [laser1, laser2, laser3, laser4] = shuffle([-40, -450, -800, -1300]);
      laser3Max = canvas.height / 2;

      initEdges();
    }

    function initEdges() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = colors[0];
      ctx.fillRect(0, 0, 20, canvas.height);

      ctx.fillStyle = colors[1];
      ctx.fillRect(canvas.width - 20, 0, 20, canvas.height);

      ctx.fillStyle = colors[2];
      ctx.fillRect(0, 0, canvas.width, 10);

      ctx.fillStyle = colors[3];
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
    }

    setTimeout(() => {
      init();
      onResize(init);

      tick();
    }, 200);

    onDispose(
      useEventListener("click", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const px = x / canvas.width;
        const py = y / canvas.height;

        boxLeft = px * (canvas.width - boxWidth);
        boxTop = py * (canvas.height - boxHeight);

        initEdges();

        for (let i = 0; i < 50; i++) {
          tick();
        }
      })
    );
  });

  onUnmounted(() => {
    clearTimeout(tickId);
  });

  useIntervalFn(() => {
    shadeLevel = (shadeLevel + 1) % 2;
    depthLasers.push([Math.random() / 2 + 0.25, Math.random() / 2 + 0.25]);

    if (depthLasers.length > 2) {
      depthLasers.shift();
    }
  }, 4000);

  useRafFn(() => {
    if (
      willReverse &&
      laser1 < -20 &&
      laser2 < -20 &&
      laser3 < -20 &&
      laser4 < -20
    ) {
      laser1--;
      laser2--;
      laser3--;
      laser4--;
    }

    laser1++;
    laser2++;
    laser3++;
    laser4++;
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" class="canvas" />
  </FullscreenDisplay>
</template>

<style lang="scss" scoped>
  .canvas {
    background-color: black;
  }
</style>
