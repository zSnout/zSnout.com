import { computed } from "@vue/reactivity";
import { Ref } from "vue";
import { Expression, useCompileLambda } from "./useCompileLambda";

function churchNumeral(fn: any): number {
  try {
    return fn((x: number) => ++x)(0);
  } catch (e) {
    console.error(e);
    return 0;
  }
}

const special = `+-*/%@?!:_#$^&|~;'"`;
function normalizeVar(name: string) {
  name = name
    .split("")
    .map((e) =>
      special.includes(e) ? `_${"$".repeat(special.indexOf(e) + 1)}_` : e
    )
    .join("");

  if (name.match(/^\d|^_/)) {
    return `_${name}`;
  }

  return name;
}

function toJS(expr: Expression): string {
  if (expr.type === "variable") {
    return normalizeVar(expr.name);
  } else if (expr.type === "application") {
    return `${toJS(expr.lhs)}(${toJS(expr.rhs)})`;
  } else {
    return `(${normalizeVar(expr.variable)}=>${toJS(expr.expr)})`;
  }
}

function evaluate(expr: Expression) {
  return eval(toJS(expr));
}

export function useEvaluateLambda(source: Ref<string>) {
  const expr = useCompileLambda(source);

  return computed(() => {
    try {
      if (typeof expr.value === "string") {
        return expr.value;
      }

      const result = evaluate(expr.value);
      const numeral = churchNumeral(result);
      return numeral;
    } catch (e: any) {
      console.error(e);
      return "" + e;
    }
  });
}
