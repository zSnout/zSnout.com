import{D as N}from"./DocumentDisplay.6d0yf2eg.js";import{H as g}from"./BookmarkIcon.46krkaf8.js";import{V}from"./VStack.3evi6szx.js";import{l as S,j as w,x as s,C as x,D as l,F as y,y as u,ah as d,a9 as F,I as B,A as D,G as i}from"./runtime-core.esm-bundler.47vl3tei.js";import{a as G}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./main.200onzgm.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const H=["onClick"],M=S({__name:"bingo",setup(O){const r=w([[],[],[],[],[]]);function I(e){const a=[];function c(){const t=Math.floor(Math.random()*15)+e+1;a.includes(t)?c():a.push(t)}for(let t=0;t<5;t++)c();return a}const m=[];for(let e=0;e<5;e++)m.push(I(15*e));for(let e=0;e<5;e++)for(let a=0;a<5;a++)r[e][a]={value:m[a][e],checked:!1};return(e,a)=>(s(),x(N,{center:""},{default:l(()=>[y(V,{class:"board",space:.5},{default:l(()=>[y(g,{class:"row",space:.5},{default:l(()=>[(s(),u(i,null,d("BINGO",c=>F("div",{class:D([{lCheck:c!=="B",rCheck:c!=="O"},"cell header second-layer text-color checked"])},B(c),3)),64))]),_:1},8,["space"]),(s(!0),u(i,null,d(r,(c,t)=>(s(),x(g,{class:"row",space:.5},{default:l(()=>[(s(!0),u(i,null,d(c,(o,n)=>{var p,h,k,_,f,C,v,b;return s(),u("button",{key:o.value,class:D([{"second-layer":o.checked,checked:o.checked,lCheck:(p=c[n-1])==null?void 0:p.checked,tCheck:(k=(h=r[t-1])==null?void 0:h[n])==null?void 0:k.checked,rCheck:(_=c[n+1])==null?void 0:_.checked,bCheck:(C=(f=r[t+1])==null?void 0:f[n])==null?void 0:C.checked,tlCheck:(b=(v=r[t-1])==null?void 0:v[n-1])==null?void 0:b.checked},"cell"]),onClick:z=>o.checked=!o.checked},B(o.value),11,H)}),128))]),_:2},1032,["space"]))),256))]),_:1},8,["space"])]),_:1}))}});const U=G(M,[["__scopeId","data-v-47677a20"]]);export{U as default};
