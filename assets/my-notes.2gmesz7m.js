import{d as $,q as p,v as N,o as i,h as v,b as a,w as n,F as g,H as c,s as u,e as r,t as T,u as o,ab as x,a as y,j as _,c as k,E as V,av as w}from"./index.4yzzgtk3.js";import{B as C}from"./VStack.6d7g92uw.js";import{C as B}from"./Card.2ut4kidc.js";import{C as b}from"./CardGrid.15cj8hvu.js";import{D as h}from"./DocumentDisplay.1u3n8z7b.js";import{_ as L,M as D,F as E}from"./BookmarkIcon.108uetaj.js";import{S as F}from"./SearchableCardGrid.h7b6h50y.js";import{T as M}from"./Title.3fz2k97a.js";import"./index.5exuk2yo.js";import"./useDateOf.86m05b59.js";import"./Navigation.3ml0eptj.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";function S(m){const l=document.createElement("p");return l.innerHTML=m,l.textContent||""}const K={key:0},O=r(" Looks like you're not logged in. "),q=r(" or "),G=r(" to access the Notes app. "),H=r(" New Note "),P=y("p",null,"Pick a title for your note.",-1),U=r(" OK "),j=r("Cancel"),f=p([]);c.on("notes:index",m=>f.value=m);const le=$({__name:"my-notes",setup(m){const l=p(!1),d=p(!1),s=p("");return N(()=>{c.emit("notes:request:index",u.value)}),(I,e)=>(i(),v(g,null,[a(h,null,{default:n(()=>[a(M,null,{default:n(()=>[r(T(o(x)?`${o(x)}'s`:"My")+" Notes",1)]),_:1}),o(u)?_("",!0):(i(),v("p",K,[O,y("span",{class:"link",onClick:e[0]||(e[0]=t=>l.value=!0)},"Log in"),q,y("span",{class:"link",onClick:e[1]||(e[1]=t=>l.value=!0)},"create an account"),G])),o(u)&&f.value.length<100?(i(),k(b,{key:1,style:{"margin-bottom":"2em"}},{default:n(()=>[a(C,{onClick:e[2]||(e[2]=t=>(d.value=!0,s.value=""))},{default:n(()=>[H]),_:1})]),_:1})):_("",!0),o(u)&&f.value.length?(i(),k(F,{key:2,placeholder:"Search your notes..."},{default:n(()=>[(i(!0),v(g,null,V(f.value,t=>(i(),k(B,{class:"card text-color",description:o(S)(t.desc),title:t.title,to:`/note?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):_("",!0)]),_:1}),a(L,{open:l.value,"onUpdate:open":e[3]||(e[3]=t=>l.value=t)},null,8,["open"]),a(D,{open:d.value},{buttons:n(()=>[a(C,{onClick:e[6]||(e[6]=t=>s.value&&(o(c).emit("notes:create",o(u),s.value),d.value=!1))},{default:n(()=>[U]),_:1}),a(C,{cancel:"",onClick:e[7]||(e[7]=t=>d.value=!1)},{default:n(()=>[j]),_:1})]),default:n(()=>[P,a(E,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=w(t=>s.value&&(o(c).emit("notes:create",o(u),s.value),d.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{le as default};
