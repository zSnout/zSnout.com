import{u,E as d}from"./useLocationHash.249f44bd.js";import{A as p}from"./AceEditor.952c0710.js";import"./mode-javascript.e6176182.js";import{u as c,t as f,i as _,_ as V}from"./preset.7bcbdbfe.js";import{d as l,a1 as v,o as i,c as m,u as o,w as x,b as s,aI as C}from"./index.5081a4d9.js";import"./DocumentDisplay.ee317282.js";import"./SharedNav.de900e72.js";import"./VStack.ce9b91bf.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.2f327a57.js";import"./LogoLight.9c1b4e00.js";const w=l({__name:"Compiler",props:{code:null,round:{type:Boolean}},setup(t){const r=c(v(t,"code"));return(a,n)=>(i(),m(p,{"model-value":typeof o(r)=="string"?o(r):o(f)(o(r)),round:t.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),j=l({__name:"compiler",setup(t){const e=u(_);return(r,a)=>(i(),m(d,{"dual-editor":""},{default:x(()=>[s(V,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=n=>C(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(w,{code:o(e),round:""},null,8,["code"])]),_:1}))}});export{j as default};