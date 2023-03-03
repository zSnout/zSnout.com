import{d as F,r as c,a0 as H,a3 as D,o as s,f as u,y as W,n as P,u as e,a2 as I,ay as R,_ as N,z as U,e as l,w as n,F as y,a as r,t as m,b as g,v as L,O as k,c as w,az as $,k as M,p as Y,h as A}from"./index.4z0bzixf.js";import{_ as S}from"./_virtual_image-list.r1g9ayy6.js";import{D as E}from"./DocumentDisplay.6d0yf2eg.js";import{I as G}from"./ImageCard.2nlgu5dq.js";import{I as V}from"./InlineButton.12vhnjwt.js";import{L as T}from"./LargeTitle.364aftl6.js";import{_ as O}from"./BookmarkIcon.46krkaf8.js";import{S as Q}from"./SearchableCardGrid.7foww6wh.js";import{V as j}from"./VStack.3evi6szx.js";import{g as q,h as J}from"./useHomeIcons.5r6gk7v4.js";import{u as C}from"./useRandomItem.3s2ay99w.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js";import"./Title.4eiq6n5a.js";import"./Field.5c7fkv56.js";import"./CardGrid.1kdxvvm0.js";const K=["src"],X=F({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(i){const d=c(!1),v=c(Math.random()),_=c(Math.random()),{x:p,y:o}=H(),f=D(()=>I.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),h=D(()=>I.value<400?"1.5em":"2em"),a=c(!1);function t(){a.value||(a.value=!0,setTimeout(()=>{v.value=Math.random(),_.value=Math.random(),setTimeout(()=>{a.value=!1},300)}))}return(x,b)=>(s(),u("img",{class:W([{moving:a.value},"image"]),src:i.src,style:P({display:d.value?void 0:"none",top:`calc(${e(f)} + (var(--app-height) - ${e(f)} - ${e(h)} - 320px) * ${_.value} + ${e(o)-e(R)/2}px / 100 * ${i.sensitivity??1})`,left:`calc(${e(h)} + (var(--app-width) - 2 * ${e(h)} - 320px) * ${v.value} + ${e(p)-e(I)/2}px / 100 * ${i.sensitivity??1})`}),draggable:"false",onClick:t,onLoad:b[0]||(b[0]=ae=>d.value=!0)},null,46,K))}});const B=N(X,[["__scopeId","data-v-d9c7c519"]]),z=i=>(Y("data-v-6428f1b3"),i=i(),A(),i),Z={key:2},ee=z(()=>r("p",null," Looks like you've found the Help menu! Many pages on zSnout have this button in the top-right corner. Simply click it to reveal instructions and more details about the page you're viewing. ",-1)),te=z(()=>r("p",null,' Some of the cards on the homepage are marked with a triangle that says "menu." These pages lead to submenus with even more pages, such as Storymatic or the blog. ',-1)),se=z(()=>r("p",null,[r("strong",null,"Filter By:")],-1)),oe=F({__name:"home",setup(i){const d=C(S),v=C(S),_=C(S),p=c(!1),o=c(""),f=U("(min-width: 1080px)");return(h,a)=>(s(),u(y,null,[l(B,{class:"hide-600",src:e(d)},null,8,["src"]),l(B,{class:"hide-800",sensitivity:2,src:e(v)},null,8,["src"]),l(B,{sensitivity:3,src:e(_)},null,8,["src"]),l(O,{open:p.value,"onUpdate:open":a[0]||(a[0]=t=>p.value=t)},null,8,["open"]),l(E,null,{help:n(()=>[ee,te,r("p",null," You can also "+m(e(f)?"use the sidebar to filter the pages.":"use the table of contents to filter the pages."),1)]),aside:n(()=>[se,r("nav",null,[r("ul",null,[r("li",null,[l(V,{onClick:a[1]||(a[1]=t=>o.value="")},{default:n(()=>[g("Reset Filter")]),_:1})]),(s(!0),u(y,null,L(e(q),t=>(s(),u("li",{key:t},[l(V,{active:o.value===t,onClick:x=>o.value===t?o.value="":o.value=t},{default:n(()=>[g(m(t[0].toUpperCase()+t.slice(1)),1)]),_:2},1032,["active","onClick"])]))),128))])])]),default:n(()=>[l(j,{class:"stack",space:2},{default:n(()=>[e(k)?(s(),w(T,{key:0},{default:n(()=>[g(" Welcome to zSnout, "+m(e(k))+". ",1)]),_:1})):(s(),w(T,{key:1},{default:n(()=>[g("Welcome to zSnout.")]),_:1})),e(k)&&e($)!==!1?(s(),u("p",Z," Hey "+m(e(k))+"! Your account will be deleted in "+m(e($)>=120*1e3?`${~~(e($)/(60*1e3))} minutes`:`${~~(e($)/1e3)} seconds`)+" unless you verify it with the email we sent you. ",1)):M("",!0)]),_:1}),l(Q,{sizes:["normal","small","icon"]},{default:n(()=>[(s(!0),u(y,null,L(e(J),(t,x)=>(s(),u(y,{key:x},[!o.value||t.group.includes(o.value)?(s(),w(G,{key:0,alt:t.alt,description:t.description,keywords:t.keywords,label:t.isIndex?"menu":"",src:t.src,title:t.title,to:t.to==="login"?void 0:t.to,onClick:b=>t.to==="login"&&(p.value=!0)},null,8,["alt","description","keywords","label","src","title","to","onClick"])):M("",!0)],64))),128))]),_:1})]),_:1})],64))}});const Ie=N(oe,[["__scopeId","data-v-6428f1b3"]]);export{Ie as default};
