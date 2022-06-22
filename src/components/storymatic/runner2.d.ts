export class Storymatic {
  constructor(story: string, callback: (story: Storymatic) => void);
  original: any;
  variables: any;
  parsed: any;
  commands: {};
  mergeWith(text: any, callback?: any): void;
  getVariable(name: any): any;
  setVariable(name: any, value: any): void;
  calc(code: any): string;
  expr(code: any): string;
  is(code: any): boolean;
  runCommand(
    name: any,
    arg: any,
    expr: any,
    code: any,
    parsed: any,
    next: any,
    callback?: any
  ): void;
  runCode(code: any, callback?: any): void;
  runParsed(code: any, callback?: any): void;
  runVariable(name: any, mode: any, value: any, callback?: any): any;
  print(text: any, callback?: any): void;
  parseText(text: any): any;
  run(actions: any, callback?: any): void;
  start(callback?: any): void;
  context(callback?: any): void;
}

export namespace Storymatic {
  namespace parseBlock {
    function precomment(text: any): any;
    function importfrom(text: any): any[];
    function imports(text: any): any[];
    function importall(text: any): any[];
    function libs(text: any): any[];
    function plugins(text: any): any[];
    function commentblock(text: any): any;
    function comments(text: any): any;
    function variables(text: any): any[];
    function commands(text: any): any;
    function inner(text: any): any;
  }

  function parse(text: any): {
    original: any;
    importfrom: any;
    imports: any;
    importall: any;
    libs: any;
    plugins: any;
    variables: {};
    commands: {};
  };

  namespace parseExpr {
    function verify(text: any): boolean;
    function tokenize(text: any): any;
    function paren(text: any): any[];
    function varnums(text: any): any;
    function not(text: any): any[];
    function prodquotmod(text: any): any[];
    function plusminus(text: any): any[];
    function compare(text: any): any[];
    function equal(text: any): any[];
    function and(text: any): any[];
    function or(text: any): any[];
  }

  function expr(text: any): any;
  function tooltip(text: any, callback?: any): any;
  function write(text: any, callback?: any): any;
  function print(text: any, callback?: any): any;
  function image(src: any, callback?: any): any;
  function line(callback?: any): any;
  function clear(callback?: any): any;
  function type(text: any, time: any, callback?: any): any;
  function input(text: any, callback?: any): any;
  function choice(text: any, choices: any, callback?: any): void;
  const waitingFor: any[];
  function waitFor(key: any, once: any, callback?: any): void;

  namespace imports {
    export namespace time {
      function nowait(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function wait(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function wait_ms(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;
    }

    export namespace input {
      export function menu(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function choice(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function input_1(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export { input_1 as input };

      export function input_cs(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function number(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function bind_once(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function bind_forever(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      export function unbind(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;
    }

    export namespace output {
      export function nowait_1(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export { nowait_1 as nowait };

      export function image(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function typewrite(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function typewrite_ms(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function line(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function clear(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function center(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function tooltip(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;
    }

    export namespace control {
      export function _if(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        ognext: any,
        callback?: any
      ): any;

      export { _if as if };

      export function context(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function repeat(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function _while(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export { _while as while };

      export function _for(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export { _for as for };

      export function step(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function run(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      export function _switch(
        arg: any,
        expr: any,
        code: any,
        cases: any,
        next: any,
        callback?: any
      ): void;

      export { _switch as switch };
    }

    export namespace string {
      function parse(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function newline(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function empty(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function substr(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function substring(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function char(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function switch_char(
        arg: any,
        expr: any,
        code: any,
        cases: any,
        next: any,
        callback?: any
      ): any;

      function lowercase(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function uppercase(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function replace(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;
    }

    export namespace number_1 {
      function randint(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function floor(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;

      function ceil(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): any;
    }

    export { number_1 as number };

    export namespace sync {
      function exists(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function load(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function save(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;

      function reset(
        arg: any,
        expr: any,
        code: any,
        parsed: any,
        next: any,
        callback?: any
      ): void;
    }
  }
}
