/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare function trim(source: TemplateStringsArray): string;

declare module "rangetouch" {
  class RangeTouch {
    constructor(element: Element);
    destroy(): void;
  }

  export default RangeTouch;
}
