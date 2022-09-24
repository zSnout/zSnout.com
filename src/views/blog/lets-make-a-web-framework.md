---
author: Zachary Sakowitz
category: code
date: 2022-09-24
---

Today we're going to make a reactivity system in JavaScript, harness it to
create DOM constructs, and create a JSX framework using our new system.

We'll base it on the latest JavaScript web framework: Willow. I know it's the
latest because I released it two days ago in the afternoon and even the JS
ecosystem doesn't move _that_ fast. [Willow](https://github.com/zSnout/willow)
is a reactive web framework that zSnout released on September 22. It enables JSX
syntax, compiles to DOM nodes, and omits a virtual DOM. I created it over the
span of about a week, so it's probably very buggy. However, it seems to work
well enough for now. The library is based around a core reactivity system which
borrows many ideas from SolidJS that I like. It also includes some custom
constructs.

## The reactive primitives

Like SolidJS, Willow has two reactive primitives: signals and effects. A signal
contains a value and updates linked effects whenever it changes. An effect can
access signals and is rerun whenever the value of accessed signals change.

We're going to use the subscriber pattern. Our signals will keep an internal
list of effects and call them whenever they update. First we'll create a class
to store our effects. We'll also create a variable that stores the current
effect scope.

```ts
let currentScope;

class EffectScope {
  constructor(effect) {
    this.effect = effect;
  }

  run() {
    const parent = currentScope;
    currentScope = this;
    this.effect();
    currentScope = parent;
  }
}
```

We can make an effect by using `new EffectScope(some function)` and run it by
using `scope.run()`. When the effect is run, it will capture the parent scope,
set the current scope to itself, run the effect, and set the current scope to
the parent.

Now let's make a `createEffect` function that instantiates an effect and hides
this on the user's end. It will need to call the effect once to initialize the
signals.

```ts
function createEffect(effect) {
  const scope = new EffectScope(effect);
  scope.run();
}
```

Speaking of signals, let's create those. They're by far the most complex of the
reactive set. We'll make a `createSignal` function that returns a getter and a
setter.

```ts
function createSignal(value) {
  function get() {
    return value;
  }

  function set(newValue) {
    value = newValue;
  }

  // A tuple of the getter and the setter.
  return [get, set];
}
```

Of course, we need to track calls of `get`. We'll use a `Set` that stores any
effect scopes that have called the signal getter.

```ts
function createSignal(value) {
  // This Set contains every EffectScope that calls `get`.
  const tracked = new Set();

  function get() {
    // Only call this if we're inside an EffectScope.
    if (currentScope) {
      // We add the current effect scope to the `tracked` list.
      tracked.add(currentScope);
    }

    return value;
  }

  function set(newValue) {
    value = newValue;
  }

  // A tuple of the getter and the setter.
  return [get, set];
}
```

Now that we track when the getter is called, let's rerun all the tracked effects
whenever the setter is called.

```ts
function createSignal(value) {
  // This Set contains every EffectScope that calls `get`.
  const tracked = new Set();

  function get() {
    // Only call this if we're inside an EffectScope.
    if (currentScope) {
      // We add the current effect scope to the `tracked` list.
      tracked.add(currentScope);
    }

    return value;
  }

  function set(newValue) {
    value = newValue;

    // We rerun every tracked effect.
    tracked.forEach((scope) => scope.run());
  }

  // A tuple of the getter and the setter.
  return [get, set];
}
```

Before we test this, let's make one more reactive item: a memo. A memo combines
an effect and a signal. It accepts a function that may call signal accessors and
returns a value.

```ts
function createMemo(accessor) {
  // We initialize a signal with no value.
  const [get, set] = createSignal();

  // We then create an effect that sets the signal to the accessor's value.
  // This allows the accessor to call signals.
  createEffect(() => set(accessor()));

  return get;
}
```

A memo is _not_ a primitive because it doesn't directly interact with
`EffectScope`s. Instead, it combines `createSignal` and `createEffect` to create
a new reactive item.

Here's our entire reactive system. It may look like a lot, but it's only 35
lines of code.

```ts
let currentScope;

class EffectScope {
  constructor(effect) {
    this.effect = effect;
  }

  run() {
    const parent = currentScope;
    currentScope = this;
    this.effect();
    currentScope = parent;
  }
}

function createEffect(effect) {
  const scope = new EffectScope(effect);
  scope.run();
}

function createSignal(value) {
  // This Set contains every EffectScope that calls `get`.
  const tracked = new Set();

  function get() {
    // Only call this if we're inside an EffectScope.
    if (currentScope) {
      // We add the current effect scope to the `tracked` list.
      tracked.add(currentScope);
    }

    return value;
  }

  function set(newValue) {
    value = newValue;

    // We rerun every tracked effect.
    tracked.forEach((scope) => scope.run());
  }

  // A tuple of the getter and the setter.
  return [get, set];
}

function createMemo(accessor) {
  // We initialize a signal with no value.
  const [get, set] = createSignal();

  // We then create an effect that sets the signal to the accessor's value.
  // This allows the accessor to call signals.
  createEffect(() => set(accessor()));

  return get;
}
```

Minified, that's 335 characters. That's the smallest reactive library I've ever
seen!

<!-- prettier-ignore -->
```js
let c;class i{constructor(t){this.effect=t}run(){const t=c;c=this,this.effect(),c=t}}function createEffect(e){new i(e).run()}function createSignal(e){const t=new Set;function n(){return c&&t.add(c),e}function f(s){e=s,t.forEach(u=>u.run())}return[n,f]}function createMemo(e){const[t,n]=createSignal();return createEffect(()=>n(e())),t}
```

## Testing our system

Let's test our code by writing a basic example. We'll have a signal for a number
and a memo that doubles that number. We'll also output the memo's value when it
changes.

I encourage readers using a desktop to copy the examples and try them in a
browser.

```ts
const [number, setNumber] = createSignal(7);
// number() is now 7.

const doubled = createMemo(() => 2 * number());
// This tracks `number`.
// doubled() is now 14.

createEffect(() => console.log(doubled()));
// This tracks `doubled`.
// It logs 14.

setNumber(3);
// number() is now 3.
// This activates doubled, which is now 6.
// This activates the effect, which now logs 6.
```

## Using it in the DOM

Let's use our system in JavaScript's DOM. We can create reactive text nodes. We
can use `document.createTextNode` to create a text node and set its `.data`
property to set the content. We'll wrap this in a function so we can reuse it.

```ts
function createTextNode(accessor) {
  const node = document.createTextNode("");

  // We'll add a check to make sure we have an accessor and not a plain value.
  if (typeof accessor === "function") {
    // We have a proper accessor and can set up an effect.

    createEffect(() => {
      node.data = accessor();
    });
  } else {
    // Since we have a plain value, we'll just set the node data once.

    node.data = accessor;
  }

  return node;
}
```

Let's use our latest component in some standard DOM code. We'll create a heading
that displays the value of `name`. We'll also create an input field where you
can type your name.

```ts
const [name, setName] = createSignal("Zachary");
const node = createTextNode(name);

const element = document.createElement("h1");
element.append(node);

const field = document.createElement("input");
field.value = name();
field.addEventListener("input", () => {
  setName(field.value);
});

document.body.append(element, field);
```

We can extend this to work for DOM properties. Let's make a `createProperty`
function. It'll accept a DOM node, a property name, and an accessor for the
property's value. Try coding it yourself before checking the solution below.
Bonus points if it can also accept a non-function and set the property once
instead of erroring.

<details>

<summary>Reveal the solution by clicking this dropdown.</summary>

```ts
function createProperty(node, name, accessor) {
  // We'll add a check to make sure we have an accessor and not a plain value.
  if (typeof accessor == "function") {
    // We were passed a proper accessor, so we'll create an effect.

    createEffect(() => {
      // We use an index because we're setting a property, not an attribute.
      node[name] = accessor();
    });
  } else {
    // If the accessor isn't a function, we'll just set it once.

    node[name] = accessor;
  }
}
```

</details>

We can now use `createProperty` combined with `style` to create dynamic styles.
Let's make the heading red if the user's name starts with `R` and blue if their
name starts with `B`. By now, you can probably guess that we'll need a memo for
the class name. Other than that, we'll copy and paste our earlier code.

```ts
const [name, setName] = createSignal("Zachary");
const node = createTextNode(name);

const element = document.createElement("h1");
element.append(node);

const styles = createMemo(() => {
  if (name().startsWith("R")) {
    return "color: red";
  } else if (name().startsWith("B")) {
    return "color: blue";
  } else {
    return "";
  }
});

createProperty(element, "style", styles);

const field = document.createElement("input");
field.value = name();
field.addEventListener("input", () => {
  setName(field.value);
});

document.body.append(element, field);
```

Again, you should try this example if possible. Notice how starting the input
field with an `R` or `B` changes the heading's color.

Let's now make an `appendChild` function that appends a child or text node to a
DOM node so that we don't have to manually call `createTextNode` and `.append`.
We'll use a few instanceof and typeof checks to make sure everything works
properly.

```ts
function appendChild(parent, child) {
  if (child instanceof Node) {
    // We were passed a DOM node, so we'll append it normally.

    parent.append(child);
  } else {
    // Anything other than a DOM node will be passed through `createTextNode`.
    // That will set up reactive text nodes if we were passed an accessor and
    // a plain text node if we were passed a non-accessor.

    parent.append(createTextNode(child));
  }
}
```

Let's make a `createElement` function to create an HTML element, add attributes,
and add children.

```ts
// We'll use ...rest parameter syntax to capture any children passed.
function createElement(tag, props, ...children) {
  // Initialize a DOM element with the given tag.
  const node = document.createElement(tag);

  // We only want to set properties if we're passed an actual object.
  // We have to do the extra check for props != null because in JavaScript,
  // typeof null == "object".
  if (typeof props == "object" && props != null) {
    // This syntax iterates over each key in the object.
    for (const key in props) {
      // If the key starts with on:, we'll register it as an event listener.
      if (key.startsWith("on:")) {
        node.addEventListener(
          /* We slice the on: away. */ key.slice(3),
          props[key]
        );
      } else {
        // We'll create a property with the given key and value.
        // `createProperty` will handle reactive properties for us.
        createProperty(node, key, props[key]);
      }
    }
  }

  // This syntax iterates over each element of the `children` array.
  for (const child of children) {
    // `appendChild` already does the logic to check for nodes vs. accessors.
    appendChild(node, child);
  }

  // Of course, we have to return the output node.
  return node;
}
```

I'm sure some of you see where we're going, but just wait a bit for the final
result.

Here's all of our DOM code so far (not including the reactive primitives).

```ts
function createTextNode(accessor) {
  const node = document.createTextNode("");

  // We'll add a check to make sure we have an accessor and not a plain value.
  if (typeof accessor === "function") {
    // We have a proper accessor and can set up an effect.

    createEffect(() => {
      node.data = accessor();
    });
  } else {
    // Since we have a plain value, we'll just set the node data once.

    node.data = accessor;
  }

  return node;
}

function createProperty(node, name, accessor) {
  // We'll add a check to make sure we have an accessor and not a plain value.
  if (typeof accessor == "function") {
    // We were passed a proper accessor, so we'll create an effect.

    createEffect(() => {
      // We use an index because we're setting a property, not an attribute.
      node[name] = accessor();
    });
  } else {
    // If the accessor isn't a function, we'll just set it once.

    node[name] = accessor;
  }
}

function appendChild(parent, child) {
  if (child instanceof Node) {
    // We were passed a DOM node, so we'll append it normally.

    parent.append(child);
  } else {
    // Anything other than a DOM node will be passed through `createTextNode`.
    // That will set up reactive text nodes if we were passed an accessor and
    // a plain text node if we were passed a non-accessor.

    parent.append(createTextNode(child));
  }
}

// We'll use ...rest parameter syntax to capture any children passed.
function createElement(tag, props, ...children) {
  // Initialize a DOM element with the given tag.
  const node = document.createElement(tag);

  // We only want to set properties if we're passed an actual object.
  // We have to do the extra check for props != null because in JavaScript,
  // typeof null == "object".
  if (typeof props == "object" && props != null) {
    // This syntax iterates over each key in the object.
    for (const key in props) {
      // If the key starts with on:, we'll register it as an event listener.
      if (key.startsWith("on:")) {
        node.addEventListener(
          /* We slice the on: away. */ key.slice(3),
          props[key]
        );
      } else {
        // We'll create a property with the given key and value.
        // `createProperty` will handle reactive properties for us.
        createProperty(node, key, props[key]);
      }
    }
  }

  // This syntax iterates over each element of the `children` array.
  for (const child of children) {
    // `appendChild` already does the logic to check for nodes vs. accessors.
    appendChild(node, child);
  }

  // Of course, we have to return the output node.
  return node;
}
```

Of course, I can't resist passing it (and the reactive library) through a
minifier and getting an 879 byte output. That is tiny (0.85kb)!

<!-- prettier-ignore -->
```ts
let c;class i{constructor(e){this.effect=e}run(){const e=c;c=this,this.effect(),c=e}}function createEffect(t){new i(t).run()}function createSignal(t){const e=new Set;function n(){return c&&e.add(c),t}function f(o){t=o,e.forEach(r=>r.run())}return[n,f]}function createMemo(t){const[e,n]=createSignal();return createEffect(()=>n(t())),e}function createTextNode(t){const e=document.createTextNode("");return typeof t=="function"?createEffect(()=>{e.data=t()}):e.data=t,e}function createProperty(t,e,n){typeof n=="function"?createEffect(()=>{t[e]=n()}):t[e]=n}function appendChild(t,e){e instanceof Node?t.append(e):t.append(createTextNode(e))}function createElement(t,e,...n){const f=document.createElement(t);if(typeof e=="object"&&e!=null)for(const o in e)o.startsWith("on:")?f.addEventListener(o.slice(3),e[o]):createProperty(f,o,e[o]);for(const o of n)appendChild(f,o);return f}
```

Okay, time for the example. Let's rewrite our previous code using the new
`createElement` function.

```ts
const [name, setName] = createSignal("Zachary");

const element = createElement(
  "h1",
  {
    style: createMemo(() => {
      if (name().startsWith("R")) {
        return "color: red";
      } else if (name().startsWith("B")) {
        return "color: blue";
      } else {
        return "";
      }
    }),
  },
  name
);

const field = createElement("input", {
  // We call `name` because we only want `value` to be set once.
  "value": name(),
  "on:input"() {
    setName(field.value);
  },
});

document.body.append(element, field);
```

I encourage you to try out this example in a real browser if you can.

## Wait, did we make a JSX library?

My careful readers will notice that the signature of `createElement` matches the
one of `React.createElement` and almost every other JSX library (including
Willow). Let's test it out by creating an empty TypeScript project and using our
`createElement` function as the JSX factory function.

Just plug this into a `tsconfig.json`,

```json
{
  "compilerOptions": {
    "allowJs": true,
    "jsx": "react",
    "jsxFactory": "createElement",
    "rootDir": "src",
    "outDir": "dist"
  }
}
```

this into `package.json`,

```json
{
  "dependencies": {
    "typescript": "latest"
  }
}
```

and create a minimal `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <script defer src="./dist/library.js"></script>
  <script defer src="./dist/index.js"></script>
</html>
```

Then paste the minified code into `src/library.js` and this into
`src/index.jsx`:

```tsx
// We changed `name` to `myName` because TypeScript complains about re-declaring
// a block-scope `name` variable.

const [myName, setName] = createSignal("Zachary");

const element = (
  <h1
    style={createMemo(() => {
      if (myName().startsWith("R")) {
        return "color: red";
      } else if (myName().startsWith("B")) {
        return "color: blue";
      } else {
        return "";
      }
    })}
  >
    {myName}
  </h1>
);

const field = <input value={myName()} on:input={() => setName(field.value)} />;

document.body.append(element, field);
```

Compile the JSX code by running `npx tsc -b`. Then run `npm serve` to start a
local server and open the URL that it gives you to view your compiled code.

Congratulations! You now know how to build a web framework! Of course, there are
a few features we're missing, but the core elements are there. Try experimenting
around with other JSX code. Maybe you could add TypeScript support to it, or
perhaps you want to pass an object to the `style` prop. We can play around with
this and fine-tune it for hours, but that's what mainstream frameworks are for.

---

You now know how we at the zSnout team designed and built Willow. We basically
followed this exact process but with more features. Hopefully you learned
something from today's article, and I hope to see you next time on the zSnout
blog.
