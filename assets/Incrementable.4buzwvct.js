import{H as f}from"./BookmarkIcon.46krkaf8.js";import{B as h}from"./VStack.3evi6szx.js";import{d as c,o as a,c as u,w as s,s as I,_,f as m,p as i,h as v,a as r,e as l,b as V,t as $}from"./index.xh0zaea0.js";import{I as w}from"./InlineField.sq5fmr9m.js";const p=c({__name:"IconButton",setup(e){return(n,t)=>(a(),u(h,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:s(()=>[I(n.$slots,"default")]),_:3}))}});const y={},g=e=>(i("data-v-3cdd5925"),e=e(),v(),e),C={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},B=g(()=>r("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),b=[B];function S(e,n){return a(),m("svg",C,b)}const k=_(y,[["render",S],["__scopeId","data-v-3cdd5925"]]);const F={},M=e=>(i("data-v-29a01ad7"),e=e(),v(),e),N={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},H=M(()=>r("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),x=[H];function z(e,n){return a(),m("svg",N,x)}const L=_(F,[["render",z],["__scopeId","data-v-29a01ad7"]]),P=c({__name:"InlineNumericField",props:{modelValue:{},autocomplete:{},placeholder:{}},emits:["update:modelValue"],setup(e){return(n,t)=>(a(),u(w,{autocomplete:n.autocomplete,"model-value":""+n.modelValue,placeholder:n.placeholder,type:"number","onUpdate:modelValue":t[0]||(t[0]=o=>n.$emit("update:modelValue",+o))},null,8,["autocomplete","model-value","placeholder"]))}}),U=c({__name:"Incrementable",props:{modelValue:{},decrement:{type:Function,default:e=>e-1},increment:{type:Function,default:e=>e+1},label:{}},emits:["update:modelValue"],setup(e){function n({target:t}){var o;(o=t.querySelector("input"))==null||o.focus()}return(t,o)=>(a(),u(f,null,{default:s(()=>[l(p,{onClick:o[0]||(o[0]=d=>t.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:s(()=>[l(k)]),_:1}),r("p",{class:"label",onClick:n},[V($(t.label)+" ",1),l(P,{"model-value":t.modelValue,"onUpdate:modelValue":o[1]||(o[1]=d=>t.$emit("update:modelValue",d))},null,8,["model-value"])]),l(p,{onClick:o[2]||(o[2]=d=>t.$emit("update:modelValue",t.increment(t.modelValue)))},{default:s(()=>[l(L)]),_:1})]),_:1}))}});const j=_(U,[["__scopeId","data-v-243e44c1"]]);export{j as I};
