import{B as y}from"./Button.32h7782uxra0.js";import{D as A}from"./DocumentDisplay.f38sgubl5e80.js";import{d as m,f as S,g as C,o as k,c as G,w as l,a as _,r as K,u as B,q as N,h as P,b,F as w,e as E}from"./index.4mpvapbfrnu0.js";import{S as Y}from"./SharedNav.1lm7nnzuivvk.js";import{_ as M}from"./plugin-vue_export-helper.62h235na3u80.js";import"./Navigation.64w2aw5yn6g0.js";import"./Logo.4djlqykqmru0.js";import"./LogoLight.11xzt69hf600.js";const Z={class:"content"},O=m({__name:"Overlay",setup(D){const d=S("(max-width: 400px)"),c=C(()=>d.value?"2.5":"3.5");return(s,h)=>(k(),G(Y,{class:"page-content","min-height":`calc(var(--app-height) - ${B(c)}rem)`,bottom:"",top:""},{default:l(()=>[_("div",Z,[K(s.$slots,"default",{},void 0,!0)])]),_:3},8,["min-height"]))}});var R=M(O,[["__scopeId","data-v-0c32d7cc"]]);const F=E("Add Coloring"),z=m({__name:"trope-highlighter",setup(D){const d=N(),c={Etnachta:"\u05D1\u0591",SofPassuk:"\u05E1\u05BD",Segol:"\u05D1\u0592",Shalsheconst:"\u05D1\u0593",ZakefKatan:"\u05D1\u0594",ZakefGadol:"\u05D1\u0595",Tifcha:"\u05D1\u0596",Rivia:"\u05D1\u0597",Zarka:"\u05D1\u05AE",Pashta:"\u05D1\u0599",Yetiv:"\u05D1\u059A",Tevir:"\u05D1\u059B",Pazer:"\u05D1\u05A1",QarneFarah:"\u05D1\u059F",TelishaGedola:"\u05D1\u05A0",Geresh:"\u05D1\u059C",Gershayim:"\u05D1\u059E",Mercha:"\u05D1\u05A5",Munach:"\u05D1\u05A3",Mahpach:"\u05D1\u05A4",Darga:"\u05D1\u05A7",Kadma:"\u05D1\u05A8",TelishaKetana:"\u05D1\u05A9",MerchaKefula:"\u05D1\u05A6",YerachBenYomo:"\u05D1\u05AA"};for(const[a,e]of Object.entries(c))c[a]=e[1];const s=Object.entries(c);function h(a){let e=-1,o=null;for(const[r,n]of s)a.indexOf(n)>e&&(e=a.indexOf(n),o=r);return o}function x(a){a.preventDefault();const e=a.clipboardData;if(!e)return;const o=e.getData("text/plain");if(!o)return;const r=document.getSelection();if(!r)return;const n=r.getRangeAt(0);n.deleteContents();const u=document.createTextNode(o);n.insertNode(u),n.selectNodeContents(u),n.collapse(!1),r.removeAllRanges(),r.addRange(n),T(),g()}function g(){if(!d.value)return;const a=[...d.value.childNodes].map(t=>(t.textContent||"").trim()).join(" ");if(!a)return;const e=document.createElement("span");e.textContent=a.trim().replace(/\s+/g," ");const u=e.innerHTML.split(" ").map(t=>({word:t,trope:h(t)})).map(({word:t,trope:f},i,p)=>f=="Munach"&&p[i+1].trope?{word:t,trope:`Munach${p[i+1].trope}`}:{word:t,trope:f}).map(({word:t,trope:f})=>{const i=document.createElement("span");return i.textContent=t,i.classList.add(f),i}),v=[u[0]];for(const t of u.slice(1))v.push(" ",t);d.value.replaceChildren(...v)}function T(){!d.value||d.value.classList.toggle("empty",!!d.value.textContent)}return(a,e)=>(k(),P(w,null,[b(A,null,{default:l(()=>[_("div",{ref_key:"field",ref:d,class:"field second-layer",contenteditable:"",onPaste:x}," ...Type or paste some Hebrew text here ",544)]),_:1}),b(R,null,{default:l(()=>[b(y,{class:"color light",onClick:g},{default:l(()=>[F]),_:1})]),_:1})],64))}});var J=M(z,[["__scopeId","data-v-b4df3408"]]);export{J as default};
