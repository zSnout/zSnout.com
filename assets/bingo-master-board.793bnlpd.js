import{_ as y,o as l,c as k,w as o,s as N,T as B,d as w,r as p,l as S,e as a,a as c,t as h,b as v,f as b,v as A,F as L}from"./index.xh0zaea0.js";import{D as M}from"./DocumentDisplay.6d0yf2eg.js";import{S as V,H as g}from"./BookmarkIcon.46krkaf8.js";import{V as C,B as x}from"./VStack.3evi6szx.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const D={};function K(_,f){return l(),k(B,{name:"list"},{default:o(()=>[N(_.$slots,"default")]),_:3})}const T=y(D,[["render",K]]),E={class:"large",style:{flex:"1",display:"flex"}},F={class:"number"},G={class:"old"},H=w({__name:"bingo-master-board",setup(_){function f(e){for(let s=e.length-1;s>0;s--){let n=Math.floor(Math.random()*(s+1));[e[s],e[n]]=[e[n],e[s]]}return e}function d(){if(t++,t<=75&&u.value.unshift(r.value),t>=75)return t=75;r.value=i[t]}function m(){t--,t<0&&(t=0),t>=0&&u.value.shift(),r.value=i[t]}const i=f(Array.from({length:75},(e,s)=>"BINGO"[Math.floor(s/15)]+(s+1))),r=p(i[0]),u=p([]);let t=0;return S("keydown",e=>{!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.key==="ArrowLeft"?m():e.key==="ArrowRight"&&d())}),(e,s)=>(l(),k(M,null,{default:o(()=>[a(g,{style:{"min-height":"100%"}},{default:o(()=>[c("div",E,[a(C,{class:"large-inner",style:{flex:"1"}},{default:o(()=>[c("div",F,h(r.value),1),a(V),a(g,{class:"buttons"},{default:o(()=>[a(x,{onClick:m},{default:o(()=>[v("Previous Number")]),_:1}),a(x,{onClick:d},{default:o(()=>[v("Next Number")]),_:1})]),_:1})]),_:1})]),c("div",G,[a(T,null,{default:o(()=>[(l(!0),b(L,null,A(u.value,n=>(l(),b("div",{key:n},h(n),1))),128))]),_:1})])]),_:1})]),_:1}))}});const Q=y(H,[["__scopeId","data-v-b8502f1b"]]);export{Q as default};
