import{u as _,E as g}from"./useLocationHash.2aa7a2c1.js";import{a as h,i as v,_ as x}from"./preset.eaf823b8.js";import{C as E}from"./Console.346e9a75.js";import{d as m,M as V,D as u,an as w,r as C,o as d,c as f,w as M,b as c,u as p,x as b}from"./index.a1310079.js";import"./DocumentDisplay.8b35b446.js";import"./BookmarkIcon.e05c9dfb.js";import"./AceEditor.421757e6.js";import"./Dropdown.c9868fcf.js";import"./Labeled.8d5cfbc4.js";const y=m({__name:"Evaluator",props:{code:null},emits:["init","save"],setup(i){const n=V(i,"code");u(n,()=>{o[o.length-1].content!=="Waiting for input to finish..."&&o.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const t=w(n,1e3),a=h(t);function l(s){return[...s.output.split(/\n+/g).map(r=>(console.log(r),{type:"log",id:Math.random(),content:r})),{type:"log",id:Math.random(),content:s.result}]}u(t,()=>{o.splice(0,o.length,...l(a.value))});const o=C(l(a.value));return(s,r)=>(d(),f(E,{field:"",messages:o},null,8,["messages"]))}}),N=m({__name:"Evaluator",setup(i){const e=_(v);return(n,t)=>(d(),f(g,null,{default:M(()=>[c(x,{modelValue:p(e),"onUpdate:modelValue":t[0]||(t[0]=a=>b(e)?e.value=a:null),round:""},null,8,["modelValue"]),c(y,{code:p(e),round:""},null,8,["code"])]),_:1}))}});export{N as default};