import{u as y}from"./index.6ce012c2.js";import{F}from"./FullscreenDisplay.96367436.js";import{a as M,H as I}from"./SharedNav.04ff8d8d.js";import{u as L}from"./useCanvas.eee192ab.js";import{s as g}from"./useOption.91348ca0.js";import{r as R}from"./useRandint.07e5b532.js";import{_ as $}from"./VStack.0cf8ef58.js";import{d as B,s as w,o as H,c as D,w as _,b,a as i,p as N,g as P}from"./index.5ecff434.js";const h=d=>(N("data-v-769913ad"),d=d(),P(),d),V=h(()=>i("span",null,"/",-1)),Y=h(()=>i("span",null,"/",-1)),E=B({__name:"Fireline",setup(d){const C=w(),v=y(5,1,20);g("size",v);const c=y(3,1,20);g("count",c);const e=w();return L(C,{useDevicePixelRatio:!1}).then(k=>{const{canvas:a,onResize:l,size:t}=k,{width:S,height:f}=t,o=a.getContext("2d");if(!o)throw new Error("Your device doesn't support HTML5 canvases.");function z(u,s,p){let n=(u+s)/2;for(let r=0;r<S.value;r++){const T=n;n+=R(-v.value,v.value),n=Math.max(u,Math.min(s,n));const m=o.createLinearGradient(r,n,r,p);m.addColorStop(0,"orange"),m.addColorStop(1,"yellow"),o.fillStyle=m,o.fillRect(r,n,1,p-n),o.strokeStyle="red",o.beginPath(),o.moveTo(r-1,T),o.lineTo(r,n),o.stroke()}}let x;e.value=()=>{o.fillStyle="white",o.fillRect(0,0,S.value,f.value),clearTimeout(x);const u=f.value/c.value;let s=0;function p(){z(s*u,(s+1)*u,Math.min(f.value,(s+2)*u)),s++,!(s>c.value)&&(x=setTimeout(p,100))}p()},setTimeout(e.value),l(e.value)}),(k,a)=>(H(),D(F,null,{indicator:_(()=>[b(I,null,{default:_(()=>[i("span",{class:"button",onClick:a[1]||(a[1]=l=>{var t;return v.value-=1,(t=e.value)==null?void 0:t.call(e)})},"Smaller"),V,i("span",{class:"button",onClick:a[2]||(a[2]=l=>{var t;return v.value+=1,(t=e.value)==null?void 0:t.call(e)})},"Larger"),b(M),i("span",{class:"button",onClick:a[3]||(a[3]=l=>{var t;return c.value-=1,(t=e.value)==null?void 0:t.call(e)})},"Less"),Y,i("span",{class:"button",onClick:a[4]||(a[4]=l=>{var t;return c.value+=1,(t=e.value)==null?void 0:t.call(e)})},"More")]),_:1})]),default:_(()=>[i("canvas",{ref_key:"canvas",ref:C,onClick:a[0]||(a[0]=(...l)=>e.value&&e.value(...l))},null,512)]),_:1}))}});var U=$(E,[["__scopeId","data-v-769913ad"]]);export{U as default};