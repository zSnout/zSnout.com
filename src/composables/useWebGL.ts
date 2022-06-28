import {
  Canvas as GlslCanvas,
  ICanvasOptions,
} from "glsl-canvas-js/dist/esm/glsl";
import { Ref, watchEffect } from "vue";

export class WebGlCanvas extends GlslCanvas {
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
