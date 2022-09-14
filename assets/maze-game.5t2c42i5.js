import{d as W,q as P,av as q,am as G,g as D,L as H,o as X,c as N,w as V,a as R,_ as J}from"./index.2g1oawtf.js";import{F as K}from"./FullscreenDisplay.421pqk6v.js";import{u as C}from"./useCanvas.87p0yoq7.js";import"./BookmarkIcon.19otz2s5.js";import"./VStack.1y80766s.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";function S(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function I(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?S(Object(o),!0).forEach(function(n){Q(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function Q(t,r,o){return r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Y(t){return t.slice(0,-1)}function F(t,r=0){return r?Array.from(Array(r-t).keys()).map(o=>o+t):Array.from(Array(t).keys())}function L(t){return[...new Set(t)]}function A(t,r){const o=L(t.map(m=>m.set)).filter(Boolean),n=(e=F(1,t.length+1),v=o,[e,v].reduce((m,d)=>m.filter(_=>!d.includes(_)))).sort(()=>.5-r());var e,v;t.filter(m=>!m.set).forEach((m,d)=>m.set=n[d])}function B(t,r,o=.5){Y(t).forEach((n,e)=>{const v=t[e+1],m=n.set!==v.set,d=r()<=o;m&&d&&(function(_,u,s){_.forEach(h=>{h.set===u&&(h.set=s)})}(t,v.set,n.set),n.right=!1,v.left=!1)})}function U(t=8,r=t,o=!0,n=1){const e=function(u){return function(){let s=u+=1831565813;return s=Math.imul(s^s>>>15,1|s),s^=s+Math.imul(s^s>>>7,61|s),((s^s>>>14)>>>0)/4294967296}}(n),v=[],m=F(t);for(let u=0;u<r;u+=1){const s=m.map(h=>({x:h,y:u,top:o||u>0,left:o||h>0,bottom:o||u<r-1,right:o||h<t-1}));v.push(s)}Y(v).forEach((u,s)=>{A(u,e),B(u,e),function(h,z,j){const E=Object.values(function(b,i){let c=L(b.map(g=>g.set)).reduce((g,x)=>I(I({},g),{},{[x]:[]}),{});return b.forEach(g=>c[g.set].push(g)),c}(h)),{ceil:T}=Math;E.forEach(b=>{(function(i,c,g){c=c==null?1:c;const x=i==null?0:i.length;if(!x||c<1)return[];c=c>x?x:c;let f=-1;const p=x-1,O=[...i];for(;++f<c;){const a=f+Math.floor(g()*(p-f+1)),k=O[a];O[a]=O[f],O[f]=k}return O.slice(0,c)})(b,T(j()*b.length),j).forEach(i=>{if(i){const c=z[i.x];i.bottom=!1,c.top=!1,c.set=i.set}})})}(u,v[s+1],e)});const d=(_=v)[_.length-1];var _;return A(d,e),B(d,e,1),v}const Z=W({__name:"maze-game",setup(t){var g,x;const r=P(),o=P(),n=P(),e=32,v=12,m=e/2,d=e/4;let _=0,u=0;const s=P(0),h=P(0);(x=(g=window.DeviceMotionEvent)==null?void 0:g.requestPermission)==null||x.call(g);const{beta:z,gamma:j}=q(),{x:E,y:T}=G(),b=D(()=>{var f;return(f=z.value)!=null?f:180*E.value/innerWidth-90}),i=D(()=>{var f;return(f=j.value)!=null?f:180*T.value/innerWidth-90}),c=D(()=>b.value<-30&&b.value<-Math.abs(i.value)?"right":b.value>30&&b.value>Math.abs(i.value)?"left":i.value<-30&&i.value<-Math.abs(b.value)?"down":i.value>30&&i.value>Math.abs(b.value)?"up":"none");return C(r,{useDevicePixelRatio:!1}).then(f=>{const{canvas:p,onResize:O}=f,a=p.getContext("2d");if(!a)throw new Error("Your device does not support HTML5 canvases.");function k(){if(!n.value&&p.width>4*e&&p.height>4*e){const y=~~(p.width/e)-2,l=~~(p.height/e)-2;n.value=U(y,l,!0,~~(Math.random()*1e6)),_=y,u=l}}k(),n.value||O(k),H(()=>{a.clearRect(0,0,p.width,p.height),a.beginPath();let y=s.value*e+e+m,l=h.value*e+e+m;y+=c.value==="left"?-d:c.value==="right"?d:0,l+=c.value==="up"?-d:c.value==="down"?d:0,a.fillStyle="black",a.moveTo(y,l),a.arc(y,l,v,0,2*Math.PI),a.fill()}),setInterval(()=>{var w;if(!n.value)return;const y=c.value,l=(w=n.value)==null?void 0:w[h.value][s.value];s.value+=y==="left"&&!l.left?-1:y==="right"&&!l.right?1:0,h.value+=y==="up"&&!l.top?-1:y==="down"&&!l.bottom?1:0,s.value=Math.max(0,Math.min(_,s.value)),h.value=Math.max(0,Math.min(u,h.value))},1e3)}),C(o,{useDevicePixelRatio:!1}).then(f=>{const{canvas:p,onResize:O}=f,a=p.getContext("2d");if(!a)throw new Error("Your device does not support HTML5 canvases.");function k(){if(a.fillStyle="white",a.fillRect(0,0,p.width,p.height),!!n.value)for(const y of n.value)for(const l of y){a.lineWidth=2,a.strokeStyle="black",a.lineCap="round";const w=l.x*e+e,M=l.y*e+e;l.top&&(a.moveTo(w,M),a.lineTo(w+e,M),a.stroke()),l.left&&(a.moveTo(w,M),a.lineTo(w,M+e),a.stroke()),l.right&&(a.moveTo(w+e,M),a.lineTo(w+e,M+e),a.stroke()),l.bottom&&(a.moveTo(w,M+e),a.lineTo(w+e,M+e),a.stroke())}}k(),O(()=>setTimeout(k,100))}),(f,p)=>(X(),N(K,null,{default:V(()=>[R("canvas",{ref_key:"mazeImage",ref:o,class:"maze-image"},null,512),R("canvas",{ref_key:"canvas",ref:r,class:"main"},null,512)]),_:1}))}});const se=J(Z,[["__scopeId","data-v-0124d8e9"]]);export{se as default};
