<script lang="ts" setup>
  import { ref } from "vue";
  import ColorSliders, {
    useColorSliders,
  } from "../../components/ColorSliders.vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { useSizedUserMedia } from "../../composables/useSizedUserMedia";
  import { useVideoFromStream } from "../../composables/useVideoFromStream";
  import { WebGlCanvas } from "../../composables/webgl/WebGlCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const sliders = useColorSliders();
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

  const shader = `
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${useColorSliders}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;

  useCanvas(canvas).then((info) => {
    const { canvas } = info;
    const gl = new WebGlCanvas(canvas, { fragmentString: shader });

    gl.setTexture("u_texture", video);
    gl.on("render", () => sliders.setGlsl(gl));
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <ColorSliders :sliders="sliders" />
    </template>

    <template #indicator>
      <span style="cursor: pointer" @click="switchCamera">Switch Camera</span>
    </template>
  </FullscreenDisplay>
</template>
