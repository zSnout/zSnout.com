<script lang="ts" setup>
  import { useEventListener } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { computed, onMounted, ref } from "vue";
  import { appHeight, appWidth } from "../main";

  const { left: l, top: t } = defineProps<{ left: number; top: number }>();
  const emit = defineEmits<(event: "close" | "interact") => void>();
  const transition = ref(false);

  const width = useClamp(
    500,
    300,
    computed(() => appWidth.value)
  );

  const height = useClamp(
    300,
    300,
    computed(() => appHeight.value)
  );

  const top = useClamp(
    t - height.value / 2,
    0,
    computed(() => appHeight.value - height.value)
  );

  const left = useClamp(
    l - width.value / 2,
    0,
    computed(() => appWidth.value - width.value)
  );

  const isMoveDown = ref(false);
  const isResizeDown = ref(false);
  const moved = ref(false);

  useEventListener("pointerup", () => {
    isMoveDown.value = false;
    isResizeDown.value = false;
  });

  const frame = ref<HTMLIFrameElement>();

  onMounted(() => {
    const window = frame.value?.contentWindow;
    const interact = () => emit("interact");

    for (const event of ["focus", "keydown", "mousedown", "scroll"]) {
      window?.addEventListener(event, interact, { passive: true });
    }
  });

  function slide() {
    if (innerWidth > innerHeight) {
      left.value = left.value ? 0 : innerWidth / 2;
      top.value = 0;
      width.value = innerWidth / 2;
      height.value = innerHeight;
    } else {
      left.value = 0;
      top.value = top.value ? 0 : innerHeight / 2;
      width.value = innerWidth;
      height.value = innerHeight / 2;
    }

    transition.value = true;
    setTimeout(() => (transition.value = false), 500);
  }
</script>

<template>
  <div
    class="wrapper second-layer"
    :style="
      transition
        ? 'transition: top 0.3s, left 0.3s, width 0.3s, height 0.3s, var(--transitions)'
        : ''
    "
    @mousedown="$emit('interact')"
  >
    <iframe ref="frame" class="frame" src="/" />

    <div
      class="sizer"
      style="bottom: 0; left: 0; cursor: nesw-resize"
      @pointerdown="
        (isResizeDown = true),
          $event.target!.setPointerCapture($event.pointerId),
          $event.stopPropagation()
      "
      @pointermove="
        isResizeDown &&
          ((width -= $event.movementX),
          (left += $event.movementX),
          (height += $event.movementY))
      "
      @touchmove="$event.preventDefault()"
    />

    <div
      class="sizer"
      style="bottom: 0; right: 0; cursor: nwse-resize"
      @pointerdown="
        (isResizeDown = true),
          $event.target!.setPointerCapture($event.pointerId),
          $event.stopPropagation()
      "
      @pointermove="
        isResizeDown &&
          ((width += $event.movementX), (height += $event.movementY))
      "
      @touchmove="$event.preventDefault()"
    />

    <div class="bar">
      <div
        class="mover"
        @click="!moved && slide()"
        @pointerdown="
          (isMoveDown = true),
            (moved = false),
            $event.target!.setPointerCapture($event.pointerId),
            $event.stopPropagation()
        "
        @pointermove="
          isMoveDown &&
            ((moved = true),
            (left += $event.movementX),
            (top += $event.movementY))
        "
        @touchmove="$event.preventDefault()"
      >
        •••
      </div>
    </div>

    <div class="close" @click="emit('close')">x</div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: fixed;
    top: calc(1px * v-bind(top));
    left: calc(1px * v-bind(left));
    width: calc(1px * v-bind(width));
    height: calc(1px * v-bind(height));
    padding: 0;
    overflow: hidden;
    user-select: none;
  }

  .frame {
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    user-select: none;
  }

  .sizer {
    position: absolute;
    width: 1em;
    height: 1em;
  }

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1.5em;
  }

  .mover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    text-align: center;
    cursor: move;
  }

  .close {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    height: 1.5em;
    color: black;
    font-weight: 900;
    font-size: 0.75em;
    font-family: "Courier New", Courier, monospace;
    line-height: normal;
    text-align: center;
    background-color: red;
    border-bottom-right-radius: 0.25em;
  }
</style>
