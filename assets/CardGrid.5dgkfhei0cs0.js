import{d as k,q as d,N as x,aN as b,ak as C,aA as z,o as g,h as w,c as y,w as A,k as B,r as S,n as G,e as N}from"./index.5044v8rtsf00.js";import{t as O}from"./SharedNav.1lm7nnzuivvk.js";import{B as E}from"./Button.32h7782uxra0.js";import{_ as L}from"./plugin-vue_export-helper.62h235na3u80.js";const M=N(" Change Grid Size "),R=k({__name:"CardGrid",props:{sizes:{default:()=>["normal"]}},setup(_){const{sizes:a}=_,i=d(4),t=d(),e=d(a[0]),l=x("preferred-grid-size",e.value);a.includes(l.value)&&(e.value=l.value);function h(){e.value=a[(a.indexOf(e.value)+1)%a.length],l.value=e.value}function u(){if(t.value){const r=getComputedStyle(t.value);i.value=r.gridTemplateColumns.split(" ").length}}return b(t,u),C(e,u),z(t,"keydown",r=>{var m,f,p,v;const n=r.composedPath(),c=n[n.indexOf(t.value)-1];if(!c)return;const s=O(document.documentElement),o=s.indexOf(c);if(o!==-1)switch(r.key){case"ArrowRight":(m=s[o+1])==null||m.focus();break;case"ArrowLeft":(f=s[o-1])==null||f.focus();break;case"ArrowDown":(p=s[Math.min(o+i.value,s.length-1)])==null||p.focus();break;case"ArrowUp":(v=s[Math.max(o-i.value,0)])==null||v.focus();break}}),(r,n)=>(g(),w("div",{ref_key:"grid",ref:t,class:G([{"no-desc":e.value==="small"||e.value==="icon","no-title":e.value==="icon",list:e.value==="list"},"grid"])},[a.length>1?(g(),y(E,{key:0,class:"resizer",onClick:h},{default:A(()=>[M]),_:1})):B("",!0),S(r.$slots,"default",{size:e.value},void 0,!0)],2))}});var I=L(R,[["__scopeId","data-v-28fd2944"]]);export{I as C};
