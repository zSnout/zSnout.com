---
author: Zachary Sakowitz
category: code
date: 2022-11-13
---

About 3 months ago, I published an article titled
[Let's Make A Web Framework](/blog/lets-make-a-web-framework). While it was a
fun article to write, I've been working on another reactive system that I think
is better, and I want to share it with you. Let's dive in!

## The reactive primitives

The system described in the article above had two reactive primitives: effects
and signals. However, I noticed that signals store values, which doesn't really
make them actual primitives, as the value behavior could be implemented from a
smaller construct. Instead, this article will use events instead of signals.
While they have the same name as DOM events, our events will have a different,
simpler API.

When an event is created, it will return a `track` function and a `trigger`
function. When the `track` function is called from inside an effect, the effect
will be added to the event's subscriber list. When the `trigger` function is
called, any effects that have called `track` will be re-run.

Hopefully that isn't too complicated to follow. Just in case, I'll provide a
quick code example of what we want to do in the end.

```js
const [track, trigger] = event()

effect(() => {
  // This should be run whenever `trigger` is called.

  track()
  console.log("first effect")
})

effect(() => {
  // But this effect will only be run once, because
  // it didn't subscribe using `track`.

  console.log("second effect")
})

trigger()
```

These seem pretty easy to implement. First, we'll create the `effect` function.
We'll store the currently running effect, if any, in `currentEffect`.

```js
let currentEffect

function effect(fn) {
  currentEffect = fn
  fn()
  currentEffect = undefined
}
```

This looks good, but there's a small issue. If an effect is running inside of
another, `currentEffect` will be cleared instead of preserving the parent
effect. This is a pretty simple fix; we'll just store the parent effect in a
variable.

```js
let currentEffect

function effect(fn) {
  const parentEffect = currentEffect
  currentEffect = fn
  fn()
  currentEffect = parentEffect
}
```

Looks like `effect` is done. Let's move on to `event` now. We'll store the list
of subscribers in a Set called `tracking`. By using a Set instead of an array,
we won't have to check for duplicate effects, which would be bad. We'll also
return a tuple where the first element is `track` and the second is `trigger`.
This lets a developer rename the elements to whatever they want using
destructuring.

```js
function event() {
  const tracking = new Set()

  return [
    () => {
      if (currentEffect) {
        tracking.add(currentEffect)
      }
    },
    () => {
      tracking.forEach((effect) => effect())
    },
  ]
}
```

And we're done! We can't track values or derived stores, but the core of the
library is complete.

## Values and memos

Well, complete is a bit of an overstatement. We should _really_ implement value
trackers and derived stores ourselves and not force developers to do all the
work. We'll call reactive values signals. They should be easy to implement, as
we can just use `track` and `trigger` for getters and setters, respectively.
We'll return a tuple of two elements: a function that gets the current value
(and tracks the current effect), and a function that sets the current values
(and trigger any tracked effects).

```js
function signal(value) {
  const [track, trigger] = event()

  return [
    () => {
      track()
      return value
    },
    (newValue) => {
      value = newValue
      trigger()
    },
  ]
}
```

Here's an example of using signals:

```js
const [age, setAge] = signal(14)

effect(() => {
  console.log("current age:", age())
})

setAge(13)
setAge(17)
```

It almost feels too easy! I used to wonder about how libraries like React and
Vue were able to implement reactivity in a library less than a single megabyte,
but now I wonder about how it took them that much space when our libraries are
so much smaller. Of course, we haven't implemented memos (derived stores) yet,
and I'm sure those will be very complicated...

```js
const [age, setAge] = signal(14)
const doubled = () => 2 * age()
```

Nope. Because we just used plain functions, we can just make a wrapper function.
There is one small worry: if `doubled` is called in a parent effect, it may end
up being re-run when another signal changes, like in this example:

```js
const [age, setAge] = signal(14)
const doubled = () => 2 * age()

const [name, setName] = signal("zSnout")

effect(() => {
  console.log(name(), "is", doubled())
})

setAge(37)
setName("Zachary")
```

Whoops! `doubled` is getting called even though it only needs to track `age`. Of
course, there's an easy solution to this. We'll create a helper function called
`memo` that creates an effect around `doubled` and only updates if direct
dependencies of `doubled` change.

```js
function memo(compute) {
  const [get, set] = signal()

  effect(() => set(compute()))

  return get
}
```

That code block is so small it feels like cheating, but it really works! Our
primitives are so good that our helpers barely have to do any work.

Let's get on to the dreaded measurement of our JavaScript package: how big is
it, minified? We want to be able to serve a tiny bundle to our users, so let's
find out. First, I'll copy and paste our full code here and `export` all of our
functions.

```js
let currentEffect

export function effect(fn) {
  const parentEffect = currentEffect
  currentEffect = fn
  fn()
  currentEffect = parentEffect
}

export function event() {
  const tracking = new Set()

  return [
    () => {
      if (currentEffect) {
        tracking.add(currentEffect)
      }
    },
    () => {
      tracking.forEach((effect) => effect())
    },
  ]
}

export function signal(value) {
  const [track, trigger] = event()

  return [
    () => {
      track()
      return value
    },
    (newValue) => {
      value = newValue
      trigger()
    },
  ]
}

export function memo(compute) {
  const [get, set] = signal()

  effect(() => set(compute()))

  return get
}
```

Now let's plug it into esbuild and watch magic happen:

<!-- prettier-ignore -->
```js
var n;function o(t){let e=n;n=t,t(),n=e}function f(){let t=new Set;return[()=>
{n&&t.add(n)},()=>{t.forEach(e=>e())}]}function i(t){let[e,r]=f();return[()=>(e
(),t),c=>{t=c,r()}]}function u(t){let[e,r]=i();return o(()=>r(t())),e}export{o 
as effect,f as event,u as memo,i as signal};
```

It's literally 281 characters. That's not the 2kb of a tiny library, _that's the
0.2kb of a miniscule library!_

## Making a render function

Our first DOM utility will be a `render` function. `render` will be able to
render numbers, strings, booleans, signals to those values, and arrays of those
values. Our `render` function will take an item to be rendered and a parent node
to put the item inside. We'll also skip over `null` and `undefined` values, as
this will help us with conditional rendering in the future. To check `null` and
`undefined` at once, we'll do a loose comparison using `==`.

```js
function render(item, parent) {
  if (item == null) {
    return
  } else if (typeof item == "function") {
    // TODO
  } else if (Array.isArray(item)) {
    item.forEach((element) => render(element, parent))
  } else if (item instanceof Node) {
    parent.append(item)
  } else {
    parent.append(document.createTextNode(String(item)))
  }
}
```

You might ask, why do we use `String(item)` to convert to a string instead of
`"" + item`? Well, converting to a string "explicitly" stops rendering from
breaking if the user passes a symbol. This is because implicitly converting a
symbol to a string throws an error.

Now, you might be asking why the case for a function was marked with `TODO`,
even though it would be really easy just to write `render(item(), parent)`.
Well, the function might be a signal or memo, and we need to reactively observe
the function.

Before we can do that, we're going to make a new function called `fragment`.
`fragment` will allow us to insert DOM nodes into a container without needing a
parent element. How will we do that? First, we'll make a comment node. This is
hidden in the HTML, but we can use it as an anchor to place our elements next
to.

```js
function fragment(parent) {
  const comment = document.createComment(" Fragment ")
  parent.append(comment)
}
```

That's great, but how do we actually insert elements, taking into account that
they might be arbitrary renderables, such as arrays or functions? Well, we can
do a small hack. First, let's set up `fragment` so that it returns a function
which adds renderable items after the comment node.

```js
function fragment(parent) {
  const comment = document.createComment(" Fragment ")
  parent.append(comment)

  return (...items) => {
    // TODO
  }
}
```

Now let's look back at our `render` function. Do you notice how the only DOM
method we call is `.append`? Well, we're going to make `fragment` send `render`
an object that only has a `.append` method and nothing else, and we'll make it
so that `.append` _actually_ places nodes after the comment.

```js
function fragment(parent) {
  const comment = document.createComment(" Fragment ")
  parent.append(comment)

  return (...items) => {
    render(items, {
      append(node) {
        comment.after(node)
      },
    })
  }
}
```

Now we can use this inside of `render`!

```js
function render(item, parent) {
  if (item == null) {
    return
  } else if (typeof item == "function") {
    const replaceNodes = fragment(parent)

    effect(() => {
      replaceNodes(item())
    })
  } else if (Array.isArray(item)) {
    item.forEach((element) => render(element, parent))
  } else if (item instanceof Node) {
    parent.append(item)
  } else {
    parent.append(document.createTextNode(String(item)))
  }
}
```

Except ... there's a bug. `fragment` doesn't clear its old items when we call
`replaceNodes`, so we'll just end up with duplicates. However, there's a simple
solution to this. We'll force `fragment` to keep track of anything passed to its
`append` function and have it remove those nodes whenever `replaceNodes` is
called. We'll also set its length to `0` before every render, which will clear
the array.

```js
function fragment(parent) {
  const comment = document.createComment(" Fragment ")
  parent.append(comment)

  let appendedNodes = []

  return (...items) => {
    appendedNodes.forEach((node) => {
      node.remove()
    })

    appendedNodes.length = 0

    render(items, {
      append(node) {
        appendedNodes.push(node)
        comment.after(node)
      },
    })
  }
}
```

Cool! Now let's create a utility that sets reactive attributes or properties on
an element. We'll decide whether we should set an attribute or property by
checking if a given property exists on the element in question. If it does,
we'll set it. Otherwise, we'll use a plain attribute.

```js
function attr(element, key, value) {
  if (key in element) {
    if (typeof value == "function") {
      effect(() => {
        element[key] = value()
      })
    } else {
      element[key] = value
    }
  } else {
    if (typeof value == "function") {
      effect(() => {
        element.setAttribute(key, value())
      })
    } else {
      element.setAttribute(key, value)
    }
  }
}
```

Now let's put all the puzzle pieces together and create a function that
constructs a DOM element. These are traditionally called `h`, which stands for
hyperscript.

```js
function h(tag, props, ...children) {
  const element = document.createElement(tag)

  for (const key in props) {
    attr(element, key, props[key])
  }

  render(children, element)

  return element
}
```

Notice how our `h` function has the standard signature of `React.createElement`.
This means it is compatible with almost all JSX transforms, so we can use
TypeScript or Babel to compile from JSX into our `h` function.

Before we finish with the core framework, let's make one more function. You may
notice that the way we handle signals in a slow way: we create a new `Text` node
every time they change. To fix this, we'll add a helper function called `text`
that creates a text node and updates it with the result of a signal.

```js
function text(value) {
  const node = document.createTextNode("")

  if (typeof value == "function") {
    effect(() => {
      node.data = value()
    })
  } else {
    node.data = value
  }

  return node
}
```

Because our `render` and `h` functions accept `Node`s as children, we can call
`text` and opt in to a small optimization for our rendering pipeline.

Okay, it's time to put everything together. Let's `export` all our functions and
minify everything. First, I'll put all of our code here.

```js
let currentEffect

export function effect(fn) {
  const parentEffect = currentEffect
  currentEffect = fn
  fn()
  currentEffect = parentEffect
}

export function event() {
  const tracking = new Set()

  return [
    () => {
      if (currentEffect) {
        tracking.add(currentEffect)
      }
    },
    () => {
      tracking.forEach((effect) => effect())
    },
  ]
}

export function signal(value) {
  const [track, trigger] = event()

  return [
    () => {
      track()
      return value
    },
    (newValue) => {
      value = newValue
      trigger()
    },
  ]
}

export function memo(compute) {
  const [get, set] = signal()

  effect(() => set(compute()))

  return get
}

export function render(item, parent) {
  if (item == null) {
    return
  } else if (typeof item == "function") {
    const replaceNodes = fragment(parent)

    effect(() => {
      replaceNodes(item())
    })
  } else if (Array.isArray(item)) {
    item.forEach((element) => render(element, parent))
  } else if (item instanceof Node) {
    parent.append(item)
  } else {
    parent.append(document.createTextNode(String(item)))
  }
}

export function fragment(parent) {
  const comment = document.createComment(" Fragment ")
  parent.append(comment)

  let appendedNodes = []

  return (...items) => {
    appendedNodes.forEach((node) => {
      node.remove()
    })

    appendedNodes.length = 0

    render(items, {
      append(node) {
        appendedNodes.push(node)
        comment.after(node)
      },
    })
  }
}

export function attr(element, key, value) {
  if (key in element) {
    if (typeof value == "function") {
      effect(() => {
        element[key] = value()
      })
    } else {
      element[key] = value
    }
  } else {
    if (typeof value == "function") {
      effect(() => {
        element.setAttribute(key, value())
      })
    } else {
      element.setAttribute(key, value)
    }
  }
}

export function h(tag, attributes, ...children) {
  const element = document.createElement(tag)

  for (const key in attributes) {
    attr(element, key, attributes[key])
  }

  render(children, element)

  return element
}

export function text(value) {
  const node = document.createTextNode("")

  if (typeof value == "function") {
    effect(() => {
      node.data = value()
    })
  } else {
    node.data = value
  }

  return node
}
```

Time to minify! Let's check it out...

<!-- prettier-ignore -->
```js
var c;function f(t){let e=c;c=t,t(),c=e}function i(){let t=new Set;return[()=>
{c&&t.add(c)},()=>{t.forEach(e=>e())}]}function p(t){let[e,n]=i();return[()=>(e
(),t),o=>{t=o,n()}]}function a(t){let[e,n]=p();return f(()=>n(t())),e}function s
(t,e){if(t!=null)if(typeof t=="function"){let n=u(e);f(()=>{n(t())})}else Array.
isArray(t)?t.forEach(n=>s(n,e)):t instanceof Node?e.append(t):e.append(document.
createTextNode(String(t)))}function u(t){let e=document.createComment(
" Fragment ");t.append(e);let n=[];return(...o)=>{n.forEach(r=>{r.remove()}),n.
length=0,s(o,{append(r){n.push(r),e.after(r)}})}}function d(t,e,n){e in t?
typeof n=="function"?f(()=>{t[e]=n()}):t[e]=n:typeof n=="function"?f(()=>{t.
setAttribute(e,n())}):t.setAttribute(e,n)}function x(t,e,...n){let o=document.
createElement(t);for(let r in e)d(o,r,e[r]);return s(n,o),o}function g(t){let 
e=document.createTextNode("");return typeof t=="function"?f(()=>{e.data=t()}):e.
data=t,e}export{d as attr,f as effect,i as event,u as fragment,x as h,a as memo,
s as render,p as signal,g as text};
```

It's just over a kilobyte, at 1047 bytes. And we've got a fully functioning
fine-grained reactivity library that has complete DOM support! It makes you
wonder how the React team gets along with 100kb projects.

## Bonus features

Now that the core framework is done, let's add some _bonus features_. First of
all, we should be able to organize our code into components. A component will
basically be a function that takes props. We could call them manually, but we
want them to be compatible with a JSX transform, so let's add support for them
into `h`.

First, I'll model an example component.

```js
function FancyButton({ children }) {
  return h("button", {
    style:
      "border: 1px solid black; background-color: white; font-size: inherit",
    children,
  })
}

const myButton = h(FancyButton, null, "some content")
```

First, let's allow users to pass a `children` prop to `h`. That's easy: we just
need to check if `children` exists in our attributes list.

```js
function h(tag, props, ...children) {
  const element = document.createElement(tag)

  if ("children" in props) {
    children = props.children
  }

  for (const key in props) {
    attr(element, key, props[key])
  }

  render(children, element)

  return element
}
```

The second task is slightly more difficult. Components have different signatures
for the `children` prop, as it might be `undefined`, a single item, or an array
of items.

```js
function MyComponent({ children }) {}

// When no children are passed, `MyComponent` should receive `undefined`.
h(MyComponent, null)

// If one child is passed, `MyComponent` should get that item (not an array).
h(MyComponent, null, "zSnout")

// If multiple are passed, `MyComponent` should receive an array of children.
h(MyComponent, null, "Content #1", "Content #2")
```

However, we can just check the length of the `children` parameter. We'll also
assume that, if it is passed, the `children` prop already has the correct type.
Note that we also have to reverse this process when creating DOM nodes. We'll
also add a safety check to make sure `props` is an object, as if it was a
primitive, a lot of things would break.

```js
function h(tag, props, ...children) {
  props ??= {}

  if (typeof tag == "function") {
    if ("children" in props) {
      children = props.children
    } else if (children.length == 0) {
      children = undefined
    } else if (children.length == 1) {
      children = children[0]
    }

    return tag({ ...props, children })
  } else {
    const element = document.createElement(tag)

    if ("children" in props) {
      // This section reverses the effect of changing `props.children`.

      if (props.children == null) {
        children = []
      } else if (!Array.isArray(props.children)) {
        children = [props.children]
      } else {
        children = props.children
      }
    }

    for (const key in props) {
      attr(element, key, props[key])
    }

    render(children, element)

    return element
  }
}
```

Our function is certainly much heftier now, but it can render components
properly, so that's a plus. However, we're still missing many things, including
event handling, CSS styles, and class toggling. Let's add a few of those.

For event handling, we'll use props that start with `on:`; for CSS properties,
we'll use `style:`; and for classes, we'll use `class:`. We'll also add a
special `use` prop that calls a function with the created node. Since all of
these should work whether we're creating a component or a DOM element, let's
start by extracting the element returned from our `if-else` statement. We'll
also stop passing props with a `:` in them to created DOM nodes.

```js
function h(tag, props, ...children) {
  props ??= {}

  let element

  if (typeof tag == "function") {
    if ("children" in props) {
      children = props.children
    } else if (children.length == 0) {
      children = undefined
    } else if (children.length == 1) {
      children = children[0]
    }

    element = tag({ ...props, children })
  } else {
    element = document.createElement(tag)

    if ("children" in props) {
      if (props.children == null) {
        children = []
      } else if (!Array.isArray(props.children)) {
        children = [props.children]
      } else {
        children = props.children
      }
    }

    for (const key in props) {
      if (!(key.includes(":") || key == "use")) {
        attr(element, key, props[key])
      }
    }

    render(children, element)
  }

  return element
}
```

Perfect. Now we'll just add special handling for the props we listed above.

```js
function h(tag, props, ...children) {
  props ??= {}

  let element

  if (typeof tag == "function") {
    if ("children" in props) {
      children = props.children
    } else if (children.length == 0) {
      children = undefined
    } else if (children.length == 1) {
      children = children[0]
    }

    element = tag({ ...props, children })
  } else {
    element = document.createElement(tag)

    if ("children" in props) {
      if (props.children == null) {
        children = []
      } else if (!Array.isArray(props.children)) {
        children = [props.children]
      } else {
        children = props.children
      }
    }

    for (const key in props) {
      if (!(key.includes(":") || key == "use")) {
        attr(element, key, props[key])
      }
    }

    render(children, element)
  }

  for (const key in props) {
    if (key == "use") {
      props[key](element)
    } else if (key.startsWith("class:")) {
      const value = props[key]

      if (typeof value == "function") {
        effect(() => {
          element.classList.toggle(key.slice(6), !!value())
        })
      } else {
        element.classList.toggle(key.slice(6), !!value)
      }
    } else if (key.startsWith("on:")) {
      element.addEventListener(key.slice(3), props[key])
    } else if (key.startsWith("style:")) {
      const value = props[key]

      if (typeof value == "function") {
        effect(() => {
          element.style[key.slice(6)] = value()
        })
      } else {
        element.style[key.slice(6)] = value
      }
    }
  }

  return element
}
```

Great! It's time to minify everything, so let's pop our new `h` function into
esbuild and get the _1.6 kilobyte_ result.

<!-- prettier-ignore -->
```js
var s;function o(t){let e=s;s=t,t(),s=e}function l(){let t=new Set;return[()=>
{s&&t.add(s)},()=>{t.forEach(e=>e())}]}function u(t){let[e,n]=l();return[()=>(e
(),t),i=>{t=i,n()}]}function g(t){let[e,n]=u();return o(()=>n(t())),e}function r
(t,e){if(t!=null)if(typeof t=="function"){let n=a(e);o(()=>{n(t())})}else Array.
isArray(t)?t.forEach(n=>r(n,e)):t instanceof Node?e.append(t):e.append(document.
createTextNode(String(t)))}function a(t){let e=document.createComment(
" Fragment ");t.append(e);let n=[];return(...i)=>{n.forEach(f=>{f.remove()}),n.
length=0,r(i,{append(f){n.push(f),e.after(f)}})}}function d(t,e,n){e in t?
typeof n=="function"?o(()=>{t[e]=n()}):t[e]=n:typeof n=="function"?o(()=>{t.
setAttribute(e,n())}):t.setAttribute(e,n)}function x(t,e,...n){e??={};let i;if
(typeof t=="function")"children"in e?n=e.children:n.length==0?n=void 0:n.
length==1&&(n=n[0]),i=t({...e,children:n});else{i=document.createElement(t),
"children"in e&&(e.children==null?n=[]:Array.isArray(e.children)?n=e.children:n=
[e.children]);for(let f in e)f.includes(":")||f=="use"||d(i,f,e[f]);r(n,i)}for
(let f in e)if(f=="use")e[f](i);else if(f.startsWith("class:")){let c=e[f];
typeof c=="function"?o(()=>{i.classList.toggle(f.slice(6),!!c())}):i.classList.
toggle(f.slice(6),!!c)}else if(f.startsWith("on:"))i.addEventListener(f.slice
(3),e[f]);else if(f.startsWith("style:")){let c=e[f];typeof c=="function"?o(()=>
{i.style[f.slice(6)]=c()}):i.style[f.slice(6)]=c}return i}function y(t){let 
e=document.createTextNode("");return typeof t=="function"?o(()=>{e.data=t()}):e.
data=t,e}export{d as attr,o as effect,l as event,a as fragment,x as h,g as memo,
r as render,u as signal,y as text};
```

Done! We now have a complete web framework. It's also a much faster framework
than something like React or Vue.

## Measuring performance

What? How can our tiny library be faster than the longest-living, most used, and
largest web frameworks of all time? Well, React and Vue operate using something
called the virtual DOM. Basically, if some state, such as a prop, hook, ref, or
store, React and Vue will re-run all of your components. You might think that
re-creating all of those DOM elements is an expensive operation, and it is.

However, React and Vue have an optimization here and create a virtual
representation of the DOM, which is also known as a virtual DOM. Then, these
frameworks will look for any differences between the current virtual DOM and the
previous one, and apply these changes. Don't get me wrong: this is much faster
than setting `document.body.innerHTML` or re-creating all the DOM elements. But
instead of checking which part needs to be changed, why don't we just have the
developer tell you?

Well, that's what our framework does. We use signals and memos that update
things that depend on their values, not every effect in existence. And by
encapsulating anything that updates the DOM in an effect, we effectively only
update parts of the DOM that need updating, just without an expensive virtual
DOM.

This type of a system is called _fine-grained reactivity_, which is a concise
way of saying that we only update things that need to be updated, instead of
updating the entire DOM. It's a very efficient system and the benchmarks prove
it.

## Conclusion

Hopefully you learned something new about JavaScript frameworks today. You can
even take this knowledge into your next job interview, as your interviewer will
definitely be impressed if you write a JS framework from scratch in front of
their eyes. Just make sure to put your own spin on it, or they'll accuse you of
copying Solid or Willow!

For those of you who want to improve on our script, here are a few areas that
still need work on.

- **Efficient lists:** Currently, rendering lists takes a lot of work with our
  software, as we'd use a memo combined with `Array.map`, which would recreate
  each node every time we updated the underlying array. Can you come up with a
  better implementation that reuses existing nodes?

- **Conditional blocks:** So far, the best way to create conditional blocks
  would be to use the ternary operator. Can you create a component to abstract
  this? Think about Vue's `v-if` directive or Solid's `Show` component.

- **Keyed items:** Can you make a component that re-renders its content whenever
  a special `key` signal changes? This might be useful for the "Efficient lists"
  item.

- **Awaiting data:** Try to make a component that can render a pending,
  completed, or failed view based on the state of a Promise. Take inspiration
  from Svelte's {#await} block; it's a great implementation.

- **Template syntax:** If you're up for a challenge, try making a tool to
  convert Svelte or Vue syntax (or another template language) into our code,
  once you've finished the challenges above.

Thanks for reading this edition of Advanced JavaScript with zSnout! Stay tuned
for our next article, where we'll be exploring how to implement math, boolean
logic, strings, and function operations inside of TypeScript's type syntax,
without any runtime JavaScript.
