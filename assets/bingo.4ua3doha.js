import{D as N}from"./DocumentDisplay.633jhlro.js";import{H as g}from"./BookmarkIcon.3wmuqdow.js";import{V}from"./VStack.xad5wxbj.js";import{d as w,I as S,o as s,c as x,w as l,e as y,h as d,E as u,a as E,t as B,n as D,F as i,_ as F}from"./index.65vfmhl3.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./Field.2ydu2jt8.js";const H=["onClick"],M=w({__name:"bingo",setup(O){const n=S([[],[],[],[],[]]);function I(e){const a=[];function c(){const t=Math.floor(Math.random()*15)+e+1;a.includes(t)?c():a.push(t)}for(let t=0;t<5;t++)c();return a}const p=[];for(let e=0;e<5;e++)p.push(I(15*e));for(let e=0;e<5;e++)for(let a=0;a<5;a++)n[e][a]={value:p[a][e],checked:!1};return(e,a)=>(s(),x(N,{center:""},{default:l(()=>[y(V,{class:"board",space:.5},{default:l(()=>[y(g,{class:"row",space:.5},{default:l(()=>[(s(),d(i,null,u("BINGO",c=>E("div",{class:D([{lCheck:c!=="B",rCheck:c!=="O"},"cell header second-layer text-color checked"])},B(c),3)),64))]),_:1},8,["space"]),(s(!0),d(i,null,u(n,(c,t)=>(s(),x(g,{class:"row",space:.5},{default:l(()=>[(s(!0),d(i,null,u(c,(o,r)=>{var h,m,_,k,f,C,v,b;return s(),d("button",{key:o.value,class:D([{"second-layer":o.checked,checked:o.checked,lCheck:(h=c[r-1])==null?void 0:h.checked,tCheck:(_=(m=n[t-1])==null?void 0:m[r])==null?void 0:_.checked,rCheck:(k=c[r+1])==null?void 0:k.checked,bCheck:(C=(f=n[t+1])==null?void 0:f[r])==null?void 0:C.checked,tlCheck:(b=(v=n[t-1])==null?void 0:v[r-1])==null?void 0:b.checked},"cell"]),onClick:z=>o.checked=!o.checked},B(o.value),11,H)}),128))]),_:2},1032,["space"]))),256))]),_:1},8,["space"])]),_:1}))}});const R=F(M,[["__scopeId","data-v-47677a20"]]);export{R as default};
