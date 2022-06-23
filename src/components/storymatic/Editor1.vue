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

  ace.define("ace/mode/storymatic1", (require, exports) => {
    const oop = require("ace/lib/oop");
    const TextMode = require("ace/mode/text").Mode;
    const StorymaticHighlightRules =
      require("ace/mode/storymatic1_highlight_rules").StorymaticHighlightRules;

    const Mode = function (this: any) {
      this.HighlightRules = StorymaticHighlightRules;
    };

    oop.inherits(Mode, TextMode);

    exports.Mode = Mode;
  });

  ace.define("ace/mode/storymatic1_highlight_rules", (require, exports) => {
    const oop = require("ace/lib/oop");
    const TextHighlightRules =
      require("ace/mode/text_highlight_rules").TextHighlightRules;

    const StorymaticHighlightRules = function (this: any) {
      this.$rules = {
        start: [
          {
            token: ["keyword.other", "text", "variable.other", "text"],
            regex: /^(@global)( +)(\$[A-Za-z0-9_]+)( *= *)/,
            next: "startString",
          },
          {
            token: ["variable.other", "text"],
            regex: /^(\$[A-Za-z0-9_]+)( *= *)/,
            next: "startString",
          },
          {
            token: "language.constant.character",
            regex: /^[A-Za-z0-9_]+$/,
            next: "code",
          },
          {
            defaultToken: "invalid.illegal",
          },
        ],
        startString: [
          {
            regex: /$/,
            next: "start",
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
        code: [
          {
            regex: /^$/,
            next: "start",
          },
          {
            token: "text",
            regex: /^ +$/,
          },
          {
            token: ["text", "keyword.other", "text"],
            regex: /^( +)(@nowait)( +)/,
            next: "codeText",
          },
          {
            token: [
              "text",
              "variable.other",
              "keyword.operator",
              "keyword.other",
              "string.unquoted",
              "keyword.operator",
              "string.unquoted",
            ],
            regex:
              /^( +)(\$[A-Za-z0-9_]+)( *= *)(@random +)([1-9][0-9]{0,5})( *, *)([1-9][0-9]{0,5})$/,
          },
          {
            token: [
              "text",
              "variable.other",
              "text",
              "keyword.operator",
              "text",
              "keyword.other",
              "text",
            ],
            regex:
              /^( +)(\$[A-Za-z0-9_]+)( *)(\+=|-=|\*=|\/=|\.=|=)( *)(@input|@number|)( *)/,
            next: "codeString",
          },
          {
            token: ["text", "keyword.control", "text"],
            regex: /^( +)(@(?:else)?if)( +)/,
            next: "codeCondition",
          },
          {
            token: [
              "text",
              "keyword.control",
              "text",
              "language.constant.character",
            ],
            regex: /^( +)(@run|@goto)( +)([A-Za-z0-9_]+)$/,
          },
          {
            token: ["text", "keyword.control"],
            regex: /^( +)(@context|@base|@pass|@stop|@kill|@else)$/,
          },
          {
            token: ["text", "keyword.control", "text", "string.unquoted"],
            regex:
              /^( +)(@(?:sleep|wait|timeout))( +)(10|[1-9]|[0-9]?\.[1-9]|[0-9]?\.[0-9][1-9])$/,
          },
          {
            token: ["text", "keyword.control", "text"],
            regex: /^( +)(@for)( +)/,
            next: "forDefn",
          },
          {
            token: ["text", "keyword.control", "text"],
            regex: /^( +)(@(?:do)?while)( +)/,
            next: "codeCondition",
          },
          {
            token: ["text", "keyword.control", "text", "string.unquoted"],
            regex: /^( +)(@repeat)( +)([1-9][0-9]?)$/,
            next: "code",
          },
          {
            token: ["text", "keyword.control", "text"],
            regex: /^( +)(@menu)( +)/,
            next: "codeString",
          },
          {
            token: ["text", "keyword.control"],
            regex: /^( +)(@menu)$/,
            next: "code",
          },
          {
            token: "text",
            regex: /^ +/,
            next: "codeText",
          },
          {
            defaultToken: "text",
          },
        ],
        codeText: [
          {
            regex: /$/,
            next: "code",
          },
          {
            token: [
              "keyword.operator.bold",
              "variable.other.bold",
              "keyword.operator.bold",
            ],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: "variable.other.bold",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: [
              "keyword.operator.bold",
              "variable.other.bold",
              "keyword.operator.bold",
            ],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other.bold",
            regex: /@runfrom|@reference/,
          },
          {
            defaultToken: "bold",
          },
        ],
        codeString: [
          {
            regex: /$/,
            next: "code",
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
        codeCondition: [
          {
            regex: /$/,
            next: "code",
          },
          {
            token: "keyword.operator",
            regex: /<=|>=|<|>|!=|=|or|and/,
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
        forDefn: [
          {
            token: "text",
            regex: /;/,
            next: "forCondition",
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            token: "keyword.operator",
            regex: /\+=|-=|\*=|\/=|\.=|=/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
        forCondition: [
          {
            token: "text",
            regex: /;/,
            next: "forInc",
          },
          {
            token: "keyword.operator",
            regex: /<=|>=|<|>|!=|=|or|and/,
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
        forInc: [
          {
            regex: /$/,
            next: "code",
          },
          {
            token: "variable.other",
            regex: /\$[A-Za-z0-9_]+/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(\$[A-Za-z0-9_]+)(})/,
          },
          {
            token: ["keyword.operator", "variable.other", "keyword.operator"],
            regex: /({)(@runfrom|@reference)(})/,
          },
          {
            token: "variable.other",
            regex: /@runfrom|@reference/,
          },
          {
            token: "keyword.operator",
            regex: /\+=|-=|\*=|\/=|\.=|=|\+\+|--/,
          },
          {
            defaultToken: "string.unquoted",
          },
        ],
      };
    };

    oop.inherits(StorymaticHighlightRules, TextHighlightRules);

    exports.StorymaticHighlightRules = StorymaticHighlightRules;
  });
</script>

<template>
  <AceEditor
    :modelValue="modelValue"
    :placeholder="placeholder ?? 'Write a story...'"
    :readonly="readonly"
    :round="round"
    mode="storymatic1"
    @init="$emit('init', $event)"
    @save="$emit('save', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
