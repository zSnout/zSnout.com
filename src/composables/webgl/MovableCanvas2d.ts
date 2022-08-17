import { useEventListener } from "@vueuse/core";
import { CoordinateCanvas2d, Coordinates } from "./CoordinateCanvas2d";

export class MovableCanvas2d extends CoordinateCanvas2d {
  constructor(canvas: HTMLCanvasElement, options?: MovableCanvas2d.Options) {
    super(canvas, options);

    useEventListener(canvas, "wheel", (event) => {
      this.setBounds(
        this.getZoomRegion(
          (Math.sqrt(Math.abs(event.deltaY)) * -Math.sign(event.deltaY)) / 10
        )
      );
    });

    let oldDist: number | undefined;
    useEventListener(canvas, "touchmove", (event) => {
      event.preventDefault();
      const {
        touches: [a, b],
      } = event;

      if (event.touches.length === 2) {
        const { x, y } = this.rect;

        const dist = Math.abs(
          (b.clientX - a.clientX) ** 2 + (b.clientY - a.clientY) ** 2
        );

        if (!oldDist) {
          oldDist = dist;
          return;
        }

        const xCenter = (a.clientX - x + b.clientX - x) / 2;
        const yCenter = (a.clientY - y + b.clientY - y) / 2;

        if (dist > oldDist) {
          this.setBounds(this.getZoomRegion(1, { x: xCenter, y: yCenter }));
        } else {
          this.setBounds(this.getZoomRegion(-1, { x: xCenter, y: yCenter }));
        }

        oldDist = dist;
      }
    });

    let preMoveCoords: Coordinates | undefined;
    useEventListener("pointermove", (event) => {
      event.preventDefault();

      if (pointersDown !== 1) return;
      if (!preMoveCoords) return;

      const { x, y } = this.pxToCoords(event.offsetX, event.offsetY);
      const { xStart, xEnd, yStart, yEnd } = this.bounds;

      this.setBounds({
        xStart: xStart - (x - preMoveCoords.x),
        xEnd: xEnd - (x - preMoveCoords.x),
        yStart: yStart - (y - preMoveCoords.y),
        yEnd: yEnd - (y - preMoveCoords.y),
      });
    });

    let pointersDown = 0;
    useEventListener(
      canvas,
      "pointerdown",
      ({ offsetX, offsetY, pointerId }) => {
        pointersDown++;
        preMoveCoords = this.pxToCoords(offsetX, offsetY);
        this.canvas.setPointerCapture(pointerId);
      }
    );

    useEventListener("pointerup", () => {
      pointersDown = Math.max(0, pointersDown - 1);
      preMoveCoords = undefined;
    });
  }

  getZoomRegion(amplitude = 1, pointer: Coordinates = this.pointer) {
    const { xStart, xEnd, yStart, yEnd } = this.bounds;
    const { x, y } = this.pxToCoords(pointer.x, pointer.y);

    return {
      xStart: xStart + (amplitude * (x - xStart)) / 10,
      xEnd: xEnd + (amplitude * (x - xEnd)) / 10,
      yStart: yStart + (amplitude * (y - yStart)) / 10,
      yEnd: yEnd + (amplitude * (y - yEnd)) / 10,
    };
  }
}

export namespace MovableCanvas2d {
  export interface Options extends CoordinateCanvas2d.Options {}
}
