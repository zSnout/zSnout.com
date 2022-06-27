import { randint } from "./useRandint";

export function randomColor() {
  return `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
}
