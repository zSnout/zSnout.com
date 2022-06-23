<script lang="ts">
  export interface Console extends globalThis.Console {
    bindKey(key: string, callback: () => void): void;
    focus(): void;
    key(key: string): Promise<void>;
    line(): void;

    select(
      label: string | undefined,
      options: Record<string, string>
    ): Promise<string>;

    prompt(placeholder: string | undefined, required: true): Promise<string>;
    prompt(
      placeholder?: string,
      required?: boolean
    ): Promise<string | undefined>;

    user(message?: any, ...optionalParams: any[]): void;
  }

  export interface CompleteConsole {
    console: Console;
    messages: Message[];
    field: Ref<string>;
    onKey(key: string, prevent: () => void): void;
    onSelect(id: number, item: string): void;
    onSubmit(field: string | undefined): void;
    placeholder: Ref<string | undefined>;
  }

  /** The number of inputs currently being used. */
  let inputting = 0;

  export function useCompleteConsole(): CompleteConsole {
    const console: Console = {
      ...globalThis.console,
      bindKey(key, callback) {
        console.focus();

        onKey.push((_key, prevent) => {
          if (inputting) return true;

          if (key === _key) {
            prevent();
            callback();
          }

          return true;
        });
      },
      clear() {
        messages.splice(0, messages.length);
      },
      error(message, ...optionalParams) {
        messages.push({
          type: "error",
          id: Math.random(),
          content: optionalParams.length
            ? [message, ...optionalParams]
            : message,
        });
      },
      focus() {
        (messages as any).focus?.();
      },
      key(key) {
        return new Promise((resolve) => {
          console.focus();

          onKey.push((_key, prevent) => {
            if (inputting) return true;

            if (key === _key) {
              prevent();
              resolve();
              return;
            }

            return true;
          });
        });
      },
      line() {
        messages.push({
          type: "line",
          id: Math.random(),
        });
      },
      log(message, ...optionalParams) {
        messages.push({
          type: "log",
          id: Math.random(),
          content: optionalParams.length
            ? [message, ...optionalParams]
            : message,
        });
      },
      prompt(_placeholder, required): any {
        placeholder.value = _placeholder;
        console.focus();

        return new Promise<string | undefined>((resolve) => {
          if (required) {
            onSubmit.push((value) => {
              if (value) {
                placeholder.value = "";
                resolve(value);
              } else return true;
            });
          } else
            onSubmit.push((value) => {
              placeholder.value = "";
              resolve(value);
            });
        });
      },
      select(label, options) {
        const id = Math.random();

        messages.push({
          id,
          label,
          options,
          type: "select",
        });

        setTimeout(console.focus);

        return new Promise((resolve) => {
          onSelect[id] = resolve;
        });
      },
      user(message, ...optionalParams) {
        messages.push({
          type: "user",
          id: Math.random(),
          content: optionalParams.length
            ? [message, ...optionalParams]
            : message,
        });
      },
      warn(message, ...optionalParams) {
        messages.push({
          type: "warn",
          id: Math.random(),
          content: optionalParams.length
            ? [message, ...optionalParams]
            : message,
        });
      },
    };

    const messages: Message[] = reactive([]);
    const placeholder = ref<string | undefined>("");
    const field = ref("");

    const onSelect: Record<string, (value: string) => void> =
      Object.create(null);

    const onSubmit: ((value: string | undefined) => true | void)[] = [];

    const onKey: ((key: string, prevent: () => void) => true | void)[] = [];

    return {
      console,
      field,
      messages,
      placeholder,
      onKey(key, prevent) {
        onKey.splice(
          0,
          onKey.length,
          ...onKey.filter((resolve) => resolve(key, prevent))
        );
      },
      onSelect(id, item) {
        onSelect[id]?.(item);
        delete onSelect[id];
      },
      onSubmit(field) {
        onSubmit.splice(
          0,
          onSubmit.length,
          ...onSubmit.filter((resolve) => resolve(field))
        );
      },
    };
  }
</script>

<script lang="ts" setup>
  import { MaybeElement, unrefElement } from "@vueuse/core";
  import { reactive, ref, Ref } from "vue";
  import Button from "./Button.vue";
  import Dropdown from "./Dropdown.vue";
  import Field from "./Field.vue";
  import HStack from "./HStack.vue";
  import MaybeLabeled from "./MaybeLabeled.vue";
  import Node from "./Node.vue";
  import VStack from "./VStack.vue";

  export interface TextMessage {
    type: "log" | "warn" | "error" | "user";
    id: number;
    content: any;
  }

  export interface LineMessage {
    type: "line";
    id: number;
  }

  export interface SelectMessage {
    type: "select";
    id: number;
    options: Record<string, string>;
    selected?: string;
    label?: string;
  }

  export type Message = TextMessage | LineMessage | SelectMessage;

  const props = defineProps<{
    field: string;
    messages: Message[];
    placeholder?: string;
    stretch?: boolean;
  }>();

  const emit = defineEmits<{
    (event: "key", key: string, prevent: () => void): void;
    (event: "select", id: number, item: string): void;
    (event: "submit", field: string | undefined): void;
    (event: "update:field", value: string): void;
    (event: "update:messages", value: Message[]): void;
  }>();

  function onSubmit() {
    if (props.field) {
      const message: Message = {
        type: "user",
        id: Math.random(),
        content: props.field,
      };

      emit("update:messages", props.messages.concat(message));
    }

    emit("update:field", "");
    emit("submit", props.field ? props.field : undefined);
  }

  function onSubmitButton(event: Event) {
    let prevented = false;
    emit("key", "Enter", () => (prevented = true));

    if (prevented) {
      event.preventDefault();
    } else {
      onSubmit();
    }
  }

  const consoleEl = ref<MaybeElement>();
  (props.messages as any).focus = () => {
    unrefElement(consoleEl)
      ?.querySelector<HTMLElement>("select:not([disabled]), input")
      ?.focus();
  };

  // Workaround because Vue has some weird errors if you use `$props.messages`
  // or `messages` instead of passing a seperate reactive object here.
  const msgs = props.messages;

  const isNode = (x: any): x is globalThis.Node => x instanceof globalThis.Node;
</script>

<template>
  <VStack ref="consoleEl" :class="{ stretch }" class="console">
    <template v-for="item in msgs" :key="item.id">
      <MaybeLabeled
        v-if="item.type === 'select'"
        class="log"
        :label="item.label"
        style="margin-bottom: 0.25em"
      >
        <Dropdown
          class="select"
          :disabled="!!item.selected"
          :model-value="item.selected || ''"
          @update:model-value="
            $event &&
              (item.selected = $event) &&
              $emit('select', item.id, $event)
          "
        >
          <option disabled value="">Choose an option...</option>

          <option v-for="(option, key) in item.options" :key="key" :value="key">
            {{ option }}
          </option>
        </Dropdown>
      </MaybeLabeled>

      <hr v-else-if="item.type === 'line'" class="log" />

      <p v-else-if="Array.isArray(item.content)" class="log">
        {{ item.content.join(" ") }}
      </p>

      <p v-else-if="isNode(item.content)" class="log">
        <Node :node="item.content" />
      </p>

      <p v-else :class="item.type" class="log">
        {{ item.content }}
      </p>
    </template>

    <form class="form" style="margin-top: auto" @submit.prevent="onSubmit">
      <HStack :space="0.75">
        <Field
          ref="fieldEl"
          class="field"
          :model-value="field ? field : ''"
          :placeholder="placeholder"
          @keydown="$emit('key', $event.key, () => $event.preventDefault())"
          @update:model-value="$emit('update:field', $event)"
        />

        <Button @click="onSubmitButton">✔</Button>
      </HStack>
    </form>
  </VStack>
</template>

<style lang="scss" scoped>
  .console {
    overflow: auto;

    &.stretch {
      height: 100%;
    }
  }

  .form {
    position: sticky;
    bottom: 0;
  }

  .log {
    padding: 0 0.75rem;

    > :deep(*) {
      margin: 0;
    }
  }

  hr.log,
  label.log,
  select.log {
    padding-right: 0;
  }

  hr.log.log {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    border-width: 0;
    border-bottom-width: 1px;
  }

  .field,
  .log {
    text-align: left;
  }

  .user {
    font-style: italic;
  }
</style>
