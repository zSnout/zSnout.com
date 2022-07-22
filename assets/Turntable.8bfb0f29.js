import{d as S,k as d,aa as x,ay as y,aA as D,E as F,r as z,j as P,aL as B,c as E,w as N,o as H,b as k,a as c,ar as L,p as R,g as $}from"./index.7b903477.js";import{F as j}from"./FullscreenDisplay.1e98308c.js";import{_ as V,a as Y,H as A}from"./BookmarkIcon.ab5cd17e.js";import{u as X}from"./useCanvas.ec57013e.js";const q=p=>(R("data-v-58211ed6"),p=p(),$(),p),G=q(()=>c("span",null,"/",-1)),J=S({__name:"Turntable",setup(p){const M=d(),I=x(),f=d(!1),r=d(0),h=d(),m=y(Math.PI/360,Math.PI/1440,Math.PI/8);return X(M,{useDevicePixelRatio:!1}).then(w=>{const{canvas:t,onDispose:u,onResize:T,size:g}=w,{width:s,height:n}=g,a=t.getContext("2d"),b=D(()=>Math.min(s.value/2,n.value/2));if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let i=NaN,v=NaN;a.translate(s.value/2,n.value/2);function _(){a.beginPath(),a.fillStyle="white",a.arc(s.value/2,n.value/2,b.value,0,2*Math.PI),a.fill()}h.value=_,_(),T(_),u(F(z({pointer:I,rotation:r}),({pointer:{x:e,y:o}})=>{if(!f.value){i=NaN,v=NaN;return}const l=Math.hypot(s.value/2-e,n.value/2-o),C=Math.atan2(o-n.value/2,e-s.value/2);if(l>b.value){i=NaN,v=NaN;return}[e,o]=[s.value/2+l*Math.cos(r.value-C),n.value/2-l*Math.sin(r.value-C)],!isNaN(i)&&!isNaN(v)&&(a.beginPath(),a.moveTo(i,v),a.lineTo(e,o),a.stroke()),i=e,v=o})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[o,l]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(s.value/2+o+e(),n.value/2+l+e()),a.lineTo(s.value/2+o+e(),n.value/2+l+e()),a.stroke()})}),P("pointerdown",()=>f.value=!0),P("pointerup",()=>f.value=!1),B(()=>r.value+=m.value),(w,t)=>(H(),E(j,null,{indicator:N(()=>[k(A,null,{default:N(()=>[c("span",{class:"button",onClick:t[0]||(t[0]=u=>m.value-=Math.min(Math.PI/1440))}," Slower "),G,c("span",{class:"button",onClick:t[1]||(t[1]=u=>m.value+=Math.min(Math.PI/1440))}," Faster "),k(Y),c("span",{class:"button",onClick:t[2]||(t[2]=(...u)=>h.value&&h.value(...u))},"Clear")]),_:1})]),default:N(()=>[c("canvas",{ref_key:"canvas",ref:M,class:"canvas",style:L(`transform: rotate(${r.value}rad)`)},null,4)]),_:1}))}});var W=V(J,[["__scopeId","data-v-58211ed6"]]);export{W as default};