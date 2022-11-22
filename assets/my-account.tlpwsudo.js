import{B as w}from"./VStack.xad5wxbj.js";import{C as U}from"./CardGrid.2ocy45od.js";import{D as Y}from"./DocumentDisplay.633jhlro.js";import{F as D}from"./Field.2ydu2jt8.js";import{M as L}from"./BookmarkIcon.1thszj4g.js";import{T as x}from"./Title.3fz2k97a.js";import{d as M,q as s,H as r,o as d,h as v,e as t,w as a,j as z,F as $,b as l,t as g,u as n,ac as B,s as k,a5 as N,K as E,a as h,c as G,G as C,i as F}from"./index.e8mnt7cd.js";import{I as S}from"./InlineButton.197m3pe8.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4huvb0n5.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const K={key:0},_={key:1},j=h("p",null,null,-1),q={key:2},ue=M({__name:"my-account",setup(A){const V=s(!1),O=s(""),p=s(!1),f=s(!1),b=s(""),m=s(""),c=s(""),y=s(""),i=s("username");r.on("account:done:reset-session",()=>{O.value="Your other devices have been logged out.",setTimeout(()=>{V.value=!1},1e3)});function P(){V.value=!0,O.value="Logging out your other devices...",r.emit("account:reset-session",k.value,!0)}function I(u){p.value=!0,f.value=!0,b.value=`Pick a new ${i.value=u} below.`,u==="username"?m.value=B.value:m.value="",c.value="",y.value=""}function T(){const u=i.value;u==="password"?r.emit("account:update:password",k.value,m.value,c.value):u==="username"&&r.emit("account:update:username",k.value,m.value),f.value=!1;function e(){r.off(`account:done:update:${u}`,o),f.value=!0}function o(){r.off("error",e),b.value=`Your ${u} has been changed.`,setTimeout(()=>p.value=!1,1e3)}r.once("error",e),r.once(`account:done:update:${u}`,o)}return(u,e)=>(d(),v($,null,[t(Y,null,{default:a(()=>[t(x,null,{default:a(()=>[l(g(n(B))+"'s Account",1)]),_:1}),t(U,null,{default:a(()=>[t(w,{onClick:e[0]||(e[0]=o=>(B.value="",k.value="",u.$router.push("/")))},{default:a(()=>[l(" Log Out ")]),_:1}),t(w,{onClick:P},{default:a(()=>[l("Log Out Other Devices")]),_:1}),t(w,{onClick:e[1]||(e[1]=o=>I("username"))},{default:a(()=>[l("Change Username")]),_:1}),t(w,{onClick:e[2]||(e[2]=o=>I("password"))},{default:a(()=>[l("Change Password")]),_:1})]),_:1}),n(k)?(d(),v("p",K,[l(" You "+g(n(N)?"are currently receiving":"will not receive")+" notifications for updates to the zSnout blog. ",1),n(E)?(d(),v($,{key:0},[l(" Click "),t(S,{onClick:e[3]||(e[3]=o=>n(r).emit("blog:update:will-notify",n(k),!n(N)))},{default:a(()=>[l(" here ")]),_:1}),l(" to opt-"+g(n(N)?"out of":"in to")+" notifications. ",1)],64)):(d(),v($,{key:1},[l(" You cannot change notification settings when offline. ")],64))])):(d(),v("p",_,[t(S,{onClick:e[4]||(e[4]=o=>p.value=!0)},{default:a(()=>[l("Log in")]),_:1}),l(" to a zSnout account or "),t(S,{onClick:e[5]||(e[5]=o=>p.value=!0)},{default:a(()=>[l("sign up")]),_:1}),l(" to receive notification for new blog posts. ")]))]),_:1}),t(L,{open:V.value},{buttons:a(()=>[j]),default:a(()=>[h("p",null,g(O.value),1)]),_:1},8,["open"]),t(L,{open:p.value},z({default:a(()=>[h("p",null,g(b.value),1),f.value?(d(),G(D,{key:0,modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=o=>m.value=o),autocomplete:i.value,placeholder:i.value==="password"?"Old Password":"New Username",type:i.value==="password"?"password":"text",onInput:e[7]||(e[7]=o=>C.value="")},null,8,["modelValue","autocomplete","placeholder","type"])):F("",!0),i.value==="password"&&f.value?(d(),v($,{key:1},[t(D,{modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=o=>c.value=o),autocomplete:"new-password",placeholder:"New Password",type:"password",onInput:e[9]||(e[9]=o=>C.value="")},null,8,["modelValue"]),t(D,{modelValue:y.value,"onUpdate:modelValue":e[10]||(e[10]=o=>y.value=o),autocomplete:"new-password",placeholder:"Verify Password",type:"password",onInput:e[11]||(e[11]=o=>C.value="")},null,8,["modelValue"])],64)):F("",!0),i.value==="password"&&c.value!==y.value||n(C)?(d(),v("p",q,g(i.value==="password"&&c.value!==y.value?"Your passwords should match.":n(C)),1)):F("",!0)]),_:2},[f.value?{name:"buttons",fn:a(()=>[t(w,{onClick:T},{default:a(()=>[l("OK")]),_:1}),t(w,{cancel:"",onClick:e[12]||(e[12]=o=>p.value=!1)},{default:a(()=>[l("Cancel")]),_:1})]),key:"0"}:void 0]),1032,["open"])],64))}});export{ue as default};
