import { MaybeElementRef, MaybeRef } from "@vueuse/core";
import { unref, watchEffect } from "vue";
import { CanvasInfo, useCanvas } from "./useCanvas";

export function useShader(
  gl: WebGL2RenderingContext,
  type: "VERTEX" | "FRAGMENT",
  source: string
) {
  const shader = gl.createShader(gl[`${type}_SHADER`]);

  if (!shader) {
    throw new Error("An error occurred while initializing a shader.");
  }

  gl.shaderSource(
    shader,
    "#version 300 es\nprecision highp float;\n" + source.trim()
  );
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
  const program = gl.createProgram();

  if (!program) {
    throw new Error("An error occurred while initializing a WebGL program.");
  }

  const vert = useShader(gl, "VERTEX", vertShader);
  const frag = useShader(gl, "FRAGMENT", fragShader);

  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return { program, vertex: vert, fragment: frag };
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);

  throw new Error("An error occurred while creating a WebGL program.");
}

const vertShader = `
in vec2 _pos;
out vec2 pos;

void main() {
  gl_Position = vec4(pos = _pos, 0, 1);
}`;

export interface WebGLOptions {
  preserveDrawingBuffer?: boolean;
  vertShader?: string;
}

export interface WebGLProgram extends CanvasInfo {
  gl: WebGL2RenderingContext;
  program: globalThis.WebGLProgram;
  render(): void;
  destroy(): void;

  useUniform(
    name: string,
    type: "f" | "i",
    value: MaybeRef<number | number[]>
  ): void;
}

export async function useWebGL(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: WebGLOptions
): Promise<WebGLProgram> {
  const data = await useCanvas(canvasRef);
  const { canvas, onResize, onDispose } = data;

  const gl = canvas.getContext("webgl2", {
    preserveDrawingBuffer: opts?.preserveDrawingBuffer,
  })!;

  if (!gl) {
    throw new Error("An error occurred while initializing the context.");
  }

  const { program, vertex, fragment } = useProgram(
    gl,
    opts?.vertShader ?? vertShader,
    shader
  );

  gl.useProgram(program);
  onDispose(() => gl.deleteProgram(program));
  onDispose(() => gl.deleteShader(vertex));
  onDispose(() => gl.deleteShader(fragment));

  const posAttrLocation = gl.getAttribLocation(program, "_pos");
  gl.enableVertexAttribArray(posAttrLocation);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
    gl.STATIC_DRAW
  );
  gl.vertexAttribPointer(posAttrLocation, 2, gl.FLOAT, false, 0, 0);

  onDispose(() => gl.deleteBuffer(buf));

  function render() {
    if (gl.isContextLost()) return;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(
      -canvas.width,
      -canvas.height,
      2 * canvas.width,
      2 * canvas.height
    );
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  let shouldRerender = false;
  const interval = setInterval(() => {
    if (shouldRerender) {
      shouldRerender = false;
      render();
    }
  });

  onDispose(() => clearInterval(interval));
  onResize(render);

  function useUniform(
    name: string,
    type: "f" | "i",
    value: MaybeRef<number | number[]>
  ) {
    if (gl.isContextLost()) return;
    const location = gl.getUniformLocation(program, name);
    if (!location) return;

    onDispose(
      watchEffect(() => {
        let val = unref(value);
        if (typeof val === "number") val = [val];
        if (val.length < 1 || val.length > 4) return;

        gl[`uniform${val.length as 1 | 2 | 3 | 4}${type}v`](location, val);

        shouldRerender = true;
      })
    );
  }

  return Object.assign<CanvasInfo, Omit<WebGLProgram, keyof CanvasInfo>>(data, {
    gl,
    program,
    render,
    useUniform,
    destroy() {
      data.dispose();
    },
  });
}
