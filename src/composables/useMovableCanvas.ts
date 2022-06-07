import { MaybeElementRef, useEventListener } from "@vueuse/core";
import { ref } from "vue";
import {
  CoordinateCanvasOptions,
  mouseToCoords,
  useCoordinateCanvas,
} from "./useCoordinateCanvas";

export async function useMovableCanvas(
  canvasRef: MaybeElementRef,
  shader: string,
  opts?: CoordinateCanvasOptions
) {
  const data = await useCoordinateCanvas(canvasRef, shader, opts);
  const { canvas, bounds, onDispose, size, useUniform } = data;

  const a = ref(0);
  const b = ref(0);
  const c = ref(0);
  const d = ref(0);
  const e = ref(0);
  const f = ref(0);

  useUniform("xStart", "f", a);
  useUniform("xEnd", "f", b);
  useUniform("yStart", "f", c);
  useUniform("yEnd", "f", d);
  useUniform("x", "f", e);
  useUniform("y", "f", f);

  onDispose(
    useEventListener(canvas, "mousemove", (event: MouseEvent) => {
      event.preventDefault();

      mouseX.value = event.offsetX;
      mouseY.value = event.offsetY;

      const { xStart, xEnd, yStart, yEnd } = bounds;
      const { x, y } = coords;

      a.value = xStart + (x - xStart) / 10;
      b.value = xEnd + (x - xEnd) / 10;
      c.value = yStart + (y - yStart) / 10;
      d.value = yEnd + (y - yEnd) / 10;
      e.value = x;
      f.value = y;
    })
  );

  onDispose(
    useEventListener(
      canvas,
      "wheel",
      (event: WheelEvent) => {
        event.preventDefault();

        mouseX.value = event.offsetX;
        mouseY.value = event.offsetY;

        const { xStart, xEnd, yStart, yEnd } = bounds;
        const { x, y } = coords;

        bounds.xStart = xStart + (x - xStart) / 10;
        bounds.xEnd = xEnd + (x - xEnd) / 10;
        bounds.yStart = yStart + (y - yStart) / 10;
        bounds.yEnd = yEnd + (y - yEnd) / 10;

        // event.preventDefault();

        // mouseX.value = event.offsetX;
        // mouseY.value = event.offsetY;

        // const strength =
        //   -Math.sqrt(Math.abs(event.deltaY)) * Math.sign(event.deltaY);

        // const { xStart, xEnd, yStart, yEnd } = bounds;
        // const { x, y } = coords;

        // let xAdj = ((xEnd - xStart) * strength) / 100;
        // let yAdj = ((yEnd - yStart) * strength) / 100;

        // bounds.xStart += xAdj;
        // bounds.xEnd -= xAdj;
        // bounds.yStart += yAdj;
        // bounds.yEnd -= yAdj;

        // const xCenter = (xStart + xEnd) / 2;
        // const yCenter = (yStart + yEnd) / 2;

        // xAdj = ((x - xCenter) * strength) / 200;
        // yAdj = ((y - yCenter) * strength) / 200;

        // bounds.xStart += xAdj;
        // bounds.xEnd += xAdj;
        // bounds.yStart += yAdj;
        // bounds.yEnd += yAdj;

        // console.log({ ...bounds });
      },
      { passive: false }
    )
  );

  const lastMouseX = ref(NaN);
  const lastMouseY = ref(NaN);
  const mouseX = ref(NaN);
  const mouseY = ref(NaN);

  const lastCoords = mouseToCoords(bounds, size, lastMouseX, lastMouseY);
  const coords = mouseToCoords(bounds, size, mouseX, mouseY);

  onDispose(
    useEventListener(canvas, "pointermove", (event: MouseEvent) => {
      event.preventDefault();

      if (Number.isNaN(lastMouseX.value) || Number.isNaN(lastMouseY.value)) {
        return;
      }

      mouseX.value = event.offsetX;
      mouseY.value = event.offsetY;

      const x = (coords.x - lastCoords.x) / 2;
      const y = coords.y - lastCoords.y;

      bounds.xStart -= x;
      bounds.xEnd -= x;
      bounds.yStart -= y;
      bounds.yEnd -= y;

      lastMouseX.value = event.offsetX;
      lastMouseY.value = event.offsetY;
    })
  );

  onDispose(
    useEventListener(canvas, "pointerdown", (event: PointerEvent) => {
      canvas.setPointerCapture(event.pointerId);
      lastMouseX.value = event.offsetX;
      lastMouseY.value = event.offsetY;
    })
  );

  onDispose(
    useEventListener("pointerup", (event: PointerEvent) => {
      canvas.releasePointerCapture(event.pointerId);
      lastMouseX.value = NaN;
      lastMouseY.value = NaN;
    })
  );

  return data;
}
