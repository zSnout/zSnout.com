import { computed } from "@vue/reactivity";
import { Ref } from "vue";

type Group = { type: "group"; tokens: Token[]; parent?: Group };

type Alias = { type: "alias"; name: string; value: Token[] };

type Token =
  | { type: "lambda" | "lparen" | "rparen" | "dot" | "assign" | "newline" }
  | { type: "variable"; name: string }
  | Alias
  | Group;

type FinalToken =
  | { type: "lambda" | "dot" }
  | { type: "variable"; name: string }
  | Alias
  | Group;

export type Expression =
  | { type: "function"; variable: string; scope: number; expr: Expression }
  | { type: "variable"; name: string; scope: number }
  | { type: "application"; lhs: Expression; rhs: Expression };

const map = new Map<
  string,
  "lambda" | "lparen" | "rparen" | "dot" | "assign" | "newline"
>([
  ["(", "lparen"],
  [")", "rparen"],
  ["=", "assign"],
  ["\n", "newline"],
  [".", "dot"],
]);

const lambdas = new Set([
  "Λ",
  "λ",
  "ᴧ",
  "Ⲗ",
  "ⲗ",
  "𝚲",
  "𝛌",
  "𝛬",
  "𝜆",
  "𝜦",
  "𝝀",
  "𝝠",
  "𝝺",
  "𝞚",
  "𝞴",
  "\\",
]);

function tokenize(source: string) {
  let text = source.trim();
  const tokens: Token[] = [];

  while (text) {
    if (lambdas.has(text[0])) {
      tokens.push({ type: "lambda" });
      text = text.slice(1);
    } else if (map.has(text[0])) {
      tokens.push({ type: map.get(text[0])! });
      text = text.slice(1);
    } else {
      const match = text.match(/^[\w\d+\-*\/%@?!:_#$^&|~;'"]+/);

      if (match) {
        tokens.push({ type: "variable", name: match[0] });
        text = text.slice(match[0].length);
      } else {
        text = text.slice(1);
      }
    }

    while (text.startsWith(" ") || text.startsWith("\t")) {
      text = text.slice(1);
    }
  }

  const result = tokens.reduce<Group>(
    (group, token) => {
      if (token.type === "lparen") {
        const newGroup: Group = {
          type: "group",
          tokens: [],
          parent: group,
        };
        group.tokens.push(newGroup);

        return newGroup;
      } else if (token.type === "rparen") {
        if (!group.parent) {
          throw new SyntaxError("Unmatched closing parenthesis");
        }

        return group.parent;
      }

      group.tokens.push(token);
      return group;
    },
    {
      type: "group",
      tokens: [],
    }
  );

  if (result.parent) throw new SyntaxError("Unmatched opening parenthesis");

  result.tokens.forEach(function removeParent(token) {
    if (token.type === "group") {
      delete token.parent;
      token.tokens.forEach(removeParent);
    }
  });

  const withAliases: Token[] = [];

  for (let i = 0; i < result.tokens.length; i++) {
    const token = result.tokens[i];
    const next = result.tokens[i + 1];

    if (token.type === "variable" && next?.type === "assign") {
      if (i === result.tokens.length - 2) {
        // In this case, the script ends with `token next`.
        throw new SyntaxError("An alias declaration must have a value.");
      }

      if (i === result.tokens.length - 3) {
        // In this case, the script ends with `token next other`.
        throw new SyntaxError(
          "An alias declaration must not be the last thing in a script."
        );
      }

      const alias: Alias = {
        type: "alias",
        name: token.name,
        value: [],
      };

      i++;
      while (++i < result.tokens.length - 1) {
        // This condition checks that we're not the last thing in `result.tokens`.

        if (result.tokens[i + 1]?.type === "assign") {
          // If the current token is the name of the next assignment, stop.
          i--;
          break;
        }

        if (result.tokens[i].type === "newline") {
          // If we hit a newline, stop.
          break;
        }

        alias.value.push(result.tokens[i]);
      }

      if (alias.value.length === 0) {
        throw new SyntaxError("An alias must have a value.");
      }

      withAliases.push(alias);
    } else withAliases.push(token);
  }

  return withAliases;
}

function toExpression(
  token: Token | Token[],
  bound: Record<string, number> = {}
): Expression {
  if (Array.isArray(token)) {
    const tokens = token.filter(
      (e): e is FinalToken =>
        e.type !== "lparen" &&
        e.type !== "rparen" &&
        e.type !== "assign" &&
        e.type !== "newline"
    );

    if (tokens.length === 0) {
      throw new SyntaxError("Cannot convert empty token list to expression.");
    } else if (tokens.length === 1) {
      token = tokens[0];
    } else if (tokens[0].type === "lambda") {
      if (tokens[1]?.type !== "variable") {
        throw new SyntaxError("A lambda must be followed by a variable.");
      }

      if (tokens[2]?.type !== "dot") {
        throw new SyntaxError("A lambda variable must be followed by a dot.");
      }

      if (tokens.length < 3) {
        throw new SyntaxError("A lambda function must have a value.");
      }

      const scope = +Math.random().toString().slice(2, 12);

      return {
        type: "function",
        variable: tokens[1].name,
        scope,
        expr: toExpression(tokens.slice(3), {
          ...bound,
          [tokens[1].name]: scope,
        }),
      };
    } else if (tokens[0].type === "alias") {
      const scope = +Math.random().toString().slice(2, 12);

      return {
        type: "application",
        lhs: {
          type: "function",
          variable: tokens[0].name,
          scope,
          expr: toExpression(tokens.slice(1), {
            ...bound,
            [tokens[0].name]: scope,
          }),
        },
        rhs: toExpression(tokens[0].value, bound),
      };
    } else if (tokens[0].type === "dot") {
      throw new SyntaxError(
        "A dot cannot appear outside of a lambda function."
      );
    } else {
      return {
        type: "application",
        lhs: toExpression(tokens[0], bound),
        rhs: toExpression(tokens.slice(1), bound),
      };
    }
  }

  if (token.type === "variable") {
    return { ...token, scope: bound[token.name] };
  } else if (token.type === "group") {
    return toExpression(token.tokens, bound);
  } else {
    throw new SyntaxError(
      `Cannot convert '${token.type}' token to an expression.`
    );
  }
}

export function useCompileLambda(source: Ref<string>) {
  return computed(() => {
    try {
      const tokens = tokenize(source.value);
      const expr = toExpression(tokens);

      return expr;
    } catch (e: any) {
      console.error(e);
      return "" + e;
    }
  });
}
