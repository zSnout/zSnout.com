import{r as p}from"./index.577400siwc80.js";import{d as u}from"./useDateOf.86m05b59vpk0.js";import{_ as f}from"./SearchableCardGrid.28jm0e74otus.js";import{_ as k}from"./plugin-vue_export-helper.62h235na3u80.js";import{d as m,g as v,o,c as g,w as h,a as e,t as r,n,h as t,u as d,k as c,e as b}from"./index.5044v8rtsf00.js";const x={class:"description"},y={key:0,class:"text-color"},_={key:1},w={key:0,class:"corner drop-shadow",title:"This page has a list of other subpages. Click to explore further."},C={class:"corner-text"},B=m({__name:"Card",props:{title:null,date:null,description:null,keywords:null,label:null,to:null},setup(a){const l=a,i={"":0,code:5,math:2,menu:0,meta:4},s=v(()=>i[l.label||""]||p.create(l.label).intBetween(1,6));return(N,V)=>(o(),g(f,{class:"card second-layer hoverline focusline",to:a.to,"data-keywords":a.keywords},{default:h(()=>[e("p",{class:n([{hasLabel:!!a.label},"title text-color"])},r(a.title),3),e("p",x,[a.date?(o(),t("span",y,r(d(u)(a.date)),1)):c("",!0),a.date?(o(),t("span",_,"\xA0\u2014")):c("",!0),b(" "+r(a.description),1)]),a.label?(o(),t("div",w,[e("div",{class:n([`color-${d(s)}`,"corner-clip"])},[e("div",C,r(a.label),1)],2)])):c("",!0)]),_:1},8,["to","data-keywords"]))}});var j=k(B,[["__scopeId","data-v-65e64a18"]]);export{j as C};
