import{d as w,q as f,aG as C,o as S,c as b,w as i,b as g,a as l,p as z,l as I}from"./index.5s3b6nbjrnk0.js";import{u as R}from"./index.55wflef3jm40.js";import{F as B}from"./FullscreenDisplay.2pmkxxoua4y0.js";import{H as D}from"./SharedNav.1lm7nnzuivvk.js";import{u as F}from"./useCanvas.87p0yoq7nt80.js";import{s as H}from"./useOption.ujvp9hcq9ds0.js";import{r as o}from"./useRandint.4l2grpuhnea0.js";import{r as m}from"./useRandomColor.3lt16kz3k0g0.js";import{_ as P}from"./plugin-vue_export-helper.62h235na3u80.js";import"./LogoLight.11xzt69hf600.js";import"./Button.32h7782uxra0.js";const L=t=>(z("data-v-7e54587a"),t=t(),I(),t),M=L(()=>l("span",null,"/",-1)),N=w({__name:"ellipses",setup(t){const p=f(),r=f(),a=R(50,5,1e3);return H("size",a),F(p,{useDevicePixelRatio:!1}).then(c=>{const{canvas:s,onDispose:n,onResize:_,size:d}=c,{width:u,height:v}=d,e=s.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{e.fillStyle="white",e.fillRect(0,0,u.value,v.value)},r.value(),_(r.value),n(C(()=>{for(let V of Array(10)){e.fillStyle=m(),e.strokeStyle=m();const h=o(0,a.value),y=o(0,a.value),x=o(0,u.value),k=o(0,v.value);e.beginPath(),e.ellipse(x,k,h/2,y/2,0,0,2*Math.PI),e.fill(),e.stroke()}}).pause)}),(c,s)=>(S(),b(B,null,{indicator:i(()=>[g(D,null,{default:i(()=>[l("span",{class:"button",onClick:s[0]||(s[0]=n=>a.value-=1)},"Smaller"),M,l("span",{class:"button",onClick:s[1]||(s[1]=n=>a.value+=1)},"Larger")]),_:1})]),default:i(()=>[l("canvas",{ref_key:"canvas",ref:p},null,512)]),_:1}))}});var Q=P(N,[["__scopeId","data-v-7e54587a"]]);export{Q as default};
