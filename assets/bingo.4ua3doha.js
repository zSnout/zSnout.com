import{D as N}from"./DocumentDisplay.1u3n8z7b.js";import{H as g}from"./BookmarkIcon.2hoqbw7h.js";import{V}from"./VStack.1y80766s.js";import{d as w,I as S,o as s,c as x,w as l,b as y,h as d,E as u,a as E,t as B,n as D,F as h,_ as F}from"./index.4yzzgtk3.js";import"./Navigation.3ml0eptj.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";const H=["onClick"],M=w({__name:"bingo",setup(O){const n=S([[],[],[],[],[]]);function I(e){const a=[];function c(){const t=Math.floor(Math.random()*15)+e+1;a.includes(t)?c():a.push(t)}for(let t=0;t<5;t++)c();return a}const i=[];for(let e=0;e<5;e++)i.push(I(15*e));for(let e=0;e<5;e++)for(let a=0;a<5;a++)n[e][a]={value:i[a][e],checked:!1};return(e,a)=>(s(),x(N,{center:""},{default:l(()=>[y(V,{class:"board",space:.5},{default:l(()=>[y(g,{class:"row",space:.5},{default:l(()=>[(s(),d(h,null,u("BINGO",c=>E("div",{class:D([{lCheck:c!=="B",rCheck:c!=="O"},"cell header second-layer text-color checked"])},B(c),3)),64))]),_:1},8,["space"]),(s(!0),d(h,null,u(n,(c,t)=>(s(),x(g,{class:"row",space:.5},{default:l(()=>[(s(!0),d(h,null,u(c,(o,r)=>{var p,_,k,m,f,C,b,v;return s(),d("button",{key:o.value,class:D([{"second-layer":o.checked,checked:o.checked,lCheck:(p=c[r-1])==null?void 0:p.checked,tCheck:(k=(_=n[t-1])==null?void 0:_[r])==null?void 0:k.checked,rCheck:(m=c[r+1])==null?void 0:m.checked,bCheck:(C=(f=n[t+1])==null?void 0:f[r])==null?void 0:C.checked,tlCheck:(v=(b=n[t-1])==null?void 0:b[r-1])==null?void 0:v.checked},"cell"]),onClick:z=>o.checked=!o.checked},B(o.value),11,H)}),128))]),_:2},1032,["space"]))),256))]),_:1},8,["space"])]),_:1}))}});const Q=F(M,[["__scopeId","data-v-47677a20"]]);export{Q as default};
