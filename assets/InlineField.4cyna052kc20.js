import{_ as d}from"./plugin-vue_export-helper.62h235na3u80.js";import{d as i,o as u,h as m,ax as r}from"./index.5eygmsavjzc0.js";const f=["autocomplete","maxlength","placeholder","type","value"],c=i({__name:"InlineField",props:{modelValue:null,type:null,autocomplete:null,placeholder:null,flex:{type:Boolean},maxlength:null},emits:["update:modelValue"],setup(e){return(n,l)=>{var t,a;return u(),m("input",{class:"field",autocomplete:(t=e.autocomplete)!=null?t:"off",maxlength:e.maxlength,placeholder:e.placeholder,style:r({width:e.flex?void 0:e.modelValue.length+2+"ch",flex:e.flex?"1":void 0}),type:(a=e.type)!=null?a:"text",value:e.modelValue,onInput:l[0]||(l[0]=o=>n.$emit("update:modelValue",o.target.value))},null,44,f)}}});var h=d(c,[["__scopeId","data-v-d8faf712"]]);export{h as I};
