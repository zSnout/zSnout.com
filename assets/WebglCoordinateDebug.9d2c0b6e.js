var R=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(a,e,o)=>e in a?R(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,I=(a,e)=>{for(var o in e||(e={}))O.call(e,o)&&B(a,o,e[o]);if(k)for(var o of k(e))V.call(e,o)&&B(a,o,e[o]);return a},L=(a,e)=>j(a,q(e));import{u as A,F as H}from"./useWebGL.bb336a49.js";import{r as Y,ad as d,f as P,m as l,aq as z,d as J,c as K,a as T,o as Q,b as X}from"./index.dd50838b.js";import"./Modal.392de8aa.js";function U(a,e,o,r,s){return a=a,e=e,o=o,r=r,s=s,(s-a)*(r-o)/(e-a)+o}function F(a,e,o,r){const s=G(a,e),t=d(()=>({x:U(0,e.width.value,s.xStart,s.xEnd,P(o)),y:U(e.height.value,0,s.yStart,s.yEnd,P(r))}));return Y({x:d(()=>t.value.x),y:d(()=>t.value.y)})}function G(a,e){const o=d(()=>{const{xStart:r,xEnd:s,yStart:t,yEnd:c}=a,m=r+s,u=t+c,y=(s-r)/2,h=(c-t)/2;let{width:{value:f},height:{value:i}}=e;return(Number.isNaN(f)||f===0)&&(f=i),(Number.isNaN(i)||i===0)&&(i=f),(Number.isNaN(f)||f===0)&&(f=i=1),f<i?{xStart:r,xEnd:s,yStart:u-i/f*h,yEnd:u+i/f*h}:{xStart:m-f/i*y,xEnd:m+f/i*y,yStart:t,yEnd:c}});return Y({xStart:d(()=>o.value.xStart),xEnd:d(()=>o.value.xEnd),yStart:d(()=>o.value.yStart),yEnd:d(()=>o.value.yEnd)})}async function Z(a,e,o){var y;const r=Y((y=o==null?void 0:o.bounds)!=null?y:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),s=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,t=await A(a,e,L(I({},o),{vertShader:s})),c=G(r,t.size),m=d(()=>[c.xStart,c.yStart]),u=d(()=>[c.xEnd-c.xStart,c.yEnd-c.yStart]);return t.useUniform("offset","f",m),t.useUniform("scale","f",u),Object.assign(t,{bounds:r})}async function $(a,e,o){const r=await Z(a,e,o),{canvas:s,bounds:t,onDispose:c,size:m,useUniform:u}=r,y=l(0),h=l(0),f=l(0),i=l(0),D=l(0),M=l(0);u("xStart","f",y),u("xEnd","f",h),u("yStart","f",f),u("yEnd","f",i),u("x","f",D),u("y","f",M),c(z(s,"mousemove",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:b,yEnd:g}=t,{x:p,y:N}=w;y.value=x+(p-x)/10,h.value=v+(p-v)/10,f.value=b+(N-b)/10,i.value=g+(N-g)/10,D.value=p,M.value=N})),c(z(s,"wheel",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:b,yEnd:g}=t,{x:p,y:N}=w;t.xStart=x+(p-x)/10,t.xEnd=v+(p-v)/10,t.yStart=b+(N-b)/10,t.yEnd=g+(N-g)/10},{passive:!1}));const S=l(NaN),E=l(NaN),_=l(NaN),C=l(NaN),W=F(t,m,S,E),w=F(t,m,_,C);return c(z(s,"pointermove",n=>{if(n.preventDefault(),Number.isNaN(S.value)||Number.isNaN(E.value))return;_.value=n.offsetX,C.value=n.offsetY;const x=(w.x-W.x)/2,v=w.y-W.y;t.xStart-=x,t.xEnd-=x,t.yStart-=v,t.yEnd-=v,S.value=n.offsetX,E.value=n.offsetY})),c(z(s,"pointerdown",n=>{s.setPointerCapture(n.pointerId),S.value=n.offsetX,E.value=n.offsetY})),c(z("pointerup",n=>{s.releasePointerCapture(n.pointerId),S.value=NaN,E.value=NaN})),r}const oo=X("p",null,[X("strong",null,"What is this?")],-1),eo=X("p",null," This is a WebGL debug page. It should contain a crude rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),ro=J({name:"WebglCoordinateDebug",setup(a){const e=l();return $(e,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float xStart;
    uniform float xEnd;
    uniform float yStart;
    uniform float yEnd;
    uniform float x;
    uniform float y;

    void main() {
      vec2 z;

      color = vec4(0, 0, 0, 1);

      for (int i = 0; i < 100; i++) {
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

        if (z.x * z.x + z.y * z.y > 4.0) {
          color = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1);
          // return;
        }
      }

      if (xStart < pos.x && pos.x < xEnd && yStart < pos.y && pos.y < yEnd) {
        color = vec4(1, color.yz, 1);
      }

      if (abs(x - pos.x) < 0.1 && abs(y - pos.y) < 0.1) {
        color = vec4(color.zz, 1, 1);
      }
    }`),(o,r)=>(Q(),K(H,null,{options:T(()=>[oo,eo]),default:T(()=>[X("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{ro as default};
