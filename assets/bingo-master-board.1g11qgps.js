import{_ as x,o as l,c as y,w as o,r as N,a4 as B,d as w,q as p,C as S,b as a,a as c,t as h,h as v,E as A,F as C,e as k}from"./index.4nlty64r.js";import{D as L}from"./DocumentDisplay.2je0vazf.js";import{S as M,H as b}from"./BookmarkIcon.108uetaj.js";import{V,B as g}from"./VStack.6d7g92uw.js";import"./Navigation.1j7ng9io.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.6b66y862.js";const D={};function E(u,f){return l(),y(B,{name:"list"},{default:o(()=>[N(u.$slots,"default")]),_:3})}const K=x(D,[["render",E]]),F={class:"large",style:{flex:"1",display:"flex"}},G={class:"number"},H=k("Previous Number"),I=k("Next Number"),P={class:"old"},T=w({__name:"bingo-master-board",setup(u){function f(e){for(let s=e.length-1;s>0;s--){let n=Math.floor(Math.random()*(s+1));[e[s],e[n]]=[e[n],e[s]]}return e}function d(){if(t++,t<=75&&_.value.unshift(r.value),t>=75)return t=75;r.value=i[t]}function m(){t--,t<0&&(t=0),t>=0&&_.value.shift(),r.value=i[t]}const i=f(Array.from({length:75},(e,s)=>"BINGO"[Math.floor(s/15)]+(s+1))),r=p(i[0]),_=p([]);let t=0;return S("keydown",e=>{!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.key==="ArrowLeft"?m():e.key==="ArrowRight"&&d())}),(e,s)=>(l(),y(L,null,{default:o(()=>[a(b,{style:{"min-height":"100%"}},{default:o(()=>[c("div",F,[a(V,{class:"large-inner",style:{flex:"1"}},{default:o(()=>[c("div",G,h(r.value),1),a(M),a(b,{class:"buttons"},{default:o(()=>[a(g,{onClick:m},{default:o(()=>[H]),_:1}),a(g,{onClick:d},{default:o(()=>[I]),_:1})]),_:1})]),_:1})]),c("div",P,[a(K,null,{default:o(()=>[(l(!0),v(C,null,A(_.value,n=>(l(),v("div",{key:n},h(n),1))),128))]),_:1})])]),_:1})]),_:1}))}});const U=x(T,[["__scopeId","data-v-b8502f1b"]]);export{U as default};
