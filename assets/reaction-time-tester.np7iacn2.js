import{d as s,o as c,c as u,w as o,r as _,q as n,aJ as f,aA as m,b as v,e as p,t as b,u as k,n as g}from"./index.5eygmsav.js";import{B as y}from"./Button.32h7782u.js";import{_ as i}from"./plugin-vue_export-helper.62h235na.js";import{D as w}from"./DocumentDisplay.f38sgubl.js";import"./Navigation.64w2aw5y.js";import"./SharedNav.3q0ndcho.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";const x=s({__name:"BigButton",setup(l){return(e,t)=>(c(),u(y,{class:"button"},{default:o(()=>[_(e.$slots,"default",{},void 0,!0)]),_:3}))}});var B=i(x,[["__scopeId","data-v-fe42a848"]]);const h=s({__name:"reaction-time-tester",setup(l){const e=n(0),t=n("start"),d=f(()=>typeof t.value=="number"?`${t.value}ms`:{start:"Click to start.",wait:"Wait...",click:"GO!",lost:"You lost."}[t.value]);function r(){t.value==="start"?(t.value="wait",setTimeout(()=>{t.value="click",e.value=Date.now()},Math.random()*2e3+4e3)):t.value==="wait"?t.value="lost":t.value==="click"?t.value=Date.now()-e.value:t.value="start"}return m("keydown",a=>{a.key===" "&&!a.shiftKey&&!a.altKey&&!a.ctrlKey&&!a.metaKey&&r()}),(a,D)=>(c(),u(w,{center:""},{default:o(()=>[v(B,{class:g([t.value,"button"]),onPointerdown:r},{default:o(()=>[p(b(k(d)),1)]),_:1},8,["class"])]),_:1}))}});var V=i(h,[["__scopeId","data-v-3bcf3d31"]]);export{V as default};