import{d as T,q as d,a8 as x,aM as y,ak as D,B,aA as b,aH as F,o as H,c as z,w as N,b as k,a as v,ay as R,p as $,l as E}from"./index.3wtsgydi.js";import{u as L}from"./index.55wflef3.js";import{F as V}from"./FullscreenDisplay.6alzznsv.js";import{a as Y,H as j}from"./SharedNav.40at9hg6.js";import{u as q}from"./useCanvas.87p0yoq7.js";import{_ as A}from"./_plugin-vue_export-helper.35ltfn2z.js";import"./LogoLight.539ztpd2.js";import"./Button.49gbgcb2.js";const X=p=>($("data-v-5a4a8c94"),p=p(),E(),p),G=X(()=>v("span",null,"/",-1)),J=T({__name:"turntable",setup(p){const M=d(),I=x(),f=d(!1),r=d(0),m=d(),h=L(Math.PI/360,Math.PI/1440,Math.PI/8);return q(M,{useDevicePixelRatio:!1}).then(w=>{const{canvas:t,onDispose:u,onResize:S,size:g}=w,{width:s,height:o}=g,a=t.getContext("2d"),C=y(()=>Math.min(s.value/2,o.value/2));if(!a)throw new Error("Your device doesn't support HTML5 canvases.");let i=NaN,c=NaN;a.translate(s.value/2,o.value/2);function _(){a.beginPath(),a.fillStyle="white",a.arc(s.value/2,o.value/2,C.value,0,2*Math.PI),a.fill()}m.value=_,_(),S(_),u(D(B({pointer:I,rotation:r}),({pointer:{x:e,y:n}})=>{if(!f.value){i=NaN,c=NaN;return}const l=Math.hypot(s.value/2-e,o.value/2-n),P=Math.atan2(n-o.value/2,e-s.value/2);if(l>C.value){i=NaN,c=NaN;return}[e,n]=[s.value/2+l*Math.cos(r.value-P),o.value/2-l*Math.sin(r.value-P)],!isNaN(i)&&!isNaN(c)&&(a.beginPath(),a.moveTo(i,c),a.lineTo(e,n),a.stroke()),i=e,c=n})),setTimeout(()=>{const e=()=>Math.random()*200-100;for(let[n,l]of[[0,0],[-200,100],[100,300],[70,-250]])a.beginPath(),a.moveTo(s.value/2+n+e(),o.value/2+l+e()),a.lineTo(s.value/2+n+e(),o.value/2+l+e()),a.stroke()})}),b("pointerdown",()=>f.value=!0),b("pointerup",()=>f.value=!1),F(()=>r.value+=h.value),(w,t)=>(H(),z(V,null,{indicator:N(()=>[k(j,null,{default:N(()=>[v("span",{class:"button",onClick:t[0]||(t[0]=u=>h.value-=Math.min(Math.PI/1440))}," Slower "),G,v("span",{class:"button",onClick:t[1]||(t[1]=u=>h.value+=Math.min(Math.PI/1440))}," Faster "),k(Y),v("span",{class:"button",onClick:t[2]||(t[2]=(...u)=>m.value&&m.value(...u))},"Clear")]),_:1})]),default:N(()=>[v("canvas",{ref_key:"canvas",ref:M,class:"canvas",style:R(`transform: rotate(${r.value}rad)`)},null,4)]),_:1}))}});const ta=A(J,[["__scopeId","data-v-5a4a8c94"]]);export{ta as default};
