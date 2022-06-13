import{d as y,f as b,o as c,c as x,a as k,s as _,R as $,h as f,b as v,v as h,m as p,x as M,aq as L,as as S,at as G,w as O,C as R,e as C,F as T}from"./index.c530de8c.js";import{_ as g,t as V}from"./Modal.624c06f8.js";import{F as A}from"./Field.bd1d1548.js";const B=["href"],E=y({__name:"Link",props:{to:null},setup(e){const{to:o}=e,s=/^\/(?!\/)|\.\.?\//.test(o);return(r,i)=>b(s)?(c(),x(b($),{key:0,to:e.to},{default:k(()=>[_(r.$slots,"default")]),_:3},8,["to"])):(c(),f("a",{key:1,href:e.to},[_(r.$slots,"default")],8,B))}});const F={class:"title"},z={class:"description"},I=["data-keywords"],D={class:"title"},N={class:"description"},U=y({__name:"Card",props:{title:null,description:null,keywords:null,to:null},setup(e){return(o,s)=>e.to?(c(),x(E,{key:0,class:"card second-layer hoverline focusline","data-keywords":e.keywords,to:e.to},{default:k(()=>[v("p",F,h(e.title),1),v("p",z,h(e.description),1)]),_:1},8,["data-keywords","to"])):(c(),f("div",{key:1,class:"card second-layer hoverline focusline","data-keywords":e.keywords},[v("p",D,h(e.title),1),v("p",N,h(e.description),1)],8,I))}});var te=g(U,[["__scopeId","data-v-3e36acad"]]);const P=y({__name:"CardGrid",setup(e){const o=p(4),s=p();return M(s,()=>{if(s.value){const r=getComputedStyle(s.value);o.value=r.gridTemplateColumns.split(" ").length}}),L(s,"keydown",r=>{var a,n,l,u;const i=r.composedPath(),m=i[i.indexOf(s.value)-1];if(!m)return;const d=V(document.documentElement),t=d.indexOf(m);if(t!==-1)switch(r.key){case"ArrowRight":(a=d[t+1])==null||a.focus();break;case"ArrowLeft":(n=d[t-1])==null||n.focus();break;case"ArrowDown":(l=d[Math.min(t+o.value,d.length-1)])==null||l.focus();break;case"ArrowUp":(u=d[Math.max(t-o.value,0)])==null||u.focus();break}}),(r,i)=>(c(),f("div",{ref_key:"grid",ref:s,class:"grid"},[_(r.$slots,"default",{},void 0,!0)],512))}});var j=g(P,[["__scopeId","data-v-28b6b16d"]]);const q="_hidden_1hstl_1";var H={hidden:q};const J=y({__name:"SearchableCardGrid",setup(e){const o=p(""),s=p(),r=S();function i(t){var l,u,w;const a=(u=(l=t.children[0])==null?void 0:l.textContent)!=null?u:t.textContent,n=(w=t.dataset)==null?void 0:w.keywords;return`${a} ${n}`.toLowerCase()}function m(t,a){if(a.length===1&&!a[0])return!0;const n=i(t);return a.every(l=>n.includes(l))}function d(){var n;const t=o.value.trim().split(/\s+/g),a=(n=s.value)==null?void 0:n.$el;if(!!a)for(let l of a.children)l.classList.toggle(r.hidden,!m(l,t))}return G(s,d,{subtree:!0,childList:!0}),O(d),R(d),(t,a)=>(c(),f(T,null,[C(A,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),placeholder:"Type to search zSnout..."},null,8,["modelValue"]),C(j,{ref_key:"grid",ref:s},{default:k(()=>[_(t.$slots,"default")]),_:3},512)],64))}}),K={$style:H};var ae=g(J,[["__cssModules",K]]);const Q={},W={class:"title"};function X(e,o){return c(),f("h1",W,[_(e.$slots,"default",{},void 0,!0)])}var se=g(Q,[["render",X],["__scopeId","data-v-1aa59745"]]);export{te as C,ae as S,se as T};
