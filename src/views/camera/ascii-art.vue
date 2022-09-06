<script lang="ts" setup>
  import { useRafFn } from "@vueuse/core";
  import { ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { currentFrame } from "../../composables/useCurrentFrame";
  import { useSizedUserMedia } from "../../composables/useSizedUserMedia";
  import { useVideoFromStream } from "../../composables/useVideoFromStream";

  const sizeH = 9;
  const sizeW = 7.5;
  const chars =
    "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.  ";

  const canvas = ref<HTMLCanvasElement>();
  const facing = ref<"user" | "environment">("user");

  const { stream, setOpts } = useSizedUserMedia({
    audio: false,
    video: { facingMode: { ideal: facing.value } },
  });

  function switchCamera() {
    facing.value = facing.value === "user" ? "environment" : "user";

    setOpts({
      audio: false,
      video: { facingMode: { ideal: facing.value } },
    });
  }

  const video = useVideoFromStream(stream, true);
  const { ctx: frameCtx, update: update } = currentFrame(video);

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas } = info;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Your device doesn't support HTML5 canvases.");

    useRafFn(() => {
      if (!stream.value) return;

      update(~~(canvas.width / sizeW), ~~(canvas.height / sizeH));

      const frame = frameCtx.getImageData(
        0,
        0,
        frameCtx.canvas.width,
        frameCtx.canvas.height
      );

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < frame.height; i++) {
        for (let j = 0; j < frame.width; j++) {
          const [rc, gc, bc] = frame.data.subarray(
            4 * (i * frame.width + j),
            4 * (i * frame.width + j) + 3
          );

          const [rl, gl, bl] = frame.data.subarray(
            4 * (i * frame.width + Math.max(0, j - 1)),
            4 * (i * frame.width + Math.max(0, j - 1)) + 3
          );

          const [rt, gt, bt] = frame.data.subarray(
            4 * (Math.max(0, i - 1) * frame.width + j),
            4 * (Math.max(0, i - 1) * frame.width + j) + 3
          );

          const r = (Math.abs(rc - rl) + Math.abs(rc - rt)) / 2;
          const g = (Math.abs(gc - gl) + Math.abs(gc - gt)) / 2;
          const b = (Math.abs(bc - bl) + Math.abs(bc - bt)) / 2;
          const v = 0.2126 * r + 0.7152 * g + 0.0722 * b;

          const char = chars[chars.length - 1 - ~~((v * chars.length) / 256)];
          ctx.beginPath();
          ctx.fillStyle = "white";
          ctx.font = `${sizeH}px monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(char, j * sizeW + sizeW / 2, i * sizeH + sizeH / 2);
        }
      }
    });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #indicator>
      <span style="cursor: pointer" @click="switchCamera">Switch Camera</span>
    </template>
  </FullscreenDisplay>
</template>
