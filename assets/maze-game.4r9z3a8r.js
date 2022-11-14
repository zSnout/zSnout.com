import{d as H,q as k,L as V,C as Y,o as $,c as F,w as O,a as _,e as j,p as G,l as N,_ as W}from"./index.1ezwfhaa.js";import{F as X}from"./FullscreenDisplay.hao6npqe.js";import{H as E}from"./BookmarkIcon.1thszj4g.js";import{V as q}from"./VStack.xad5wxbj.js";import{u as S}from"./useCanvas.87p0yoq7.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./Field.2ydu2jt8.js";function T(t,c){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);c&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,a)}return r}function C(t){for(var c=1;c<arguments.length;c++){var r=arguments[c]!=null?arguments[c]:{};c%2?T(Object(r),!0).forEach(function(a){U(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}function U(t,c,r){return c in t?Object.defineProperty(t,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[c]=r,t}function I(t){return t.slice(0,-1)}function K(t,c=0){return c?Array.from(Array(c-t).keys()).map(r=>r+t):Array.from(Array(t).keys())}function L(t){return[...new Set(t)]}function A(t,c){const r=L(t.map(m=>m.set)).filter(Boolean),a=(n=K(1,t.length+1),d=r,[n,d].reduce((m,b)=>m.filter(w=>!b.includes(w)))).sort(()=>.5-c());var n,d;t.filter(m=>!m.set).forEach((m,b)=>m.set=a[b])}function R(t,c,r=.5){I(t).forEach((a,n)=>{const d=t[n+1],m=a.set!==d.set,b=c()<=r;m&&b&&(function(w,u,i){w.forEach(f=>{f.set===u&&(f.set=i)})}(t,d.set,a.set),a.right=!1,d.left=!1)})}function J(t=8,c=t,r=!0,a=1){const n=function(u){return function(){let i=u+=1831565813;return i=Math.imul(i^i>>>15,1|i),i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296}}(a),d=[],m=K(t);for(let u=0;u<c;u+=1){const i=m.map(f=>({x:f,y:u,top:r||u>0,left:r||f>0,bottom:r||u<c-1,right:r||f<t-1}));d.push(i)}I(d).forEach((u,i)=>{A(u,n),R(u,n),function(f,D,M){const P=Object.values(function(s,o){let l=L(s.map(e=>e.set)).reduce((e,p)=>C(C({},e),{},{[p]:[]}),{});return s.forEach(e=>l[e.set].push(e)),l}(f)),{ceil:z}=Math;P.forEach(s=>{(function(o,l,e){l=l==null?1:l;const p=o==null?0:o.length;if(!p||l<1)return[];l=l>p?p:l;let y=-1;const v=p-1,h=[...o];for(;++y<l;){const g=y+Math.floor(e()*(v-y+1)),B=h[g];h[g]=h[y],h[y]=B}return h.slice(0,l)})(s,z(M()*s.length),M).forEach(o=>{if(o){const l=D[o.x];o.bottom=!1,l.top=!1,l.set=o.set}})})}(u,d[i+1],n)});const b=(w=d)[w.length-1];var w;return A(b,n),R(b,n,1),d}const x=t=>(G("data-v-7acfbfc3"),t=t(),N(),t),Q=x(()=>_("div",null,null,-1)),Z=x(()=>_("div",null,null,-1)),ee=x(()=>_("div",null,null,-1)),te=x(()=>_("div",null,null,-1)),oe=x(()=>_("div",null,null,-1)),ne=H({__name:"maze-game",setup(t){const c=k(),r=k(),a=k(),n=32,d=12,m=n/2;let b=0,w=0;const u=k(0),i=k(0);function f(s,o,l=!1){var p;if(!a.value||s&&o)return;const e=(p=a.value)==null?void 0:p[i.value][u.value];l?(u.value+=s,i.value+=o):(u.value+=s===-1&&!e.left?-1:s===1&&!e.right?1:0,i.value+=o===-1&&!e.top?-1:o===1&&!e.bottom?1:0),u.value=Math.max(0,Math.min(b,u.value)),i.value=Math.max(0,Math.min(w,i.value))}S(c,{useDevicePixelRatio:!1}).then(s=>{const{canvas:o,onResize:l}=s,e=o.getContext("2d");if(!e)throw new Error("Your device does not support HTML5 canvases.");function p(){if(!a.value&&o.width>4*n&&o.height>4*n){const y=~~(o.width/n)-2,v=~~(o.height/n)-2;a.value=J(y,v,!0,~~(Math.random()*1e6)),b=y,w=v}}p(),a.value||l(p),V(()=>{e.clearRect(0,0,o.width,o.height),e.beginPath();const y=u.value*n+n+m,v=i.value*n+n+m;e.fillStyle="black",e.moveTo(y,v),e.arc(y,v,d,0,2*Math.PI),e.fill()})}),S(r,{useDevicePixelRatio:!1}).then(s=>{const{canvas:o,onResize:l}=s,e=o.getContext("2d");if(!e)throw new Error("Your device does not support HTML5 canvases.");function p(){if(e.fillStyle="white",e.fillRect(0,0,o.width,o.height),!!a.value)for(const y of a.value)for(const v of y){e.lineWidth=2,e.strokeStyle="black",e.lineCap="round";const h=v.x*n+n,g=v.y*n+n;v.top&&(e.moveTo(h,g),e.lineTo(h+n,g),e.stroke()),v.left&&(e.moveTo(h,g),e.lineTo(h,g+n),e.stroke()),v.right&&(e.moveTo(h+n,g),e.lineTo(h+n,g+n),e.stroke()),v.bottom&&(e.moveTo(h,g+n),e.lineTo(h+n,g+n),e.stroke())}}p(),l(()=>setTimeout(p,100))});const D="ArrowUp W w".split(" "),M="ArrowLeft A a".split(" "),P="ArrowDown S s".split(" "),z="ArrowRight D d".split(" ");return Y("keydown",s=>{!s.ctrlKey&&!s.metaKey&&(M.includes(s.key)?(s.preventDefault(),f(-1,0,s.altKey)):z.includes(s.key)?(s.preventDefault(),f(1,0,s.altKey)):D.includes(s.key)?(s.preventDefault(),f(0,-1,s.altKey)):P.includes(s.key)&&(s.preventDefault(),f(0,1,s.altKey)))}),(s,o)=>($(),F(X,null,{default:O(()=>[_("canvas",{ref_key:"mazeImage",ref:r,class:"maze-image"},null,512),_("canvas",{ref_key:"canvas",ref:c,class:"main"},null,512),j(q,{class:"controls dark",space:1/16,stretch:""},{default:O(()=>[j(E,{space:1/16,stretch:""},{default:O(()=>[Q,_("div",{class:"btn second-layer w",onClick:o[0]||(o[0]=l=>f(0,-1))},"^"),Z]),_:1}),j(E,{space:1/16,stretch:""},{default:O(()=>[_("div",{class:"btn second-layer a",onClick:o[1]||(o[1]=l=>f(-1,0))},"<"),ee,_("div",{class:"btn second-layer d",onClick:o[2]||(o[2]=l=>f(1,0))},">")]),_:1}),j(E,{space:1/16,stretch:""},{default:O(()=>[te,_("div",{class:"btn second-layer s",onClick:o[3]||(o[3]=l=>f(0,1))},"v"),oe]),_:1})]),_:1})]),_:1}))}});const pe=W(ne,[["__scopeId","data-v-7acfbfc3"]]);export{pe as default};
