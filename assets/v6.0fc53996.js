import{T as U}from"./Title.d3d67b73.js";import{d as b,o as p,h as m,a as i,r as y,aq as h,f as F,ad as W,m as x,b as c,w as u,u as l,R as L,c as B,aw as j,p as R,l as M,t as _,aO as G,b1 as Y,b6 as C,b7 as K,aK as Z,F as H,ax as q,b8 as Q,e as z}from"./index.9c67cb4b.js";import{_ as J}from"./Logo.0937feee.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{h as P}from"./useHomeIcons.2e4cb2af.js";import"./LogoLight.9801d794.js";const X=b({__name:"SafeAreaLR",props:{keepWidth:{type:Boolean},keepHeight:{type:Boolean}},setup(e){return(s,t)=>(p(),m("div",{class:h([{"keep-width":e.keepWidth,"keep-height":e.keepHeight},"safe-area"])},[i("div",{class:h([{"keep-height":e.keepHeight},"constrained"])},[y(s.$slots,"default",{},void 0,!0)],2)],2))}});var $=k(X,[["__scopeId","data-v-7dfa2466"]]);const ee=b({__name:"SafeAreaTB",props:{explicitHeight:{type:Boolean}},setup(e){return(s,t)=>(p(),m("div",{class:h({"safe-area":!0,"explicit-height":e.explicitHeight})},[y(s.$slots,"default",{},void 0,!0)],2))}});var N=k(ee,[["__scopeId","data-v-7eb7cb63"]]);const ae=e=>(R("data-v-88671b1e"),e=e(),M(),e),te={class:"aligner"},ie=ae(()=>i("span",{class:"expander"},null,-1)),oe=b({__name:"Navigation",props:{floating:{type:Boolean}},setup(e){let s=F(`(max-width: ${415}px)`);W(s,v=>{v||(t.value=!1,r.value=!1)});let t=x(!1),r=x(!1);return(v,w)=>(p(),m("nav",{class:h({navigation:!0,floating:e.floating})},[c($,null,{default:u(()=>[i("div",te,[c(l(L),{class:"logo-link",to:"/"},{default:u(()=>[c(J,{class:"logo",invert:""})]),_:1}),ie,i("div",{class:h({"nav-links":!0,"passed-breakpoint":l(s),"drawer-open":l(t)})},[l(t)?(p(),B(j,{key:0,to:"#app"},[i("div",{class:h({"mobile-nav-outer":!0,floating:e.floating})},[i("div",{class:h({"mobile-nav-bg":!0,visible:l(r)})},null,2),c($,{class:"drawer-outer","keep-height":"","keep-width":""},{default:u(()=>[c(N,{class:h({drawer:!0,visible:l(r)}),"explicit-height":""},{default:u(()=>[y(v.$slots,"default",{},void 0,!0)]),_:3},8,["class"])]),_:3})],2)])):y(v.$slots,"default",{key:1},void 0,!0)],2)])]),_:3})],2))}});var ne=k(oe,[["__scopeId","data-v-88671b1e"]]);const re={class:"name"},se={class:"desc"},le={class:"name"},de={class:"desc"},ce=b({__name:"SearchItem",props:{title:null,to:null,description:null},setup(e){return(s,t)=>typeof e.to=="function"?(p(),m("a",{key:0,class:"focusline hoverline item second-layer",role:"button",onClick:t[0]||(t[0]=(...r)=>e.to&&e.to(...r))},[i("div",re,_(e.title),1),i("div",se,_(e.description),1)])):(p(),B(l(L),{key:1,class:"focusline hoverline item second-layer",to:e.to},{default:u(()=>[i("div",le,_(e.title),1),i("div",de,_(e.description),1)]),_:1},8,["to"]))}});var pe=k(ce,[["__scopeId","data-v-046456b0"]]);const ue={class:"search-box"},ve=b({__name:"SearchBar",props:{links:null,autofocus:{type:Boolean}},setup(e){var A;const{links:s,autofocus:t}=e;for(let a of s){let o=((A=a.keywords)==null?void 0:A.split(/\s+/))||[];o.push(...a.title.match(/\w+/g)),a.keywords=o.map(n=>n.toLowerCase()).join(" ")}let r=x("");function v(a,o){return o.trim()?o.trim().split(" ").every(n=>a.includes(n)):!0}function w(){return d.value?getComputedStyle(d.value).gridTemplateColumns.split(" ").length:0}function f(a){var n,S,E,T;t&&(a.key==="Escape"||a.key=="/")&&(a.preventDefault(),(n=g.value)==null||n.focus());let o=document.activeElement;if(g.value&&o==g.value)(a.key=="ArrowRight"||a.key=="ArrowDown")&&((S=d.value)==null?void 0:S.children[0]).focus();else if(d.value&&(o==null?void 0:o.parentElement)==d.value){if(a.key=="ArrowLeft")(E=o.previousElementSibling)==null||E.focus();else if(a.key=="ArrowRight")(T=o.nextElementSibling)==null||T.focus();else if(a.key=="ArrowUp"||a.key=="ArrowDown"){let O=w()*(a.key=="ArrowUp"?-1:1),V=Array.from(d.value.children).indexOf(o),D=Math.max(V+O,0);D=Math.min(D,d.value.children.length-1);let I=d.value.children[D];I==null||I.focus()}a.key.startsWith("Arrow")&&a.preventDefault()}}let g=x(null),d=x(null);return G(()=>{var a;t&&!scrollY&&!matchMedia("(pointer: coarse)").matches&&((a=g.value)==null||a.focus()),window.addEventListener("keydown",f)}),Y(()=>{window.removeEventListener("keydown",f)}),(a,o)=>(p(),m("div",ue,[C(i("input",{ref_key:"fieldEl",ref:g,"onUpdate:modelValue":o[0]||(o[0]=n=>Z(r)?r.value=n:r=n),class:"search second-layer focusline",placeholder:"Search...",type:"search"},null,512),[[K,l(r)]]),i("div",{ref_key:"linksEl",ref:d,class:"links"},[(p(!0),m(H,null,q(e.links,(n,S)=>C((p(),B(pe,{key:S,description:n.description,title:n.title,to:n.to},null,8,["description","title","to"])),[[Q,n.show||v(n.keywords,l(r).toLowerCase())]])),128))],512)]))}});var he=k(ve,[["__scopeId","data-v-44c9954e"]]);const fe=e=>(R("data-v-60843306"),e=e(),M(),e),ge=z("Welcome to zSnout!"),me=fe(()=>i("p",null,[z(" zSnout is collection of different projects created for fun by Zachary Sakowitz during COVID-19. Our source code is publicly available on our "),i("a",{href:"https://github.com/zSnout/zsnout.com"},"GitHub page,"),z(" meaning that anybody can help out by contributing code or reporting an "),i("a",{href:"https://github.com/zSnout/zsnout.com/issues/new/choose"}," issue or bug. "),z(" You can also "),i("a",{href:"https://store.zsnout.com/"},"buy a fractal shirt.")],-1)),be={class:"daily-tip"},ke=b({__name:"v6",setup(e){const s=['Double-click the "Escape" key to go home and focus the search bar.',"Bookmark a fractal page to save its location and equation forever.",'Hit the giant "zSnout" icon to go to the homepage.',"In the Fractal Generator, you can right-click to save a picture on desktop.","Copy the URL of a chess page (standard or auto flip) to save your game.","You're looking at the sixth major version of zSnout.",'Right-click the giant "zSnout" icon to choose a new theme.','Right-click the "Theme" button in the Fractal Explorer to go to the previous theme.'],t=new Date,r=t.getTimezoneOffset()*60*1e3,v=1e3*60*60*24,w=Math.floor((Date.now()-r)/v)-19061;let f=s[w%s.length];return t.getMonth()==2&&t.getDate()==15&&(f="Today is the birthday of the original zSnout, my dog Zorro."),t.getMonth()==3&&t.getDate()==1&&(f="Happy Halloween!"),t.getMonth()==3&&t.getDate()==3&&(f="Today is the anniversary of when zSnout was created in 2019!"),(g,d)=>(p(),m(H,null,[c(ne,{class:"navbar"},{default:u(()=>[y(g.$slots,"nav",{},void 0,!0)]),_:3}),c($,{class:"document","keep-height":""},{default:u(()=>[c(N,null,{default:u(()=>[i("main",null,[c(U,null,{default:u(()=>[ge]),_:1}),me,i("p",be,"Daily tip: "+_(l(f)),1),c(he,{class:"link-outer",links:l(P),autofocus:""},null,8,["links"])])]),_:1})]),_:1})],64))}});var De=k(ke,[["__scopeId","data-v-60843306"]]);export{De as default};
