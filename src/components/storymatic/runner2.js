String.prototype.realMatchAll = function (regex) {
  return Array.from(this.matchAll(regex));
};

/* Action
 * command: {name: string, arg: string, expr: Expression, code: string, parsed: Action[]}
 * variable: {name: string, mode: string, value: string}
 * mode: =, @=, +=, -=, *=, /=, %=
 * print: {text: string}
 * code: {code: string}
 * parsed: {code: Action[]}
 */

/* All Expr Types
 * variable: {name: string}
 * invert: {values: Expression[]}
 * multiply, divide, modulus: {values: Expression[]}
 * add, subtract: {values: Expression[]}
 * less_than, greater_than, less_than_equal, greater_than_equal: {values: Expression[]}
 * equal, not_equal: {values: Expression[]}
 * and, or: {values: Expression[]}
 */

class Storymatic {
  constructor(story, callback) {
    story = Storymatic.parse(story);

    this.original = story.original;
    this.variables = story.variables;
    this.parsed = JSON.parse(JSON.stringify(story));
    this.commands = {};
    this.stopped = false;

    var add = (name, argName, codeblockName, codeToRun) => {
      if (!this.commands[name])
        this.commands[name] = (arg, expr, code, parsed, next, callback) => {
          this.setVariable(argName, arg);
          this.setVariable(codeblockName, code);

          this.runParsed(codeToRun, () => {
            if (!next || next.length == 0) {
              if (typeof callback == "function") callback();
            } else this.run(next, callback);
          });
        };
    };
    for (var command in story.commands) {
      if (!(command in this.commands)) {
        var cmd = story.commands[command];
        add(command, cmd.arg, cmd.codeblock, cmd.body);
      }
    }

    var libs = [];
    var plugins = [];
    story.libs.map((e) =>
      libs.push(fetch(e, { mode: "no-cors", cache: "reload" }))
    );
    story.plugins.map((e) =>
      plugins.push(fetch(e[0], { mode: "no-cors", cache: "reload" }))
    );
    // window.libs = libs;
    // window.plugins = plugins;

    Promise.allSettled(plugins).then((data) => {
      var pluginText = [];
      // window.pluginText = pluginText;
      for (var i = 0; i < data.length; i++)
        if (
          data[i].status == "fulfilled" &&
          data[i].value.ok &&
          data[i].value.status == 200
        )
          pluginText.push(data[i].value.text());

      Promise.allSettled(pluginText).then((data) => {
        data.map((e) => eval(e.value));

        Promise.allSettled(libs).then((data) => {
          var libText = [];
          for (var i = 0; i < data.length; i++)
            if (
              data[i].status == "fulfilled" &&
              data[i].value.ok &&
              data[i].value.status == 200
            )
              libText.push(data[i].value.text());

          Promise.allSettled(libText).then((data) => {
            data = data.map((e) => e.value);
            var index = 0;
            var tryLib = () => {
              if (index >= data.length) {
                if (story.importall)
                  story.imports = Object.keys(Storymatic.imports);

                for (var i = 0; i < story.importfrom.length; i++) {
                  if (story.importfrom[i][0] in Storymatic.imports) {
                    var block = Storymatic.imports[story.importfrom[i][0]];

                    for (var j = 0; j < story.importfrom[i][1].length; j++) {
                      var key = story.importfrom[i][1][j];
                      if (key in block) this.commands[key] = block[key];
                    }
                  }
                }

                for (var i = 0; i < story.imports.length; i++) {
                  if (story.imports[i] in Storymatic.imports) {
                    var block = Storymatic.imports[story.imports[i]];

                    for (var key in block) this.commands[key] = block[key];
                  }
                }

                if (typeof callback == "function") callback(this);
              } else {
                this.mergeWith(data[index], () => {
                  index++;
                  tryLib();
                });
              }
            };

            tryLib();
          });
        });
      });
    });
  }

  mergeWith(text, callback) {
    var story = Storymatic.parse(text);

    var add = (name, argName, codeblockName, codeToRun) => {
      if (!this.commands[name])
        this.commands[name] = (arg, expr, code, parsed, next, callback) => {
          this.setVariable(argName, arg);
          this.setVariable(codeblockName, code);

          this.runParsed(codeToRun, () => {
            if (!next || next.length == 0) {
              if (typeof callback == "function") callback();
            } else this.run(next, callback);
          });
        };
    };
    for (var command in story.commands) {
      if (!(command in this.commands)) {
        var cmd = story.commands[command];
        add(command, cmd.arg, cmd.codeblock, cmd.body);
      }
    }

    if (typeof callback == "function") callback();
  }

  getVariable(name) {
    var val = this.variables[name];
    if (val === undefined || val === null) return "";
    if (val.replace(/\s+/g, "") === "") return "";
    if (val.match(/^-?[0-9]+(?:\.[0-9]+)?$/)) return +val;

    return val;
  }

  setVariable(name, value) {
    if (!name) return;
    else value = `${value}`;
    this.variables[name] = value;
  }

  calc(code) {
    var runExpr = (expr) => {
      var wrapper = () => {
        if (typeof expr == "boolean") return expr;
        if (typeof expr == "string") return expr;
        if (typeof expr == "number") return expr;
        if (typeof expr != "object") return false;
        if (!expr.type) return false;

        if (expr.type == "variable") return this.getVariable(expr.name);

        if (expr.type == "invert") return !runExpr(expr.values[0]);

        if (expr.type == "multiply")
          return runExpr(expr.values[0]) * runExpr(expr.values[1]);
        if (expr.type == "divide")
          return runExpr(expr.values[0]) / runExpr(expr.values[1]);
        if (expr.type == "modulus")
          return runExpr(expr.values[0]) % runExpr(expr.values[1]);

        if (expr.type == "add")
          return runExpr(expr.values[0]) + runExpr(expr.values[1]);
        if (expr.type == "subtract")
          return runExpr(expr.values[0]) - runExpr(expr.values[1]);

        if (expr.type == "less_than")
          return runExpr(expr.values[0]) < runExpr(expr.values[1]);
        if (expr.type == "greater_than")
          return runExpr(expr.values[0]) > runExpr(expr.values[1]);
        if (expr.type == "less_than_equal")
          return runExpr(expr.values[0]) <= runExpr(expr.values[1]);
        if (expr.type == "greater_than_equal")
          return runExpr(expr.values[0]) >= runExpr(expr.values[1]);

        if (expr.type == "equal")
          return runExpr(expr.values[0]) == runExpr(expr.values[1]);
        if (expr.type == "not_equal")
          return runExpr(expr.values[0]) != runExpr(expr.values[1]);

        if (expr.type == "and")
          return !!(runExpr(expr.values[0]) && runExpr(expr.values[1]));
        if (expr.type == "or")
          return !!(runExpr(expr.values[0]) || runExpr(expr.values[1]));
      };

      var val = wrapper();

      if (val === true || val == "TRUE") return true;
      else if (val === false || val == "FALSE") return false;
      else return val;
    };

    var result = runExpr(code);
    if (result === true) return "TRUE";
    if (result === false) return "FALSE";
    return "" + result;
  }

  expr(code) {
    return this.calc(Storymatic.expr(code));
  }

  is(code) {
    var result;

    if (typeof code == "string") result = this.expr(code);
    else result = this.calc(code);

    if (result === true || result.toUpperCase() == "TRUE") return true;
    else return false;
  }

  runCommand(name, arg, expr, code, parsed, next, callback) {
    if (name in this.commands) {
      this.commands[name].call(
        this,
        ...JSON.parse(JSON.stringify([arg, expr, code, parsed, next])),
        callback
      );
    } else {
      if (!next || next.length == 0)
        typeof callback == "function" ? callback() : null;
      else this.run(next, callback);
    }
  }

  runCode(code, callback) {
    code = Storymatic.parseBlock.inner(code);
    this.runParsed(code, callback);
  }

  runParsed(code, callback) {
    this.run(code, callback);
  }

  runVariable(name, mode, value, callback) {
    if (mode == "@=") {
      if (value.replace(/\s+/g, "") == "") this.setVariable(name, "");
      else this.setVariable(name, this.expr(value));
      return typeof callback == "function" ? callback() : null;
    }

    if (mode == "=") {
      if (value.replace(/\s+/g, "") == "") this.setVariable(name, "");
      else this.setVariable(name, this.parseText(value));
      return typeof callback == "function" ? callback() : null;
    }

    var current = this.getVariable(name);
    var val = this.parseText(value);

    if (current == "") {
      this.setVariable(name, val);
      return typeof callback == "function" ? callback() : null;
    }

    if (!isNaN(+current) && !isNaN(+val)) {
      current = +current;
      val = +val;
    }

    if (mode == "+=") current += val;
    if (mode == "-=") current -= val;
    if (mode == "*=") current *= val;
    if (mode == "/=") current /= val;
    if (mode == "%=") current %= val;

    this.setVariable(name, current);
    return typeof callback == "function" ? callback() : null;
  }

  print(text, callback) {
    Storymatic.print(this.parseText(text), callback);
  }

  parseText(text) {
    return text.replace(/\$\$|\$([A-Za-z_][A-Za-z0-9_]*)/g, (m) => {
      if (m == "$$") return "$";

      return this.getVariable(m.substr(1));
    });
  }

  run(actions, callback) {
    if (this.stopped) return;
    if (!actions) return callback?.();

    actions = JSON.parse(JSON.stringify(actions));

    setTimeout(() => {
      if (actions.length == 0)
        return typeof callback == "function" ? callback() : null;

      var next = actions.shift();
      var other = () =>
        actions.length == 0
          ? typeof callback == "function"
            ? callback()
            : null
          : this.run(actions, callback);

      if (next.action == "command")
        this.runCommand(
          next.name,
          next.arg,
          next.expr,
          next.code,
          next.parsed,
          actions,
          callback
        );
      else if (next.action == "code") this.runCode(next.code, other);
      else if (next.action == "parsed") this.runParsed(next.code, other);
      else if (next.action == "print") this.print(next.text, other);
      else if (next.action == "variable")
        this.runVariable(next.name, next.mode, next.value, other);
      else this.run(actions, other);
    }, 0);
  }

  start(callback) {
    if (typeof callback != "function") callback = () => void 0;

    this.runCommand("start", "", "", [], [], callback);
  }

  context(callback) {
    new Storymatic(this.original, (copy) => {
      copy.variables = JSON.parse(JSON.stringify(this.parsed.variables));

      if (typeof callback == "function") callback(copy);
    });
  }
}

Storymatic.parseBlock = {
  precomment: function (text) {
    var regex = / *<--.+$/gm;

    return text.replace(regex, "");
  },
  importfrom: function (text) {
    var regex =
      /^#import +([A-Za-z_][A-Za-z0-9_]*) +((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| *,? *))+)$/gm;
    var match = text.realMatchAll(regex);

    return [
      text.replace(regex, ""),
      text
        .realMatchAll(regex)
        .map((e) => [
          e[1],
          e[2]
            .realMatchAll(/@[A-Za-z_][A-Za-z0-9_]*/g)
            .map((e) => e[0].substr(1)),
        ]),
    ];
  },
  imports: function (text) {
    var regex = /^#import +([^ \n\r]+)$/gm;

    return [text.replace(regex, ""), text.realMatchAll(regex).map((e) => e[1])];
  },
  importall: function (text) {
    var regex = /^#importall$/gm;

    return [text.replace(regex, ""), !!text.realMatchAll(regex).length];
  },
  libs: function (text) {
    var regex = /^#library +([^ \n\r]+)$/gm;

    return [
      text.replace(regex, ""),
      text
        .realMatchAll(regex)
        .map((e) => e[1])
        .filter((e) => {
          try {
            new URL(e);
          } catch (err) {
            return false;
          }

          return e.substr(0, 5) == "https";
        }),
    ];
  },
  plugins: function (text) {
    var regex = /^#plugin +([^ \n\r]+) +(.+)$/gm;

    return [
      text.replace(regex, ""),
      text
        .realMatchAll(regex)
        .map((e) => [e[1], e[2]])
        .filter((e) => {
          try {
            new URL(e[0]);
          } catch (err) {
            return false;
          }

          return e[0].substr(0, 5) == "https";
        }),
    ];
  },
  commentblock: function (text) {
    var regex = /\/\*(?:[^\*]|\*(?=[^/]|$))*\*\/|\/\*(?:[^\*]|\*(?=[^/]|$))*$/g;

    return text.replace(regex, "");
  },
  comments: function (text) {
    var regex = / *#.+$/gm;

    return text.replace(regex, "");
  },
  variables: function (text) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) *= *(.+)$/gm;
    var matches = text.realMatchAll(regex).map((e) => [e[1], e[2]]);

    return [text.replace(regex, ""), matches];
  },
  commands: function (text) {
    var regex =
      /^@([A-Za-z_][A-Za-z0-9_]*)(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)?(?: +\$([A-Za-z_][A-Za-z0-9_]*)| +NONE)? *$\n((?:^( +).*$)(?:\n^\5.*$)*)/gm;

    var matches = text
      .realMatchAll(regex)
      .map((e) => [null, e[1], e[2], e[3], e[4], e[5]]);
    matches = matches.map(function (e) {
      var padding = e[5].length;
      e[4] = e[4].split("\n").map((f) => f.substr(padding));

      return [e[1], e[2], e[3], e[4].join("\n")];
    });

    return matches;
  },
  inner: function (text) {
    text = text.split("\n");
    var out = [];
    var regex, match;

    if (text.length === 0) return [];

    // function to remove first line from text
    var cut = () => (text = text.filter((e, i) => i > 0).join("\n"));

    if (
      text.length >= 2 &&
      (match = text
        .join("\n")
        .match(
          /^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?\n((?:( +).+)(?:\n\4.+)*)(?=\n|$)/
        ))
    ) {
      var padding = match[4].length;
      var lines = match[3].split("\n").length + 1;

      out.push({
        action: "command",
        name: match[1],
        arg: match[2] || "",
        expr: Storymatic.expr(match[2] || ""),
        code: match[3]
          .split("\n")
          .map((e) => e.substr(padding))
          .join("\n"),
        parsed: Storymatic.parseBlock.inner(
          match[3]
            .split("\n")
            .map((e) => e.substr(padding))
            .join("\n")
        ),
      });

      text = text.filter((e, i) => i >= lines).join("\n");
    } else if (
      (match = text
        .join("\n")
        .match(/^@([A-Za-z_][A-Za-z0-9_]*?)(?: +(.+))?(?=\n|$)/))
    ) {
      out.push({
        action: "command",
        name: match[1],
        arg: match[2] || "",
        expr: Storymatic.expr(match[2] || ""),
        code: "",
        parsed: [],
      });

      cut();
    } else if (
      (match = text[0].match(
        /^@([A-Za-z_][A-Za-z0-9_]*)\(((?:[^\)]|\)\))+)?\)(?: +(.+))?$/
      ))
    ) {
      out.push({
        action: "command",
        name: match[1],
        arg: match[2] || "",
        expr: Storymatic.expr(match[2] || ""),
        code: match[3] || "",
        parsed: Storymatic.parseBlock.inner(match[3] || ""),
      });

      cut();
    } else if (
      (match = text
        .join("\n")
        .match(
          /^\$([A-Za-z_][A-Za-z0-9_]*) *(\+=|-=|\*=|\/=|%=|@=|=) *(.+)(?=\n|$)/
        ))
    ) {
      out.push({
        action: "variable",
        name: match[1],
        mode: match[2],
        value: match[3],
      });

      cut();
    } else if ((match = text[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *\+\+$/))) {
      out.push({
        action: "variable",
        name: match[1],
        mode: "+=",
        value: "1",
      });

      cut();
    } else if ((match = text[0].match(/^\$([A-Za-z_][A-Za-z0-9_]*) *--$/))) {
      out.push({
        action: "variable",
        name: match[1],
        mode: "-=",
        value: "1",
      });

      cut();
    } else if (text[0].replace(/ +/g, "") === "") {
      cut();
    } else {
      out.push({
        action: "print",
        text: text[0],
      });

      text = text.filter((e, i) => i > 0).join("\n");
    }

    if (text === "") return out;
    else return out.concat(Storymatic.parseBlock.inner(text));
  },
};

Storymatic.parse = function (text) {
  var importfrom,
    imports,
    importall,
    libs,
    plugins,
    variables,
    commands,
    original = text;

  text = text
    .split("\n")
    .filter((e) => e.replace(/ /g, ""))
    .join("\n");

  text = Storymatic.parseBlock.precomment(text);
  [text, importfrom] = Storymatic.parseBlock.importfrom(text);
  [text, imports] = Storymatic.parseBlock.imports(text);
  [text, importall] = Storymatic.parseBlock.importall(text);
  [text, libs] = Storymatic.parseBlock.libs(text);
  [text, plugins] = Storymatic.parseBlock.plugins(text);
  text = Storymatic.parseBlock.commentblock(text);
  text = Storymatic.parseBlock.comments(text);
  [text, variables] = Storymatic.parseBlock.variables(text);
  commands = Storymatic.parseBlock.commands(text);
  commands = commands.map((e) => [
    e[0],
    e[1] || "",
    e[2] || "",
    Storymatic.parseBlock.inner(e[3]),
  ]);

  var i;
  var realCommands = {};
  for (i = 0; i < commands.length; i++)
    realCommands[commands[i][0]] = {
      arg: commands[i][1],
      codeblock: commands[i][2],
      body: commands[i][3],
    };

  var realVariables = {};
  for (i = 0; i < variables.length; i++)
    realVariables[variables[i][0]] = variables[i][1];

  return {
    original,
    importfrom,
    imports,
    importall,
    libs,
    plugins,
    variables: realVariables,
    commands: realCommands,
  };
};

Storymatic.parseExpr = {
  verify: function (text) {
    var regex =
      /\(|\)|<=|>=|<|>|!=|\*|\/|%|\+|-|!|=|and|or|&&|\|\||-?[0-9]+(?:\.[0-9]+)?|\$[A-Za-z_][A-Za-z0-9_]*/g;

    if (text.replace(regex, "").match(/[^ ]/)) return false; // check that no invalid tokens exist
    if (!text.match(regex)) return false;

    var match = text.match(regex);
    var oper = "<= >= < > != * / % + - = and or && ||".split(" ");
    var isNumber = (val) => val.match(/-?[0-9]+(?:\.[0-9]+)?/);
    var isVar = (val) => val.match(/\$[A-Za-z_][A-Za-z0-9_]*/);

    if (oper.indexOf(match[0]) > -1 || match[0] == ")") return false;
    if (
      oper.indexOf(match[match.length - 1]) > -1 ||
      match[match.length - 1] == "(" ||
      match[match.length - 1] == "!"
    )
      return false;
    if (
      match.filter((e) => e == "(").length !=
      match.filter((e) => e == ")").length
    )
      return false;

    for (var i = 0; i < match.length - 1; i++) {
      if (oper.indexOf(match[i]) > -1 && oper.indexOf(match[i + 1]) > -1)
        return false;
      if (oper.indexOf(match[i]) > -1 && match[i + 1] == ")") return false;
      if (
        (isNumber(match[i]) || isVar(match[i])) &&
        (isNumber(match[i + 1]) || isVar(match[i + 1]))
      )
        return false;
    }

    return true;
  },
  tokenize: function (text) {
    var regex =
      /\$[A-Za-z_][A-Za-z0-9_]*|-?[0-9]+(?:\.[0-9]+)?|\(|\)|\|\||&&|\+|-|\*|\/|%|!=|!|<=|>=|<|>|=/g;

    return text.match(regex) || [];
  },
  paren: function (text) {
    var done = [];
    var cur = [];
    var paren = 0;
    var group = false;
    var len = text.length; // prevent memory leaks

    for (var i = 0; i < len; i++) {
      if (group) {
        if (text[i] == "(") paren++;
        if (text[i] == ")") paren--;

        if (paren == -1) {
          group = false;
          paren = 0;

          done.push(Storymatic.expr(cur.join(" ")));
        } else {
          cur.push(text[i]);
        }
      } else if (text[i] == "(") group = true;
      else done.push(text[i]);
    }

    return done;
  },
  varnums: function (text) {
    var match;

    for (var i = 0; i < text.length; i++) {
      if (
        typeof text[i] == "string" &&
        (match = text[i].match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))
      )
        text[i] = { type: "variable", name: match[1] };
      if (
        typeof text[i] == "string" &&
        (match = text[i].match(/(-?[0-9]+(?:\.[0-9]+)?)/))
      )
        text[i] = +match[1];
    }

    return text;
  },
  not: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i] == "!") write("invert", [text[i + 1]], 1);
      else done.push(text[i]);
    }

    return done;
  },
  prodquotmod: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "*") write("multiply", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == "/") write("divide", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == "%") write("modulus", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
  plusminus: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "+") write("add", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == "-") write("subtract", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
  compare: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "<") write("less_than", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == ">")
        write("greater_than", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == "<=")
        write("less_than_equal", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == ">=")
        write("greater_than_equal", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
  equal: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "=") write("equal", [text[i], text[i + 2]], 2);
      else if (text[i + 1] == "!=")
        write("not_equal", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
  and: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "and" || text[i + 1] == "&&")
        write("and", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
  or: function (text) {
    var done = [];
    var write = (type, values, skip) => {
      done.push({ type, values });
      i += skip;
    };

    for (var i = 0; i < text.length; i++) {
      if (text[i + 1] == "or" || text[i + 1] == "||")
        write("or", [text[i], text[i + 2]], 2);
      else done.push(text[i]);
    }

    return done;
  },
};

Storymatic.expr = function (text) {
  if (!Storymatic.parseExpr.verify(text))
    return { type: "equal", values: [0, 1] };

  text = Storymatic.parseExpr.tokenize(text);
  text = Storymatic.parseExpr.paren(text);
  text = Storymatic.parseExpr.varnums(text);

  text = Storymatic.parseExpr.not(text);
  text = Storymatic.parseExpr.prodquotmod(text);
  text = Storymatic.parseExpr.plusminus(text);
  text = Storymatic.parseExpr.compare(text);
  text = Storymatic.parseExpr.equal(text);
  text = Storymatic.parseExpr.and(text);
  text = Storymatic.parseExpr.or(text);

  return text[0];
};

Storymatic.tooltip = (text, callback) =>
  typeof callback == "function" ? callback() : null;
Storymatic.write = (text, callback) =>
  typeof callback == "function" ? callback(alert(text)) : null;
Storymatic.print = (text, callback) =>
  typeof callback == "function" ? callback(alert(text)) : null;
Storymatic.image = (src, callback) =>
  typeof callback == "function" ? callback() : null;
Storymatic.line = (callback) =>
  typeof callback == "function" ? callback() : null;
Storymatic.clear = (callback) =>
  typeof callback == "function" ? callback() : null;
Storymatic.type = (text, time, callback) =>
  typeof callback == "function" ? callback(alert(text)) : null;
Storymatic.input = (text, callback) =>
  typeof callback == "function" ? callback(prompt(text)) : null;
Storymatic.choice = (text, choices, callback) => {
  function ask() {
    var answer = prompt(text + "\nChoose From: " + choices.join(","));

    if (choices.indexOf(answer) == -1) return ask();
    else return answer;
  }

  typeof callback == "function" ? callback(ask()) : null;
};

Storymatic.waitingFor = [];
Storymatic.waitFor = (key, once, callback) => {
  typeof callback == "function" ? callback(key) : null;
};

Storymatic.imports = {};

Storymatic.imports.time = {
  nowait: function (arg, expr, code, parsed, next, callback) {
    Storymatic.write(this.parseText(arg), () => {
      this.run(next, callback);
    });
  },
  wait: function (arg, expr, code, parsed, next, callback) {
    arg = +this.parseText(arg);
    if (isNaN(arg)) return this.run(next, callback);

    setTimeout(() => {
      this.run(next, callback);
    }, 1000 * arg);
  },
  wait_ms: function (arg, expr, code, parsed, next, callback) {
    arg = +this.parseText(arg);
    if (isNaN(arg)) return this.run(next, callback);

    setTimeout(() => {
      this.run(next, callback);
    }, arg);
  },
};

Storymatic.imports.input = {
  menu: function (arg, expr, code, parsed, next, callback) {
    var options = parsed.filter(
      (e) =>
        e.action == "command" &&
        e.name == "option" &&
        e.arg.replace(/\s+/g, "") != ""
    );
    if (options.length == 0) return this.run(next, callback);

    Storymatic.choice(
      this.parseText(arg),
      options.map((e) => this.parseText(e.arg)),
      (index) => {
        this.run(options[index], () => {
          this.run(next, callback);
        });
      }
    );
  },
  choice: function (arg, expr, code, parsed, next, callback) {
    var match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/);
    if (!match) return this.run(next, callback);

    var options = parsed.filter(
      (e) =>
        e.action == "command" &&
        e.name == "option" &&
        e.arg.replace(/\s+/g, "") != ""
    );
    if (options.length == 0) return this.run(next, callback);

    Storymatic.choice(
      this.parseText(arg),
      options.map((e) => this.parseText(e.arg)),
      (index) => {
        if (options[index].code.replace(/\s+/g) == "")
          this.setVariable(match[1], this.parseText(options[index].arg));
        else this.setVariable(match[1], this.parseText(options[index].code));

        this.run(next, callback);
      }
    );
  },
  input: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,
      match;
    var allowed =
      code.replace(/\s+/g, "") == ""
        ? []
        : code
            .split("\n")
            .map((e) => this.parseText(e))
            .map((e) => e.toLowerCase());
    if (!(match = arg.match(regex))) return this.run(next, callback);

    var ask = () => {
      Storymatic.input(match[2], (data) => {
        if (data.replace(/\s+/g, "") == "") {
          return ask();
        } else {
          if (allowed.length > 0)
            if (allowed.indexOf(data.toLowerCase()) == -1) return ask();

          this.setVariable(match[1], data);
          return this.run(next, callback);
        }
      });
    };

    ask();
  },
  input_cs: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/,
      match;
    var allowed =
      code.replace(/\s+/g, "") == ""
        ? []
        : code
            .split("\n")
            .map((e) => this.parseText(e))
            .map((e) => e.toLowerCase());
    if (!(match = arg.match(regex))) return this.run(next, callback);

    var ask = () => {
      Storymatic.input(match[2], (data) => {
        if (data.replace(/\s+/g, "") == "") {
          return ask();
        } else {
          if (allowed.length > 0) if (allowed.indexOf(data) == -1) return ask();

          this.setVariable(match[1], data);
          return this.run(next, callback);
        }
      });
    };

    ask();
  },
  number: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/;
    var m = arg.match(regex);
    if (!m) return this.run(next, callback);

    var min = -Infinity;
    var max = Infinity;
    var step = 0;
    var int = false;

    code = code.split("\n");
    code.map((e) => {
      var match;
      if ((match = e.match(/^min *: *(-?[0-9]+(?:\.[0-9]+)?)/)))
        min = +match[1];
      if ((match = e.match(/^max *: *(-?[0-9]+(?:\.[0-9]+)?)/)))
        max = +match[1];
      if ((match = e.match(/^step *: *([0-9]+(?:\.[0-9]+)?)/)))
        step = +match[1];
      if (e == "integer" || e == "int") int = true;
      if (e == "float") int = false;
    });

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    var ask = () => {
      Storymatic.input(m[2], (data) => {
        if (data.replace(/\s/g, "") == "") return ask();
        else data = +data;
        var num;

        if (isNaN(data)) {
          return ask();
        } else if (data < min || data > max) {
          return ask();
        } else if (int && Math.floor(data) != data) {
          return ask();
        } else if (
          step &&
          Math.floor((data - min) / step) != (data - min) / step
        ) {
          return ask();
        } else {
          this.setVariable(m[1], data);
          return this.run(next, callback);
        }
      });
    };

    ask();
  },
  bind_once: function (arg, expr, code, parsed, next, callback) {
    if (arg.replace(/\s+/g, "") == "") return this.run(next, callback);
    if (code.replace(/\s+/g, "") == "") return this.run(next, callback);

    Storymatic.waitFor(this.parseText(arg), true, () => {
      this.run(JSON.parse(JSON.stringify(parsed)));
    });

    this.run(next, callback);
  },
  bind_forever: function (arg, expr, code, parsed, next, callback) {
    if (code.replace(/\s/g, "") == "") return this.run(next, callback);
    if (arg.replace(/\s/g, "") == "") return this.run(next, callback);

    Storymatic.waitFor(this.parseText(arg), false, () => {
      this.run(JSON.parse(JSON.stringify(parsed)));
    });

    this.run(next, callback);
  },
  unbind: function (arg, expr, code, parsed, next, callback) {
    if (arg.replace(/\s/g, "") != "")
      Storymatic.waitingFor = Storymatic.waitingFor.filter(
        (e) => arg.split(/\s+/g).indexOf(e.key.toLowerCase()) == -1
      );
    else Storymatic.waitingFor = [];

    this.run(next, callback);
  },
};

Storymatic.imports.output = {
  nowait: function (arg, expr, code, parsed, next, callback) {
    Storymatic.write(this.parseText(arg), () => {
      this.run(next, callback);
    });
  },
  image: function (arg, expr, code, parsed, next, callback) {
    Storymatic.image(this.parseText(arg), () => this.run(next, callback));
  },
  typewrite: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/)))
      Storymatic.type(this.parseText(match[2]), 1000 * +match[1], () =>
        this.run(next, callback)
      );
    else if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/)))
      Storymatic.type(
        this.parseText(match[2]),
        1000 * +this.getVariable(match[1]),
        () => this.run(next, callback)
      );
    else this.run(next, callback);
  },
  typewrite_ms: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^([0-9]+(?:\.[0-9]+)?) +(.+)$/)))
      Storymatic.type(
        this.parseText(match[2], +match[1], () => this.run(next, callback))
      );
    else if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/)))
      Storymatic.type(
        this.parseText(match[2], +this.getVariable(match[1]), () =>
          this.run(next, callback)
        )
      );
    else this.run(next, callback);
  },
  line: function (arg, expr, code, parsed, next, callback) {
    Storymatic.line(() => this.run(next, callback));
  },
  clear: function (arg, expr, code, parsed, next, callback) {
    Storymatic.clear(() => this.run(next, callback));
  },
  center: function (arg, expr, code, parsed, next, callback) {
    Storymatic.center(this.parseText(arg), () => {
      this.run(next, callback);
    });
  },
  tooltip: function (arg, expr, code, parsed, next, callback) {
    Storymatic.tooltip(this.parseText(arg), () => {
      this.run(next, callback);
    });
  },
};

Storymatic.imports.control = {
  if: function (arg, expr, code, parsed, ognext, callback) {
    if (arg.replace(/\s/g, "") == "") return this.run(ognext, callback);
    if (code.replace(/\s+/g, "") == "") return this.run(ognext, callback);
    var next = JSON.parse(JSON.stringify(ognext));

    var ifs = [{ action: "command", name: "if", arg, expr, code, parsed }];
    while (
      next.length > 0 &&
      next[0].action == "command" &&
      (next[0].name == "elseif" || next[0].name == "else")
    ) {
      if (next[0].name == "elseif" && next[0].arg.replace(/\s/g, "") == "")
        break;
      if (next[0].name == "else" && next[0].arg.replace(/\s/g, "") != "") break;

      ifs.push(next.shift());
      if (ifs[ifs.length - 1].name == "else") break;
      if (next.length > 0 && next[0].action == "command") {
        if (next[0].name != "elseif" && next[0].name != "else") break;
      } else break;
    }

    for (var i = 0; i < ifs.length; i++) {
      if (
        (ifs[i].name == "if" || ifs[i].name == "elseif") &&
        this.is(ifs[i].expr)
      ) {
        return this.run(JSON.parse(JSON.stringify(ifs[i].parsed)), () =>
          this.run(next, callback)
        );
      } else if (ifs[i].name == "else") {
        return this.run(JSON.parse(JSON.stringify(ifs[i].parsed)), () =>
          this.run(next, callback)
        );
      }
    }

    this.run(next, callback);
  },
  context: function (arg, expr, code, parsed, next, callback) {
    if (code.replace(/\s+/g, "") == "") return this.run(next, callback);
    this.context((context) => {
      var synced = arg.match(/\$([A-Za-z_][A-Za-z0-9_]*)/g);
      if (Array.isArray(synced)) synced = synced.map((e) => e.substr(1));
      else synced = [];

      context.runParsed(parsed, () => {
        for (var i = 0; i < synced.length; i++)
          if (synced[i] in context.variables)
            this.variables[synced[i]] = JSON.parse(
              JSON.stringify(context.variables[synced[i]])
            );

        this.run(next, callback);
      });
    });
  },
  repeat: function (arg, expr, code, parsed, next, callback) {
    var i = 0;
    var c = +this.calc(expr);

    if (arg.replace(/\s/g, "") == "") return this.run(next, callback);
    if (code.replace(/\s/g, "") == "") return this.run(next, callback);

    if (!c) return this.run(next, callback);
    var func = () => {
      if (++i > c) return this.run(next, callback);
      else this.run(JSON.parse(JSON.stringify(parsed)), func);
    };

    func();
  },
  while: function (arg, expr, code, parsed, next, callback) {
    if (arg.replace(/\s/g, "") == "") return this.run(next, callback);
    if (code.replace(/\s/g, "") == "") return this.run(next, callback);

    var func = () => {
      if (this.is(expr)) this.run(JSON.parse(JSON.stringify(parsed)), func);
      else this.run(next, callback);
    };

    func();
  },
  for: function (arg, expr, code, parsed, next, callback) {
    if (code.replace(/\s+/g, "") == "") return this.run(next, callback);

    arg = arg.split(/;/g).map((e) => e.trim());
    if (arg.length != 3) return this.run(next, callback);

    var func = () => {
      if (this.is(arg[1])) {
        this.run(JSON.parse(JSON.stringify(parsed)), () => {
          this.runCode(arg[2], func);
        });
      } else {
        return this.run(next, callback);
      }
    };

    this.runCode(arg[0], func);
  },
  step: function (arg, expr, code, parsed, next, callback) {
    if (code.replace(/\s+/g, "") == "") return this.run(next, callback);

    var regex =
      /\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+(?:\.[0-9]+)?) +(-?[0-9]+(?:\.[0-9]+)?)(?: +([0-9](?:\.[0-9]+)?))?/;
    var match = arg.match(regex);
    if (!match) return this.run(next, callback);

    var variable = match[1];
    var count = +match[2];
    var end = +match[3];
    var step = +match[4] || 1;

    if (count > end) {
      var temp = end;
      end = count;
      count = temp;
    }

    var func = () => {
      this.setVariable(variable, count);
      this.run(JSON.parse(JSON.stringify(parsed)), () => {
        count += step;
        if (count > end) return this.run(next, callback);
        else return func();
      });
    };

    func();
  },
  run: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))) {
      this.runCode(this.getVariable(match[1]), () => this.run(next, callback));
    } else this.run(next, callback);
  },
  switch: function (arg, expr, code, cases, next, callback) {
    var match;
    var value = this.parseText(arg);

    for (var i = 0; i < cases.length; i++) {
      if (cases[i].action != "command") continue;

      if (cases[i].name == "case" && this.parseText(cases[i].arg) == value) {
        return this.run(cases[i].parsed, () => this.run(next, callback));
      } else if (cases[i].name == "default") {
        return this.run(cases[i].parsed, () => this.run(next, callback));
      }
    }

    this.run(next, callback);
  },
};

Storymatic.imports.string = {
  parse: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match;

    if ((match = arg.match(regex))) {
      var value = `${this.getVariable(match[1])}`;

      this.setVariable(match[1], this.parseText(value));
      this.run(next, callback);
    } else this.run(next, callback);
  },
  newline: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);

    if (!match) return this.run(next, callback);
    this.setVariable(match[1], this.getVariable(match[1]) + "\n");

    this.run(next, callback);
  },
  empty: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);

    if (!match) return this.run(next, callback);
    this.setVariable(match[1], "");

    this.run(next, callback);
  },
  substr: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/;
    var match;

    if ((match = arg.match(regex))) {
      var value = `${this.getVariable(match[1])}`;
      var from = +match[2] > 0 ? +match[2] - 1 : +match[2];
      var length = +match[3] || undefined;

      this.setVariable(match[1], value.substr(from, length));
      this.run(next, callback);
    } else this.run(next, callback);
  },
  substring: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)(?: +(-?[0-9]+))?$/;
    var match;

    if ((match = arg.match(regex))) {
      var value = `${this.getVariable(match[1])}`;
      var from = +match[2] > 0 ? +match[2] - 1 : +match[2];
      var to = match[3]
        ? +match[3] > 0
          ? +match[3] - 1
          : +match[3]
        : undefined;

      this.setVariable(match[1], value.substring(from, length));
      this.run(next, callback);
    } else this.run(next, callback);
  },
  char: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/;
    var match;

    if ((match = arg.match(regex))) {
      var value = `${this.getVariable(match[1])}`;
      var index = +match[2] > 0 ? +match[2] - 1 : +match[2];

      this.setVariable(match[1], value.charAt(index));
      this.run(next, callback);
    } else this.run(next, callback);
  },
  switch_char: function (arg, expr, code, cases, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+)$/;
    var match;

    if ((match = arg.match(regex))) {
      var value = `${this.getVariable(match[1])}`;
      var index = +match[2] > 0 ? +match[2] - 1 : +match[2];

      value = value.charAt(index);
    } else this.run(next, callback);

    for (var i = 0; i < cases.length; i++) {
      if (cases[i].action != "command") continue;

      if (cases[i].name == "case" && this.parseText(cases[i].arg) == value) {
        return this.run(cases[i].parsed, () => this.run(next, callback));
      } else if (cases[i].name == "default") {
        return this.run(cases[i].parsed, () => this.run(next, callback));
      }
    }

    this.run(next, callback);
  },
  lowercase: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);

    if (!match) return this.run(next, callback);
    this.setVariable(match[1], `${this.getVariable(match[1])}`.toLowerCase());

    this.run(next, callback);
  },
  uppercase: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);

    if (!match) return this.run(next, callback);
    this.setVariable(match[1], `${this.getVariable(match[1])}`.toUpperCase());

    this.run(next, callback);
  },
  replace: function (arg, expr, code, parsed, next, callback) {
    var regex =
      /^\$([A-Za-z_][A-Za-z0-9_]*) +\/((?:[^\/]|\\\/)+)\/([gimsuy]{0,6}) +?(.*)$/;
    var match = arg.match(regex);
    if (!match) return this.run(next, callback);

    var value = `${this.getVariable(match[1])}`;
    var matcher = new RegExp(match[2], match[3]);
    var replacer = match[4];
    this.setVariable(match[1], value.replace(matcher, replacer));

    this.run(next, callback);
  },
};

Storymatic.imports.number = {
  randint: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*) +(-?[0-9]+) +(-?[0-9]+)$/;
    var match = arg.match(regex);
    if (!match) return this.run(next, callback);

    var min = +match[2];
    var max = +match[3];

    if (min > max) {
      var temp = min + 0;
      min = max;
      max = temp;
    }

    this.setVariable(
      match[1],
      Math.floor((max - min + 1) * Math.random()) + min
    );
    this.run(next, callback);
  },
  floor: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);
    if (!match) return this.run(next, callback);

    this.setVariable(match[1], Math.floor(+this.getvariable(match[1])));
    this.run(next, callback);
  },
  ceil: function (arg, expr, code, parsed, next, callback) {
    var regex = /^\$([A-Za-z_][A-Za-z0-9_]*)$/;
    var match = arg.match(regex);
    if (!match) return this.run(next, callback);

    this.setVariable(match[1], Math.ceil(+this.getvariable(match[1])));
    this.run(next, callback);
  },
};

Storymatic.imports.sync = {
  exists: function (arg, expr, code, parsed, next, callback) {
    var match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/);

    if (match && code.replace(/\s+/g, "") != "") {
      var code = new URL(window.location.href).searchParams.get("code");
      var item = `storymatic_${code}_${match[1]}`;

      actions.getLocal(item, (data) => {
        if (typeof data[item] == "string") {
          this.run(parsed, () => this.run(next, callback));
        } else if (
          next.length > 0 &&
          next[0].action == "command" &&
          next[0].name == "else"
        ) {
          this.run(next[0].parsed, () =>
            this.run(
              next.filter((e, i) => i > 0),
              callback
            )
          );
        } else this.run(next, callback);
      });
    } else this.run(next, callback);
  },
  load: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*) +(.+)$/))) {
      var code = new URL(window.location.href).searchParams.get("code");
      var item = `storymatic_${code}_${match[1]}`;

      actions.getLocal(item, (data) => {
        if (typeof data[item] == "string") {
          this.setVariable(match[1], data[item]);
          this.run(next, callback);
        } else {
          this.setVariable(match[1], this.parseText(match[2]));
          this.run(next, callback);
        }
      });
    } else this.run(next, callback);
  },
  save: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))) {
      var code = new URL(window.location.href).searchParams.get("code");
      var item = `storymatic_${code}_${match[1]}`;
      var obj = {};
      obj[item] = `${this.getVariable(match[1])}`;

      actions.setLocal(obj, () => {
        this.run(next, callback);
      });
    } else this.run(next, callback);
  },
  reset: function (arg, expr, code, parsed, next, callback) {
    var match;

    if ((match = arg.match(/^\$([A-Za-z_][A-Za-z0-9_]*)$/))) {
      var code = new URL(window.location.href).searchParams.get("code");
      var item = `storymatic_${code}_${match[1]}`;
      var obj = {};
      obj[item] = null;

      actions.setLocal(obj, () => this.run(next, callback));
      // localStorage.removeItem(item);
      // this.run(next,callback);
    } else this.run(next, callback);
  },
};

/* All Built-In Functions

time
  nowait
  wait
  wait_ms

input
  menu
  choice
  input
  input_cs
  number
  bind_once
  bind_forever
  unbind

output
  nowait
  image
  typewrite
  typewrite_ms
  line
  clear
  center
  tooltip

control
  if
  context
  repeat
  while
  for
  step
  run
  switch

string
  parse
  newline
  empty
  substr
  substring
  char
  switch_char
  lowercase
  uppercase
  replace

number
  randint
  floor
  ceil

sync
  exists
  load
  save
  reset

*/

const actions = {};
actions.getLocal = function (keys, callback) {
  var output = {};

  if (typeof keys == "object" && keys.length === 0) {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.slice(0, 6) == "local-")
        output[key.slice(6)] = localStorage.getItem(key);
    }

    return output;
  }

  if (typeof keys == "string") keys = [keys];
  for (var i = 0; i < keys.length; i++) {
    output[keys[i]] = actions.storage.get("local-" + keys[i])[
      "local-" + keys[i]
    ];
  }

  callback(output);
};
actions.setLocal = function (keyVals, callback) {
  var obj = {};
  for (var key in keyVals) obj["local-" + key] = keyVals[key];
  actions.storage.set(obj);

  if (typeof callback == "function") callback("");
};

export { Storymatic };
