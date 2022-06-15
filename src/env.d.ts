/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare function trim(source: TemplateStringsArray): string;

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
