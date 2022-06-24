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

  ace.define("ace/mode/storymatic2", (require, exports) => {
    const oop = require("ace/lib/oop");
    const TextMode = require("ace/mode/text").Mode;
    const StorymaticHighlightRules =
      require("ace/mode/storymatic2_highlight_rules").StorymaticHighlightRules;

    const Mode = function (this: any) {
      this.HighlightRules = StorymaticHighlightRules;
      this.lineCommentStart = "#";
    };

    oop.inherits(Mode, TextMode);
    exports.Mode = Mode;
  });

  ace.define(
    "ace/mode/storymatic2_highlight_rules",
    function (require, exports) {
      const oop = require("ace/lib/oop");
      const TextHighlightRules =
        require("ace/mode/text_highlight_rules").TextHighlightRules;
      const StorymaticHighlightRules = function (this: any) {
        this.$rules = {
          start: [
            {
              token: [
                "keyword.other",
                "text",
                "variable.storymatic",
                "text",
                "entity.name.function",
                "comment.line.other",
              ],
              regex:
                /^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( +)((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| +))+)( *<--.+)$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.storymatic",
                "text",
                "entity.name.function",
              ],
              regex:
                /^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( +)((?:@[A-Za-z_][A-Za-z0-9_]*(?:$| +))+)$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.storymatic",
                "comment.line.other",
              ],
              regex: /^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)( *<--.+)$/,
            },
            {
              token: ["keyword.other", "text", "variable.storymatic"],
              regex: /^(#import)( +)([A-Za-z_][A-Za-z0-9_]*)$/,
            },
            {
              token: ["keyword.other", "comment.line.other"],
              regex: /^(#importall)( *<--.+)$/,
            },
            {
              token: "keyword.other",
              regex: /^#importall$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.other.markup.underline.link",
                "comment.line.other",
              ],
              regex: /^(#library)( +)([^ ]+)( *<--.+)$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.other.markup.underline.link",
              ],
              regex: /^(#library)( +)([^ ]+)$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.other.markup.underline.link",
                "text",
                "string.other",
                "comment.line.other",
              ],
              regex: /^(#plugin)( +)([^ ]+)( +)(.+)( *<--.+)$/,
            },
            {
              token: [
                "keyword.other",
                "text",
                "variable.other.markup.underline.link",
                "text",
                "string.other",
              ],
              regex: /^(#plugin)( +)([^ ]+)( +)(.+)$/,
            },
            { token: "comment.line", regex: /^\s*#.*$/ },
            {
              token: "entity.name.function",
              regex:
                /@(?:nowait|wait|wait_ms|menu|option|command|choice|input|input_cs|number|bind_once|bind_forever|unbind|nowait|image|typewrite|typewrite_ms|line|clear|center|tooltip|if|elseif|else|context|repeat|while|for|step|run|switch|parse|newline|empty|substr|substring|char|switch_char|lowercase|uppercase|replace|randint|floor|ceil|exists|load|save|reset)\b/,
            },
            { token: "constant.language", regex: /true|false|null/ },
            { token: "keyword.operator", regex: /[+\-*\/%>=<]|[&|]{2}|@=/ },
            { token: "paren", regex: /[(){}[\]]/ },
            { token: "language.constant.character", regex: /@\w+\b/ },
            { token: ["text", "property"], regex: /(\.\s*)(\$?\w+)/ },
            { token: ["property", "text"], regex: /(\$?\w+\s*)(:)/ },
            { token: "constant.numeric", regex: /\b\d+(?:\.\d+)?\b/ },
            { token: "variable.storymatic", regex: /\$\w+/ },
            { token: "text", regex: /[,;]/ },
            { token: "text", regex: /\s+/ },
            { defaultToken: "string.other" },
          ],
          text: [
            {
              token: "constant.character.escape",
              regex: /\$\$/,
            },
            {
              token: "comment.line.number-sign",
              regex: /#.+$/,
            },
            {
              token: "comment.line.other",
              regex: /<--.+$/,
            },
            {
              token: "comment.block",
              regex: /\/\*/,
              next: "comment",
            },
            {
              token: "variable.storymatic",
              regex: /\$[A-Za-z_][A-Za-z0-9_]*/,
            },
            {
              token: "string.other",
              regex: /-?[0-9]+(?:\.[0-9]+)?/,
            },
            {
              regex: /^|$/,
              next: "start",
            },
            {
              defaultToken: "text",
            },
          ],
          expression: [
            {
              token: "comment.line.number-sign",
              regex: /#.+$/,
            },
            {
              token: "comment.line.other",
              regex: /<--.+$/,
            },
            {
              token: "comment.block",
              regex: /\/\*/,
              next: "comment",
            },
            {
              token: "variable.storymatic",
              regex: /\$[A-Za-z_][A-Za-z0-9_]*/,
            },
            {
              token: "string.other",
              regex: /-?[0-9]+(?:\.[0-9]+)?/,
            },
            {
              token: "keyword.operator",
              regex: /\(|\)|<|>|\*|\/|%|\+|-|!|=|and|or|&&|\|\|/,
            },
            {
              regex: /^|$/,
              next: "start",
            },
            {
              defaultToken: "text",
            },
          ],
          comment: [
            {
              token: "comment.block",
              regex: /\*\//,
              next: "start",
            },
            {
              defaultToken: "comment.block",
            },
          ],
          argument: [
            {
              token: "constant.character.escape",
              regex: /\$\$|\)\)/,
            },
            {
              token: "text",
              regex: /\) +/,
              next: "text",
            },
            {
              token: "text",
              regex: /\)$/,
              next: "start",
            },
            {
              token: "comment.line.number-sign",
              regex: /#.+$/,
            },
            {
              token: "comment.line.other",
              regex: /<--.+$/,
            },
            {
              token: "comment.block",
              regex: /\/\*/,
              next: "comment",
            },
            {
              token: "variable.storymatic",
              regex: /\$[A-Za-z_][A-Za-z0-9_]*/,
            },
            {
              token: "string.other",
              regex: /-?[0-9]+(?:\.[0-9]+)?/,
            },
            {
              regex: /^|$/,
              next: "start",
            },
            {
              defaultToken: "text",
            },
          ],
        };
      };

      oop.inherits(StorymaticHighlightRules, TextHighlightRules);
      exports.StorymaticHighlightRules = StorymaticHighlightRules;
    }
  );
</script>

<template>
  <AceEditor
    :modelValue="modelValue"
    :placeholder="placeholder ?? 'Write a story...'"
    :readonly="readonly"
    :round="round"
    mode="storymatic2"
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
