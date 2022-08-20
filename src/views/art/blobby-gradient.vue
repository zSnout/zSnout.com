<script lang="ts" setup>
  import { useRafFn } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { ref } from "vue";
  import ColorField from "../../components/ColorField.vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Labeled from "../../components/Labeled.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { syncOption } from "../../composables/useOption";
  import { randint } from "../../composables/useRandint";
  import mix from "mix-css-color";
  import InlineRangeField from "../../components/InlineRangeField.vue";

  const canvas = ref<HTMLCanvasElement>();
  const clear = ref<() => void>();

  const first = ref("#0000ff");
  syncOption("first", first);

  const second = ref("#ff0000");
  syncOption("second", second);

  const size = useClamp(50, 5, 1000);
  syncOption("size", size);

  useCanvas(canvas, { useDevicePixelRatio: false }).then((info) => {
    const { canvas, onDispose, onResize, size: _size } = info;
    const { width, height } = _size;
    const ctx = canvas.getContext("2d")!;

    if (!ctx) {
      throw new Error("Your device doesn't support HTML5 canvases.");
    }

    clear.value = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width.value, height.value);
    };

    clear.value();
    onResize(clear.value);

    onDispose(
      useRafFn(() => {
        for (let _ of Array(10)) {
          const x = randint(0, width.value);
          const y = randint(0, height.value);
          const p = (100 * (x + y)) / (width.value + height.value);
          const m = mix(second.value, first.value, p);

          ctx.fillStyle = `rgba(${m.rgba.join(", ")})`;

          ctx.beginPath();
          ctx.ellipse(x, y, size.value, size.value, 0, 0, 2 * Math.PI);
          ctx.fill();
        }
      }).pause
    );
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <Labeled label="Top-Left">
        <ColorField v-model="first" />
      </Labeled>

      <Labeled label="Bottom-Right">
        <ColorField v-model="second" />
      </Labeled>

      <Labeled label="Size">
        <InlineRangeField v-model="size" :max="100" :min="5" />
      </Labeled>
    </template>

    <template #indicator>
      <HStack>
        <span class="button" @click="size -= 1">Smaller</span>

        <span>/</span>

        <span class="button" @click="size += 1">Larger</span>
      </HStack>
    </template>
  </FullscreenDisplay>
</template>

<style scoped>
  .button {
    cursor: pointer;
  }
</style>
