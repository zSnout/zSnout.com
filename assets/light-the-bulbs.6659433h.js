import{a as $}from"./main.200onzgm.js";import{B as k,V as G}from"./VStack.3evi6szx.js";import{D as I}from"./DocumentDisplay.6d0yf2eg.js";import{H as w,S as O}from"./BookmarkIcon.46krkaf8.js";import{l as q,h as J,x as h,C as B,D as s,F as f,y as v,ag as b,G as A,A as P,H as y}from"./runtime-core.esm-bundler.55v0mz3f.js";import{a as Q}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const U=["onClick"],W=q({__name:"light-the-bulbs",setup(X){let r=0;const i=[],n=J([]);let u;function H(e){return e}function D(e){return e.every(H)}function x(){return n.every(D)}function M(e){for(let t=0;t<r;t++)n[e-1][t]||a(e,t)}function R(e){g();for(let t=0;t<r/2;t++)e&2**t&&(a(0,t),t!=r-t&&a(0,r-1-t));for(let t=1;t<r;t++)M(t)}function T(e){g();for(let t=0;t<r;t++)e&2**t&&a(0,t);for(let t=1;t<r;t++)M(t)}function V(){const e=2**Math.ceil(r/2);for(let o=0;o<e;o++)if(R(o),x())return u=i.map(l=>[...l]),!0;const t=2**r;for(let o=0;o<t;o++)if(T(o),x())return u=i.map(l=>[...l]),!0;return u=void 0,!1}const E=()=>Array(r).fill(!1);function C(e){const t=Array.from({length:r});e.splice(0,n.length,...t.map(E))}function g(){C(n),C(i)}function _(e=!0){e&&(C(i),V()),g();for(let t=0;t<1e3;t++)F()}r=5,_();function F(){a(Math.floor(Math.random()*r),Math.floor(Math.random()*r))}function d(e,t){e>=0&&e<r&&t>=0&&t<r&&(n[e][t]=!n[e][t])}function a(e,t){i[e][t]=!i[e][t],d(e,t),d(e-1,t),d(e+1,t),d(e,t-1),d(e,t+1)}function K(){r--,r<3&&(r=3),_()}function z(){r++,_()}function L(){n.map(e=>e.fill(!1)),i.map(e=>e.fill(!1))}function S(e=!0){if(!u)return;const t=u.flatMap((c,m)=>c.map((p,N)=>[m,N,p])).filter(([c,m,p])=>(e?!p:p)==i[c][m]);if(t.length==0)return;const[o,l]=t[Math.floor(Math.random()*t.length)];a(o,l)}return $("keydown",e=>{if(!e.altKey&&!e.ctrlKey&&!e.metaKey){if(e.key=="a"){const t=[];for(let o=0;o<r;o++)for(let l=0;l<r;l++)n[o][l]&&t.push([o,l]);for(const[o,l]of t)a(o,l)}if(e.key=="A"){const t=[];for(let o=0;o<r;o++)for(let l=0;l<r;l++)n[o][l]||t.push([o,l]);for(const[o,l]of t)a(o,l)}e.key=="h"&&S(),e.key=="H"&&S(!1)}}),(e,t)=>(h(),B(I,{center:""},{default:s(()=>[f(G,null,{default:s(()=>[(h(!0),v(A,null,b(n,(o,l)=>(h(),B(w,null,{default:s(()=>[(h(!0),v(A,null,b(o,(c,m)=>(h(),v("div",{class:P([{lighted:c,"second-layer":c,outline:!c},"cell"]),onClick:p=>a(l,m)},null,10,U))),256))]),_:2},1024))),256)),f(O),f(w,{stretch:""},{default:s(()=>[f(k,{onClick:t[0]||(t[0]=o=>_(!1))},{default:s(()=>[y("Shuffle")]),_:1}),f(k,{onClick:L},{default:s(()=>[y("Reset")]),_:1})]),_:1}),f(w,{stretch:""},{default:s(()=>[f(k,{onClick:K},{default:s(()=>[y("Easier")]),_:1}),f(k,{onClick:z},{default:s(()=>[y("Harder")]),_:1})]),_:1})]),_:1})]),_:1}))}});const it=Q(W,[["__scopeId","data-v-149a181e"]]);export{it as default};
