import{d as h,u as y,o as d,c as g,w as m,r,R as w,h as c,q as k,aP as x,aQ as C,v as R,aM as b,b as $}from"./index.5s3b6nbjrnk0.js";import{C as M}from"./CardGrid.5dgkfhei0cs0.js";import{F as S}from"./SharedNav.1lm7nnzuivvk.js";import{_ as z}from"./plugin-vue_export-helper.62h235na3u80.js";const B=["href","target"],L=h({__name:"Link",props:{forceReload:{type:Boolean},to:null},setup(e){const{to:o,forceReload:n}=e,u=/^\/(?!\/)|\.\.?\//.test(o);return(i,_)=>y(u)&&!e.forceReload?(d(),g(y(w),{key:0,to:e.to},{default:m(()=>[r(i.$slots,"default")]),_:3},8,["to"])):(d(),c("a",{key:1,href:e.to,target:e.forceReload?void 0:"_blank"},[r(i.$slots,"default")],8,B))}}),G={key:1},V={key:2},T=h({__name:"MaybeLink",props:{forceReload:{type:Boolean},inline:{type:Boolean},to:null},setup(e){return(o,n)=>e.to!==void 0?(d(),g(L,{key:0,"force-reload":e.forceReload,to:e.to},{default:m(()=>[r(o.$slots,"default")]),_:3},8,["force-reload","to"])):e.inline?(d(),c("span",G,[r(o.$slots,"default")])):(d(),c("div",V,[r(o.$slots,"default")]))}}),E="_hidden_1hstl_1";var F={hidden:E};const O=h({__name:"SearchableCardGrid",props:{placeholder:null,sizes:null},setup(e){const o=k(""),n=k(),u=x();function i(l){var a,p,v;const t=(p=(a=l.querySelector("p"))==null?void 0:a.textContent)!=null?p:l.textContent,s=(v=l.dataset)==null?void 0:v.keywords;return`${t} ${s}`.toLowerCase()}function _(l,t){if(t.length===1&&!t[0])return!0;const s=i(l);return t.every(a=>s.includes(a))}function f(){var s;const l=o.value.trim().split(/\s+/g),t=(s=n.value)==null?void 0:s.$el;if(!!t)for(let a of t.children)a.classList.toggle(u.hidden,!_(a,l))}return C(n,f,{subtree:!0,childList:!0}),R(f),b(f),(l,t)=>{var s;return d(),c("div",null,[$(S,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),class:"field",placeholder:(s=e.placeholder)!=null?s:"Type to search zSnout...",type:"search"},null,8,["modelValue","placeholder"]),$(M,{ref_key:"grid",ref:n,class:"grid",sizes:e.sizes},{default:m(({size:a})=>[r(l.$slots,"default",{size:a},void 0,!0)]),_:3},8,["sizes"])])}}}),q={$style:F};var U=z(O,[["__cssModules",q],["__scopeId","data-v-7edee198"]]);export{U as S,T as _};
