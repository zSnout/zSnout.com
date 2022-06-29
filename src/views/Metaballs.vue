<!--
  Thanks to metaballs-js (https://www.npmjs.com/package/metaballs-js) for the original implementation.
  Thanks to Jamie Wong (http://jamie-wong.com/2016/07/06/metaballs-and-webgl/) for providing a tutorial.
  A test implementation was created using Desmos (https://www.desmos.com/calculator/u3wzt8v1ih).
-->

<script lang="ts" setup>
  import { ref } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useWebGL } from "../composables/useWebGL";

  const metaballs = Array.from({ length: 50 }, () => {
    const x = Math.random();
    const y = Math.random();
    const r = Math.random() * 5 + 5;
    const dx = ((Math.random() - 0.5) * 2) / 200;
    const dy = ((Math.random() - 0.5) * 2) / 200;

    return { x, y, r, dx, dy };
  });

  const canvas = ref<HTMLCanvasElement>();

  // Update the following code if `metaballs.length` is changed.
  useWebGL(
    canvas,
    minify`
    in vec2 pos;
    out vec4 color;

    uniform vec2 window_size;
    uniform vec3 metaballs[50];

    void main() {
      vec2 _pos = (pos * 2.0 - 1.0) * window_size / 2.0;
      float dist;

      for (int i = 0; i < 50; i++) {
        vec3 mb = metaballs[i];

        float dx = mb.x - _pos.x;
        dx = min(dx, 1.0 - dx);

        float dy = mb.y - _pos.y;
        dy = min(dy, 1.0 - dy);

        dist += 1.0 / (dx * dx + dy * dy);
      }

      if (dist > 1000.0) color = vec4(1, 1, 1, 1);
      else color = vec4(0, 0, 0, 1);
    }
    `
  ).then((info) => {
    const { gl, onDispose, program, render, size } = info;
    const { width, height } = size;

    const metaballLoc = gl.getUniformLocation(program, "metaballs");
    const windowLoc = gl.getUniformLocation(program, "window_size");
    let frame: number | undefined;

    function nextFrame() {
      metaballs.map((mb) => {
        mb.x += mb.dx;
        if (mb.x < 0) mb.x = 1 - mb.x;
        else if (mb.x > 1) mb.x = mb.x - 1;

        mb.y += mb.dy;
        if (mb.y < 0) mb.y = 1 - mb.y;
        else if (mb.y > 1) mb.y = mb.y - 1;
      });

      const data = new Float32Array(metaballs.length * 3);
      for (let i = 0; i < metaballs.length; i++) {
        const { x, y, r } = metaballs[i];

        data[i * 2] = x;
        data[i * 2 + 1] = y;
        data[i * 2 + 2] = r;
      }

      gl.uniform3fv(metaballLoc, data);

      if (height.value > width.value) {
        gl.uniform2fv(windowLoc, [1, height.value / width.value]);
      } else {
        gl.uniform2fv(windowLoc, [width.value / height.value, 1]);
      }

      render();
      frame = requestAnimationFrame(nextFrame);
    }

    onDispose(() => frame !== void 0 && cancelAnimationFrame(frame));
    nextFrame();
  });
</script>

<template>
  <FullscreenDisplay>
    <canvas ref="canvas" />
  </FullscreenDisplay>
</template>
