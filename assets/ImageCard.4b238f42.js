import{d as f,o as r,c as g,w as u,n as i,f as s,k as c,$ as p,a as o,T as m,u as l,t as v}from"./index.9fb64e80.js";import{_ as h}from"./SearchableCardGrid.9a5223fa.js";import{_ as y}from"./BookmarkIcon.809e7ebf.js";const k={key:1},_={key:2},b=f({__name:"MaybeLink",props:{forceReload:{type:Boolean},inline:{type:Boolean},to:null},setup(e){return(a,t)=>e.to!==void 0?(r(),g(h,{key:0,"force-reload":e.forceReload,to:e.to},{default:u(()=>[i(a.$slots,"default")]),_:3},8,["force-reload","to"])):e.inline?(r(),s("span",k,[i(a.$slots,"default")])):(r(),s("div",_,[i(a.$slots,"default")]))}});const x=["alt","src"],w={class:"title text-color"},$={class:"description"},B=f({__name:"ImageCard",props:{alt:null,description:null,forceReload:{type:Boolean},keywords:null,src:null,title:null,to:null},setup(e){const a=c(),{height:t}=p(a),n=c(!1);return(C,d)=>(r(),g(b,{class:"card second-layer hoverline focusline","force-reload":e.forceReload,to:e.to,"data-keywords":e.keywords},{default:u(()=>[o("img",{ref_key:"image",ref:a,class:"image",alt:e.alt,src:e.src,style:m(n.value?"":"display: none"),"aria-hidden":"true",onLoad:d[0]||(d[0]=I=>n.value=!0)},null,44,x),o("div",{class:"filter",style:m({height:`${l(t)}px`,top:`calc(-${l(t)}px - 0.5em)`,marginBottom:`calc(-${l(t)}px)`,display:n.value?void 0:"none"}),"aria-hidden":"true"},null,4),o("p",w,v(e.title),1),o("p",$,v(e.description),1)]),_:1},8,["force-reload","to","data-keywords"]))}});var E=y(B,[["__scopeId","data-v-51e2539a"]]);export{E as I};
