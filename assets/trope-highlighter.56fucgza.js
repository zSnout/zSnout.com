import{B as N}from"./VStack.3evi6szx.js";import{D as T}from"./DocumentDisplay.6d0yf2eg.js";import{u as D}from"./main.200onzgm.js";import{S as O}from"./SharedNav.4z4l3m5g.js";import{l as v,b as B,x,C as S,D as u,u as H,a9 as y,z as G,r as A,y as E,F as d,G as I,H as K}from"./runtime-core.esm-bundler.47vl3tei.js";import{a as b}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";const P={class:"content"},R=v({__name:"Overlay",setup(C){const n=D("(max-width: 400px)"),l=B(()=>n.value?"2.5":"3.5");return(f,m)=>(x(),S(O,{class:"page-content","min-height":`calc(var(--app-height) - ${H(l)}rem)`,bottom:"",top:""},{default:u(()=>[y("div",P,[G(f.$slots,"default",{},void 0,!0)])]),_:3},8,["min-height"]))}});const $=b(R,[["__scopeId","data-v-6fcfb3c0"]]),j=v({__name:"trope-highlighter",setup(C){const n=A(),l={Etnachta:"ב֑",SofPassuk:"סֽ",Segol:"ב֒",Shalsheconst:"ב֓",ZakefKatan:"ב֔",ZakefGadol:"ב֕",Tifcha:"ב֖",Rivia:"ב֗",Zarka:"ב֮",Pashta:"ב֙",Yetiv:"ב֚",Tevir:"ב֛",Pazer:"ב֡",QarneFarah:"ב֟",TelishaGedola:"ב֠",Geresh:"ב֜",Gershayim:"ב֞",Mercha:"ב֥",Munach:"ב֣",Mahpach:"ב֤",Darga:"ב֧",Kadma:"ב֨",TelishaKetana:"ב֩",MerchaKefula:"ב֦",YerachBenYomo:"ב֪"};for(const[e,t]of Object.entries(l))l[e]=t[1];const f=Object.entries(l);function m(e){let t=-1,r=null;for(const[s,o]of f)e.indexOf(o)>t&&(t=e.indexOf(o),r=s);return r}function k(e){e.preventDefault();const t=e.clipboardData;if(!t)return;const r=t.getData("text/plain");if(!r)return;const s=document.getSelection();if(!s)return;const o=s.getRangeAt(0);o.deleteContents();const i=document.createTextNode(r);o.insertNode(i),o.selectNodeContents(i),o.collapse(!1),s.removeAllRanges(),s.addRange(o),M(),_()}function _(){if(!n.value)return;const e=[...n.value.childNodes].map(a=>(a.textContent||"").trim()).join(" ");if(!e)return;const t=document.createElement("span");t.textContent=e.trim().replace(/\s+/g," ");const i=t.innerHTML.split(" ").map(a=>({word:a,trope:m(a)})).map(({word:a,trope:p},c,g)=>p=="Munach"&&g[c+1].trope?{word:a,trope:`Munach${g[c+1].trope}`}:{word:a,trope:p}).map(({word:a,trope:p})=>{const c=document.createElement("span");return c.textContent=a,c.classList.add(p),c}),h=[i[0]];for(const a of i.slice(1))h.push(" ",a);n.value.replaceChildren(...h)}function M(){n.value&&n.value.classList.toggle("empty",!!n.value.textContent)}return(e,t)=>(x(),E(I,null,[d(T,null,{default:u(()=>[y("div",{ref_key:"field",ref:n,class:"field second-layer",contenteditable:"",onPaste:k}," ...Type or paste some Hebrew text here ",544)]),_:1}),d($,null,{default:u(()=>[d(N,{class:"color light",onClick:_},{default:u(()=>[K("Add Coloring")]),_:1})]),_:1})],64))}});const W=b(j,[["__scopeId","data-v-9df79b15"]]);export{W as default};
