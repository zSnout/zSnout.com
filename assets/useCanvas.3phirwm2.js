import{ag as f,K as h,a9 as p,W as m}from"./index.xh0zaea0.js";function d(l,{useDevicePixelRatio:i=!0}={}){const s=[];return f(()=>s.forEach(n=>n())),new Promise(n=>{s.push(h(()=>{const t=p(l);if(t instanceof HTMLCanvasElement){const{width:a,height:r}=m(t),c=[],u=()=>{t.width=a.value*(i?devicePixelRatio:1)*(o??1),t.height=r.value*(i?devicePixelRatio:1)*(o??1),c.forEach(e=>e())};let o=t.resolution??1;Object.defineProperty(t,"resolution",{configurable:!0,enumerable:!1,get(){return o},set(e){o=e,u()}}),s.push(h(u)),n({canvas:t,onDispose:e=>s.push(e),onResize:e=>c.push(e),size:{width:a,height:r},dispose(){s.forEach(e=>e()),s.splice(0,s.length)}})}}))})}export{d as u};