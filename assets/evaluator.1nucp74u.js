import{u as _,E as g}from"./useLocationHash.2efrg97q.js";import{a as h,i as v,_ as V}from"./preset.1mstdl8s.js";import{C as w}from"./Console.2t3sv0c8.js";import{d as c,B as x,a1 as p,aB as B,I as C,o as d,c as f,w as E,e as u,u as m,M}from"./index.472zx6ds.js";import"./DocumentDisplay.633jhlro.js";import"./Navigation.vue_vue_type_script_setup_true_lang.1tdpzvga.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.34lxtf3d.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./AceEditor.1gmgqqjd.js";import"./Dropdown.5andrccq.js";import"./Labeled.29mn7ohi.js";const y=c({__name:"Evaluator",props:{code:null},emits:["init","save"],setup(i){const n=x(i,"code");p(n,()=>{o[o.length-1].content!=="Waiting for input to finish..."&&o.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const e=B(n,1e3),a=h(e);function l(s){return[...s.output.split(/\n+/g).map(r=>(console.log(r),{type:"log",id:Math.random(),content:r})),{type:"log",id:Math.random(),content:s.result}]}p(e,()=>{o.splice(0,o.length,...l(a.value))});const o=C(l(a.value));return(s,r)=>(d(),f(w,{field:"",messages:o},null,8,["messages"]))}}),F=c({__name:"evaluator",setup(i){const t=_(v);return(n,e)=>(d(),f(g,null,{default:E(()=>[u(V,{modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=a=>M(t)?t.value=a:null),round:""},null,8,["modelValue"]),u(y,{code:m(t),round:""},null,8,["code"])]),_:1}))}});export{F as default};
