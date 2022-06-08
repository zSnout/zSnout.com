var V=Object.defineProperty,A=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var T=(a,e,o)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,U=(a,e)=>{for(var o in e||(e={}))J.call(e,o)&&T(a,o,e[o]);if(P)for(var o of P(e))K.call(e,o)&&T(a,o,e[o]);return a},j=(a,e)=>A(a,H(e));import{u as Q,F as Z}from"./useWebGL.1d885a93.js";import{r as Y,ad as d,f as F,m as l,aq as z,d as $,c as oo,a as G,o as eo,b as X}from"./index.4e5e1a01.js";import"./Modal.eb3e5d9f.js";function R(a,e,o,r,s){return a=a,e=e,o=o,r=r,s=s,(s-a)*(r-o)/(e-a)+o}function q(a,e,o,r){const s=O(a,e),t=d(()=>({x:R(0,e.width.value,s.xStart,s.xEnd,F(o)),y:R(e.height.value,0,s.yStart,s.yEnd,F(r))}));return Y({x:d(()=>t.value.x),y:d(()=>t.value.y)})}function O(a,e){const o=d(()=>{const{xStart:r,xEnd:s,yStart:t,yEnd:f}=a,m=r+s,c=t+f,v=(s-r)/2,E=(f-t)/2;let{width:{value:i},height:{value:u}}=e;return(Number.isNaN(i)||i===0)&&(i=u),(Number.isNaN(u)||u===0)&&(u=i),(Number.isNaN(i)||i===0)&&(i=u=1),i<u?{xStart:r,xEnd:s,yStart:c-u/i*E,yEnd:c+u/i*E}:{xStart:m-i/u*v,xEnd:m+i/u*v,yStart:t,yEnd:f}});return Y({xStart:d(()=>o.value.xStart),xEnd:d(()=>o.value.xEnd),yStart:d(()=>o.value.yStart),yEnd:d(()=>o.value.yEnd)})}async function to(a,e,o){var v;const r=Y((v=o==null?void 0:o.bounds)!=null?v:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),s=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,t=await Q(a,e,j(U({},o),{vertShader:s})),f=O(r,t.size),m=d(()=>[f.xStart,f.yStart]),c=d(()=>[f.xEnd-f.xStart,f.yEnd-f.yStart]);return t.useUniform("offset","f",m),t.useUniform("scale","f",c),Object.assign(t,{bounds:r})}async function ao(a,e,o){const r=await to(a,e,o),{canvas:s,bounds:t,onDispose:f,size:m,useUniform:c}=r,v=l(0),E=l(0),i=l(0),u=l(0),D=l(0),M=l(0),W=l(0),k=l(0),B=l(0),I=l(0);c("xStart","f",v),c("xEnd","f",E),c("yStart","f",i),c("yEnd","f",u),c("x","f",D),c("y","f",M),c("xs","f",W),c("xe","f",k),c("ys","f",B),c("ye","f",I),f(z(s,"mousemove",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:y,xEnd:x,yStart:p,yEnd:h}=t,{x:N,y:S}=w;v.value=y+(N-y)/10,E.value=x+(N-x)/10,i.value=p+(S-p)/10,u.value=h+(S-h)/10,D.value=N,M.value=S,W.value=y,k.value=x,B.value=p,I.value=h})),f(z(s,"wheel",n=>{n.preventDefault(),_.value=n.offsetX,C.value=n.offsetY;const{xStart:y,xEnd:x,yStart:p,yEnd:h}=t,{x:N,y:S}=w;t.xStart=y+(N-y)/10,t.xEnd=x+(N-x)/10,t.yStart=p+(S-p)/10,t.yEnd=h+(S-h)/10},{passive:!1}));const b=l(NaN),g=l(NaN),_=l(NaN),C=l(NaN),L=q(t,m,b,g),w=q(t,m,_,C);return f(z(s,"pointermove",n=>{if(n.preventDefault(),Number.isNaN(b.value)||Number.isNaN(g.value))return;_.value=n.offsetX,C.value=n.offsetY;const y=(w.x-L.x)/2,x=w.y-L.y;t.xStart-=y,t.xEnd-=y,t.yStart-=x,t.yEnd-=x,b.value=n.offsetX,g.value=n.offsetY})),f(z(s,"pointerdown",n=>{s.setPointerCapture(n.pointerId),b.value=n.offsetX,g.value=n.offsetY})),f(z("pointerup",n=>{s.releasePointerCapture(n.pointerId),b.value=NaN,g.value=NaN})),r}const so=X("p",null,[X("strong",null,"What is this?")],-1),no=X("p",null," This is a WebGL debug page. It should contain a crude rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),lo=$({name:"WebglCoordinateDebug",setup(a){const e=l();return ao(e,`
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
      }

      if (xStart < pos.x && pos.x < xEnd && yStart < pos.y && pos.y < yEnd) {
        color = vec4(1, color.yz, 1);
      }

      if (abs(x - pos.x) < (xEnd - xStart) / 100.0 && abs(y - pos.y) < (yEnd - yStart) / 100.0) {
        color = vec4(color.zz, 1, 1);
      }
    }`),(o,r)=>(eo(),oo(Z,null,{options:G(()=>[so,no]),default:G(()=>[X("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{lo as default};
