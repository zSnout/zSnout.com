import{d as N,q as d,v as T,o as i,h as v,e as l,w as a,F as x,H as f,s as u,b as r,t as V,u as o,ac as $,a as g,i as k,c as C,E as _,aC as w}from"./index.1f86lsdq.js";import{B as y}from"./VStack.xad5wxbj.js";import{C as B}from"./Card.2fwl0iqw.js";import{C as L}from"./CardGrid.2ocy45od.js";import{D as b}from"./DocumentDisplay.633jhlro.js";import{F as D}from"./Field.2ydu2jt8.js";import{_ as E,M as F}from"./BookmarkIcon.1thszj4g.js";import{S as M}from"./SearchableCardGrid.4qzy9rf8.js";import{T as S}from"./Title.3fz2k97a.js";import"./useDateOf.86m05b59.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";function K(p){const n=document.createElement("p");return n.innerHTML=p,n.textContent||""}const O={key:0},q=g("p",null,"Pick a title for your note.",-1),c=d([]);f.on("notes:index",p=>c.value=p);const ee=N({__name:"my-notes",setup(p){const n=d(!1),m=d(!1),s=d("");return T(()=>{f.emit("notes:request:index",u.value)}),(G,e)=>(i(),v(x,null,[l(b,null,{default:a(()=>[l(S,null,{default:a(()=>[r(V(o($)?`${o($)}'s`:"My")+" Notes",1)]),_:1}),o(u)?k("",!0):(i(),v("p",O,[r(" Looks like you're not logged in. "),g("span",{class:"link",onClick:e[0]||(e[0]=t=>n.value=!0)},"Log in"),r(" or "),g("span",{class:"link",onClick:e[1]||(e[1]=t=>n.value=!0)},"create an account"),r(" to access the Notes app. ")])),o(u)&&c.value.length<100?(i(),C(L,{key:1,style:{"margin-bottom":"2em"}},{default:a(()=>[l(y,{onClick:e[2]||(e[2]=t=>(m.value=!0,s.value=""))},{default:a(()=>[r(" New Note ")]),_:1})]),_:1})):k("",!0),o(u)&&c.value.length?(i(),C(M,{key:2,placeholder:"Search your notes..."},{default:a(()=>[(i(!0),v(x,null,_(c.value,t=>(i(),C(B,{class:"card text-color",description:o(K)(t.desc),title:t.title,to:`/note?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):k("",!0)]),_:1}),l(E,{open:n.value,"onUpdate:open":e[3]||(e[3]=t=>n.value=t)},null,8,["open"]),l(F,{open:m.value},{buttons:a(()=>[l(y,{onClick:e[6]||(e[6]=t=>s.value&&(o(f).emit("notes:create",o(u),s.value),m.value=!1))},{default:a(()=>[r(" OK ")]),_:1}),l(y,{cancel:"",onClick:e[7]||(e[7]=t=>m.value=!1)},{default:a(()=>[r("Cancel")]),_:1})]),default:a(()=>[q,l(D,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=w(t=>s.value&&(o(f).emit("notes:create",o(u),s.value),m.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{ee as default};
