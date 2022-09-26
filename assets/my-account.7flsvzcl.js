import{B as w}from"./VStack.6d7g92uw.js";import{C as T}from"./CardGrid.15cj8hvu.js";import{D as U}from"./DocumentDisplay.2je0vazf.js";import{M as I,F as O}from"./BookmarkIcon.108uetaj.js";import{T as Y}from"./Title.3fz2k97a.js";import{d as x,q as u,H as r,o as d,h as v,b as t,w as a,i as M,F as h,e as l,t as _,u as n,ac as b,s as g,a5 as D,K as z,a as F,c as E,G as y,j as B}from"./index.3j8l6v6z.js";import{I as N}from"./InlineButton.197m3pe8.js";import"./Navigation.1j7ng9io.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.6b66y862.js";const G=l(" Log Out "),K=l("Log Out Other Devices"),j=l("Change Username"),q=l("Change Password"),A={key:0},H=l(" Click "),J=l(" here "),Q=l(" You cannot change notification settings when offline. "),R={key:1},W=l("Log in"),X=l(" to a zSnout account or "),Z=l("sign up"),ee=l(" to receive notification for new blog posts. "),oe=F("p",null,null,-1),te={key:2},ae=l("OK"),le=l("Cancel"),_e=x({__name:"my-account",setup(se){const C=u(!1),$=u(""),p=u(!1),c=u(!1),V=u(""),f=u(""),m=u(""),k=u(""),i=u("username");r.on("account:done:reset-session",()=>{$.value="Your other devices have been logged out.",setTimeout(()=>{C.value=!1},1e3)});function L(){C.value=!0,$.value="Logging out your other devices...",r.emit("account:reset-session",g.value,!0)}function S(s){p.value=!0,c.value=!0,V.value=`Pick a new ${i.value=s} below.`,s==="username"?f.value=b.value:f.value="",m.value="",k.value=""}function P(){const s=i.value;s==="password"?r.emit("account:update:password",g.value,f.value,m.value):s==="username"&&r.emit("account:update:username",g.value,f.value),c.value=!1;function e(){r.off(`account:done:update:${s}`,o),c.value=!0}function o(){r.off("error",e),V.value=`Your ${s} has been changed.`,setTimeout(()=>p.value=!1,1e3)}r.once("error",e),r.once(`account:done:update:${s}`,o)}return(s,e)=>(d(),v(h,null,[t(U,null,{default:a(()=>[t(Y,null,{default:a(()=>[l(_(n(b))+"'s Account",1)]),_:1}),t(T,null,{default:a(()=>[t(w,{onClick:e[0]||(e[0]=o=>(b.value="",g.value="",s.$router.push("/")))},{default:a(()=>[G]),_:1}),t(w,{onClick:L},{default:a(()=>[K]),_:1}),t(w,{onClick:e[1]||(e[1]=o=>S("username"))},{default:a(()=>[j]),_:1}),t(w,{onClick:e[2]||(e[2]=o=>S("password"))},{default:a(()=>[q]),_:1})]),_:1}),n(g)?(d(),v("p",A,[l(" You "+_(n(D)?"are currently receiving":"will not receive")+" notifications for updates to the zSnout blog. ",1),n(z)?(d(),v(h,{key:0},[H,t(N,{onClick:e[3]||(e[3]=o=>n(r).emit("blog:update:will-notify",n(g),!n(D)))},{default:a(()=>[J]),_:1}),l(" to opt-"+_(n(D)?"out of":"in to")+" notifications. ",1)],64)):(d(),v(h,{key:1},[Q],64))])):(d(),v("p",R,[t(N,{onClick:e[4]||(e[4]=o=>p.value=!0)},{default:a(()=>[W]),_:1}),X,t(N,{onClick:e[5]||(e[5]=o=>p.value=!0)},{default:a(()=>[Z]),_:1}),ee]))]),_:1}),t(I,{open:C.value},{buttons:a(()=>[oe]),default:a(()=>[F("p",null,_($.value),1)]),_:1},8,["open"]),t(I,{open:p.value},M({default:a(()=>[F("p",null,_(V.value),1),c.value?(d(),E(O,{key:0,modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=o=>f.value=o),autocomplete:i.value,placeholder:i.value==="password"?"Old Password":"New Username",type:i.value==="password"?"password":"text",onInput:e[7]||(e[7]=o=>y.value="")},null,8,["modelValue","autocomplete","placeholder","type"])):B("",!0),i.value==="password"&&c.value?(d(),v(h,{key:1},[t(O,{modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=o=>m.value=o),autocomplete:"new-password",placeholder:"New Password",type:"password",onInput:e[9]||(e[9]=o=>y.value="")},null,8,["modelValue"]),t(O,{modelValue:k.value,"onUpdate:modelValue":e[10]||(e[10]=o=>k.value=o),autocomplete:"new-password",placeholder:"Verify Password",type:"password",onInput:e[11]||(e[11]=o=>y.value="")},null,8,["modelValue"])],64)):B("",!0),i.value==="password"&&m.value!==k.value||n(y)?(d(),v("p",te,_(i.value==="password"&&m.value!==k.value?"Your passwords should match.":n(y)),1)):B("",!0)]),_:2},[c.value?{name:"buttons",fn:a(()=>[t(w,{onClick:P},{default:a(()=>[ae]),_:1}),t(w,{cancel:"",onClick:e[12]||(e[12]=o=>p.value=!1)},{default:a(()=>[le]),_:1})]),key:"0"}:void 0]),1032,["open"])],64))}});export{_e as default};
