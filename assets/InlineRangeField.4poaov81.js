import{d as r,q as f,o as g,h as x,_ as v}from"./index.4yzzgtk3.js";const _=["autocomplete","max","min","step","value"],h=r({__name:"InlineRangeField",props:{modelValue:null,autocomplete:null,min:null,max:null,step:null},emits:["update:modelValue"],setup(e,{emit:m}){const d=e,u=f();function c(l){if(l.preventDefault(),l.touches.length!==1||!u.value)return;const{x:t,width:o}=u.value.getBoundingClientRect(),n=Math.min(1,Math.max(0,(l.touches[0].clientX-t)/o)),{max:p=100,min:s=0,step:a}=d;let i=n*(p-s)+s;a!=="any"&&a&&(i=~~(i/a)*a),m("update:modelValue",i)}return(l,t)=>{var o;return g(),x("input",{ref_key:"field",ref:u,class:"field",autocomplete:(o=e.autocomplete)!=null?o:"off",max:e.max,min:e.min,step:e.step,value:e.modelValue,type:"range",onInput:t[0]||(t[0]=n=>l.$emit("update:modelValue",+n.target.value)),onPointerdown:t[1]||(t[1]=n=>n.target.setPointerCapture(n.pointerId)),onTouchmove:c},null,40,_)}}});const y=v(h,[["__scopeId","data-v-7c55a7f4"]]);export{y as I};
