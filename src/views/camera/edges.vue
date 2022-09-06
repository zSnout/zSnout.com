<script lang="ts" setup>
  import { useClamp } from "@vueuse/math";
  import { ref } from "vue";
  import FullscreenDisplay from "../../components/FullscreenDisplay.vue";
  import Incrementable from "../../components/Incrementable.vue";
  import { useCanvas } from "../../composables/useCanvas";
  import { useSizedUserMedia } from "../../composables/useSizedUserMedia";
  import { useVideoFromStream } from "../../composables/useVideoFromStream";
  import { WebGlCanvas } from "../../composables/webgl/WebGlCanvas";

  const canvas = ref<HTMLCanvasElement>();
  const facing = ref<"user" | "environment">("user");
  const sampleSize = useClamp(10, 1, 100);

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
  uniform float sampleSize;

  float avg(vec2 inputs) {
    return (inputs.x + inputs.y) / 2.0;
  }

  float avg(vec3 inputs) {
    return (inputs.x + inputs.y + inputs.z) / 2.0;
  }

  float avg(vec4 inputs) {
    return (inputs.x + inputs.y + inputs.z + inputs.w) / 2.0;
  }

  float diff(vec2 other) {
    vec3 self = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    vec3 neighbor = texture2D(u_texture, (gl_FragCoord.xy + other) / u_resolution).rgb;
    vec3 diff = self - neighbor;

    return avg(diff);
  }

  void main() {
    float diffA = diff(vec2(-sampleSize, 0));
    float diffB = diff(vec2(0, -sampleSize));
    float diffC = diff(vec2(sampleSize, 0));
    float diffD = diff(vec2(0, sampleSize));
    float avgA = avg(vec4(diffA, diffB, diffC, diffD));

    diffA = diff(vec2(-sampleSize, -sampleSize));
    diffB = diff(vec2(sampleSize, -sampleSize));
    diffC = diff(vec2(-sampleSize, sampleSize));
    diffD = diff(vec2(sampleSize, sampleSize));
    float avgB = avg(vec4(diffA, diffB, diffC, diffD));

    float diffAvg = avg(vec2(avgA, avgB));

    gl_FragColor = vec4(vec3(diffAvg), 1.0);
  }
  `;

  useCanvas(canvas).then((info) => {
    const { canvas } = info;
    const gl = new WebGlCanvas(canvas, { fragmentString: shader });

    gl.setTexture("u_texture", video);

    gl.on("render", () => {
      gl.setUniform("sampleSize", sampleSize.value);
    });
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />

    <template #options>
      <Incrementable v-model="sampleSize" />
    </template>

    <template #indicator>
      <span style="cursor: pointer" @click="switchCamera">Switch Camera</span>
    </template>
  </FullscreenDisplay>
</template>
