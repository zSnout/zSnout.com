import{B as N}from"./VStack.3evi6szx.js";import{D as T}from"./DocumentDisplay.6d0yf2eg.js";import{d as v,z as O,V as B,o as x,c as D,w as u,u as S,a as y,s as H,_ as b,r as A,f as E,e as f,F as G,b as I}from"./index.4z0bzixf.js";import{S as K}from"./SharedNav.4z4l3m5g.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";const P={class:"content"},R=v({__name:"Overlay",setup(C){const n=O("(max-width: 400px)"),l=B(()=>n.value?"2.5":"3.5");return(d,m)=>(x(),D(K,{class:"page-content","min-height":`calc(var(--app-height) - ${S(l)}rem)`,bottom:"",top:""},{default:u(()=>[y("div",P,[H(d.$slots,"default",{},void 0,!0)])]),_:3},8,["min-height"]))}});const V=b(R,[["__scopeId","data-v-6fcfb3c0"]]),$=v({__name:"trope-highlighter",setup(C){const n=A(),l={Etnachta:"ב֑",SofPassuk:"סֽ",Segol:"ב֒",Shalsheconst:"ב֓",ZakefKatan:"ב֔",ZakefGadol:"ב֕",Tifcha:"ב֖",Rivia:"ב֗",Zarka:"ב֮",Pashta:"ב֙",Yetiv:"ב֚",Tevir:"ב֛",Pazer:"ב֡",QarneFarah:"ב֟",TelishaGedola:"ב֠",Geresh:"ב֜",Gershayim:"ב֞",Mercha:"ב֥",Munach:"ב֣",Mahpach:"ב֤",Darga:"ב֧",Kadma:"ב֨",TelishaKetana:"ב֩",MerchaKefula:"ב֦",YerachBenYomo:"ב֪"};for(const[e,t]of Object.entries(l))l[e]=t[1];const d=Object.entries(l);function m(e){let t=-1,r=null;for(const[s,o]of d)e.indexOf(o)>t&&(t=e.indexOf(o),r=s);return r}function k(e){e.preventDefault();const t=e.clipboardData;if(!t)return;const r=t.getData("text/plain");if(!r)return;const s=document.getSelection();if(!s)return;const o=s.getRangeAt(0);o.deleteContents();const i=document.createTextNode(r);o.insertNode(i),o.selectNodeContents(i),o.collapse(!1),s.removeAllRanges(),s.addRange(o),M(),_()}function _(){if(!n.value)return;const e=[...n.value.childNodes].map(a=>(a.textContent||"").trim()).join(" ");if(!e)return;const t=document.createElement("span");t.textContent=e.trim().replace(/\s+/g," ");const i=t.innerHTML.split(" ").map(a=>({word:a,trope:m(a)})).map(({word:a,trope:p},c,g)=>p=="Munach"&&g[c+1].trope?{word:a,trope:`Munach${g[c+1].trope}`}:{word:a,trope:p}).map(({word:a,trope:p})=>{const c=document.createElement("span");return c.textContent=a,c.classList.add(p),c}),h=[i[0]];for(const a of i.slice(1))h.push(" ",a);n.value.replaceChildren(...h)}function M(){n.value&&n.value.classList.toggle("empty",!!n.value.textContent)}return(e,t)=>(x(),E(G,null,[f(T,null,{default:u(()=>[y("div",{ref_key:"field",ref:n,class:"field second-layer",contenteditable:"",onPaste:k}," ...Type or paste some Hebrew text here ",544)]),_:1}),f(V,null,{default:u(()=>[f(N,{class:"color light",onClick:_},{default:u(()=>[I("Add Coloring")]),_:1})]),_:1})],64))}});const J=b($,[["__scopeId","data-v-9df79b15"]]);export{J as default};
