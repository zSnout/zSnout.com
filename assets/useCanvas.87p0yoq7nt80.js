import{v as f,az as l,U as m,as as v}from"./index.5eygmsavjzc0.js";function d(p,{useDevicePixelRatio:o=!0}={}){const t=[];return v(()=>t.forEach(a=>a())),new Promise(a=>{t.push(f(()=>{var i;const n=l(p);if(n instanceof HTMLCanvasElement){const{width:c,height:r}=m(n),h=[],u=()=>{n.width=c.value*(o?devicePixelRatio:1)*(s!=null?s:1),n.height=r.value*(o?devicePixelRatio:1)*(s!=null?s:1),h.forEach(e=>e())};let s=(i=n.resolution)!=null?i:1;Object.defineProperty(n,"resolution",{configurable:!0,enumerable:!1,get(){return s},set(e){s=e,u()}}),t.push(f(u)),a({canvas:n,onDispose:e=>t.push(e),onResize:e=>h.push(e),size:{width:c,height:r},dispose(){t.forEach(e=>e()),t.splice(0,t.length)}})}}))})}export{d as u};
