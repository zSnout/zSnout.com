import{v as f,D as l,P as m,Q as v}from"./index.472zx6ds.js";function d(p,{useDevicePixelRatio:i=!0}={}){const t=[];return v(()=>t.forEach(o=>o())),new Promise(o=>{t.push(f(()=>{var a;const n=l(p);if(n instanceof HTMLCanvasElement){const{width:c,height:r}=m(n),h=[],u=()=>{n.width=c.value*(i?devicePixelRatio:1)*(s!=null?s:1),n.height=r.value*(i?devicePixelRatio:1)*(s!=null?s:1),h.forEach(e=>e())};let s=(a=n.resolution)!=null?a:1;Object.defineProperty(n,"resolution",{configurable:!0,enumerable:!1,get(){return s},set(e){s=e,u()}}),t.push(f(u)),o({canvas:n,onDispose:e=>t.push(e),onResize:e=>h.push(e),size:{width:c,height:r},dispose(){t.forEach(e=>e()),t.splice(0,t.length)}})}}))})}export{d as u};
