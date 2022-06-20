/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

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

declare module "ace-builds" {
  export function define(
    module: string,
    deps: string[],
    factory: (require: any, exports: any) => void
  ): void;
}

declare global {
  function trim(source: TemplateStringsArray): string;
}

export {};
