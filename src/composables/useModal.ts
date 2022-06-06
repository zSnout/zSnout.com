import { MaybeRef } from "@vueuse/core";
import {
  h,
  reactive,
  ref,
  render,
  unref,
  VNode,
  WritableComputedRef,
} from "vue";
import ButtonVue from "../components/Button.vue";
import ModalVue from "../components/Modal.vue";

export interface ModalAction<
  ActionId extends string = string,
  FieldId extends string = string
> {
  id: ActionId;
  title: string;
  description?: string;
  isCancelAction?: boolean;

  action?(
    id: string,
    result: ModalResult<ActionId, FieldId>
  ): boolean | void | Promise<boolean | void>;

  secondaryAction?(
    id: string,
    result: ModalResult<ActionId, FieldId>
  ): boolean | void | Promise<boolean | void>;
}

export interface ModalField<Id extends string = string>
  extends WritableComputedRef<string> {
  id: Id;
  placeholder?: string;
  autocomplete?: string;
}

export interface ModalResult<
  ActionId extends string = string,
  FieldId extends string = string
> {
  action: ActionId;
  fields: Record<FieldId, string>;
}

export interface Modal {
  open(): void;
  close(): void;
  cancel(): void;
  actions: ModalAction[];
}

export function useRawModal(
  content?: MaybeRef<string | VNode | undefined>,
  actions: ModalAction[] = []
): Modal {
  actions = reactive(actions);

  const open = ref(false);
  const el = h(
    ModalVue,
    { open: open as any },
    {
      default() {
        return unref(content);
      },
      buttons() {
        return actions.map((action) =>
          h(
            ButtonVue,
            {
              cancel: action.isCancelAction,
              onClick: () =>
                action.action?.(action.id, { action: action.id, fields: {} }),
              onContextMenu: () =>
                action.secondaryAction?.(action.id, {
                  action: action.id,
                  fields: {},
                }),
              title: action.description,
            },
            { default: () => action.title }
          )
        );
      },
    }
  );

  const modal: Modal = {
    open() {
      open.value = true;
    },
    close() {
      open.value = false;
    },
    cancel() {
      const action = actions.find((el) => el.isCancelAction);
      action?.action?.(action.id, { action: action.id, fields: {} });
    },
    actions,
  };

  render(el, document.body);

  return modal;
}
