import{d as D,q as p,a8 as F,ak as I,B as P,aA as B,aK as A,o as E,c as H,w as N,b as R,a as o,ax as T,u as w,aQ as k,p as M,l as W}from"./index.5eygmsavjzc0.js";import{u as X}from"./index.55wflef3jm40.js";import{F as L}from"./FullscreenDisplay.2pmkxxoua4y0.js";import{a as V,H as Y}from"./SharedNav.3q0ndchopua0.js";import{u as j}from"./useCanvas.87p0yoq7nt80.js";import{_ as q}from"./plugin-vue_export-helper.62h235na3u80.js";import"./LogoLight.11xzt69hf600.js";import"./Button.32h7782uxra0.js";const K=u=>(M("data-v-dc016276"),u=u(),W(),u),Q=K(()=>o("span",null,"/",-1)),G=D({__name:"slider",setup(u){const C=p(),b=p(),$=F(),d=p(!1),r=p(0),y=[],f=X(1,.25,100);for(let s of[C,b])j(s,{useDevicePixelRatio:!1}).then(t=>{const{canvas:c,onDispose:m,onResize:x,size:z}=t,{width:n,height:_}=z,e=c.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");let l=NaN,v=NaN;function h(){e.fillStyle="white",e.fillRect(0,0,n.value,_.value)}y.push(h),h(),x(h),m(I(P({pointer:$,rotation:r}),({pointer:{x:a,y:i}})=>{if(!d.value){l=NaN,v=NaN;return}a=(a-r.value)%n.value,a<0&&(a+=n.value),!isNaN(l)&&!isNaN(v)&&Math.abs(l-a)<n.value/2&&(e.beginPath(),e.moveTo(l,v),e.lineTo(a,i),e.stroke()),l=a,v=i})),setTimeout(()=>{const a=()=>Math.random()*200-100;for(let[i,g]of[[0,0],[-200,100],[100,300],[70,-250]])e.beginPath(),e.moveTo(n.value/2+i+a(),_.value/2+g+a()),e.lineTo(n.value/2+i+a(),_.value/2+g+a()),e.stroke()})});B("pointerdown",()=>d.value=!0),B("pointerup",()=>d.value=!1),A(()=>r.value+=f.value);function S(s){return s>innerWidth?s-2*innerWidth:s}return(s,t)=>(E(),H(L,null,{indicator:N(()=>[R(Y,null,{default:N(()=>[o("span",{class:"button",onClick:t[0]||(t[0]=c=>f.value-=.25)},"Slower"),Q,o("span",{class:"button",onClick:t[1]||(t[1]=c=>f.value+=.25)},"Faster"),R(V),o("span",{class:"button",onClick:t[2]||(t[2]=c=>y.forEach(m=>m()))}," Clear ")]),_:1})]),default:N(()=>[o("canvas",{ref_key:"canvasA",ref:C,class:"canvas",style:T(`transform: translateX(${S(r.value%(2*w(k)))}px)`)},null,4),o("canvas",{ref_key:"canvasB",ref:b,class:"canvas",style:T(`transform: translateX(${S((r.value+w(k))%(2*w(k)))}px)`)},null,4)]),_:1}))}});var na=q(G,[["__scopeId","data-v-dc016276"]]);export{na as default};
