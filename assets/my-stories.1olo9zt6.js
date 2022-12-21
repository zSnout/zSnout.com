import{f as S}from"./_plugin-vue_export-helper.4yxwi37t.js";import{B as v}from"./VStack.3evi6szx.js";import{C as V}from"./Card.4h2z4e59.js";import{C as _}from"./CardGrid.1kdxvvm0.js";import{D as B}from"./DocumentDisplay.6d0yf2eg.js";import{F as T}from"./Field.5c7fkv56.js";import{_ as w,M as D}from"./BookmarkIcon.46krkaf8.js";import{S as N}from"./SearchableCardGrid.7foww6wh.js";import{T as F}from"./Title.4eiq6n5a.js";import{c as p,s as n,A as $}from"./main.200onzgm.js";import{l as L,r as d,f as b,x as i,y as c,F as l,D as o,G as x,H as s,I as E,u as a,a8 as C,E as y,C as k,ag as G}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./useDateOf.chuxq7z2.js";import"./MaybeLink.vue_vue_type_script_setup_true_lang.nijdkso1.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const K={key:0},M=C("p",null,"Pick a title for your story.",-1),f=d([]);p.on("story:index",g=>f.value=g);const te=L({__name:"my-stories",setup(g){const m=d(!1),u=d(!1),r=d("");return b(()=>{p.emit("story:request:index",n.value)}),(O,e)=>(i(),c(x,null,[l(B,null,{default:o(()=>[l(F,null,{default:o(()=>[s(E(a($)?`${a($)}'s`:"My")+" Stories",1)]),_:1}),a(n)?y("",!0):(i(),c("p",K,[s(" Looks like you're not logged in. "),C("span",{class:"link",onClick:e[0]||(e[0]=t=>m.value=!0)},"Log in"),s(" or "),C("span",{class:"link",onClick:e[1]||(e[1]=t=>m.value=!0)},"create an account"),s(" to access the Stories app. ")])),a(n)&&f.value.length<100?(i(),k(_,{key:1,style:{"margin-bottom":"2em"}},{default:o(()=>[l(v,{onClick:e[2]||(e[2]=t=>(u.value=!0,r.value=""))},{default:o(()=>[s(" New Story ")]),_:1})]),_:1})):y("",!0),a(n)&&f.value.length?(i(),k(N,{key:2,placeholder:"Search your stories..."},{default:o(()=>[(i(!0),c(x,null,G(f.value,t=>(i(),k(V,{class:"card text-color",description:`${t.activeThreadCount} active threads.`,title:t.title,to:`/story?id=${t.id}`},null,8,["description","title","to"]))),256))]),_:1})):y("",!0)]),_:1}),l(w,{open:m.value,"onUpdate:open":e[3]||(e[3]=t=>m.value=t)},null,8,["open"]),l(D,{open:u.value},{buttons:o(()=>[l(v,{onClick:e[6]||(e[6]=t=>r.value&&(a(p).emit("story:create",a(n),r.value),u.value=!1))},{default:o(()=>[s(" OK ")]),_:1}),l(v,{cancel:"",onClick:e[7]||(e[7]=t=>u.value=!1)},{default:o(()=>[s("Cancel")]),_:1})]),default:o(()=>[M,l(T,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=t=>r.value=t),autocomplete:"off",placeholder:"Title...",onKeydown:e[5]||(e[5]=S(t=>r.value&&(a(p).emit("story:create",a(n),r.value),u.value=!1),["enter"]))},null,8,["modelValue"])]),_:1},8,["open"])],64))}});export{te as default};
