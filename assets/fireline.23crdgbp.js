import{u as y}from"./index.55wflef3.js";import{F as M}from"./FullscreenDisplay.421pqk6v.js";import{S as I,H as L}from"./BookmarkIcon.19otz2s5.js";import{u as R}from"./useCanvas.87p0yoq7.js";import{s as b}from"./useOption.ujvp9hcq.js";import{r as $}from"./useRandint.4l2grpuh.js";import{d as B,q as w,o as H,c as D,w as _,b as g,a as r,p as F,l as N,_ as P}from"./index.2g1oawtf.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";import"./VStack.1y80766s.js";const h=f=>(F("data-v-bf5ac853"),f=f(),N(),f),V=h(()=>r("span",null,"/",-1)),Y=h(()=>r("span",null,"/",-1)),q=B({__name:"fireline",setup(f){const C=w(),c=y(5,1,20);b("size",c);const v=y(3,1,20);b("count",v);const e=w();return R(C,{useDevicePixelRatio:!1}).then(S=>{const{canvas:o,onResize:l,size:t}=S,{width:k,height:m}=t,s=o.getContext("2d");if(!s)throw new Error("Your device doesn't support HTML5 canvases.");function z(u,a,p){let n=(u+a)/2;for(let i=0;i<k.value;i++){const T=n;n+=$(-c.value,c.value),n=Math.max(u,Math.min(a,n));const d=s.createLinearGradient(i,n,i,p);d.addColorStop(0,"orange"),d.addColorStop(1,"yellow"),s.fillStyle=d,s.fillRect(i,n,1,p-n),s.strokeStyle="red",s.beginPath(),s.moveTo(i-1,T),s.lineTo(i,n),s.stroke()}}let x;e.value=()=>{s.fillStyle="white",s.fillRect(0,0,k.value,m.value),clearTimeout(x);const u=m.value/v.value;let a=0;function p(){z(a*u,(a+1)*u,Math.min(m.value,(a+2)*u)),a++,!(a>v.value)&&(x=setTimeout(p,100))}p()},setTimeout(e.value),l(e.value)}),(S,o)=>(H(),D(M,null,{indicator:_(()=>[g(L,null,{default:_(()=>[r("span",{class:"button",onClick:o[1]||(o[1]=l=>{var t;return c.value-=1,(t=e.value)==null?void 0:t.call(e)})},"Smaller"),V,r("span",{class:"button",onClick:o[2]||(o[2]=l=>{var t;return c.value+=1,(t=e.value)==null?void 0:t.call(e)})},"Larger"),g(I),r("span",{class:"button",onClick:o[3]||(o[3]=l=>{var t;return v.value-=1,(t=e.value)==null?void 0:t.call(e)})},"Less"),Y,r("span",{class:"button",onClick:o[4]||(o[4]=l=>{var t;return v.value+=1,(t=e.value)==null?void 0:t.call(e)})},"More")]),_:1})]),default:_(()=>[r("canvas",{ref_key:"canvas",ref:C,onClick:o[0]||(o[0]=(...l)=>e.value&&e.value(...l))},null,512)]),_:1}))}});const X=P(q,[["__scopeId","data-v-bf5ac853"]]);export{X as default};