import{an as h,ao as r,W as u,ap as f}from"./index.b085a846.js";function E(p,{useDevicePixelRatio:a=!0}={}){const e=[];return f(()=>e.forEach(o=>o())),new Promise(o=>{e.push(h(()=>{const n=r(p);if(n instanceof HTMLCanvasElement){const{width:t,height:i}=u(n),c=[];e.push(h(()=>{n.width=t.value*(a?devicePixelRatio:1),n.height=i.value*(a?devicePixelRatio:1),c.forEach(s=>s())})),o({canvas:n,onDispose:s=>e.push(s),onResize:s=>c.push(s),size:{width:t,height:i},dispose(){e.forEach(s=>s()),e.splice(0,e.length)}})}}))})}export{E as u};