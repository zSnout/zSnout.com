import{u as k}from"./index.55wflef3.js";import{F as x}from"./FullscreenDisplay.hao6npqe.js";import{H as y}from"./BookmarkIcon.3wmuqdow.js";import{u as z}from"./useCanvas.87p0yoq7.js";import{s as M}from"./useOption.ujvp9hcq.js";import{d as w,q as h,o as R,c as S,w as f,e as b,a as i}from"./index.5g74v6w3.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";const g=i("span",null,"/",-1),O=w({__name:"pixelated-rainbow",setup(B){const v=h(),e=h(),t=k(10,3,1e3);M("size",t);const C=["#ff0000","#ff9000","#d0d000","#00c000","#0000ff","#9000f0"];return z(v,{useDevicePixelRatio:!1}).then(p=>{const{canvas:a,onResize:s,size:o}=p,{width:u,height:c}=o,l=a.getContext("2d");if(!l)throw new Error("Your device doesn't support HTML5 canvases.");e.value=()=>{l.fillStyle="white",l.fillRect(0,0,u.value,c.value);for(let n=0;n<u.value;n+=t.value)for(let r=0;r<c.value;r+=t.value)if(!(1-r/c.value+Math.random()-.5>.5)){const m=Math.min(n/u.value*5,4.9999),d=Math.floor(m),_=m%1+Math.random()-.5;l.fillStyle=C[_<.5?d:d+1],l.fillRect(n,r,t.value-2,t.value-2)}},e.value(),s(e.value)}),(p,a)=>(R(),S(x,null,{indicator:f(()=>[b(y,null,{default:f(()=>[i("span",{class:"button",onClick:a[1]||(a[1]=s=>{var o;return t.value-=1,(o=e.value)==null?void 0:o.call(e)})},"Smaller"),g,i("span",{class:"button",onClick:a[2]||(a[2]=s=>{var o;return t.value+=1,(o=e.value)==null?void 0:o.call(e)})},"Larger")]),_:1})]),default:f(()=>[i("canvas",{ref_key:"canvas",ref:v,onClick:a[0]||(a[0]=(...s)=>e.value&&e.value(...s))},null,512)]),_:1}))}});export{O as default};
