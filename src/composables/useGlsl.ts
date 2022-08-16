// ** is used for implied multiplication
const precds: Record<string, number> = {
  "+": 2,
  "-": 2,
  "*": 3,
  "#": 3,
  "/": 3,
  "**": 4,
  "^": 5,
};

function levelOf(token: string) {
  if (token === "(") return 0;
  return precds[token] || 1;
}

const acs: Record<string, "l" | "r"> = {
  "+": "l",
  "-": "l",
  "*": "l",
  "#": "l",
  "/": "l",
};

function assocOf(token: string) {
  return acs[token] || "r";
}

const nonFuncs = ["+", "-", "*", "#", "/", "^", "("];
function isFunc(token: string) {
  return !nonFuncs.includes(token);
}

export function toReversePolish(equation: string): (string | number)[] {
  const tokens: (string | number)[] = [];
  let wasLastTokenAValue = false;

  while (true) {
    let match;

    if (equation.length === 0) {
      break;
    } else if (equation[0] === "$" || equation[0] === "@") {
      equation = equation.slice(1);
    } else if ((match = equation.match(/^\d+(?:\.\d+)?/))) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = true;

      tokens.push(+match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^(sin|cos|tan|exp|log|abs|min|max)/))) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = false;

      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^(pi|pz|ppz|sz|e|i|c|z|m|t|fx|fy)/))) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = true;

      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^\.[xy]/))) {
      wasLastTokenAValue = true;

      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^\^[23]/))) {
      wasLastTokenAValue = true;
      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^[-+*#\/^()]/))) {
      if (wasLastTokenAValue && match[0] === "(") tokens.push("**");
      wasLastTokenAValue = false;
      if (match[0] === ")") wasLastTokenAValue = true;

      tokens.push(match[0]);
      equation = equation.slice(1);
    } else equation = equation.slice(1);
  }

  const outputQueue: (string | number)[] = [];
  const operatorStack: string[] = [];
  let token;

  while ((token = tokens.shift())) {
    if (
      typeof token === "number" ||
      token.match(/^(pi|pz|ppz|sz|e|i|c|z|fx|fy)$/)
    ) {
      outputQueue.push(token);
    } else if (token.match(/^\.[xy]$/)) {
      outputQueue.push(token);
    } else if (token === ")") {
      while (operatorStack[operatorStack.length - 1] !== "(") {
        const o2 = operatorStack[operatorStack.length - 1];
        if (!o2) return ["z"];

        operatorStack.pop();
        outputQueue.push(o2);
      }

      if (operatorStack.pop() !== "(") return ["z"];

      const top = operatorStack[operatorStack.length - 1];
      if (!top) continue;
      if (isFunc(top)) {
        operatorStack.pop();
        outputQueue.push(top);
      }
    } else if (token === "(" || isFunc(token)) {
      operatorStack.push(token);
    } else {
      const o1 = token;
      let o2;

      while ((o2 = operatorStack[operatorStack.length - 1]) && o2 !== "(") {
        const level1 = levelOf(o1);
        const level2 = levelOf(o2);

        if (!(level2 > level1 || (level1 === level2 && assocOf(o1) === "l")))
          break;

        outputQueue.push((operatorStack.pop(), o2));
      }

      operatorStack.push(o1);
    }
  }

  while ((token = operatorStack.pop())) {
    if (token === "(" || token === ")") return ["z"];
    outputQueue.push(token);
  }

  return outputQueue;
}

export function rpnToGLSL(rpn: (string | number)[]) {
  try {
    const stack: string[] = [];

    for (let token of rpn) {
      if (typeof token === "number") {
        stack.push(`vec2(${token}, 0)`);
      } else if (token === "i") {
        stack.push("vec2(0, 1)");
      } else if (token === "pi") {
        stack.push("vec2(3.141592653589793, 0)");
      } else if (token === "e") {
        stack.push("vec2(2.718281828459045, 0)");
      } else if (token === "t") {
        stack.push("vec2(time, 0)");
      } else if (token === "m") {
        stack.push("mouse");
      } else if (token === "fx") {
        stack.push("vec2(1, -1)");
      } else if (token === "fy") {
        stack.push("vec2(-1, 1)");
      } else if (token.match(/^(pz|ppz|sz|c|z)$/)) {
        stack.push(token);
      } else if (token === "+" || token === "-" || token === "#") {
        const t1 = stack.pop();
        const t2 = stack.pop() ?? "";
        stack.push(`${t2} ${token === "#" ? "*" : token} ${t1}`);
      } else if (token === "^2") {
        stack.push(`sqr(${stack.pop()})`);
      } else if (token === "^3") {
        stack.push(`cube(${stack.pop()})`);
      } else if (
        token === "*" ||
        token === "**" ||
        token === "/" ||
        token === "^" ||
        token === "min" ||
        token === "max"
      ) {
        if (token === "/") token = "div";
        else if (token === "^") token = "power";
        else if (token === "*" || token === "**") token = "mult";

        const t1 = stack.pop();
        const t2 = stack.pop();

        stack.push(`${token}(${t2}, ${t1})`);
      } else if (
        token === "sin" ||
        token === "cos" ||
        token === "tan" ||
        token === "exp" ||
        token === "log" ||
        token === "abs"
      ) {
        stack.push(`${token}(${stack.pop()})`);
      } else if (token === ".x" || token === ".y") {
        stack.push(`vec2((${stack.pop()})${token}, 0)`);
      }
    }

    if (stack.length !== 1) return "z";
    else return stack[0];
  } catch {
    return "z";
  }
}

export function glsl(equation: string) {
  return rpnToGLSL(toReversePolish(equation));
}

Object.assign(window, { glsl });
