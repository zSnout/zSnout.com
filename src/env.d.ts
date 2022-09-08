/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

import { loadPyodide } from "hoodmane-pyodide";
import {
  PyodideStderrSymbol,
  PyodideStdoutSymbol,
  PyodideSymbol,
} from "./composables/symbols";

declare module "@vueuse/core" {
  export function useEventListener<T extends keyof HTMLElementEventMap>(
    target: HTMLElement,
    event: T,
    handler: (evt: HTMLElementEventMap[T]) => void
  );
}

declare module "ace-builds" {
  export function define(
    module: string,
    factory: (require: (dep: string) => any, exports: any) => void
  ): void;

  export function define(
    module: string,
    deps: string[],
    factory: (require: (dep: string) => any, exports: any) => void
  ): void;
}

declare module "generate-maze" {
  export interface MazeCell {
    x: number;
    y: number;
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  }
}

declare module "rangetouch" {
  export interface RangeTouchOptions {
    addCSS?: boolean;
    thumbWidth?: number;
  }

  export interface RangeTouchSetupOptions extends RangeTouchOptions {
    watch?: boolean;
  }

  class RangeTouch {
    static setup(
      els: string | Element | NodeList | Element[],
      options?: RangeTouchSetupOptions
    ): RangeTouch[];

    constructor(element: Element | string, options?: RangeTouchOptions);
    destroy(): void;
  }

  export default RangeTouch;
}

declare module "vite-plugin-md" {
  export interface Frontmatter {
    author?: string;
    date?: string | Date;
    hasToc?: boolean;
  }
}

declare global {
  declare interface Window {
    [PyodideStderrSymbol](msg: string): void;
    [PyodideStdoutSymbol](msg: string): void;
    [PyodideSymbol]: ReturnType<typeof loadPyodide>;
  }

  declare interface EventTarget
    extends Pick<HTMLInputElement, "checked" | "setPointerCapture" | "value"> {}

  declare interface HTMLCanvasElement {
    resolution?: number;
  }
}

export {};
