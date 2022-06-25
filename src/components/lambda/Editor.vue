<script lang="ts" setup>
  import ace from "ace-builds";
  import AceEditor from "../AceEditor.vue";

  defineProps<{
    modelValue?: string;
    readonly?: boolean;
    placeholder?: string;
    round?: boolean;
  }>();

  defineEmits<{
    (event: "update:modelValue", value: string): void;
    (event: "init", editor: ace.Ace.Editor): void;
    (event: "save", value: string): void;
  }>();

  ace.define("ace/mode/lambda_calculus", (require, exports) => {
    const oop = require("ace/lib/oop");
    const TextMode = require("ace/mode/text").Mode;
    const LambdaCalculusHighlightRules =
      require("ace/mode/lambda_calculus_highlight_rules").LambdaCalculusHighlightRules;

    const Mode = function (this: any) {
      this.HighlightRules = LambdaCalculusHighlightRules;
    };

    oop.inherits(Mode, TextMode);

    exports.Mode = Mode;
  });

  ace.define("ace/mode/lambda_calculus_highlight_rules", (require, exports) => {
    const oop = require("ace/lib/oop");
    const TextHighlightRules =
      require("ace/mode/text_highlight_rules").TextHighlightRules;

    const LambdaCalculusHighlightRules = function (this: any) {
      this.$rules = {
        start: [
          {
            defaultToken: "text",
          },
        ],
      };
    };

    oop.inherits(LambdaCalculusHighlightRules, TextHighlightRules);

    exports.LambdaCalculusHighlightRules = LambdaCalculusHighlightRules;
  });

  function onInit(ace: ace.Ace.Editor) {
    ace.on("change", (delta) => {
      if (delta.action === "insert") {
        ace.replaceAll("λ", {
          needle: /lambda|[ΛλᴧⲖⲗ𝚲𝛌𝛬𝜆𝜦𝝀𝝠𝝺𝞚𝞴\\]/g,
          caseSensitive: false,
        });
      }
    });
  }
</script>

<template>
  <AceEditor
    :modelValue="modelValue"
    :placeholder="placeholder ?? 'Write some lambdas...'"
    :readonly="readonly"
    :round="round"
    mode="lambda_calculus"
    @init="onInit($event) && $emit('init', $event)"
    @save="$emit('save', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
