import{T as U}from"./Title.d65e63d8.js";import{d as b,o as f,f as m,a as i,q as y,av as v,b4 as F,ai as W,s as x,b as c,w as p,u as s,R as L,c as A,aA as j,p as M,g as R,t as k,aM as G,b0 as Y,b5 as C,b6 as Z,aI as q,F as H,k as K,b7 as Q,e as z}from"./index.5081a4d9.js";import{_ as J}from"./Logo.2f327a57.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{h as P}from"./useHomeIcons.55a712b1.js";import"./LogoLight.9c1b4e00.js";const X=b({__name:"SafeAreaLR",props:{keepWidth:{type:Boolean},keepHeight:{type:Boolean}},setup(e){return(d,t)=>(f(),m("div",{class:v([{"keep-width":e.keepWidth,"keep-height":e.keepHeight},"safe-area"])},[i("div",{class:v([{"keep-height":e.keepHeight},"constrained"])},[y(d.$slots,"default",{},void 0,!0)],2)],2))}});var $=_(X,[["__scopeId","data-v-7dfa2466"]]);const ee=b({__name:"SafeAreaTB",props:{explicitHeight:{type:Boolean}},setup(e){return(d,t)=>(f(),m("div",{class:v({"safe-area":!0,"explicit-height":e.explicitHeight})},[y(d.$slots,"default",{},void 0,!0)],2))}});var N=_(ee,[["__scopeId","data-v-7eb7cb63"]]);const ae=e=>(M("data-v-df9fb79a"),e=e(),R(),e),te={class:"aligner"},ie=ae(()=>i("span",{class:"expander"},null,-1)),oe=b({__name:"Navigation",props:{floating:{type:Boolean}},setup(e){let d=F(`(max-width: ${415}px)`);W(d,u=>{u||(t.value=!1,r.value=!1)});let t=x(!1),r=x(!1);return(u,w)=>(f(),m("nav",{class:v({navigation:!0,floating:e.floating})},[c($,null,{default:p(()=>[i("div",te,[c(s(L),{class:"logo-link",to:"/"},{default:p(()=>[c(J,{class:"logo",invert:""})]),_:1}),ie,i("div",{class:v({"nav-links":!0,"passed-breakpoint":s(d),"drawer-open":s(t)})},[s(t)?(f(),A(j,{key:0,to:"#app"},[i("div",{class:v({"mobile-nav-outer":!0,floating:e.floating})},[i("div",{class:v({"mobile-nav-bg":!0,visible:s(r)})},null,2),c($,{class:"drawer-outer","keep-height":"","keep-width":""},{default:p(()=>[c(N,{class:v({drawer:!0,visible:s(r)}),"explicit-height":""},{default:p(()=>[y(u.$slots,"default",{},void 0,!0)]),_:3},8,["class"])]),_:3})],2)])):y(u.$slots,"default",{key:1},void 0,!0)],2)])]),_:3})],2))}});var ne=_(oe,[["__scopeId","data-v-df9fb79a"]]);const re={class:"name"},de={class:"desc"},se={class:"name"},le={class:"desc"},ce=b({__name:"SearchItem",props:{title:null,to:null,description:null},setup(e){return(d,t)=>typeof e.to=="function"?(f(),m("a",{key:0,class:"focusline hoverline item second-layer",role:"button",onClick:t[0]||(t[0]=(...r)=>e.to&&e.to(...r))},[i("div",re,k(e.title),1),i("div",de,k(e.description),1)])):(f(),A(s(L),{key:1,class:"focusline hoverline item second-layer",to:e.to},{default:p(()=>[i("div",se,k(e.title),1),i("div",le,k(e.description),1)]),_:1},8,["to"]))}});var fe=_(ce,[["__scopeId","data-v-046456b0"]]);const pe={class:"search-box"},ue=b({__name:"SearchBar",props:{links:null,autofocus:{type:Boolean}},setup(e){var B;const{links:d,autofocus:t}=e;for(let a of d){let o=((B=a.keywords)==null?void 0:B.split(/\s+/))||[];o.push(...a.title.match(/\w+/g)),a.keywords=o.map(n=>n.toLowerCase()).join(" ")}let r=x("");function u(a,o){return o.trim()?o.trim().split(" ").every(n=>a.includes(n)):!0}function w(){return l.value?getComputedStyle(l.value).gridTemplateColumns.split(" ").length:0}function h(a){var n,S,E,T;t&&(a.key==="Escape"||a.key=="/")&&(a.preventDefault(),(n=g.value)==null||n.focus());let o=document.activeElement;if(g.value&&o==g.value)(a.key=="ArrowRight"||a.key=="ArrowDown")&&((S=l.value)==null?void 0:S.children[0]).focus();else if(l.value&&(o==null?void 0:o.parentElement)==l.value){if(a.key=="ArrowLeft")(E=o.previousElementSibling)==null||E.focus();else if(a.key=="ArrowRight")(T=o.nextElementSibling)==null||T.focus();else if(a.key=="ArrowUp"||a.key=="ArrowDown"){let O=w()*(a.key=="ArrowUp"?-1:1),V=Array.from(l.value.children).indexOf(o),I=Math.max(V+O,0);I=Math.min(I,l.value.children.length-1);let D=l.value.children[I];D==null||D.focus()}a.key.startsWith("Arrow")&&a.preventDefault()}}let g=x(null),l=x(null);return G(()=>{var a;t&&!scrollY&&!matchMedia("(pointer: coarse)").matches&&((a=g.value)==null||a.focus()),window.addEventListener("keydown",h)}),Y(()=>{window.removeEventListener("keydown",h)}),(a,o)=>(f(),m("div",pe,[C(i("input",{ref_key:"fieldEl",ref:g,"onUpdate:modelValue":o[0]||(o[0]=n=>q(r)?r.value=n:r=n),class:"search second-layer focusline",placeholder:"Search...",type:"search"},null,512),[[Z,s(r)]]),i("div",{ref_key:"linksEl",ref:l,class:"links"},[(f(!0),m(H,null,K(e.links,(n,S)=>C((f(),A(fe,{key:S,description:n.description,title:n.title,to:n.to},null,8,["description","title","to"])),[[Q,n.show||u(n.keywords,s(r).toLowerCase())]])),128))],512)]))}});var ve=_(ue,[["__scopeId","data-v-44c9954e"]]);const he=e=>(M("data-v-60843306"),e=e(),R(),e),ge=z("Welcome to zSnout!"),me=he(()=>i("p",null,[z(" zSnout is collection of different projects created for fun by Zachary Sakowitz during COVID-19. Our source code is publicly available on our "),i("a",{href:"https://github.com/zSnout/zsnout.com"},"GitHub page,"),z(" meaning that anybody can help out by contributing code or reporting an "),i("a",{href:"https://github.com/zSnout/zsnout.com/issues/new/choose"}," issue or bug. "),z(" You can also "),i("a",{href:"https://store.zsnout.com/"},"buy a fractal shirt.")],-1)),be={class:"daily-tip"},_e=b({__name:"v6",setup(e){const d=['Double-click the "Escape" key to go home and focus the search bar.',"Bookmark a fractal page to save its location and equation forever.",'Hit the giant "zSnout" icon to go to the homepage.',"In the Fractal Generator, you can right-click to save a picture on desktop.","Copy the URL of a chess page (standard or auto flip) to save your game.","You're looking at the sixth major version of zSnout.",'Right-click the giant "zSnout" icon to choose a new theme.','Right-click the "Theme" button in the Fractal Explorer to go to the previous theme.'],t=new Date,r=t.getTimezoneOffset()*60*1e3,u=1e3*60*60*24,w=Math.floor((Date.now()-r)/u)-19061;let h=d[w%d.length];return t.getMonth()==2&&t.getDate()==15&&(h="Today is the birthday of the original zSnout, my dog Zorro."),t.getMonth()==3&&t.getDate()==1&&(h="Happy Halloween!"),t.getMonth()==3&&t.getDate()==3&&(h="Today is the anniversary of when zSnout was created in 2019!"),(g,l)=>(f(),m(H,null,[c(ne,{class:"navbar"},{default:p(()=>[y(g.$slots,"nav",{},void 0,!0)]),_:3}),c($,{class:"document","keep-height":""},{default:p(()=>[c(N,null,{default:p(()=>[i("main",null,[c(U,null,{default:p(()=>[ge]),_:1}),me,i("p",be,"Daily tip: "+k(s(h)),1),c(ve,{class:"link-outer",links:s(P),autofocus:""},null,8,["links"])])]),_:1})]),_:1})],64))}});var Ie=_(_e,[["__scopeId","data-v-60843306"]]);export{Ie as default};