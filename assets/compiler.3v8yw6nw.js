import{u as c,E as f}from"./useLocationHash.2efrg97q.js";import{A as _}from"./AceEditor.1gmgqqjd.js";import"./mode-javascript.53halply.js";import{u as V,t as v,i as x,_ as B}from"./preset.1mstdl8s.js";import{d as s,B as C,g,o as m,c as d,u as l,M as i,w,e as u}from"./index.49e43vj6.js";import"./DocumentDisplay.2je0vazf.js";import"./Navigation.2xu1kz2a.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.6d7g92uw.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";const y=s({__name:"Compiler",props:{code:null,round:{type:Boolean}},setup(r){const t=V(C(r,"code")),o=g({get(){return typeof t.value=="string"?t.value:v(t.value)},set(a){}});return(a,n)=>(m(),d(_,{modelValue:l(o),"onUpdate:modelValue":n[0]||(n[0]=p=>i(o)?o.value=p:null),round:r.round,mode:"javascript",readonly:""},null,8,["modelValue","round"]))}}),S=s({__name:"compiler",setup(r){const e=c(x);return(t,o)=>(m(),d(f,{"dual-editor":""},{default:w(()=>[u(B,{modelValue:l(e),"onUpdate:modelValue":o[0]||(o[0]=a=>i(e)?e.value=a:null),round:""},null,8,["modelValue"]),u(y,{code:l(e),round:""},null,8,["code"])]),_:1}))}});export{S as default};