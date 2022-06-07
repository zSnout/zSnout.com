var R=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(a,e,o)=>e in a?R(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,I=(a,e)=>{for(var o in e||(e={}))O.call(e,o)&&B(a,o,e[o]);if(k)for(var o of k(e))V.call(e,o)&&B(a,o,e[o]);return a},L=(a,e)=>j(a,q(e));import{u as A,F as H}from"./useWebGL.1797b646.js";import{r as Y,ad as d,f as P,m as u,aq as z,d as J,c as K,a as T,o as Q,b as X}from"./index.4e482dac.js";import"./Modal.dd4f6078.js";function U(a,e,o,r,s){return a=a,e=e,o=o,r=r,s=s,(s-a)*(r-o)/(e-a)+o}function F(a,e,o,r){const s=G(a,e),t=d(()=>({x:U(0,e.width.value,s.xStart,s.xEnd,P(o)),y:U(e.height.value,0,s.yStart,s.yEnd,P(r))}));return Y({x:d(()=>t.value.x),y:d(()=>t.value.y)})}function G(a,e){const o=d(()=>{const{xStart:r,xEnd:s,yStart:t,yEnd:f}=a,m=r+s,l=t+f,y=(s-r)/2,S=(f-t)/2;let{width:{value:c},height:{value:i}}=e;return(Number.isNaN(c)||c===0)&&(c=i),(Number.isNaN(i)||i===0)&&(i=c),(Number.isNaN(c)||c===0)&&(c=i=1),c<i?{xStart:r,xEnd:s,yStart:l-i/c*S,yEnd:l+i/c*S}:{xStart:m-c/i*y,xEnd:m+c/i*y,yStart:t,yEnd:f}});return Y({xStart:d(()=>o.value.xStart),xEnd:d(()=>o.value.xEnd),yStart:d(()=>o.value.yStart),yEnd:d(()=>o.value.yEnd)})}async function Z(a,e,o){var y;const r=Y((y=o==null?void 0:o.bounds)!=null?y:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),s=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,t=await A(a,e,L(I({},o),{vertShader:s})),f=G(r,t.size),m=d(()=>[f.xStart,f.yStart]),l=d(()=>[f.xEnd-f.xStart,f.yEnd-f.yStart]);return t.useUniform("offset","f",m),t.useUniform("scale","f",l),Object.assign(t,{bounds:r})}async function $(a,e,o){const r=await Z(a,e,o),{canvas:s,bounds:t,onDispose:f,size:m,useUniform:l}=r,y=u(0),S=u(0),c=u(0),i=u(0),D=u(0),M=u(0);l("xStart","f",y),l("xEnd","f",S),l("yStart","f",c),l("yEnd","f",i),l("x","f",D),l("y","f",M),f(z(s,"mousemove",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:b,yEnd:g}=t,{x:p,y:N}=w;y.value=x+(p-x)/10,S.value=v+(p-v)/10,c.value=b+(N-b)/10,i.value=g+(N-g)/10,D.value=p,M.value=N})),f(z(s,"wheel",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:b,yEnd:g}=t,{x:p,y:N}=w;t.xStart=x+(p-x)/10,t.xEnd=v+(p-v)/10,t.yStart=b+(N-b)/10,t.yEnd=g+(N-g)/10},{passive:!1}));const h=u(NaN),E=u(NaN),_=u(NaN),C=u(NaN),W=F(t,m,h,E),w=F(t,m,_,C);return f(z(s,"pointermove",n=>{if(n.preventDefault(),Number.isNaN(h.value)||Number.isNaN(E.value))return;_.value=n.offsetX,C.value=n.offsetY;const x=(w.x-W.x)/2,v=w.y-W.y;t.xStart-=x,t.xEnd-=x,t.yStart-=v,t.yEnd-=v,h.value=n.offsetX,E.value=n.offsetY})),f(z(s,"pointerdown",n=>{s.setPointerCapture(n.pointerId),h.value=n.offsetX,E.value=n.offsetY})),f(z("pointerup",n=>{s.releasePointerCapture(n.pointerId),h.value=NaN,E.value=NaN})),r}const oo=X("p",null,[X("strong",null,"What is this?")],-1),eo=X("p",null," This is a WebGL debug page. It should contain a crude rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),ro=J({name:"WebglCoordinateDebug",setup(a){const e=u();return $(e,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float xStart;
    uniform float xEnd;
    uniform float yStart;
    uniform float yEnd;
    uniform float x;
    uniform float y;
    uniform float xs;
    uniform float xe;
    uniform float ys;
    uniform float ye;

    void main() {
      vec2 z;

      color = vec4(0, 0, 0, 1);

      for (int i = 0; i < 100; i++) {
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

        if (z.x * z.x + z.y * z.y > 4.0) {
          color = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1);
        }
      }

      if (xs < pos.x && pos.x < xe && ys < pos.y && pos.y < ye) {
        color = vec4(color.x, color.y, 1, 1);
      } else if (xStart < pos.x && pos.x < xEnd && yStart < pos.y && pos.y < yEnd) {
        color = vec4(1, color.yz, 1);
      }

      if (abs(x - pos.x) < (xEnd - xStart) / 100.0 && abs(y - pos.y) < (yEnd - yStart) / 100.0) {
        color = vec4(color.zz, 1, 1);
      }
    }`),(o,r)=>(Q(),K(H,null,{options:T(()=>[oo,eo]),default:T(()=>[X("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{ro as default};
