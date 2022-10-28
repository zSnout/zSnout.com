import{d as w,q as p,v as x,o as r,h as f,e as l,w as a,F as g,H as d,s as i,b as s,t as V,u as o,ac as $,a as h,i as v,c as C,E as _,aC as B}from"./index.5g74v6w3.js";import{B as k}from"./VStack.xad5wxbj.js";import{C as T}from"./Card.2fwl0iqw.js";import{C as b}from"./CardGrid.2ocy45od.js";import{D}from"./DocumentDisplay.633jhlro.js";import{F}from"./Field.2ydu2jt8.js";import{_ as L,M as N}from"./BookmarkIcon.3wmuqdow.js";import{S}from"./SearchableCardGrid.4qzy9rf8.js";import{T as Y}from"./Title.3fz2k97a.js";import"./useDateOf.86m05b59.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.5co93amo.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const E={key:0},K=h("p",null,"Pick a title for your chat.",-1),c=p([]);d.on("chat:index",y=>c.value=y);const Z=w({__name:"my-chats",setup(y){const m=p(!1),u=p(!1),n=p("");return x(()=>{d.emit("chat:request:index",i.value)}),(M,e)=>(r(),f(g,null,[l(D,null,{default:a(()=>[l(Y,null,{default:a(()=>[s(V(o($)?`${o($)}'s`:"My")+" Chats",1)]),_:1}),o(i)?v("",!0):(r(),f("p",E,[s(" Looks like you're not logged in. "),h("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),s(" or "),h("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),s(" to access the Chat app. ")])),o(i)&&c.value.length<100?(r(),C(b,{key:1,style:{"margin-bottom":"2em"}},{default:a(()=>[l(k,{onClick:e[2]||(e[2]=t=>(u.value=!0,n.value=""))},{default:a(()=>[s(" Create a Chat ")]),_:1})]),_:1})):v("",!0),o(i)&&c.value.length?(r(),C(S,{key:2,placeholder:"Search your chat groups..."},{default:a(()=>[(r(!0),f(g,null,_(c.value,t=>(r(),C(T,{class:"card text-color",description:t.level==="manage"?"You manage this chat.":t.level==="comment"?"You may comment on this chat.":t.level==="view"?"You can view this chat.":"You cannot access this chat.",title:t.title,to:`/chat?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):v("",!0)]),_:1}),l(L,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(N,{open:u.value},{buttons:a(()=>[l(k,{onClick:e[6]||(e[6]=t=>n.value&&(o(d).emit("chat:create",o(i),n.value),u.value=!1))},{default:a(()=>[s(" OK ")]),_:1}),l(k,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:a(()=>[s("Cancel")]),_:1})]),default:a(()=>[K,l(F,{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=B(t=>n.value&&(o(d).emit("chat:create",o(i),n.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{Z as default};
