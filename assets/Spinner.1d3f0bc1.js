import{d as P,k as c,a8 as k,as as x,au as y,E as D,r as F,j as g,ay as z,c as B,w as m,o as E,b as C,a as u,aq as H,p as R,g as T}from"./index.493545ea.js";import{F as $}from"./FullscreenDisplay.f815a80b.js";import{_ as L,a as V,H as Y}from"./Modal.3d1611fe.js";import{u as j}from"./useCanvas.12f549de.js";const q=v=>(R("data-v-3f2db3b5"),v=v(),T(),v),X=q(()=>u("span",null,"/",-1)),A=P({__name:"Spinner",setup(v){const w=c(),S=k(),p=c(!1),s=c(0),d=c(),h=x(Math.PI/360,Math.PI/1440,Math.PI/8);return j(w,{useDevicePixelRatio:!1}).then(N=>{const{canvas:t,onDispose:n,onResize:I,size:a}=N,e=t.getContext("2d"),M=y(()=>Math.min(a.width.value/2,a.height.value/2));if(!e)throw new Error("Your device doesn't support HTML5 canvases.");let o=NaN,l=NaN;e.translate(a.width.value/2,a.height.value/2);function f(){e.beginPath(),e.fillStyle="white",e.arc(a.width.value/2,a.height.value/2,M.value,0,2*Math.PI),e.fill()}d.value=f,f(),I(f),n(D(F({pointer:S,rotation:s}),({pointer:{x:i,y:r}})=>{if(!p.value){o=NaN,l=NaN;return}const _=Math.hypot(a.width.value/2-i,a.height.value/2-r),b=Math.atan2(r-a.height.value/2,i-a.width.value/2);if(_>M.value){o=NaN,l=NaN;return}[i,r]=[a.width.value/2+_*Math.cos(s.value-b),a.height.value/2-_*Math.sin(s.value-b)],!isNaN(o)&&!isNaN(l)&&(e.beginPath(),e.moveTo(o,l),e.lineTo(i,r),e.stroke()),o=i,l=r}))}),g("pointerdown",()=>p.value=!0),g("pointerup",()=>p.value=!1),z(()=>s.value+=h.value),(N,t)=>(E(),B($,null,{indicator:m(()=>[C(Y,null,{default:m(()=>[u("span",{class:"button",onClick:t[0]||(t[0]=n=>h.value-=Math.min(Math.PI/1440))}," Slower "),X,u("span",{class:"button",onClick:t[1]||(t[1]=n=>h.value+=Math.min(Math.PI/1440))}," Faster "),C(V),u("span",{class:"button",onClick:t[2]||(t[2]=(...n)=>d.value&&d.value(...n))},"Clear")]),_:1})]),default:m(()=>[u("canvas",{ref_key:"canvas",ref:w,class:"canvas",style:H(`transform: rotate(${s.value}rad)`)},null,4)]),_:1}))}});var Q=L(A,[["__scopeId","data-v-3f2db3b5"]]);export{Q as default};
