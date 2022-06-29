import { WebGlCanvas } from "./WebGlCanvas";
import { params } from "../useOption";
import { useResizeObserver } from "@vueuse/core";

export class CoordinateCanvas2d extends WebGlCanvas {
  private saveBounds: boolean;
  bounds!: Readonly<CoordinateCanvas2d.Bounds>;

  constructor(
    canvas: HTMLCanvasElement,
    {
      bounds,
      fragmentString: frag,
      saveBounds,
      ...options
    }: CoordinateCanvas2d.Options = {}
  ) {
    if (typeof frag === "string") {
      frag = WebGlCanvas.extend(
        frag,
        minify`uniform vec2 u_scale; uniform vec2 u_offset;`
      );

      // The shader may have already declared u_resolution, but the safeguards
      // on `.extend` prevent the insertion of a second copy.
      frag = WebGlCanvas.extend(frag, "uniform vec2 u_resolution;");

      frag = WebGlCanvas.extendMain(
        frag,
        minify`vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;`
      );
    }

    super(canvas, { ...options, fragmentString: frag });

    this.saveBounds = saveBounds ?? false;

    this.setBounds({
      xStart: bounds?.xStart ?? -2,
      xEnd: bounds?.xEnd ?? 2,
      yStart: bounds?.yStart ?? -2,
      yEnd: bounds?.yEnd ?? 2,
    });

    useResizeObserver(this.canvas, () => this.setBounds(this.bounds));
  }

  setBounds(bounds: CoordinateCanvas2d.Bounds) {
    let { xStart, xEnd, yStart, yEnd } = bounds;
    this.bounds = bounds;

    if (this.saveBounds) {
      params.xStart = "" + xStart;
      params.xEnd = "" + xEnd;
      params.yStart = "" + yStart;
      params.yEnd = "" + yEnd;
    }

    const xCenter = xStart + xEnd;
    const yCenter = yStart + yEnd;
    const xRange = (xEnd - xStart) / 2;
    const yRange = (yEnd - yStart) / 2;

    const { width, height } = this.canvas;

    if (width > height) {
      xStart = xCenter - (width / height) * xRange;
      xEnd = xCenter + (width / height) * xRange;

      // The `(xEnd - xStart) / 2` here is a different value than the original `xRange`.
      this.setUniform("u_offset", (xStart - (xEnd - xStart) / 2) / 2, yStart);
    } else {
      yStart = yCenter - (height / width) * yRange;
      yEnd = yCenter + (height / width) * yRange;

      // The `(yEnd - yStart) / 2` here is a different value than the original `xRange`.
      this.setUniform("u_offset", xStart, (yStart - (yEnd - yStart) / 2) / 2);
    }

    this.setUniform("u_scale", xEnd - xStart, yEnd - yStart);
  }
}

export namespace CoordinateCanvas2d {
  export interface Options extends WebGlCanvas.Options {
    bounds?: Partial<Bounds>;
    saveBounds?: boolean;
  }

  export interface Bounds {
    xStart: number;
    xEnd: number;
    yStart: number;
    yEnd: number;
  }
}
