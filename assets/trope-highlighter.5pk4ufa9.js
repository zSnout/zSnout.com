import{B as k}from"./VStack.34lxtf3d.js";import{D as B}from"./DocumentDisplay.633jhlro.js";import{d as g,f as M,g as N,o as v,c as T,w as p,u as O,a as x,r as E,_ as A,q as S,h as H,e as f,F,b as G}from"./index.4uw6pj49.js";import{S as I}from"./SharedNav.28xyli12.js";import"./Navigation.vue_vue_type_script_setup_true_lang.1tdpzvga.js";import"./BookmarkIcon.3wmuqdow.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";const K={class:"content"},P=g({__name:"Overlay",setup(y){const n=M("(max-width: 400px)"),c=N(()=>n.value?"2.5":"3.5");return(d,m)=>(v(),T(I,{class:"page-content","min-height":`calc(var(--app-height) - ${O(c)}rem)`,bottom:"",top:""},{default:p(()=>[x("div",K,[E(d.$slots,"default",{},void 0,!0)])]),_:3},8,["min-height"]))}});const R=A(P,[["__scopeId","data-v-6fcfb3c0"]]),$=g({__name:"trope-highlighter",setup(y){const n=S(),c={Etnachta:"\u05D1\u0591",SofPassuk:"\u05E1\u05BD",Segol:"\u05D1\u0592",Shalsheconst:"\u05D1\u0593",ZakefKatan:"\u05D1\u0594",ZakefGadol:"\u05D1\u0595",Tifcha:"\u05D1\u0596",Rivia:"\u05D1\u0597",Zarka:"\u05D1\u05AE",Pashta:"\u05D1\u0599",Yetiv:"\u05D1\u059A",Tevir:"\u05D1\u059B",Pazer:"\u05D1\u05A1",QarneFarah:"\u05D1\u059F",TelishaGedola:"\u05D1\u05A0",Geresh:"\u05D1\u059C",Gershayim:"\u05D1\u059E",Mercha:"\u05D1\u05A5",Munach:"\u05D1\u05A3",Mahpach:"\u05D1\u05A4",Darga:"\u05D1\u05A7",Kadma:"\u05D1\u05A8",TelishaKetana:"\u05D1\u05A9",MerchaKefula:"\u05D1\u05A6",YerachBenYomo:"\u05D1\u05AA"};for(const[e,t]of Object.entries(c))c[e]=t[1];const d=Object.entries(c);function m(e){let t=-1,r=null;for(const[s,o]of d)e.indexOf(o)>t&&(t=e.indexOf(o),r=s);return r}function b(e){e.preventDefault();const t=e.clipboardData;if(!t)return;const r=t.getData("text/plain");if(!r)return;const s=document.getSelection();if(!s)return;const o=s.getRangeAt(0);o.deleteContents();const l=document.createTextNode(r);o.insertNode(l),o.selectNodeContents(l),o.collapse(!1),s.removeAllRanges(),s.addRange(o),C(),_()}function _(){if(!n.value)return;const e=[...n.value.childNodes].map(a=>(a.textContent||"").trim()).join(" ");if(!e)return;const t=document.createElement("span");t.textContent=e.trim().replace(/\s+/g," ");const l=t.innerHTML.split(" ").map(a=>({word:a,trope:m(a)})).map(({word:a,trope:i},u,D)=>i=="Munach"&&D[u+1].trope?{word:a,trope:`Munach${D[u+1].trope}`}:{word:a,trope:i}).map(({word:a,trope:i})=>{const u=document.createElement("span");return u.textContent=a,u.classList.add(i),u}),h=[l[0]];for(const a of l.slice(1))h.push(" ",a);n.value.replaceChildren(...h)}function C(){!n.value||n.value.classList.toggle("empty",!!n.value.textContent)}return(e,t)=>(v(),H(F,null,[f(B,null,{default:p(()=>[x("div",{ref_key:"field",ref:n,class:"field second-layer",contenteditable:"",onPaste:b}," ...Type or paste some Hebrew text here ",544)]),_:1}),f(R,null,{default:p(()=>[f(k,{class:"color light",onClick:_},{default:p(()=>[G("Add Coloring")]),_:1})]),_:1})],64))}});const J=A($,[["__scopeId","data-v-9df79b15"]]);export{J as default};
