import{d as S,q as d,v as V,o as n,h as v,e as l,w as o,F as g,H as p,s as i,b as r,t as _,u as a,ac as x,a as C,i as c,c as k,E as w,aC as B}from"./index.3672xjxd.js";import{B as y}from"./VStack.xad5wxbj.js";import{C as T}from"./Card.2fwl0iqw.js";import{C as N}from"./CardGrid.2ocy45od.js";import{D as b}from"./DocumentDisplay.633jhlro.js";import{F as D}from"./Field.2ydu2jt8.js";import{_ as F,M as L}from"./BookmarkIcon.3wmuqdow.js";import{S as E}from"./SearchableCardGrid.4qzy9rf8.js";import{T as K}from"./Title.3fz2k97a.js";import"./useDateOf.86m05b59.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const M={key:0},O=C("p",null,"Pick a title for your story.",-1),f=d([]);p.on("story:index",$=>f.value=$);const Z=S({__name:"my-stories",setup($){const m=d(!1),u=d(!1),s=d("");return V(()=>{p.emit("story:request:index",i.value)}),(q,e)=>(n(),v(g,null,[l(b,null,{default:o(()=>[l(K,null,{default:o(()=>[r(_(a(x)?`${a(x)}'s`:"My")+" Stories",1)]),_:1}),a(i)?c("",!0):(n(),v("p",M,[r(" Looks like you're not logged in. "),C("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),r(" or "),C("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),r(" to access the Stories app. ")])),a(i)&&f.value.length<100?(n(),k(N,{key:1,style:{"margin-bottom":"2em"}},{default:o(()=>[l(y,{onClick:e[2]||(e[2]=t=>(u.value=!0,s.value=""))},{default:o(()=>[r(" New Story ")]),_:1})]),_:1})):c("",!0),a(i)&&f.value.length?(n(),k(E,{key:2,placeholder:"Search your stories..."},{default:o(()=>[(n(!0),v(g,null,w(f.value,t=>(n(),k(T,{class:"card text-color",description:`${t.activeThreadCount} active threads.`,title:t.title,to:`/story?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):c("",!0)]),_:1}),l(F,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(L,{open:u.value},{buttons:o(()=>[l(y,{onClick:e[6]||(e[6]=t=>s.value&&(a(p).emit("story:create",a(i),s.value),u.value=!1))},{default:o(()=>[r(" OK ")]),_:1}),l(y,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:o(()=>[r("Cancel")]),_:1})]),default:o(()=>[O,l(D,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=B(t=>s.value&&(a(p).emit("story:create",a(i),s.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{Z as default};
