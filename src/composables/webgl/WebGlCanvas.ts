import { tryOnScopeDispose } from "@vueuse/core";
import {
  Canvas as GlslCanvas,
  ICanvasOptions,
} from "glsl-canvas-js/dist/esm/glsl";
import { Ref, watchEffect } from "vue";

export class WebGlCanvas extends GlslCanvas {
  static readonly v3pragma = "#version 300 es\n";

  static extend(original: string, extra: string, force?: boolean) {
    if (!force && original.includes(extra)) {
      return original;
    }

    if (original.startsWith(this.v3pragma)) {
      return `${this.v3pragma}${extra}${original.slice(this.v3pragma.length)}`;
    } else {
      return extra + original;
    }
  }

  static extendMain(original: string, extra: string, force?: boolean) {
    if (!force && original.includes(extra)) {
      return original;
    }

    let index = original.indexOf(minify`void main() {`);
    if (index === -1) return original;
    index += minify`void main() {`.length;

    return `${original.slice(0, index)}${extra}${original.slice(index)}`;
  }

  constructor(
    canvas: HTMLCanvasElement,
    {
      fragmentString: frag,
      vertexString: vert,
      ...options
    }: WebGlCanvas.Options = {}
  ) {
    if (typeof vert === "string") {
      vert = WebGlCanvas.extend(vert, "precision highp float;");
    }

    if (typeof frag === "string") {
      frag = WebGlCanvas.extend(frag, "precision highp float;");
    }

    super(canvas, { ...options, vertexString: vert, fragmentString: frag });

    tryOnScopeDispose(() => this.destroy());
  }

  load(frag?: string, vert?: string) {
    if (typeof vert === "string") {
      vert = WebGlCanvas.extend(vert, "precision highp float;");
    }

    if (typeof frag === "string") {
      frag = WebGlCanvas.extend(frag, "precision highp float;");
    }

    return super.load(frag, vert);
  }

  useUniform(key: string, value: Ref<unknown>) {
    return watchEffect(() => {
      const { value: v } = value;

      if (Array.isArray(v)) {
        this.setUniform(key, ...v);
      } else {
        this.setUniform(key, v);
      }
    });
  }

  useUniformOfInt(key: string, value: Ref<unknown>) {
    return watchEffect(() => {
      const { value: v } = value;

      if (Array.isArray(v)) {
        this.setUniformOfInt(key, v);
      } else {
        this.setUniformOfInt(key, [v]);
      }
    });
  }
}

export namespace WebGlCanvas {
  export type Options = ICanvasOptions;
}
