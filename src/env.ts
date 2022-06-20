// If we put this in env.d.ts then TypeScript thinks that it is the only
// declaration and gives errors for import("ace-builds").Ace.

declare module "ace-builds" {
  export function define(
    arg0: string,
    arg1: string[],
    arg2: (require: any, exports: any) => void
  ): void;
}

export {};
