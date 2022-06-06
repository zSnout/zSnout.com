import { MaybeElementRef, unrefElement, useElementSize } from "@vueuse/core";
import { watchEffect } from "vue";

export function useShader(
  gl: WebGL2RenderingContext,
  type: "VERTEX" | "FRAGMENT",
  source: string
) {
  const shader = gl.createShader(gl[`${type}_SHADER`]);
  if (!shader) throw new Error("An error occurred while compiling a shader.");

  gl.shaderSource(shader, "#version 300 es\n" + source.trim());
  gl.compileShader(shader);

  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);

  throw new Error("An error occurred while compiling a shader.");
}

export function useProgram(
  gl: WebGL2RenderingContext,
  vertShader: string,
  fragShader: string
) {
  let program = gl.createProgram();

  if (!program) {
    throw new Error("An error occurred while creating a WebGL program.");
  }

  let vert = useShader(gl, "VERTEX", vertShader);
  let frag = useShader(gl, "FRAGMENT", fragShader);

  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);

  throw new Error("An error occurred while creating a WebGL program.");
}

const vertShader = `
precision highp float;
in vec2 _pos;
out vec2 pos;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos / vec2(2, 2) + vec2(0.5, 0.5);
}`;

interface WebGLOptions {
  preserveDrawingBuffer?: boolean;
}

interface CanvasInfo {
  canvas: HTMLCanvasElement;
  onResize(hook: () => void): void;
}

interface WebGLProgram extends CanvasInfo {
  gl: WebGL2RenderingContext;
  program: globalThis.WebGLProgram;
  render(): void;
}

export function useCanvas(canvas: MaybeElementRef) {
  return new Promise<CanvasInfo>((resolve) => {
    watchEffect(() => {
      const el = unrefElement(canvas);

      if (el instanceof HTMLCanvasElement) {
        const { width, height } = useElementSize(el);

        const onResize: (() => void)[] = [];

        watchEffect(() => {
          el.width = width.value;
          el.height = height.value;
          onResize.forEach((hook) => hook());
        });

        resolve({
          canvas: el,
          onResize: (hook) => onResize.push(hook),
        });
      }
    });
  });
}

export function useWebGL(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: WebGLOptions
) {
  return new Promise<WebGLProgram>((resolve) => {
    watchEffect(async () => {
      const { canvas, onResize } = await useCanvas(canvasRef);

      const gl = canvas.getContext("webgl2", {
        preserveDrawingBuffer: opts?.preserveDrawingBuffer,
      })!;

      if (!gl) {
        throw new Error("An error occurred while initializing the context.");
      }

      const program = useProgram(gl, vertShader, shader);
      gl.useProgram(program);

      const posAttrLocation = gl.getAttribLocation(program, "_pos");
      gl.enableVertexAttribArray(posAttrLocation);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([1, 1, -1, 1, 1, -1, -1, 1, 1, -1, -1, -1]),
        gl.STATIC_DRAW
      );
      gl.vertexAttribPointer(posAttrLocation, 2, gl.FLOAT, false, 0, 0);

      function render() {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      onResize(render);

      resolve({ canvas, gl, onResize, program, render });
    });
  });
}
