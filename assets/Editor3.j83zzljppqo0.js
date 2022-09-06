import{a as l,A as s}from"./AceEditor.4c7keaam2ru0.js";import{d,o as g,c as u}from"./index.4mpvapbfrnu0.js";const x=d({__name:"Editor3",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(a){return l.define("ace/mode/storymatic3",["require","exports"],function(e,t){const r=e("ace/lib/oop"),n=e("ace/mode/text").Mode,i=e("ace/mode/storymatic3_highlight_rules").SMHighlightRules,o=function(){this.HighlightRules=i,this.lineCommentStart="#"};r.inherits(o,n),t.Mode=o}),l.define("ace/mode/storymatic3_highlight_rules",["require","exports"],function(e,t){const r=e("ace/lib/oop"),{TextHighlightRules:n}=e("ace/mode/text_highlight_rules"),i=function(){const o=[{token:"constant.language.escape",regex:/\\./},{token:"string",regex:/"/,next:"start"},{token:"paren",regex:/\|/,next:"start"},{token:"variable.storymatic",regex:/\$\w+/}];this.$rules={start:[{token:"comment.line",regex:/^\s*#.*$/},{token:"storage.type.function",regex:/\b(?:function|func|def|const)\b/},{token:"keyword",regex:/\b(?:if|elif|else|unless|while|until|repeat|break|continue|each|return|and|or|not|isnt|is|in|of|be)\b/},{token:"constant.language",regex:/true|false|null/},{token:"keyword.operator",regex:/[+\-*\/%>=<!]|[&|]{2}/},{token:"paren",regex:/[(){}[\]]/},{token:"entity.name.function",regex:/@(pause|typewrite(?:_ms)?|input(?:int|float)?|confirm|kill|wait(?:_ms)?|random|randint|range|menu|option)\b/},{token:"language.constant.character",regex:/@\w+\b/},{token:["text","property"],regex:/(\.\s*)(\$?\w+)/},{token:["property","text"],regex:/(\$?\w+\s*)(:)/},{token:"constant.numeric",regex:/\b\d+(?:\.\d+)?\b/},{token:"variable.storymatic",regex:/\$\w+/},{token:"constant.language",regex:/\b(?:null|true|false|yes|no|on|off|y|n)\b/},{token:"entity.name.function",regex:/^\s*(?="[^"|]*"|@nowait "[^"|]*")/,next:"codeText"},{token:"string",regex:/"/,next:"string-dq"},{token:"paren",regex:/\|/,next:"string-dq"},{token:"text",regex:/[,;]/},{token:"text",regex:/\s+/},{defaultToken:"invalid"}],codeText:[{regex:/$/,next:"start"},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.storymatic.bold",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic.bold",regex:/@runfrom|@reference/},{token:"constant.language.escape.bold",regex:/\$\$/},{defaultToken:"bold"}],"string-dq":[...o,{token:"markup.bold",regex:/[*]/,next:"string-dq-b"},{token:"markup.italic",regex:/_/,next:"string-dq-i"},{defaultToken:"string"}],"string-dq-b":[...o,{token:"markup.bold",regex:/[*]/,next:"string-dq"},{token:"markup.bold.italic",regex:/_/,next:"string-dq-bi"},{defaultToken:"string.markup.bold"}],"string-dq-i":[...o,{token:"markup.bold.italic",regex:/[*]/,next:"string-dq-bi"},{token:"markup.italic",regex:/_/,next:"string-dq"},{defaultToken:"string.markup.italic"}],"string-dq-bi":[...o,{token:"markup.bold.italic",regex:/[*]/,next:"string-dq-i"},{token:"markup.bold.italic",regex:/_/,next:"string-dq-b"},{defaultToken:"string.markup.bold.italic"}]}};r.inherits(i,n),t.SMHighlightRules=i}),(e,t)=>{var r;return g(),u(s,{modelValue:a.modelValue,placeholder:(r=a.placeholder)!=null?r:"Write a story...",readonly:a.readonly,round:a.round,mode:"storymatic3",onInit:t[0]||(t[0]=n=>e.$emit("init",n)),onSave:t[1]||(t[1]=n=>e.$emit("save",n)),"onUpdate:modelValue":t[2]||(t[2]=n=>e.$emit("update:modelValue",n))},null,8,["modelValue","placeholder","readonly","round"])}}});export{x as _};
