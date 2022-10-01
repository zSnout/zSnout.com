import{T as U}from"./Title.3fz2k97a.js";import{d as y,o as d,h as v,a as o,r as b,n as p,_ as g,f as F,a1 as W,q as w,e as u,w as f,u as r,R as L,c as B,T as Y,p as M,l as R,t as k,Y as j,a2 as G,ad as C,ap as q,M as Z,F as H,E as K,aq as Q,b as D}from"./index.5v55a00n.js";import{_ as J}from"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import{h as P}from"./useHomeIcons.4vdkpbsq.js";import"./LogoLight.539ztpd2.js";const X=y({__name:"SafeAreaLR",props:{keepWidth:{type:Boolean},keepHeight:{type:Boolean}},setup(e){return(i,a)=>(d(),v("div",{class:p([{"keep-width":e.keepWidth,"keep-height":e.keepHeight},"safe-area"])},[o("div",{class:p([{"keep-height":e.keepHeight},"constrained"])},[b(i.$slots,"default",{},void 0,!0)],2)],2))}});const z=g(X,[["__scopeId","data-v-798272ce"]]),ee=y({__name:"SafeAreaTB",props:{explicitHeight:{type:Boolean}},setup(e){return(i,a)=>(d(),v("div",{class:p({"safe-area":!0,"explicit-height":e.explicitHeight})},[b(i.$slots,"default",{},void 0,!0)],2))}});const N=g(ee,[["__scopeId","data-v-b676e466"]]),te=e=>(M("data-v-38c14614"),e=e(),R(),e),ae={class:"aligner"},oe=te(()=>o("span",{class:"expander"},null,-1)),se=y({__name:"Navigation",props:{floating:{type:Boolean}},setup(e){let i=F(`(max-width: ${415}px)`);W(i,h=>{h||(a.value=!1,l.value=!1)});let a=w(!1),l=w(!1);return(h,S)=>(d(),v("nav",{class:p({navigation:!0,floating:e.floating})},[u(z,null,{default:f(()=>[o("div",ae,[u(r(L),{class:"logo-link",to:"/"},{default:f(()=>[u(J,{class:"logo",invert:""})]),_:1}),oe,o("div",{class:p({"nav-links":!0,"passed-breakpoint":r(i),"drawer-open":r(a)})},[r(a)?(d(),B(Y,{key:0,to:"#app"},[o("div",{class:p({"mobile-nav-outer":!0,floating:e.floating})},[o("div",{class:p({"mobile-nav-bg":!0,visible:r(l)})},null,2),u(z,{class:"drawer-outer","keep-height":"","keep-width":""},{default:f(()=>[u(N,{class:p({drawer:!0,visible:r(l)}),"explicit-height":""},{default:f(()=>[b(h.$slots,"default",{},void 0,!0)]),_:3},8,["class"])]),_:3})],2)])):b(h.$slots,"default",{key:1},void 0,!0)],2)])]),_:3})],2))}});const ne=g(se,[["__scopeId","data-v-38c14614"]]),le={class:"name"},ie={class:"desc"},re={class:"name"},ce={class:"desc"},ue=y({__name:"SearchItem",props:{title:null,to:null,description:null},setup(e){return(i,a)=>typeof e.to=="function"?(d(),v("a",{key:0,class:"focusline hoverline item second-layer",role:"button",onClick:a[0]||(a[0]=(...l)=>e.to&&e.to(...l))},[o("div",le,k(e.title),1),o("div",ie,k(e.description),1)])):(d(),B(r(L),{key:1,class:"focusline hoverline item second-layer",to:e.to},{default:f(()=>[o("div",re,k(e.title),1),o("div",ce,k(e.description),1)]),_:1},8,["to"]))}});const de=g(ue,[["__scopeId","data-v-b45b5139"]]),fe={class:"search-box"},he=y({__name:"SearchBar",props:{links:null,autofocus:{type:Boolean}},setup(e){var A;const{links:i,autofocus:a}=e;for(let t of i){let s=((A=t.keywords)==null?void 0:A.split(/\s+/))||[];s.push(...t.title.match(/\w+/g)),t.keywords=s.map(n=>n.toLowerCase()).join(" ")}let l=w("");function h(t,s){return s.trim()?s.trim().split(" ").every(n=>t.includes(n)):!0}function S(){return c.value?getComputedStyle(c.value).gridTemplateColumns.split(" ").length:0}function _(t){var n,x,E,T;a&&(t.key==="Escape"||t.key=="/")&&(t.preventDefault(),(n=m.value)==null||n.focus());let s=document.activeElement;if(m.value&&s==m.value)(t.key=="ArrowRight"||t.key=="ArrowDown")&&((x=c.value)==null?void 0:x.children[0]).focus();else if(c.value&&(s==null?void 0:s.parentElement)==c.value){if(t.key=="ArrowLeft")(E=s.previousElementSibling)==null||E.focus();else if(t.key=="ArrowRight")(T=s.nextElementSibling)==null||T.focus();else if(t.key=="ArrowUp"||t.key=="ArrowDown"){let O=S()*(t.key=="ArrowUp"?-1:1),V=Array.from(c.value.children).indexOf(s),I=Math.max(V+O,0);I=Math.min(I,c.value.children.length-1);let $=c.value.children[I];$==null||$.focus()}t.key.startsWith("Arrow")&&t.preventDefault()}}let m=w(null),c=w(null);return j(()=>{var t;a&&!scrollY&&!matchMedia("(pointer: coarse)").matches&&((t=m.value)==null||t.focus()),window.addEventListener("keydown",_)}),G(()=>{window.removeEventListener("keydown",_)}),(t,s)=>(d(),v("div",fe,[C(o("input",{ref_key:"fieldEl",ref:m,"onUpdate:modelValue":s[0]||(s[0]=n=>Z(l)?l.value=n:l=n),class:"search second-layer focusline",placeholder:"Search...",type:"search"},null,512),[[q,r(l)]]),o("div",{ref_key:"linksEl",ref:c,class:"links"},[(d(!0),v(H,null,K(e.links,(n,x)=>C((d(),B(de,{key:x,description:n.description,title:n.title,to:n.to},null,8,["description","title","to"])),[[Q,n.show||h(n.keywords,r(l).toLowerCase())]])),128))],512)]))}});const pe=g(he,[["__scopeId","data-v-70224187"]]),_e=e=>(M("data-v-46b9b8fa"),e=e(),R(),e),me=_e(()=>o("p",null,[D(" zSnout is collection of different projects created for fun by Zachary Sakowitz during COVID-19. Our source code is publicly available on our "),o("a",{href:"https://github.com/zSnout/zsnout.com"},"GitHub page,"),D(" meaning that anybody can help out by contributing code or reporting an "),o("a",{href:"https://github.com/zSnout/zsnout.com/issues/new/choose"}," issue or bug. "),D(" You can also "),o("a",{href:"https://store.zsnout.com/"},"buy a fractal shirt.")],-1)),ve={class:"daily-tip"},ye=y({__name:"v6",setup(e){const i=['Double-click the "Escape" key to go home and focus the search bar.',"Bookmark a fractal page to save its location and equation forever.",'Hit the giant "zSnout" icon to go to the homepage.',"In the Fractal Generator, you can right-click to save a picture on desktop.","Copy the URL of a chess page (standard or auto flip) to save your game.","You're looking at the sixth major version of zSnout.",'Right-click the giant "zSnout" icon to choose a new theme.','Right-click the "Theme" button in the Fractal Explorer to go to the previous theme.'],a=new Date,l=a.getTimezoneOffset()*60*1e3,h=1e3*60*60*24,S=Math.floor((Date.now()-l)/h)-19061;let _=i[S%i.length];return a.getMonth()==2&&a.getDate()==15&&(_="Today is the birthday of the original zSnout, my dog Zorro."),a.getMonth()==3&&a.getDate()==1&&(_="Happy Halloween!"),a.getMonth()==3&&a.getDate()==3&&(_="Today is the anniversary of when zSnout was created in 2019!"),(m,c)=>(d(),v(H,null,[u(ne,{class:"navbar"},{default:f(()=>[b(m.$slots,"nav",{},void 0,!0)]),_:3}),u(z,{class:"document","keep-height":""},{default:f(()=>[u(N,null,{default:f(()=>[o("main",null,[u(U,null,{default:f(()=>[D("Welcome to zSnout!")]),_:1}),me,o("p",ve,"Daily tip: "+k(r(_)),1),u(pe,{class:"link-outer",links:r(P),autofocus:""},null,8,["links"])])]),_:1})]),_:1})],64))}});const xe=g(ye,[["__scopeId","data-v-46b9b8fa"]]);export{xe as default};
