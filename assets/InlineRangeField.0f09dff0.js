import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,m as v,o as g,h}from"./index.9c67cb4b.js";const x=["autocomplete","max","min","step","value"],y=f({__name:"InlineRangeField",props:{modelValue:null,autocomplete:null,min:null,max:null,step:null},emits:["update:modelValue"],setup(e,{emit:r}){const m=e,i=v();function s(a){if(a.preventDefault(),a.touches.length!==1||!i.value)return;const{x:t,width:o}=i.value.getBoundingClientRect(),n=Math.min(1,Math.max(0,(a.touches[0].clientX-t)/o)),{max:p=100,min:d=0,step:l}=m;let u=n*(p-d)+d;l!=="any"&&l&&(u=~~(u/l)*l),r("update:modelValue",u)}return(a,t)=>{var o;return g(),h("input",{ref_key:"field",ref:i,class:"field",autocomplete:(o=e.autocomplete)!=null?o:"off",max:e.max,min:e.min,step:e.step,value:e.modelValue,type:"range",onInput:t[0]||(t[0]=n=>a.$emit("update:modelValue",+n.target.value)),onPointerdown:t[1]||(t[1]=n=>n.target.setPointerCapture(n.pointerId)),onTouchmove:s},null,40,x)}}});var I=c(y,[["__scopeId","data-v-225fa107"]]);export{I};
