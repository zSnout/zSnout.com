import{_ as y,o as l,c as k,w as o,r as N,a4 as B,d as w,q as p,C as S,e as a,a as c,t as h,b as v,h as b,E as A,F as C}from"./index.49e43vj6.js";import{D as L}from"./DocumentDisplay.2je0vazf.js";import{S as M,H as g}from"./BookmarkIcon.3wmuqdow.js";import{V,B as x}from"./VStack.6d7g92uw.js";import"./Navigation.2xu1kz2a.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";import"./Field.2ydu2jt8.js";const D={};function E(_,f){return l(),k(B,{name:"list"},{default:o(()=>[N(_.$slots,"default")]),_:3})}const K=y(D,[["render",E]]),F={class:"large",style:{flex:"1",display:"flex"}},G={class:"number"},H={class:"old"},I=w({__name:"bingo-master-board",setup(_){function f(e){for(let s=e.length-1;s>0;s--){let n=Math.floor(Math.random()*(s+1));[e[s],e[n]]=[e[n],e[s]]}return e}function d(){if(t++,t<=75&&u.value.unshift(r.value),t>=75)return t=75;r.value=i[t]}function m(){t--,t<0&&(t=0),t>=0&&u.value.shift(),r.value=i[t]}const i=f(Array.from({length:75},(e,s)=>"BINGO"[Math.floor(s/15)]+(s+1))),r=p(i[0]),u=p([]);let t=0;return S("keydown",e=>{!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.key==="ArrowLeft"?m():e.key==="ArrowRight"&&d())}),(e,s)=>(l(),k(L,null,{default:o(()=>[a(g,{style:{"min-height":"100%"}},{default:o(()=>[c("div",F,[a(V,{class:"large-inner",style:{flex:"1"}},{default:o(()=>[c("div",G,h(r.value),1),a(M),a(g,{class:"buttons"},{default:o(()=>[a(x,{onClick:m},{default:o(()=>[v("Previous Number")]),_:1}),a(x,{onClick:d},{default:o(()=>[v("Next Number")]),_:1})]),_:1})]),_:1})]),c("div",H,[a(K,null,{default:o(()=>[(l(!0),b(C,null,A(u.value,n=>(l(),b("div",{key:n},h(n),1))),128))]),_:1})])]),_:1})]),_:1}))}});const Q=y(I,[["__scopeId","data-v-b8502f1b"]]);export{Q as default};