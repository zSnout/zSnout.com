// ** is used for implied multiplication
let precds: Record<string, number> = { "+": 2, "-": 2, "*": 3, "/": 3, "**": 4, "^": 5 }; // prettier-ignore
function levelOf(token: string) {
  if (token == "(") return 0;
  return precds[token] || 1;
}

let acs: Record<string, "l" | "r"> = { "+": "l", "-": "l", "*": "l", "/": "l" };
function assocOf(token: string) {
  return acs[token] || "r";
}

let nonFuncs = ["+", "-", "*", "/", "^", "("];
function isFunc(token: string) {
  return !nonFuncs.includes(token);
}

function toReversePolish(equation: string): (string | number)[] {
  let tokens: (string | number)[] = [];
  let wasLastTokenAValue = false;

  while (true) {
    let match;

    if (equation.length === 0) {
      break;
    } else if ((match = equation.match(/^\d+(?:\.\d+)?/))) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = true;

      tokens.push(+match[0]);
      equation = equation.slice(match[0].length);
    } else if (
      (match = equation.match(/^(sin|cos|tan|exp|log|abs|min|max|rawsqr)/))
    ) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = false;

      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^(pi|pz|ppz|sz|e|i|c|z)/))) {
      if (wasLastTokenAValue) tokens.push("**");
      wasLastTokenAValue = true;

      tokens.push(match[0]);
      equation = equation.slice(match[0].length);
    } else if ((match = equation.match(/^[-+*\/^()]/))) {
      if (wasLastTokenAValue && match[0] == "(") tokens.push("**");
      wasLastTokenAValue = false;
      if (match[0] == ")") wasLastTokenAValue = true;

      tokens.push(match[0]);
      equation = equation.slice(1);
    } else equation = equation.slice(1);
  }

  let outputQueue: (string | number)[] = [];
  let operatorStack: string[] = [];
  let token;

  while ((token = tokens.shift())) {
    if (typeof token == "number" || token.match(/^(pi|pz|ppz|sz|e|i|c|z)$/)) {
      outputQueue.push(token);
    } else if (token == ")") {
      while (operatorStack[operatorStack.length - 1] != "(") {
        let o2 = operatorStack[operatorStack.length - 1];
        if (!o2) return ["z"];

        operatorStack.pop();
        outputQueue.push(o2);
      }

      if (operatorStack.pop() != "(") return ["z"];

      let top = operatorStack[operatorStack.length - 1];
      if (!top) continue;
      if (isFunc(top)) {
        operatorStack.pop();
        outputQueue.push(top);
      }
    } else if (token == "(" || isFunc(token)) {
      operatorStack.push(token);
    } else {
      let o1 = token;
      let o2;

      while ((o2 = operatorStack[operatorStack.length - 1]) && o2 != "(") {
        let level1 = levelOf(o1);
        let level2 = levelOf(o2);

        if (!(level2 > level1 || (level1 == level2 && assocOf(o1) == "l")))
          break;

        outputQueue.push((operatorStack.pop(), o2));
      }

      operatorStack.push(o1);
    }
  }

  while ((token = operatorStack.pop())) {
    if (token == "(" || token == ")") return ["z"];
    outputQueue.push(token);
  }

  return outputQueue;
}

function rpnToGLSL(rpn: (string | number)[]) {
  try {
    let stack: string[] = [];

    for (let token of rpn) {
      if (typeof token == "number") {
        stack.push(`vec2(${token}, 0)`);
      } else if (token == "i") {
        stack.push("vec2(0, 1)");
      } else if (token == "pi") {
        stack.push("vec2(3.141592653589793, 0)");
      } else if (token == "e") {
        stack.push("vec2(2.718281828459045, 0)");
      } else if (token.match(/^(pz|ppz|sz|c|z)$/)) {
        stack.push(token);
      } else if (token == "+" || token == "-") {
        let t1 = stack.pop();
        let t2 = stack.pop();
        stack.push(`${t2} ${token} ${t1}`);
      } else if (
        token == "*" ||
        token == "**" ||
        token == "/" ||
        token == "^" ||
        token == "min" ||
        token == "max"
      ) {
        if (token == "/") token = "div";
        else if (token == "^") token = "power";
        else if (token == "*" || token == "**") token = "mult";

        let t1 = stack.pop();
        let t2 = stack.pop();

        stack.push(`${token}(${t2}, ${t1})`);
      } else if (
        token == "sin" ||
        token == "cos" ||
        token == "tan" ||
        token == "exp" ||
        token == "log" ||
        token == "abs" ||
        token == "rawsqr"
      ) {
        stack.push(`${token}(${stack.pop()})`);
      }
    }

    if (stack.length != 1) return "z";
    else return stack[0];
  } catch {
    return "z";
  }
}

export function glsl(equation: string) {
  return rpnToGLSL(toReversePolish(equation));
}
