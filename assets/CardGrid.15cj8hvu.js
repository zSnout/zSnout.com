import{d as C,q as i,$ as k,a0 as x,a1 as w,C as z,o as p,h as b,c as y,w as B,j as S,r as A,n as G,e as O,_ as E}from"./index.4yzzgtk3.js";import{t as L}from"./BookmarkIcon.2hoqbw7h.js";import{B as M}from"./VStack.1y80766s.js";const N=O(" Change Grid Size "),R=C({__name:"CardGrid",props:{sizes:{default:()=>["normal"]}},setup(h){const{sizes:s}=h,n=i(4),a=i(),e=i(s[0]),l=k("preferred-grid-size",e.value);s.includes(l.value)&&(e.value=l.value);function g(){e.value=s[(s.indexOf(e.value)+1)%s.length],l.value=e.value}function u(){if(a.value){const t=getComputedStyle(a.value);n.value=t.gridTemplateColumns.split(" ").length}}return x(a,u),w(e,u),z(a,"keydown",t=>{var f,v,m,_;const c=t.composedPath(),d=c[c.indexOf(a.value)-1];if(!d)return;const o=L(document.documentElement),r=o.indexOf(d);if(r!==-1)switch(t.key){case"ArrowRight":(f=o[r+1])==null||f.focus();break;case"ArrowLeft":(v=o[r-1])==null||v.focus();break;case"ArrowDown":(m=o[Math.min(r+n.value,o.length-1)])==null||m.focus();break;case"ArrowUp":(_=o[Math.max(r-n.value,0)])==null||_.focus();break}}),(t,c)=>(p(),b("div",{ref_key:"grid",ref:a,class:G([{"no-desc":e.value==="small"||e.value==="icon","no-title":e.value==="icon",list:e.value==="list"},"grid"])},[s.length>1?(p(),y(M,{key:0,class:"resizer",onClick:g},{default:B(()=>[N]),_:1})):S("",!0),A(t.$slots,"default",{size:e.value},void 0,!0)],2))}});const j=E(R,[["__scopeId","data-v-fe8eef88"]]);export{j as C};
