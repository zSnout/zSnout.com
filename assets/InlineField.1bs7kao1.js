import{d as u,o as d,h as m,A as c,_ as i}from"./index.65vfmhl3.js";const s=["autocomplete","maxlength","placeholder","type","value"],p=u({__name:"InlineField",props:{modelValue:null,type:null,autocomplete:null,placeholder:null,flex:{type:Boolean},maxlength:null},emits:["update:modelValue"],setup(e){return(n,l)=>{var t,a;return d(),m("input",{class:"field",autocomplete:(t=e.autocomplete)!=null?t:"off",maxlength:e.maxlength,placeholder:e.placeholder,style:c({width:e.flex?void 0:e.modelValue.length+2+"ch",flex:e.flex?"1":void 0}),type:(a=e.type)!=null?a:"text",value:e.modelValue,onInput:l[0]||(l[0]=o=>n.$emit("update:modelValue",o.target.value))},null,44,s)}}});const x=i(p,[["__scopeId","data-v-25200b7b"]]);export{x as I};
