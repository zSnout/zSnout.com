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

  ace.define(
    "ace/mode/storymatic",
    ["require", "exports"],
    function (require, exports) {
      const oop = require("ace/lib/oop");
      const TextMode = require("ace/mode/text").Mode;
      const StorymaticHighlightRules =
        require("ace/mode/storymatic_highlight_rules").SMHighlightRules;

      const Mode = function (this: any) {
        this.HighlightRules = StorymaticHighlightRules;
        this.lineCommentStart = "#";
      };

      oop.inherits(Mode, TextMode);
      exports.Mode = Mode;
    }
  );

  ace.define(
    "ace/mode/storymatic_highlight_rules",
    ["require", "exports"],
    function (require, exports) {
      const oop = require("ace/lib/oop");
      const { TextHighlightRules } = require("ace/mode/text_highlight_rules");
      const SMHighlightRules = function (this: any) {
        const dq = [
          { token: "constant.language.escape", regex: /\\./ },
          { token: "string", regex: /"/, next: "start" },
          { token: "paren", regex: /\|/, next: "start" },
          { token: "variable.storymatic", regex: /\$\w+/ },
        ];

        this.$rules = {
          "start": [
            { token: "invisible", regex: /[^\x00-\xff]+/ },
            { token: "comment.line", regex: /^\s*#.*$/ },
            {
              token: "storage.type.function",
              regex: /\b(?:function|func|def|const)\b/,
            },
            {
              token: "keyword",
              regex:
                /\b(?:if|elif|else|unless|while|until|repeat|break|continue|each|return|and|or|not|isnt|is|in|of|be)\b/,
            },
            { token: "constant.language", regex: /true|false|null/ },
            { token: "keyword.operator", regex: /[+\-*\/%>=<!]|[&|]{2}/ },
            { token: "paren", regex: /[(){}[\]]/ },
            { token: "entity.name.function", regex: /@\w+\b/ },
            { token: ["text", "property"], regex: /(\.\s*)(\$?\w+)/ },
            { token: ["property", "text"], regex: /(\$?\w+\s*)(:)/ },
            { token: "constant.numeric", regex: /\b\d+(?:\.\d+)?\b/ },
            { token: "variable.storymatic", regex: /\$\w+/ },
            {
              token: "constant.language",
              regex: /\b(?:null|true|false|yes|no|on|off|y|n)\b/,
            },
            { token: "string", regex: /"/, next: "string-dq" },
            { token: "paren", regex: /\|/, next: "string-dq" },
            { token: "text", regex: /[,;]/ },
            { token: "text", regex: /\s+/ },
            { defaultToken: "invalid" },
          ],
          "string-dq": [
            ...dq,
            { token: "markup.bold", regex: /[*]/, next: "string-dq-b" },
            { token: "markup.italic", regex: /_/, next: "string-dq-i" },
            { defaultToken: "string" },
          ],
          "string-dq-b": [
            ...dq,
            { token: "markup.bold", regex: /[*]/, next: "string-dq" },
            { token: "markup.bold.italic", regex: /_/, next: "string-dq-bi" },
            { defaultToken: "string.markup.bold" },
          ],
          "string-dq-i": [
            ...dq,
            { token: "markup.bold.italic", regex: /[*]/, next: "string-dq-bi" },
            { token: "markup.italic", regex: /_/, next: "string-dq" },
            { defaultToken: "string.markup.italic" },
          ],
          "string-dq-bi": [
            ...dq,
            { token: "markup.bold.italic", regex: /[*]/, next: "string-dq-i" },
            { token: "markup.bold.italic", regex: /_/, next: "string-dq-b" },
            { defaultToken: "string.markup.bold.italic" },
          ],
        };
      };

      oop.inherits(SMHighlightRules, TextHighlightRules);
      exports.SMHighlightRules = SMHighlightRules;
    }
  );
</script>

<template>
  <AceEditor
    :modelValue="modelValue"
    :placeholder="placeholder ?? 'Write a story...'"
    :readonly="readonly"
    :round="round"
    mode="storymatic"
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
