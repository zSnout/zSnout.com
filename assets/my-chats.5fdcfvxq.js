import{f as x}from"./_plugin-vue_export-helper.4yxwi37t.js";import{B as f}from"./VStack.3evi6szx.js";import{C as V}from"./Card.4h2z4e59.js";import{C as _}from"./CardGrid.1kdxvvm0.js";import{D as w}from"./DocumentDisplay.6d0yf2eg.js";import{F as B}from"./Field.5c7fkv56.js";import{_ as D,M as T}from"./BookmarkIcon.46krkaf8.js";import{S as F}from"./SearchableCardGrid.7foww6wh.js";import{T as L}from"./Title.4eiq6n5a.js";import{c as p,s as r,A as h}from"./main.200onzgm.js";import{l as N,r as d,f as S,x as i,y as v,F as l,D as a,G as $,H as s,I as Y,u as o,a8 as y,E as C,C as k,ag as b}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./useDateOf.chuxq7z2.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const E={key:0},G=y("p",null,"Pick a title for your chat.",-1),c=d([]);p.on("chat:index",g=>c.value=g);const te=N({__name:"my-chats",setup(g){const m=d(!1),u=d(!1),n=d("");return S(()=>{p.emit("chat:request:index",r.value)}),(K,e)=>(i(),v($,null,[l(w,null,{default:a(()=>[l(L,null,{default:a(()=>[s(Y(o(h)?`${o(h)}'s`:"My")+" Chats",1)]),_:1}),o(r)?C("",!0):(i(),v("p",E,[s(" Looks like you're not logged in. "),y("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),s(" or "),y("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),s(" to access the Chat app. ")])),o(r)&&c.value.length<100?(i(),k(_,{key:1,style:{"margin-bottom":"2em"}},{default:a(()=>[l(f,{onClick:e[2]||(e[2]=t=>(u.value=!0,n.value=""))},{default:a(()=>[s(" Create a Chat ")]),_:1})]),_:1})):C("",!0),o(r)&&c.value.length?(i(),k(F,{key:2,placeholder:"Search your chat groups..."},{default:a(()=>[(i(!0),v($,null,b(c.value,t=>(i(),k(V,{class:"card text-color",description:t.level==="manage"?"You manage this chat.":t.level==="comment"?"You may comment on this chat.":t.level==="view"?"You can view this chat.":"You cannot access this chat.",title:t.title,to:`/chat?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):C("",!0)]),_:1}),l(D,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(T,{open:u.value},{buttons:a(()=>[l(f,{onClick:e[6]||(e[6]=t=>n.value&&(o(p).emit("chat:create",o(r),n.value),u.value=!1))},{default:a(()=>[s(" OK ")]),_:1}),l(f,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:a(()=>[s("Cancel")]),_:1})]),default:a(()=>[G,l(B,{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=x(t=>n.value&&(o(p).emit("chat:create",o(r),n.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{te as default};
