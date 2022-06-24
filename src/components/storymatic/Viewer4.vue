<script lang="ts" setup>
  import { useDebounceFn } from "@vueuse/core";
  import { compile, transpile } from "storymatic";
  import { toRef, watch } from "vue";
  import Console, { useCompleteConsole } from "../Console.vue";

  const props = defineProps<{ code: string }>();

  const { console, field, messages, onKey, onSelect, onSubmit, placeholder } =
    useCompleteConsole();

  function start() {
    console.clear();
    placeholder.value = "";
    Object.assign(window, console);
    Object.assign(window, {
      print: console.log,
      jsx(
        tag:
          | string
          | ((props: Record<string, any>) => Node)
          | (new (props: Record<string, any>) => Node),
        attrs?: Record<string, any> | null,
        ...children: any[]
      ) {
        if (typeof tag === "string") {
          let el = document.createElement(tag);

          for (let attr in attrs) {
            if (attr === "style") {
              for (let prop in attrs.style) {
                (el.style as any)[prop] = attrs.style[prop];
              }
            } else if (attr.startsWith("data")) {
              el.dataset[attr.slice(4)] = attrs[attr];
            } else if (attr.startsWith("on")) {
              el.addEventListener(
                attr.slice(2, 3).toUpperCase() + attr.slice(3),
                attrs[attr]
              );
            } else {
              (el as any)[attr] = attrs[attr];
            }
          }

          for (let child of children.flat(Infinity)) {
            if (child instanceof Node || typeof child === "string") {
              el.append(child);
            } else {
              el.append("" + child);
            }
          }

          return el;
        }

        try {
          // @ts-ignore
          return new tag(children.length ? { ...attrs, children } : attrs);
        } catch {
          // @ts-ignore
          return tag(children.length ? { ...attrs, children } : attrs);
        }
      },
    });

    new Function(
      transpile(compile(props.code), {
        jsx: "jsx",
        target: 99,
      })
    )();
  }

  start();
  watch(toRef(props, "code"), useDebounceFn(start, 1000));
</script>

<template>
  <Console
    v-model:field="field"
    v-model:messages="messages"
    :placeholder="placeholder"
    @key="onKey"
    @select="onSelect"
    @submit="onSubmit"
  />
</template>
