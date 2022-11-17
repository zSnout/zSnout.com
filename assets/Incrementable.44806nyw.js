import{H as f}from"./BookmarkIcon.1thszj4g.js";import{B as h}from"./VStack.xad5wxbj.js";import{d as s,o as a,c as u,w as c,r as I,_ as m,h as i,p,l as v,a as _,e as o,b as V,t as $}from"./index.5r9exxgm.js";import{I as w}from"./InlineField.1bs7kao1.js";const r=s({__name:"IconButton",setup(e){return(n,l)=>(a(),u(h,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:c(()=>[I(n.$slots,"default")]),_:3}))}});const y={},g=e=>(p("data-v-3cdd5925"),e=e(),v(),e),x={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},C=g(()=>_("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),B=[C];function b(e,n){return a(),i("svg",x,B)}const S=m(y,[["render",b],["__scopeId","data-v-3cdd5925"]]);const k={},F=e=>(p("data-v-29a01ad7"),e=e(),v(),e),M={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},N=F(()=>_("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),H=[N];function z(e,n){return a(),i("svg",M,H)}const L=m(k,[["render",z],["__scopeId","data-v-29a01ad7"]]),P=s({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(n,l)=>(a(),u(w,{autocomplete:e.autocomplete,"model-value":""+e.modelValue,placeholder:e.placeholder,type:"number","onUpdate:modelValue":l[0]||(l[0]=t=>n.$emit("update:modelValue",+t))},null,8,["autocomplete","model-value","placeholder"]))}}),U=s({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:e=>e-1},increment:{type:Function,default:e=>e+1},label:null},emits:["update:modelValue"],setup(e){function n({target:l}){var t;(t=l.querySelector("input"))==null||t.focus()}return(l,t)=>(a(),u(f,null,{default:c(()=>[o(r,{onClick:t[0]||(t[0]=d=>l.$emit("update:modelValue",e.decrement(e.modelValue)))},{default:c(()=>[o(S)]),_:1}),_("p",{class:"label",onClick:n},[V($(e.label)+" ",1),o(P,{"model-value":e.modelValue,"onUpdate:modelValue":t[1]||(t[1]=d=>l.$emit("update:modelValue",d))},null,8,["model-value"])]),o(r,{onClick:t[2]||(t[2]=d=>l.$emit("update:modelValue",e.increment(e.modelValue)))},{default:c(()=>[o(L)]),_:1})]),_:1}))}});const j=m(U,[["__scopeId","data-v-243e44c1"]]);export{j as I};
