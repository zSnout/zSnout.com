import{d as M,at as W,o as _,h as k,e,i as j,w as s,a as t,r as d,n as B,F,_ as S,f as I,g as N,q as A,c as w,ao as T,ar as L,b as o,u as $,A as H,z as D,k as G,p as O,l as R}from"./index.180ycda5.js";import{i as E}from"./_virtual_image-list.566lvfae.js";import{S as l,H as q}from"./BookmarkIcon.3wmuqdow.js";import{L as Q}from"./LargeTitle.51mbggtu.js";import{M as h}from"./MiddleText.j1cutmtm.js";import{N as X,F as Y}from"./Navigation.2xu1kz2a.js";import{S as P}from"./SharedNav.238jku1n.js";import{T as b}from"./Title.3fz2k97a.js";import{V as f}from"./VStack.6d7g92uw.js";import{s as J}from"./useShuffle.65ly7ulv.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";const K="/100-free.webp",U="/github.webp",Z=M({__name:"MultiPageDisplay",props:{snap:{type:Boolean}},setup(i){const r=i,y=W("--snap");return y.value=r.snap?"y mandatory":"none",(n,v)=>(_(),k(F,null,[e(X,null,j({_:2},[n.$slots.aside?{name:"aside",fn:s(()=>[d(n.$slots,"aside",{},void 0,!0)]),key:"0"}:void 0,n.$slots.buttons?{name:"buttons",fn:s(()=>[d(n.$slots,"buttons",{},void 0,!0)]),key:"1"}:void 0,n.$slots.help?{name:"help",fn:s(()=>[d(n.$slots,"help",{},void 0,!0)]),key:"2"}:void 0,n.$slots.indicator?{name:"indicator",fn:s(()=>[d(n.$slots,"indicator",{},void 0,!0)]),key:"3"}:void 0,n.$slots.options?{name:"options",fn:s(()=>[d(n.$slots,"options",{},void 0,!0)]),key:"4"}:void 0]),1024),t("div",{class:B([{aside:!!n.$slots.aside},"content"])},[d(n.$slots,"default",{},void 0,!0)],2),e(Y,{class:"footer",aside:!!n.$slots.aside},null,8,["aside"])],64))}});const ee=S(Z,[["__scopeId","data-v-8387d0d0"]]);const te={},se={class:"page"};function oe(i,r){return _(),k("section",se,[d(i.$slots,"default",{},void 0,!0)])}const m=S(te,[["render",oe],["__scopeId","data-v-e5ed5b51"]]),ae={key:0,class:"centered"},ne={key:1,style:{flex:"1",display:"flex"}},ie=M({__name:"PageContent",props:{center:{type:Boolean},maxWidth:{type:Boolean}},setup(i){return(r,y)=>i.center?(_(),k("div",ae,[e(l),e(P,{"max-width":i.maxWidth,bottom:"",top:""},{default:s(()=>[d(r.$slots,"default",{},void 0,!0)]),_:3},8,["max-width"]),e(l)])):(_(),k("div",ne,[e(P,{"max-width":i.maxWidth,bottom:"",style:{flex:"1"},top:""},{default:s(()=>[d(r.$slots,"default",{},void 0,!0)]),_:3},8,["max-width"])]))}});const g=S(ie,[["__scopeId","data-v-c7c60a3e"]]),a=i=>(O("data-v-2e3e2290"),i=i(),R(),i),le=a(()=>t("span",{class:"text-color zsnout-is"},"zSnout is...",-1)),ce={class:"topic no-link",href:"#no-cost"},de={class:"topic no-link",href:"#ad-free"},re={class:"topic no-link",href:"#open-source"},ue={class:"topic no-link",href:"#fun"},_e=a(()=>t("span",{class:"zsnout-is"},"zSnout is...",-1)),pe=a(()=>t("a",{class:"topic no-link",href:"#no-cost"},"no cost",-1)),he=a(()=>t("a",{class:"topic no-link",href:"#ad-free"},"ad free",-1)),fe=a(()=>t("a",{class:"topic no-link",href:"#open-source"},"open source",-1)),me=a(()=>t("a",{class:"topic no-link",href:"#fun"},"fun",-1)),ge={class:"read-more"},ye=a(()=>t("br",null,null,-1)),ve=a(()=>t("img",{class:"icon-image",alt:"A sticker saying '100% free'",draggable:"false",src:K},null,-1)),be=[ve],ke=a(()=>t("a",{href:"https://store.zsnout.com/"},"buying a shirt would really help us",-1)),Se=a(()=>t("a",{href:"https://store.zsnout.com/"},"the zSnout store",-1)),xe=a(()=>t("img",{class:"icon-image",alt:"The GitHub logo",draggable:"false",src:U},null,-1)),ze=a(()=>t("div",{class:"icon-label"},[o(" GitHub's "),t("br"),o(" octocat ")],-1)),we=[xe,ze],$e=a(()=>t("a",{href:"https://github.com/zSnout/zSnout.com"},"GitHub",-1)),Me=a(()=>t("a",{href:"https://vuejs.org/"},"Vue",-1)),Ce=a(()=>t("span",null,",\xA0",-1)),Ae=a(()=>t("a",{href:"https://typescriptlang.org/"},"TypeScript",-1)),He=a(()=>t("span",null,",\xA0",-1)),Pe=a(()=>t("a",{href:"https://sass-lang.com/"},"Sass",-1)),Ve=a(()=>t("span",null,",\xA0",-1)),We=a(()=>t("a",{href:"https://vitejs.dev/"},"Vite",-1)),je=a(()=>t("span",null,".",-1)),Be=a(()=>t("li",null,[t("a",{href:"#no-cost"},"No Cost")],-1)),Fe=a(()=>t("li",null,[t("a",{href:"#ad-free"},"Ad Free")],-1)),Ie=a(()=>t("li",null,[t("a",{href:"#open-source"},"Open Source")],-1)),Ne=a(()=>t("li",null,[t("a",{href:"#fun"},"Fun")],-1)),Te=M({__name:"index",setup(i){D(u=>({"6164692d":v.value,"6164692e":x.value}));const r=I("(min-width: 775px)"),y=J(E),n=N(()=>{const u=Math.ceil(T.value/320),p=Math.ceil(L.value/320);return{"background-image":y.map(c=>`url("${c}")`).join(", "),"background-repeat":"no-repeat","background-size":"320px 320px","background-position":Array(p).fill(Array(u).fill()).map((c,z)=>c.map((Le,V)=>`${320*V}px ${320*z}px`).join(", ")).join(", ")}}),v=A(Math.random()),x=A(Math.random());function C(){const u=v.value<.5?0:.5,p=x.value<.5?0:.5,[c,z]=Math.random()<.33?[.5-u,p]:Math.random()<.5?[u,.5-p]:[.5-u,.5-p];v.value=Math.random()/2+c,x.value=Math.random()/2+z}return(u,p)=>{const c=G("RouterLink");return _(),w(ee,{snap:""},{aside:s(()=>[t("nav",null,[t("ul",null,[Be,Fe,Ie,Ne,t("li",null,[e(c,{to:"/home"},{default:s(()=>[o("Explore the Site")]),_:1})])])])]),default:s(()=>[e(m,{style:H($(n))},{default:s(()=>[e(g,{class:"content",center:""},{default:s(()=>[e(Q,null,{default:s(()=>[o("Welcome to zSnout.")]),_:1}),$(r)?(_(),w(q,{key:0,space:2},{default:s(()=>[e(l),e(f,{space:0},{default:s(()=>[le,e(l,{size:4})]),_:1}),t("a",ce,[e(f,{space:0},{default:s(()=>[e(l),o(" no cost "),e(l,{size:3})]),_:1})]),t("a",de,[e(f,{space:0},{default:s(()=>[e(l,{size:2}),o(" ad free "),e(l,{size:2})]),_:1})]),t("a",re,[e(f,{space:0},{default:s(()=>[e(l,{size:3}),o(" open source "),e(l)]),_:1})]),t("a",ue,[e(f,{space:0},{default:s(()=>[e(l,{size:4}),o(" fun ")]),_:1})]),e(l)]),_:1})):(_(),w(f,{key:1,style:{"text-align":"center"}},{default:s(()=>[_e,pe,he,fe,me]),_:1})),t("p",ge,[o(" Read more by scrolling down, "),ye,o(" or "),e(c,{to:"/home"},{default:s(()=>[o("explore the site")]),_:1}),o(". ")])]),_:1})]),_:1},8,["style"]),e(m,{id:"no-cost"},{default:s(()=>[e(g,{class:"content",center:""},{default:s(()=>[t("div",{class:"icon icon-free",onClick:C},be),e(b,{class:"fit"},{default:s(()=>[o("No Cost")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" Making zSnout free is an important goal for us. We've seen too many amazing websites ruined by price gates and high costs. zSnout aims to be as free as possible. However, web hosting still costs a lot, so "),ke,o(". ")]),_:1})]),_:1})]),_:1}),e(m,{id:"ad-free"},{default:s(()=>[e(g,{class:"content",center:""},{default:s(()=>[e(b,{class:"fit"},{default:s(()=>[o("Ad Free")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" Have you ever explored an amazing site but have found it peppered by ads? Same here. At zSnout, we don't want to ruin your browsing experience by creating intrusive ads, so we choose to omit them. ")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" While ads usually help a developer with revenue from the site, we let the user choose to help us out with "),Se,o(". ")]),_:1})]),_:1})]),_:1}),e(m,{id:"open-source"},{default:s(()=>[e(g,{class:"content",center:""},{default:s(()=>[t("div",{class:"icon icon-github",onClick:C},we),e(b,{class:"fit"},{default:s(()=>[o("Open Source")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" Open source is really important to zSnout. We use "),$e,o(" to manage our website. By making zSnout open source, we also give users the opportunity to submit feedback and help us. Click the GitHub logo anytime in the navigation bar to head to our codebase. ")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" We also use countless open source projects, including "),Me,Ce,Ae,He,Pe,Ve,o(" and "),We,je]),_:1})]),_:1})]),_:1}),e(m,{id:"fun",style:H($(n))},{default:s(()=>[e(g,{class:"content",center:""},{default:s(()=>[e(b,{class:"fit"},{default:s(()=>[o("Fun")]),_:1}),e(h,{class:"desc"},{default:s(()=>[o(" zSnout would not be complete without mentioning how fun it is to go around the site and explore every corner of the zSnout world, so let's get you exploring! Start out by going to "),e(c,{to:"/home"},{default:s(()=>[o("zSnout's homepage")]),_:1}),o(" and picking out someplace to explore. ")]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})}}});const et=S(Te,[["__scopeId","data-v-2e3e2290"]]);export{et as default};
