import{d as v,u as y,o as u,c as b,w as x,n as _,R as w,f as p,k as m,s as C,j as $,aw as M,ax as S,an as L,B as G,b as k,F as O}from"./index.93e756b2.js";import{_ as h,t as R}from"./Modal.539c308e.js";import{F as T}from"./Field.97277b5f.js";const A=["href"],H=v({__name:"Link",props:{to:null},setup(l){const{to:o}=l,a=/^\/(?!\/)|\.\.?\//.test(o);return(s,i)=>y(a)?(u(),b(y(w),{key:0,to:l.to},{default:x(()=>[_(s.$slots,"default")]),_:3},8,["to"])):(u(),p("a",{key:1,href:l.to,target:"_blank"},[_(s.$slots,"default")],8,A))}});const B=v({__name:"CardGrid",setup(l){const o=m(4),a=m();return C(a,()=>{if(a.value){const s=getComputedStyle(a.value);o.value=s.gridTemplateColumns.split(" ").length}}),$(a,"keydown",s=>{var t,r,n,c;const i=s.composedPath(),f=i[i.indexOf(a.value)-1];if(!f)return;const d=R(document.documentElement),e=d.indexOf(f);if(e!==-1)switch(s.key){case"ArrowRight":(t=d[e+1])==null||t.focus();break;case"ArrowLeft":(r=d[e-1])==null||r.focus();break;case"ArrowDown":(n=d[Math.min(e+o.value,d.length-1)])==null||n.focus();break;case"ArrowUp":(c=d[Math.max(e-o.value,0)])==null||c.focus();break}}),(s,i)=>(u(),p("div",{ref_key:"grid",ref:a,class:"grid"},[_(s.$slots,"default",{},void 0,!0)],512))}});var E=h(B,[["__scopeId","data-v-28b6b16d"]]);const F="_hidden_1hstl_1";var V={hidden:F};const z=v({__name:"SearchableCardGrid",setup(l){const o=m(""),a=m(),s=M();function i(e){var n,c,g;const t=(c=(n=e.querySelector("p"))==null?void 0:n.textContent)!=null?c:e.textContent,r=(g=e.dataset)==null?void 0:g.keywords;return`${t} ${r}`.toLowerCase()}function f(e,t){if(t.length===1&&!t[0])return!0;const r=i(e);return t.every(n=>r.includes(n))}function d(){var r;const e=o.value.trim().split(/\s+/g),t=(r=a.value)==null?void 0:r.$el;if(!!t)for(let n of t.children)n.classList.toggle(s.hidden,!f(n,e))}return S(a,d,{subtree:!0,childList:!0}),L(d),G(d),(e,t)=>(u(),p(O,null,[k(T,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),class:"field",placeholder:"Type to search zSnout...",type:"search"},null,8,["modelValue"]),k(E,{ref_key:"grid",ref:a,class:"grid"},{default:x(()=>[_(e.$slots,"default",{},void 0,!0)]),_:3},512)],64))}}),I={$style:V};var J=h(z,[["__cssModules",I],["__scopeId","data-v-a94e9940"]]);const U={},j={class:"title"};function D(l,o){return u(),p("h1",j,[_(l.$slots,"default",{},void 0,!0)])}var K=h(U,[["render",D],["__scopeId","data-v-00c7d846"]]);export{J as S,K as T,H as _};
