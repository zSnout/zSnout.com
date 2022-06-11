var j=Object.defineProperty,B=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var U=(t,n,e)=>n in t?j(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,z=(t,n)=>{for(var e in n||(n={}))L.call(n,e)&&U(t,e,n[e]);if(C)for(var e of C(n))M.call(n,e)&&U(t,e,n[e]);return t},R=(t,n)=>B(t,I(n));import{ad as l,f as a,m as E,a9 as X,aq as h}from"./index.35819a72.js";import{u as W}from"./useWebGL.b90fb6b3.js";function P(t,n,e,f,u){return l(()=>(a(u)-a(t))*(a(f)-a(e))/(a(n)-a(t))+a(e))}function w(t,n,e){const f=P(0,window.innerWidth,0,1,e.x),u=P(window.innerHeight,0,0,1,e.y);return{x:l(()=>f.value*n.x.value+t.x.value),y:l(()=>u.value*n.y.value+t.y.value)}}function q(t,n){return t=A(t,n),{offset:{x:l(()=>(a(t.xStart)-(a(t.xEnd)-a(t.xStart))/2)/2),y:E(t.yStart)},scale:{x:l(()=>a(t.xEnd)-a(t.xStart)),y:l(()=>a(t.yEnd)-a(t.yStart))}}}function _(t){return l(()=>[a(t.x),a(t.y)])}function A(t,n){const e=l(()=>{const{xStart:f,xEnd:u,yStart:i,yEnd:y}=t,d=a(f)+a(u),c=a(i)+a(y),v=(a(u)-a(f))/2,s=(a(y)-a(i))/2;let{width:{value:r},height:{value:o}}=n;return(Number.isNaN(r)||r===0)&&(r=o),(Number.isNaN(o)||o===0)&&(o=r),(Number.isNaN(r)||r===0)&&(r=o=1),r<o?{xStart:f,xEnd:u,yStart:c-o/r*s,yEnd:c+o/r*s}:{xStart:d-r/o*v,xEnd:d+r/o*v,yStart:i,yEnd:y}});return{xStart:l(()=>a(e.value.xStart)),xEnd:l(()=>a(e.value.xEnd)),yStart:l(()=>a(e.value.yStart)),yEnd:l(()=>a(e.value.yEnd))}}const D=`
struct Bounds {
  float xStart;
  float xEnd;
  float yStart;
  float yEnd;
};

struct Coordinates {
  float x;
  float y;
};
`,G=`
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;async function H(t,n,e){var d,c,v,s,r,o,N,g,x;const f={xStart:E((c=(d=e==null?void 0:e.bounds)==null?void 0:d.xStart)!=null?c:-2),xEnd:E((s=(v=e==null?void 0:e.bounds)==null?void 0:v.xEnd)!=null?s:2),yStart:E((o=(r=e==null?void 0:e.bounds)==null?void 0:r.yStart)!=null?o:-2),yEnd:E((g=(N=e==null?void 0:e.bounds)==null?void 0:N.yEnd)!=null?g:2)},u=await W(t,D+n,R(z({},e),{vertShader:D+((x=e==null?void 0:e.vertShader)!=null?x:G)})),{offset:i,scale:y}=q(f,u.size);if(u.useUniform("offset","f",_(i)),u.useUniform("scale","f",_(y)),(e==null?void 0:e.uniforms)!==!1){u.useUniform("bounds.xStart","f",f.xStart),u.useUniform("bounds.xEnd","f",f.xEnd),u.useUniform("bounds.yStart","f",f.yStart),u.useUniform("bounds.yEnd","f",f.yEnd);const m=X(),S=w(i,y,m);u.useUniform("pointer.x","f",S.x),u.useUniform("pointer.y","f",S.y)}return Object.assign(u,{bounds:f,offset:i,scale:y})}function O(t,n){return{xStart:l(()=>a(t.xStart)+(a(n.x)-a(t.xStart))/10),xEnd:l(()=>a(t.xEnd)+(a(n.x)-a(t.xEnd))/10),yStart:l(()=>a(t.yStart)+(a(n.y)-a(t.yStart))/10),yEnd:l(()=>a(t.yEnd)+(a(n.y)-a(t.yEnd))/10)}}async function k(t,n,e){const f=await H(t,n,e),{canvas:u,bounds:i,offset:y,onDispose:d,scale:c,useUniform:v}=f,s=X(),r={x:E(NaN),y:E(NaN)},o=O(i,w(y,c,s));(e==null?void 0:e.uniforms)!==!1&&(v("zoomRegion.xStart","f",o.xStart),v("zoomRegion.xEnd","f",o.xEnd),v("zoomRegion.yStart","f",o.yStart),v("zoomRegion.yEnd","f",o.yEnd)),d(h(u,"wheel",x=>{x.preventDefault(),s.x.value=x.offsetX,s.y.value=x.offsetY;const{xStart:{value:m},xEnd:{value:S},yStart:{value:Y},yEnd:{value:b}}=o;i.xStart.value=m,i.xEnd.value=S,i.yStart.value=Y,i.yEnd.value=b},{passive:!1}));const N=w(y,c,s),g=w(y,c,r);return d(h(u,"pointermove",x=>{if(x.preventDefault(),Number.isNaN(r.x.value)||Number.isNaN(r.y.value))return;s.x.value=x.offsetX,s.y.value=x.offsetY;const m=N.x.value-g.x.value,S=N.y.value-g.y.value;i.xStart.value-=m,i.xEnd.value-=m,i.yStart.value-=S,i.yEnd.value-=S,r.x.value=s.x.value,r.y.value=s.y.value})),d(h(u,"pointerdown",x=>{u.setPointerCapture(x.pointerId),r.x.value=x.offsetX,r.y.value=x.offsetY})),d(h("pointerup",x=>{u.releasePointerCapture(x.pointerId),r.x.value=NaN,r.y.value=NaN})),f}export{k as u};
