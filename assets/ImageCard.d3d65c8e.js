import{d as p,o as r,c as u,w as v,n as i,f as s,k as c,W as g,a as o,aq as m,u as l,t as f}from"./index.09ff9e18.js";import{_ as h}from"./Title.7742e790.js";import{_ as y}from"./Modal.9c2abee5.js";const _={key:1},k={key:2},x=p({__name:"MaybeLink",props:{forceReload:{type:Boolean},inline:{type:Boolean},to:null},setup(e){return(a,t)=>e.to!==void 0?(r(),u(h,{key:0,"force-reload":e.forceReload,to:e.to},{default:v(()=>[i(a.$slots,"default")]),_:3},8,["force-reload","to"])):e.inline?(r(),s("span",_,[i(a.$slots,"default")])):(r(),s("div",k,[i(a.$slots,"default")]))}});const w=["src"],$={class:"title text-color"},b={class:"description"},B=p({__name:"ImageCard",props:{description:null,forceReload:{type:Boolean},keywords:null,src:null,title:null,to:null},setup(e){const a=c(),{height:t}=g(a),n=c(!1);return(C,d)=>(r(),u(x,{class:"card second-layer hoverline focusline","force-reload":e.forceReload,to:e.to,"data-keywords":e.keywords},{default:v(()=>[o("img",{ref_key:"image",ref:a,class:"image",src:e.src,style:m(n.value?"":"display: none"),"aria-hidden":"true",onLoad:d[0]||(d[0]=I=>n.value=!0)},null,44,w),o("div",{class:"filter",style:m({height:`${l(t)}px`,top:`calc(-${l(t)}px - 0.5em)`,marginBottom:`calc(-${l(t)}px)`,display:n.value?void 0:"none"}),"aria-hidden":"true"},null,4),o("p",$,f(e.title),1),o("p",b,f(e.description),1)]),_:1},8,["force-reload","to","data-keywords"]))}});var E=y(B,[["__scopeId","data-v-17e28180"]]);export{E as I};
