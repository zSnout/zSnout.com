import{u as i,E as m}from"./useLocationHash.6c890f38.js";import{A as p}from"./AceEditor.c8e04016.js";import"./mode-javascript.e6176182.js";import{u as c,t as f,_,i as C}from"./preset.ec4427c2.js";import{d as l,$ as V,o as u,c as d,u as o,w as v,b as s,aH as x}from"./index.7141cb12.js";import"./DocumentDisplay.45568d79.js";import"./BookmarkIcon.e2141b75.js";import"./VStack.9632794c.js";const w=l({__name:"Compiler",props:{code:null,round:{type:Boolean}},setup(r){const a=c(V(r,"code"));return(t,n)=>(u(),d(p,{"model-value":typeof o(a)=="string"?o(a):o(f)(o(a)),round:r.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),H=l({__name:"Compiler",setup(r){const e=i(C);return(a,t)=>(u(),d(m,{"dual-editor":""},{default:v(()=>[s(_,{modelValue:o(e),"onUpdate:modelValue":t[0]||(t[0]=n=>x(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(w,{code:o(e),round:""},null,8,["code"])]),_:1}))}});export{H as default};