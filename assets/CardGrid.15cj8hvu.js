import{d as k,q as i,N as C,aQ as x,ak as w,aA as z,o as p,h as b,c as y,w as A,j as B,r as S,n as G,e as O}from"./index.3wtsgydi.js";import{t as E}from"./SharedNav.40at9hg6.js";import{B as N}from"./Button.49gbgcb2.js";import{_ as L}from"./_plugin-vue_export-helper.35ltfn2z.js";const M=O(" Change Grid Size "),R=k({__name:"CardGrid",props:{sizes:{default:()=>["normal"]}},setup(h){const{sizes:s}=h,n=i(4),a=i(),e=i(s[0]),l=C("preferred-grid-size",e.value);s.includes(l.value)&&(e.value=l.value);function g(){e.value=s[(s.indexOf(e.value)+1)%s.length],l.value=e.value}function u(){if(a.value){const t=getComputedStyle(a.value);n.value=t.gridTemplateColumns.split(" ").length}}return x(a,u),w(e,u),z(a,"keydown",t=>{var f,m,v,_;const c=t.composedPath(),d=c[c.indexOf(a.value)-1];if(!d)return;const o=E(document.documentElement),r=o.indexOf(d);if(r!==-1)switch(t.key){case"ArrowRight":(f=o[r+1])==null||f.focus();break;case"ArrowLeft":(m=o[r-1])==null||m.focus();break;case"ArrowDown":(v=o[Math.min(r+n.value,o.length-1)])==null||v.focus();break;case"ArrowUp":(_=o[Math.max(r-n.value,0)])==null||_.focus();break}}),(t,c)=>(p(),b("div",{ref_key:"grid",ref:a,class:G([{"no-desc":e.value==="small"||e.value==="icon","no-title":e.value==="icon",list:e.value==="list"},"grid"])},[s.length>1?(p(),y(N,{key:0,class:"resizer",onClick:g},{default:A(()=>[M]),_:1})):B("",!0),S(t.$slots,"default",{size:e.value},void 0,!0)],2))}});const D=L(R,[["__scopeId","data-v-fe8eef88"]]);export{D as C};
