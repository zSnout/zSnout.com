/** Represents an action in a script. */
type Action =
  | { type: "print"; content: Expression[] }
  | { type: "define"; name: string; args: Expression[]; block: Action[] }
  | {
      type: "command";
      name: string;
      args: Expression[][];
      block: Action[] | null;
    }
  | {
      type: "variable";
      name: VarExpr[];
      mode: "=" | "+=" | "-=" | "*=" | "/=" | "%=";
      value: Expression[];
    }
  | {
      type: "if" | "elif" | "unless" | "while" | "until" | "repeat";
      cond: Expression[];
      block: Action[];
    }
  | { type: "else"; block: Action[] }
  | { type: "each"; name: string; value: Expression[]; block: Action[] }
  | { type: "const"; name: VarExpr[]; value: Expression[] }
  | { type: "return"; value: Expression[] }
  | { type: "break" | "continue" };

/** A variable token. */
type VarExpr = Extract<
  Expression,
  { type: "variable" | "bracket" | "propertyaccess" }
>;

/** Data representing a variable. */
type Variable = {
  name: VarExpr[];
  mode: "=" | "+=" | "-=" | "*=" | "/=" | "%=";
  value: Expression[];
};

/** A string token. */
type StringExpr =
  | string
  | { type: "variable"; name: string }
  | { type: "embedded"; expr: Expression[] };

/** An expression token. */
type Expression =
  | { type: "paren"; items: Expression[] }
  | { type: "bracket"; items: Expression[] }
  | { type: "brace"; items: Expression[] }
  | { type: "command"; name: string; arg: Expression[][] }
  | { type: "propertyaccess"; name: string }
  | { type: "objectproperty"; name: string }
  | { type: "variable"; name: string }
  | { type: "string"; content: StringExpr[] }
  | { type: "number"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "null" }
  | "("
  | ")"
  | "["
  | "]"
  | "!"
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "<"
  | ">"
  | "==="
  | "!=="
  | "<="
  | ">="
  | "&&"
  | "||"
  | ","
  | "{"
  | "}";

/** A type of nested expression (parentheses, brackets, braces, etc.) */
type SubExpression = Extract<Expression, { items: any[] }>;

/** An array containing a single line of content along with its indentation level. */
type Indented = [level: number, content: string];

/** An array containing multiple lines of content along with their indentation level. */
type MultiIndent = [level: number, content: string[]];

/** An array containing a parsed script. */
type Group = (string | Group)[];

/**
 * Takes a script and removes newlines between parentheses, brackets, and braces.
 * It also checks for semicolons and splits them into newlines.
 * @param script The script to check.
 * @returns The reduced script.
 */
function reduceMultiLineParens(script: string): string {
  let level = 0;
  let isQuote = false;
  const result = [];
  let current = "";
  let ignoreSpace = false;

  for (const row of script.split("\n")) {
    for (const char of row) {
      if (ignoreSpace) {
        if (char == " ") continue;

        ignoreSpace = false;
      }

      if (char == "|") level += isQuote ? 1 : -1;
      if (char == '"') level += isQuote ? -1 : 1;
      if (char == "|" || char == '"') isQuote = !isQuote;

      if (!isQuote) {
        if (char == "(" || char == "[" || char == "{") level++;
        if (char == ")" || char == "]" || char == "}") level--;
      }

      if (level < 0) {
        level = 0;
        continue;
      }

      if (level == 0 && char == ";") {
        const spaces = current.match(/^\s*/)![0];
        result.push(current);
        current = spaces;

        if (result[result.length - 1].match(/^\s*[A-Za-z]/)) current += " ";

        ignoreSpace = true;
        continue;
      }

      current += char;
    }

    if (level == 0) {
      result.push(current);
      current = "";
    }
  }

  if (current) result.push(current);

  return result.join("\n");
}

/**
 * Gets the indentation levels of different lines in a script.
 * @param script The script to parse.
 * @returns A list of strings with their indentation levels.
 */
function getIndentsOf(script: string): Indented[] {
  return reduceMultiLineParens(script)
    .split("\n")
    .filter((e) => e.trim())
    .map((line): Indented => {
      line = line.replace(/\s+$/, "");
      const trimmed = line.replace(/^\s+/, "");

      return [line.length - trimmed.length, trimmed];
    });
}

/**
 * Groups lines in a script by their indentation level.
 * @param script The script to parse.
 * @returns A list of strings with their indentation levels.
 */
function groupByIndent(script: string): MultiIndent[] {
  let indent = 0;
  let group: string[] = [];
  const groups: MultiIndent[] = [];

  for (const [level, content] of getIndentsOf(script)) {
    if (level != indent) {
      if (group.length) groups.push([indent, group]);
      indent = level;
      group = [content];
    } else group.push(content);
  }
  if (group.length) groups.push([indent, group]);

  return groups;
}

/**
 * Parses an indented script into a list of nested strings.
 * @param script The script to parse.
 * @returns An array containing the parsed script.
 */
function getGroupsOf(script: string): Group {
  let indent = 0;
  const group: Group[] = [];

  for (const [level, content] of groupByIndent(script)) {
    group[level] ??= [];

    if (level >= indent) {
      group[level].push(...content);
    } else if (level < indent) {
      for (let i = group.length - 1; i > level; i--) {
        if (!group[i]) continue;

        group[i - 1] ??= [];
        if (
          typeof group[i] == "object" &&
          group[i].every((e) => typeof e == "object")
        ) {
          group[i - 1].push(...group[i]);
        } else group[i - 1].push(group[i]);

        group.length = i;
      }

      group[level].push(...content);
    }

    indent = level;
  }

  for (let i = group.length - 1; i > 0; i--) {
    if (!group[i]) continue;

    group[i - 1] ??= [];
    if (
      typeof group[i] == "object" &&
      group[i].every((e) => typeof e == "object")
    ) {
      group[i - 1].push(...group[i]);
    } else group[i - 1].push(group[i]);

    group.length = i;
  }

  return group[0] || [];
}

/**
 * Attempts to parse an expression as a variable update.
 * @param expr The expression to parse.
 * @returns Information about the parsed expression.
 */
function parseVariableExpr(expr: string): Variable | null {
  const parsed = parseExpr(expr);
  const variable: VarExpr[] = [];
  let isFirst = true;

  for (const token of parsed) {
    if (typeof token != "object") break;

    if (
      (token.type == "variable" && isFirst) ||
      token.type == "bracket" ||
      token.type == "propertyaccess"
    )
      variable.push(token);
    else {
      break;
    }

    isFirst = false;
  }

  if (variable.length == parsed.length)
    return { name: variable, mode: "=", value: [] };

  let mode: Variable["mode"] = "=";

  const premode = parsed[variable.length];
  if (
    premode == "+" ||
    premode == "-" ||
    premode == "*" ||
    premode == "/" ||
    premode == "%"
  )
    mode = `${premode}=`;

  // Checks if the item after the variable is an equals sign.
  // We need to use `mode != "="` to ensure that we check the next
  // sign if we used a + sign to get the mode.
  if (parsed[variable.length + +(mode != "=")] != "===") return null;
  const value = parsed.slice(variable.length + +(mode != "=") + 1);

  return { mode, value, name: variable };
}

/**
 * Parses a set of groups into a list of actions.
 * @param groups The groups to parse.
 * @returns A list of actions.
 */
function parseActionGroups(groups: Group): Action[] {
  const actions: Action[] = [];

  for (let i = 0; i < groups.length; i++) {
    const e = groups[i];

    if (typeof e == "object") {
      actions.push(...parseActionGroups(e));
      continue;
    }

    let match;
    if (e.startsWith("#")) {
      continue;
    } else if ((match = e.match(/^@([\w_][\w\d_]*)\s*(.*)$/))) {
      let block: Action[] | null = null;
      const expr = match[2] ? parseExpr(match[2]) : [];
      const first: Expression | undefined = expr[0];

      if (typeof first == "object" && first.type == "paren") {
        let block: Action[] | null = null;

        if (expr.slice(1).length)
          block = [{ type: "print", content: expr.slice(1) }];

        actions.push({
          type: "command",
          name: match[1],
          args: splitOnComma(first.items),
          block,
        });

        continue;
      }

      if (typeof groups[i + 1] == "object") {
        block = parseActionGroups(groups[i + 1] as Group);
        i++;
      }

      actions.push({
        type: "command",
        name: match[1],
        args: splitOnComma(expr),
        block,
      });
    } else if ((match = e.match(/^repeat$/))) {
      let block: Action[] = [];

      if (typeof groups[i + 1] == "object") {
        block = parseActionGroups(groups[i + 1] as Group);
        i++;
      }

      actions.push({
        type: "while",
        cond: [{ type: "boolean", value: true }],
        block,
      });
    } else if (
      (match = e.match(
        /^(if|elif|else if|unless|while|until|repeat)\b\s*(.+)$/
      ))
    ) {
      let block: Action[] = [];

      if (typeof groups[i + 1] == "object") {
        block = parseActionGroups(groups[i + 1] as Group);
        i++;
      }

      if (match[1] == "else if") match[1] = "elif";

      actions.push({
        type: match[1] as
          | "if"
          | "elif"
          | "unless"
          | "while"
          | "until"
          | "repeat",
        cond: parseExpr(match[2]),
        block,
      });
    } else if (
      (match = e.match(/^each\s+\$([\w_][\w\d_]*)\s+(?:in|of)\s+(.*)$/))
    ) {
      let block: Action[] = [];

      if (typeof groups[i + 1] == "object") {
        block = parseActionGroups(groups[i + 1] as Group);
        i++;
      }

      actions.push({
        type: "each",
        name: match[1],
        value: parseExpr(match[2]),
        block,
      });
    } else if ((match = e.match(/^else$/))) {
      let block: Action[] = [];

      if (typeof groups[i + 1] == "object") {
        block = parseActionGroups(groups[i + 1] as Group);
        i++;
      }

      actions.push({
        type: "else",
        block,
      });
    } else if ((match = e.match(/^(break|continue)$/))) {
      actions.push({
        type: match[1] as "break" | "continue",
      });
    } else if ((match = e.match(/^const\s*\b(.+)/))) {
      const parsed = parseVariableExpr(match[1]);
      if (!parsed) continue;
      if (!parsed.name.length) continue;
      if (!parsed.value.length) parsed.value = [{ type: "null" }];

      actions.push({
        type: "const",
        ...parsed,
      });
    } else if (
      (match = e.match(/^(?:func|function|def)\s+@([\w_][\w\d_]*)(?:\s+(.+))?/))
    ) {
      const group = groups[i + 1];

      if (typeof group == "object") {
        const block = parseActionGroups(group);
        i++;

        actions.push({
          type: "define",
          name: match[1],
          args: parseExpr(match[2] || ""),
          block,
        });
      }
    } else if ((match = e.match(/^(return)(?:\s+(.+))?/))) {
      let val: Expression[] = [{ type: "null" }];
      if (match[2]) val = parseExpr(match[2]);

      actions.push({
        type: match[1] as "return",
        value: val,
      });
    } else {
      const parsed = parseVariableExpr(e);
      const expr = parseExpr(e);

      if (parsed && parsed.name.length && parsed.value.length)
        actions.push({ type: "variable", ...parsed });
      else actions.push({ type: "print", content: expr });
    }
  }

  return actions;
}

/**
 * Splits the expression on commas and returns a list of values.
 * @param val The expression to check.
 * @returns A list of values in the expression.
 */
function splitOnComma(val: Expression[]): Expression[][] {
  if (!val.length) return [];

  let cur: Expression[] = [];
  const vals: Expression[][] = [cur];

  for (const el of val) {
    if (el == ",") {
      cur = [];
      vals.push(cur);
    } else cur.push(el);
  }

  return vals;
}

/**
 * Converts an expression into a list of tokens.
 * @param expr The expression to parse.
 * @param endOnQuote If true, exits when a quotation mark or `}` is found.
 * @returns A list of tokens in that expression.
 */
function parseExpr(expr: string): Expression[];
function parseExpr(
  expr: string,
  parseUntilEmbeddedEnding: true
): [parsed: Expression[], rest: string];
function parseExpr(
  expr: string,
  parseUntilEmbeddedEnding = false
): Expression[] | [Expression[], string] {
  const tokens: Expression[] = [];
  let quote: false | StringExpr[] = false;
  const twochars = ["<=", ">=", "&&", "||"];
  const chars = ["+", "-", "*", "/", "%", ">", "<", "(", ")", "[", "]", ",", "!", "{", "}"]; // prettier-ignore

  while ((expr = quote ? expr : expr.trim())) {
    let match;

    if (quote) {
      if (expr[0] == '"') {
        const reduced = quote.reduce<typeof quote>((quote, el) => {
          if (
            typeof el == "string" &&
            typeof quote[quote.length - 1] == "string"
          ) {
            quote[quote.length - 1] += el;
          } else quote.push(el);

          return quote;
        }, []);

        tokens.push({ type: "string", content: reduced });
        expr = expr.slice(1);

        quote = false;
      } else if (expr[0] == "\\") {
        quote.push(expr[1]);
        expr = expr.slice(2);
      } else if ((match = expr.match(/^\$(\w+)\b(.*)$/))) {
        quote.push({ type: "variable", name: match[1] });
        expr = match[2];
      } else if (expr[0] == "|") {
        const [parsed, rest] = parseExpr(expr.slice(1), true);
        quote.push({ type: "embedded", expr: parsed });
        expr = rest;
      } else {
        quote.push(expr[0]);
        expr = expr.slice(1);
      }
    } else if ((match = expr.match(/^\.\s*\$?(\w+)\b(.*)$/))) {
      tokens.push({ type: "propertyaccess", name: match[1] });
      expr = match[2];
    } else if ((match = expr.match(/^\$?(\w+)\s*:(.*)$/))) {
      tokens.push({ type: "objectproperty", name: match[1] });
      expr = match[2];
    } else if ((match = expr.match(/^\$(\w+)\b(.*)$/))) {
      tokens.push({ type: "variable", name: match[1] });
      expr = match[2];
    } else if ((match = expr.match(/^@(\w+)\b(.*)$/))) {
      tokens.push({ type: "command", name: match[1], arg: [] });
      expr = match[2];
    } else if (expr[0] == "=" || expr.slice(0, 2) == "==") {
      tokens.push("===");
      expr = expr.slice(1);
    } else if (expr[0] == "!=") {
      tokens.push("!==");
      expr = expr.slice(1);
    } else if (twochars.includes(expr.slice(0, 2))) {
      tokens.push(expr.slice(0, 2) as Expression);
      expr = expr.slice(2);
    } else if (chars.includes(expr[0])) {
      tokens.push(expr[0] as Expression);
      expr = expr.slice(1);
    } else if ((match = expr.match(/^(is not|isnt|is|not|and|or)\b(.*)$/))) {
      const phrase = match[1] as
        | "is not"
        | "isnt"
        | "is"
        | "not"
        | "and"
        | "or";

      switch (phrase) {
        case "is not":
        case "isnt":
          tokens.push("!==");
          break;

        case "is":
          tokens.push("===");
          break;

        case "not":
          tokens.push("!");
          break;

        case "and":
          tokens.push("&&");
          break;

        case "or":
          tokens.push("||");
          break;
      }

      expr = match[2];
    } else if ((match = expr.match(/^(\d+(?:\.\d+)?)\b(.*)$/))) {
      const number = parseFloat(match[1]);
      if (!Number.isNaN(number)) tokens.push({ type: "number", value: number });
      expr = match[2];
    } else if ((match = expr.match(/^(true|false|yes|no|on|off|y|n)\b(.*)$/))) {
      const bool =
        match[1] == "true" ||
        match[1] == "yes" ||
        match[1] == "on" ||
        match[1] == "y";

      tokens.push({ type: "boolean", value: bool });
      expr = match[2];
    } else if ((match = expr.match(/^(null)\b(.*)$/))) {
      tokens.push({ type: "null" });
      expr = match[2];
    } else if (expr[0] == "|" && parseUntilEmbeddedEnding) {
      return [tokens, expr.slice(1)];
    } else if (expr[0] == '"') {
      quote = [];
      expr = expr.slice(1);
    } else expr = expr.slice(1);
  }

  let current: SubExpression = { type: "paren", items: [] };
  const groups: SubExpression[] = [current];
  const map = { "(": "paren", "[": "bracket", "{": "brace" } as const;

  for (const token of tokens) {
    if (token == "(" || token == "[" || token == "{") {
      current = { type: map[token], items: [] };
      groups.push(current);
    } else if (token == ")" || token == "]" || token == "}") {
      const last = groups.pop();
      if (!last) return [];

      current = groups[groups.length - 1];
      current.items.push(last);
    } else current.items.push(token);
  }

  const val = groups[0];
  if (!val) return [];
  if (!val.items.length) return [];

  /**
   * Checks a portion of text for command calls.
   * @param val The value to check.
   */
  function checkAll(val: Expression[]) {
    for (let index = 0; index < val.length; index++) {
      const expr = val[index];

      if (typeof expr != "object") continue;
      if ("items" in expr) {
        checkAll(expr.items);
        continue;
      }

      if (expr.type == "command") {
        const next = val[index + 1];

        if (typeof next == "object" && next.type == "paren") {
          checkAll(next.items);
          expr.arg = splitOnComma(next.items);
          index++;
          val.splice(index, 1);
        } else {
          expr.arg = splitOnComma(val.splice(index + 1));
          break;
        }
      }
    }
  }

  checkAll(val.items);
  return val.items;
}

/**
 * Gets a list of commands from a script.
 * @param script The script to parse.
 * @returns The list of commands.
 */
function parseStory(script: string): Action[] {
  return parseActionGroups(getGroupsOf(script));
}

/**
 * Adds two spaces before each line in the string.
 * @param string The string to indent.
 * @returns An indented string.
 */
function indent(string: string): string {
  return string
    .split("\n")
    .map((line) => "  " + line)
    .join("\n");
}

/**
 * Converts a string expression to JavaScript code.
 * @param exprs The expression to convert.
 * @returns The expression as JavaScript code.
 */
function strToJS(exprs: StringExpr[]): string {
  let output = " `";

  for (const expr of exprs) {
    if (typeof expr == "string")
      output += expr
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$/g, "\\$")
        .replace(/{/g, "\\{");
    else if (expr.type == "variable") output += `\${ $${expr.name} }`;
    else if (expr.type == "embedded") output += `\${ ${exprToJS(expr.expr)} }`;
  }

  return output + "` ";
}

/**
 * Converts an expression to JavaScript code.
 * @param exprs The expression to convert.
 * @returns The expression as JavaScript code.
 */
function exprToJS(exprs: Expression[]): string {
  let code = "";

  for (const expr of exprs) {
    if (typeof expr == "string") code += ` ${expr} `;
    else if (expr.type == "paren") code += ` ( ${exprToJS(expr.items)} ) `;
    else if (expr.type == "bracket") code += ` [ ${exprToJS(expr.items)} ] `;
    else if (expr.type == "brace") code += ` { ${exprToJS(expr.items)} } `;
    else if (expr.type == "number") code += ` ${expr.value} `;
    else if (expr.type == "boolean") code += ` ${expr.value} `;
    else if (expr.type == "null") code += ` null `;
    else if (expr.type == "variable") code += ` $${expr.name} `;
    else if (expr.type == "propertyaccess") code += ` .$${expr.name} `;
    else if (expr.type == "objectproperty") code += ` $${expr.name}: `;
    else if (expr.type == "command")
      code += ` ( await $${expr.name}( [ ${expr.arg
        .map(exprToJS)
        .join(" , ")} ] ) ) `;
    else if (expr.type == "string") code += strToJS(expr.content);
  }

  return code.replace(/\s+/g, " ").trim();
}

/**
 * Converts a list of actions to JavaScript code.
 * @param actions The actions to convert.
 * @returns JavaScript code representing the actions.
 */
function actionToJS(actions: Action[]): string {
  let code = "";

  for (const action of actions) {
    switch (action.type) {
      case "print":
        code += `_print( ${exprToJS(action.content)} );\n`;
        break;

      case "variable":
        code += `${exprToJS(action.name)} ${action.mode} ${exprToJS(
          action.value
        )};\n`;
        break;

      case "continue":
      case "break":
        code += action.type + ";\n";
        break;

      case "const":
        code += `const ${exprToJS(action.name)} = ${exprToJS(action.value)};\n`;
        break;

      case "define":
        code += `async function $${action.name}( [ ${exprToJS(
          action.args
        )} ] = [] ) {\n${indent(actionToJS(action.block))}\n}\n\n`;
        break;

      case "command":
        if (action.block)
          code += `await $${action.name}( [ ${action.args
            .map(exprToJS)
            .join(" , ")} ], async function () {\n${indent(
            actionToJS(action.block)
          )}\n} );\n`;
        else
          code += `await $${action.name}( [ ${action.args
            .map(exprToJS)
            .join(" , ")} ] );\n`;
        break;

      case "if":
      case "while":
        code += `${action.type} ( ${exprToJS(action.cond)} ) {\n${indent(
          actionToJS(action.block)
        )}\n}\n`;
        break;

      case "repeat":
        code += `for ( const _loop of Array( + ( ${exprToJS(
          action.cond
        )} ) ) ) {\n${indent(actionToJS(action.block))}\n}\n`;
        break;

      case "unless":
      case "until":
        code += `${action.type == "unless" ? "if" : "while"} ( ! ( ${exprToJS(
          action.cond
        )} ) ) {\n${indent(actionToJS(action.block))}\n}\n`;
        break;

      case "elif":
        code += `else if ( ${exprToJS(action.cond)} ) {\n${indent(
          actionToJS(action.block)
        )}\n}\n`;
        break;

      case "else":
        code += `else {\n${indent(actionToJS(action.block))}\n}\n`;
        break;

      case "return":
        code += `return ${exprToJS(action.value)};\n`;
        break;

      case "each":
        code += `for (const $${action.name} of ${exprToJS(
          action.value
        )}) {\n${indent(actionToJS(action.block))}\n}\n`;
        break;
    }
  }

  return code
    .split("\n")
    .map((e) => e.replace(/([^ ]) +/gm, "$1 "))
    .join("\n")
    .trim();
}

/**
 * Converts a Storymatic script to JavaScript code.
 * @param script The script to convert.
 * @returns The script as JavaScript code.
 */
export function storyToJS(script: string): string {
  return (
    "// Generated by zSnout Storymatic\n// https://zsnout.com/storymatic/\n\n" +
    actionToJS(parseStory(script))
  );
}
