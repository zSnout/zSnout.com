import{d as C,q as i,$ as k,a0 as b,a1 as x,C as w,o as _,h as z,c as y,w as B,b as S,i as A,r as G,n as O,_ as E}from"./index.1f86lsdq.js";import{t as L}from"./BookmarkIcon.1thszj4g.js";import{B as M}from"./VStack.xad5wxbj.js";const N=C({__name:"CardGrid",props:{sizes:{default:()=>["normal"]}},setup(h){const{sizes:s}=h,n=i(4),a=i(),e=i(s[0]),l=k("preferred-grid-size",e.value);s.includes(l.value)&&(e.value=l.value);function g(){e.value=s[(s.indexOf(e.value)+1)%s.length],l.value=e.value}function u(){if(a.value){const t=getComputedStyle(a.value);n.value=t.gridTemplateColumns.split(" ").length}}return b(a,u),x(e,u),w(a,"keydown",t=>{var f,v,m,p;const c=t.composedPath(),d=c[c.indexOf(a.value)-1];if(!d)return;const r=L(document.documentElement),o=r.indexOf(d);if(o!==-1)switch(t.key){case"ArrowRight":(f=r[o+1])==null||f.focus();break;case"ArrowLeft":(v=r[o-1])==null||v.focus();break;case"ArrowDown":(m=r[Math.min(o+n.value,r.length-1)])==null||m.focus();break;case"ArrowUp":(p=r[Math.max(o-n.value,0)])==null||p.focus();break}}),(t,c)=>(_(),z("div",{ref_key:"grid",ref:a,class:O([{"no-desc":e.value==="small"||e.value==="icon","no-title":e.value==="icon",list:e.value==="list"},"grid"])},[s.length>1?(_(),y(M,{key:0,class:"resizer",onClick:g},{default:B(()=>[S(" Change Grid Size ")]),_:1})):A("",!0),G(t.$slots,"default",{size:e.value},void 0,!0)],2))}});const $=E(N,[["__scopeId","data-v-23b27209"]]);export{$ as C};
