import{d as p,G as e,a9 as l,o as t,c as n,w as o,H as c,ag as _,b as d,u as r,h as f,t as y,j as s,e as i,k}from"./index.4nlty64r.js";import{D as v}from"./DocumentDisplay.2je0vazf.js";import{T as h}from"./Title.3fz2k97a.js";import"./Navigation.1j7ng9io.js";import"./BookmarkIcon.108uetaj.js";import"./VStack.6d7g92uw.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.6b66y862.js";const g=i("Verifying your account..."),x={key:0},C=i("Go back to zSnout."),q=p({__name:"verify-account",setup(D){e.value="";const a=l().query.code;async function u(){if(typeof a!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",a),c.once("account:done:verify",()=>_.replace("/"))}return u(),(T,V)=>{const m=k("RouterLink");return t(),n(v,{center:""},{default:o(()=>[d(h,null,{default:o(()=>[g]),_:1}),r(e)?(t(),f("p",x,y(r(e)),1)):s("",!0),r(e)?(t(),n(m,{key:1,to:"/"},{default:o(()=>[C]),_:1})):s("",!0)]),_:1})}}});export{q as default};
