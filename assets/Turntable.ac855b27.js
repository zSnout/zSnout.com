import{d as g,q as d,a8 as x,aL as D,ak as y,B,aA as P,aG as F,o as z,c as H,w as N,b as k,a as c,ax as L,p as R,l as $}from"./index.b750fc01.js";import{u as E}from"./index.66ececaf.js";import{F as V}from"./FullscreenDisplay.348db946.js";import{a as Y,H as j}from"./SharedNav.6ef85c65.js";import{u as q}from"./useCanvas.0e1633f4.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.bc31d144.js";import"./Button.f50eaa40.js";const G=p=>(R("data-v-99a1931e"),p=p(),$(),p),X=G(()=>c("span",null,"/",-1)),J=g({__name:"Turntable",setup(p){const M=d(),I=x(),f=d(!1),r=d(0),m=d(),h=E(Math.PI/360,Math.PI/1440,Math.PI/8);return q(M,{useDevicePixelRatio:!1}).then(w=>{const{canvas:t,onDispose:u,onResize:T,size:S}=w,{width:s,height:o}=S,a=t.getContext("2d"),b=D(()=>Math.min(s.value/2,o.value/2));if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let i=NaN,v=NaN;a.translate(s.value/2,o.value/2);function _(){a.beginPath(),a.fillStyle="white",a.arc(s.value/2,o.value/2,b.value,0,2*Math.PI),a.fill()}m.value=_,_(),T(_),u(y(B({pointer:I,rotation:r}),({pointer:{x:e,y:n}})=>{if(!f.value){i=NaN,v=NaN;return}const l=Math.hypot(s.value/2-e,o.value/2-n),C=Math.atan2(n-o.value/2,e-s.value/2);if(l>b.value){i=NaN,v=NaN;return}[e,n]=[s.value/2+l*Math.cos(r.value-C),o.value/2-l*Math.sin(r.value-C)],!isNaN(i)&&!isNaN(v)&&(a.beginPath(),a.moveTo(i,v),a.lineTo(e,n),a.stroke()),i=e,v=n})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[n,l]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(s.value/2+n+e(),o.value/2+l+e()),a.lineTo(s.value/2+n+e(),o.value/2+l+e()),a.stroke()})}),P("pointerdown",()=>f.value=!0),P("pointerup",()=>f.value=!1),F(()=>r.value+=h.value),(w,t)=>(z(),H(V,null,{indicator:N(()=>[k(j,null,{default:N(()=>[c("span",{class:"button",onClick:t[0]||(t[0]=u=>h.value-=Math.min(Math.PI/1440))}," Slower "),X,c("span",{class:"button",onClick:t[1]||(t[1]=u=>h.value+=Math.min(Math.PI/1440))}," Faster "),k(Y),c("span",{class:"button",onClick:t[2]||(t[2]=(...u)=>m.value&&m.value(...u))},"Clear")]),_:1})]),default:N(()=>[c("canvas",{ref_key:"canvas",ref:M,class:"canvas",style:L(`transform: rotate(${r.value}rad)`)},null,4)]),_:1}))}});var ta=A(J,[["__scopeId","data-v-99a1931e"]]);export{ta as default};