import{d as D,q as v,an as F,a1 as P,I as A,C as R,L as E,o as H,c as L,w as N,e as T,a as o,A as B,u as w,ao as k,p as M,l as W,_ as X}from"./index.5v55a00n.js";import{u as x}from"./index.55wflef3.js";import{F as V}from"./FullscreenDisplay.421pqk6v.js";import{S as Y,H as j}from"./BookmarkIcon.3wmuqdow.js";import{u as q}from"./useCanvas.87p0yoq7.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";import"./VStack.6d7g92uw.js";import"./Field.2ydu2jt8.js";const G=u=>(M("data-v-1dad7342"),u=u(),W(),u),J=G(()=>o("span",null,"/",-1)),K=D({__name:"slider",setup(u){const C=v(),S=v(),I=F(),d=v(!1),l=v(0),y=[],f=x(1,.25,100);for(let s of[C,S])q(s,{useDevicePixelRatio:!1}).then(t=>{const{canvas:c,onDispose:m,onResize:$,size:z}=t,{width:n,height:_}=z,a=c.getContext("2d");if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let r=NaN,p=NaN;function h(){a.fillStyle="white",a.fillRect(0,0,n.value,_.value)}y.push(h),h(),$(h),m(P(A({pointer:I,rotation:l}),({pointer:{x:e,y:i}})=>{if(!d.value){r=NaN,p=NaN;return}e=(e-l.value)%n.value,e<0&&(e+=n.value),!isNaN(r)&&!isNaN(p)&&Math.abs(r-e)<n.value/2&&(a.beginPath(),a.moveTo(r,p),a.lineTo(e,i),a.stroke()),r=e,p=i})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[i,b]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(n.value/2+i+e(),_.value/2+b+e()),a.lineTo(n.value/2+i+e(),_.value/2+b+e()),a.stroke()})});R("pointerdown",()=>d.value=!0),R("pointerup",()=>d.value=!1),E(()=>l.value+=f.value);function g(s){return s>innerWidth?s-2*innerWidth:s}return(s,t)=>(H(),L(V,null,{indicator:N(()=>[T(j,null,{default:N(()=>[o("span",{class:"button",onClick:t[0]||(t[0]=c=>f.value-=.25)},"Slower"),J,o("span",{class:"button",onClick:t[1]||(t[1]=c=>f.value+=.25)},"Faster"),T(Y),o("span",{class:"button",onClick:t[2]||(t[2]=c=>y.forEach(m=>m()))}," Clear ")]),_:1})]),default:N(()=>[o("canvas",{ref_key:"canvasA",ref:C,class:"canvas",style:B(`transform: translateX(${g(l.value%(2*w(k)))}px)`)},null,4),o("canvas",{ref_key:"canvasB",ref:S,class:"canvas",style:B(`transform: translateX(${g((l.value+w(k))%(2*w(k)))}px)`)},null,4)]),_:1}))}});const oe=X(K,[["__scopeId","data-v-1dad7342"]]);export{oe as default};
