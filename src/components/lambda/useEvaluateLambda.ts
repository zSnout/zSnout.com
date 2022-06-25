import { computed } from "@vue/reactivity";
import { Ref } from "vue";
import { Expression, useCompileLambda } from "./useCompileLambda";

const special = {
  "+": "_add",
  "-": "_sub",
  "*": "_mult",
  "/": "_div",
  "%": "_mod",
  "@": "_at",
  "?": "_ques",
  "!": "_exclm",
  ":": "_colon",
  "_": "__",
  "#": "_hash",
  "$": "$",
  "^": "_pos",
  "&": "_amp",
  "|": "_bar",
  "~": "_tilde",
  ";": "_semi",
  "'": "_apos",
  '"': "_quote",
  "__proto__": null,
};

function normalizeVar(name: string) {
  name = name
    .split("")
    .map((e) => (e in special ? (special as any)[e] : e))
    .join("");

  if (
    name.match(
      /^\d|^(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/
    )
  ) {
    return `_${name}`;
  }

  return name;
}

function indent(text: string): string {
  return text.split(/\n+/g).join("\n  ");
}

export function toJS(expr: Expression): string {
  try {
    if (expr.type === "variable") {
      return normalizeVar(expr.name);
    } else if (expr.type === "application") {
      let output = toJS(expr.rhs);

      if (expr.rhs.type === "function") {
        output = output.slice(1, -1);
      }

      if (output.length > 60) {
        return `${toJS(expr.lhs)}(\n  ${indent(output)}\n)`;
      } else {
        return `${toJS(expr.lhs)}(${output})`;
      }
    } else {
      let output = toJS(expr.expr);

      if (expr.expr.type === "function") {
        output = output.slice(1, -1);
      }

      if (output.length > 40) {
        return `(${normalizeVar(expr.variable)} =>\n  ${indent(output)}\n)`;
      } else {
        return `(${normalizeVar(expr.variable)} => ${output})`;
      }
    }
  } catch (e) {
    return "" + e;
  }
}

function evaluate(expr: Expression) {
  try {
    return eval(toJS(expr));
  } catch (e) {
    return "" + e;
  }
}

export namespace Convert {
  export function isNil(fn: any) {
    try {
      const result = fn((x: number) => x + 1)(true)(false);
      if (typeof result !== "boolean") return false;
      return result;
    } catch {
      return false;
    }
  }

  export function toNumber(fn: any) {
    try {
      const number = fn((x: number) => x + 1)(0);
      if (typeof number === "number") return number;
    } catch {}
  }

  export function toBoolean(fn: any) {
    try {
      const boolean = fn(true)(false);
      if (typeof boolean === "boolean") return boolean;
    } catch {}
  }

  export function toPair(fn: any) {
    try {
      let _x: any, _y: any;
      fn((x: any) => (y: any) => ((_x = valueOf(x)), (_y = valueOf(y))));

      if (typeof _x !== "undefined" && typeof _y !== "undefined") {
        return [_x, _y] as [any, any];
      }
    } catch {}
  }

  export function valueOf(fn: any) {
    if (isNil(fn)) return "nil";

    const num = toNumber(fn);
    const bool = toBoolean(fn);

    if (num === 0 && bool === false) return "0/false";
    if (typeof bool === "boolean") return "" + bool;
    if (typeof num === "number") return "" + num;

    const pair = toPair(fn);
    if (pair) return `(${pair[0]}, ${pair[1]})`;
  }

  export function all(fn: any) {
    return valueOf(fn) || "No conversions available.";
  }
}

export function useEvaluateLambda(source: Ref<string>) {
  const expr = useCompileLambda(source);

  return computed(() => {
    try {
      if (typeof expr.value === "string") {
        return expr.value;
      }

      const result = evaluate(expr.value);

      if (typeof result === "string") {
        return result;
      }

      return Convert.all(result);
    } catch (e: any) {
      return "" + e;
    }
  });
}
