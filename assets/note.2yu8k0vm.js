import{E as N,S as D,a as E}from"./tiptap-vue-3.esm.3qq78aue.js";import{d as T,a9 as V,q as m,H as n,v as q,a2 as B,s as l,o,h as a,e as p,w as g,F as x,a7 as S,u as s,K as w,b as v,a as k,t as h,ac as C,c as F,i as W,k as I}from"./index.5g74v6w3.js";import{D as M}from"./DocumentDisplay.633jhlro.js";import{I as R}from"./InlineField.1bs7kao1.js";import{_ as U,H as $}from"./BookmarkIcon.3wmuqdow.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";const z={key:0},K={key:1},Y={key:2},O={key:3},j={key:0,style:{margin:"0 0 1em 0"}},A=["href"],G={key:0},le=T({__name:"note",setup(J){const e=""+V().query.id,u=m("Loading title..."),r=m("waiting"),y=m(!1);n.on("notes:note",(c,t)=>{c===e&&(t===!1?r.value="invalid":(r.value="editing",i.commands.setContent(t,!1)))}),n.on("notes:details",c=>{c.id===e&&(u.value=c.title)}),q(()=>{n.emit("notes:request:note",l.value,e),n.emit("notes:request:details",l.value,e)});const i=new N({extensions:[D]}),_=m(!0),d=m(!1),L=S(()=>{d.value||(_.value=!0,n.emit("notes:update:note",l.value,e,i.getHTML()))},500,{maxWait:1e3}),b=S(()=>{u.value&&n.emit("notes:update:title",l.value,e,u.value)},500,{maxWait:1e3});return i.on("update",()=>{d.value=i.getHTML().length>=1e4,_.value=!1,L()}),B(()=>{n.emit("notes:update:note",l.value,e,i.getHTML()),n.emit("notes:update:title",l.value,e,u.value),i.destroy()}),(c,t)=>{const H=I("RouterLink");return o(),a(x,null,[p(M,null,{default:g(()=>[!s(w)&&r.value!=="editing"?(o(),a("p",z," You're not connected to a zServer. Check your internet and try again. ")):s(l)?r.value==="waiting"?(o(),a("p",Y," Hey @"+h(s(C))+"! We're fetching your note right now... ",1)):r.value==="invalid"?(o(),a("p",O,[v(" Sorry @"+h(s(C))+", but it looks like you don't own this note. Let's ",1),p(H,{to:"/my-notes"},{default:g(()=>[v("go back to your notes.")]),_:1})])):(o(),a(x,{key:4},[s(w)?(o(),F($,{key:1,style:{"margin-bottom":"1em"}},{default:g(()=>[k("span",null,h(d.value?"Whoops!":_.value?"Synced:":"Syncing:"),1),p(R,{flex:!d.value,maxlength:100,"model-value":u.value,placeholder:"Note title...","onUpdate:modelValue":t[1]||(t[1]=f=>(u.value=f,s(b)()))},null,8,["flex","model-value"]),d.value?(o(),a("span",G,"is too large and cannot be synced.")):W("",!0)]),_:1})):(o(),a("p",j,[v(" Looks like you disconnected from a zServer. Copy your recent changes and "),k("a",{href:`/note?id=${e}`},"reload the page.",8,A)])),p(s(E),{editor:s(i)},null,8,["editor"])],64)):(o(),a("p",K,[v(" You have to "),k("span",{class:"link",onClick:t[0]||(t[0]=f=>y.value=!0)},"log in"),v(" before you can edit a note. ")]))]),_:1}),p(U,{open:y.value,"onUpdate:open":t[2]||(t[2]=f=>y.value=f)},null,8,["open"])],64)}}});export{le as default};
