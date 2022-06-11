var B=Object.defineProperty,I=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var z=(a,n,t)=>n in a?B(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,R=(a,n)=>{for(var t in n||(n={}))T.call(n,t)&&z(a,t,n[t]);if(U)for(var t of U(n))W.call(n,t)&&z(a,t,n[t]);return a},P=(a,n)=>I(a,L(n));import{ad as f,f as e,aw as k,ak as D,m as E,a9 as X,aq as C}from"./index.98247306.js";import{u as A}from"./useWebGL.9b63311b.js";function M(a,n,t,i,r){return f(()=>(e(r)-e(a))*(e(i)-e(t))/(e(n)-e(a))+e(t))}const G=k("history");globalThis.params=G;function N(a,n,t){const i=D(),r=M(0,i.width,0,1,t.x),o=M(i.height,0,0,1,t.y);return{x:f(()=>r.value*n.x.value+a.x.value),y:f(()=>o.value*n.y.value+a.y.value)}}function O(a,n){const t=D();a=V(a,n);const i=f(()=>{const r=e(a.xStart),o=e(a.xEnd),l=e(a.yStart),d=e(a.yEnd);return t.width.value>t.height.value?{x:(r-(o-r)/2)/2,y:l}:{x:r,y:(l-(d-l)/2)/2}});return{offset:{x:f(()=>i.value.x),y:f(()=>i.value.y)},scale:{x:f(()=>e(a.xEnd)-e(a.xStart)),y:f(()=>e(a.yEnd)-e(a.yStart))}}}function Y(a){return f(()=>[e(a.x),e(a.y)])}function V(a,n){const t=f(()=>{const{xStart:i,xEnd:r,yStart:o,yEnd:l}=a,d=e(i)+e(r),c=e(o)+e(l),v=(e(r)-e(i))/2,x=(e(l)-e(o))/2;let{width:{value:u},height:{value:y}}=n;return(Number.isNaN(u)||u===0)&&(u=y),(Number.isNaN(y)||y===0)&&(y=u),(Number.isNaN(u)||u===0)&&(u=y=1),u<y?{xStart:i,xEnd:r,yStart:c-y/u*x,yEnd:c+y/u*x}:{xStart:d-u/y*v,xEnd:d+u/y*v,yStart:o,yEnd:l}});return{xStart:f(()=>e(t.value.xStart)),xEnd:f(()=>e(t.value.xEnd)),yStart:f(()=>e(t.value.yStart)),yEnd:f(()=>e(t.value.yEnd))}}const b=`
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
`,Z=`
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`;async function F(a,n,t){var d,c,v,x,u,y,g,m,h;const i={xStart:E((c=(d=t==null?void 0:t.bounds)==null?void 0:d.xStart)!=null?c:-2),xEnd:E((x=(v=t==null?void 0:t.bounds)==null?void 0:v.xEnd)!=null?x:2),yStart:E((y=(u=t==null?void 0:t.bounds)==null?void 0:u.yStart)!=null?y:-2),yEnd:E((m=(g=t==null?void 0:t.bounds)==null?void 0:g.yEnd)!=null?m:2)},r=await A(a,b+n,P(R({},t),{vertShader:b+((h=t==null?void 0:t.vertShader)!=null?h:Z)})),{offset:o,scale:l}=O(i,r.size);if(r.useUniform("offset","f",Y(o)),r.useUniform("scale","f",Y(l)),(t==null?void 0:t.uniforms)===!0){r.useUniform("bounds.xStart","f",i.xStart),r.useUniform("bounds.xEnd","f",i.xEnd),r.useUniform("bounds.yStart","f",i.yStart),r.useUniform("bounds.yEnd","f",i.yEnd);const s=X(),S=N(o,l,s);r.useUniform("pointer.x","f",S.x),r.useUniform("pointer.y","f",S.y)}return Object.assign(r,{bounds:i,offset:o,scale:l})}function _(a,n,t){return{xStart:f(()=>e(a.xStart)+e(t)*(e(n.x)-e(a.xStart))/10),xEnd:f(()=>e(a.xEnd)+e(t)*(e(n.x)-e(a.xEnd))/10),yStart:f(()=>e(a.yStart)+e(t)*(e(n.y)-e(a.yStart))/10),yEnd:f(()=>e(a.yEnd)+e(t)*(e(n.y)-e(a.yEnd))/10)}}async function Q(a,n,t){const i=await F(a,n,t),{canvas:r,bounds:o,offset:l,onDispose:d,scale:c,useUniform:v}=i,x=X(),u={x:E(NaN),y:E(NaN)},y=E(0),g=_(o,N(l,c,x),y);if((t==null?void 0:t.uniforms)===!0){const s=_(o,N(l,c,x),1);v("zoomRegion.xStart","f",s.xStart),v("zoomRegion.xEnd","f",s.xEnd),v("zoomRegion.yStart","f",s.yStart),v("zoomRegion.yEnd","f",s.yEnd)}d(C(r,"wheel",s=>{s.preventDefault(),x.x.value=s.offsetX,x.y.value=s.offsetY,y.value=Math.sqrt(Math.abs(s.deltaY))*-Math.sign(s.deltaY)/10;const{xStart:{value:S},xEnd:{value:w},yStart:{value:j},yEnd:{value:q}}=g;o.xStart.value=S,o.xEnd.value=w,o.yStart.value=j,o.yEnd.value=q},{passive:!1}));const m=N(l,c,x),h=N(l,c,u);return d(C(r,"pointermove",s=>{if(s.preventDefault(),Number.isNaN(u.x.value)||Number.isNaN(u.y.value))return;x.x.value=s.offsetX,x.y.value=s.offsetY;const S=m.x.value-h.x.value,w=m.y.value-h.y.value;o.xStart.value-=S,o.xEnd.value-=S,o.yStart.value-=w,o.yEnd.value-=w,u.x.value=x.x.value,u.y.value=x.y.value})),d(C(r,"pointerdown",s=>{r.setPointerCapture(s.pointerId),u.x.value=s.offsetX,u.y.value=s.offsetY})),d(C("pointerup",s=>{r.releasePointerCapture(s.pointerId),u.x.value=NaN,u.y.value=NaN})),i}export{Q as u};
