import{d as a,o as d,h as p,_ as u}from"./index.e8mnt7cd.js";const s=["autocomplete","checked","type"],m=a({__name:"InlineCheckboxField",props:{modelValue:{type:Boolean},type:null,autocomplete:null},emits:["update:modelValue"],setup(e){return(n,t)=>{var o,l;return d(),p("input",{class:"field",autocomplete:(o=e.autocomplete)!=null?o:"off",checked:e.modelValue,type:(l=e.type)!=null?l:"checkbox",onChange:t[0]||(t[0]=c=>n.$emit("update:modelValue",c.target.checked))},null,40,s)}}});const _=u(m,[["__scopeId","data-v-8143d58f"]]);export{_ as I};
