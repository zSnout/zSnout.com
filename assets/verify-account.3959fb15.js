import{d as l,aB as e,aU as m,o as t,c as n,w as o,aC as c,b1 as _,b as d,u as a,f as p,t as y,m as s,e as i,y as k}from"./index.e9cc25ec.js";import{D as v}from"./DocumentDisplay.6f6c1407.js";import{T as h}from"./Title.8dbe4c1e.js";import"./SharedNav.57e661d0.js";import"./VStack.7090fa40.js";const C=i("Verifying your account..."),g={key:0},x=i("Go back to zSnout."),w=l({__name:"verify-account",setup(B){e.value="";const r=m().query.code;async function u(){if(typeof r!="string"){e.value="Sorry, the code you used is invalid. Try again later.";return}c.emit("account:verify",r),c.once("account:done:verify",()=>_.replace("/"))}return u(),(D,T)=>{const f=k("RouterLink");return t(),n(v,{center:""},{default:o(()=>[d(h,null,{default:o(()=>[C]),_:1}),a(e)?(t(),p("p",g,y(a(e)),1)):s("",!0),a(e)?(t(),n(f,{key:1,to:"/"},{default:o(()=>[x]),_:1})):s("",!0)]),_:1})}}});export{w as default};
