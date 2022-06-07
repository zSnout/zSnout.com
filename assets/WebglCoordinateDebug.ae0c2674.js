var F=Object.defineProperty,G=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var W=(a,t,e)=>t in a?F(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,k=(a,t)=>{for(var e in t||(t={}))j.call(t,e)&&W(a,e,t[e]);if(M)for(var e of M(t))q.call(t,e)&&W(a,e,t[e]);return a},B=(a,t)=>G(a,R(t));import{u as O,F as V}from"./useWebGL.9b1bde34.js";import{r as Y,ad as u,f as I,m as d,aq as _,d as A,c as H,a as L,o as J,b as X}from"./index.5e5e52f2.js";import"./Modal.061035f9.js";function P(a,t,e,r,s){return a=a,t=t,e=e,r=r,s=s,(s-a)*(r-e)/(t-a)+e}function T(a,t,e,r){const s=U(a,t),o=u(()=>({x:P(0,t.width.value,s.xStart,s.xEnd,I(e)),y:P(t.height.value,0,s.yStart,s.yEnd,I(r))}));return Y({x:u(()=>o.value.x),y:u(()=>o.value.y)})}function U(a,t){const e=u(()=>{const{xStart:r,xEnd:s,yStart:o,yEnd:c}=a,m=r+s,l=o+c,y=(s-r)/2,p=(c-o)/2;let{width:{value:i},height:{value:f}}=t;return(Number.isNaN(i)||i===0)&&(i=f),(Number.isNaN(f)||f===0)&&(f=i),(Number.isNaN(i)||i===0)&&(i=f=1),i<f?{xStart:r,xEnd:s,yStart:l-f/i*p,yEnd:l+f/i*p}:{xStart:m-i/f*y,xEnd:m+i/f*y,yStart:o,yEnd:c}});return Y({xStart:u(()=>e.value.xStart),xEnd:u(()=>e.value.xEnd),yStart:u(()=>e.value.yStart),yEnd:u(()=>e.value.yEnd)})}async function K(a,t,e){var y;const r=Y((y=e==null?void 0:e.bounds)!=null?y:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),s=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,o=await O(a,t,B(k({},e),{vertShader:s})),c=U(r,o.size),m=u(()=>[c.xStart,c.yStart]),l=u(()=>[c.xEnd-c.xStart,c.yEnd-c.yStart]);return o.useUniform("offset","f",m),o.useUniform("scale","f",l),Object.assign(o,{bounds:r})}async function Q(a,t,e){const r=await K(a,t,e),{canvas:s,bounds:o,onDispose:c,size:m,useUniform:l}=r,y=d(0),p=d(0),i=d(0),f=d(0);l("xStart","f",y),l("xEnd","f",p),l("yStart","f",i),l("yEnd","f",f),c(_(s,"mousemove",n=>{n.preventDefault(),z.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:S,yEnd:E}=o,{x:b,y:g}=w;y.value=x+(b-x)/10,p.value=v+(b-v)/10,i.value=S+(g-S)/10,f.value=E+(g-E)/10})),c(_(s,"wheel",n=>{n.preventDefault(),z.value=n.offsetX,C.value=n.offsetY;const{xStart:x,xEnd:v,yStart:S,yEnd:E}=o,{x:b,y:g}=w;o.xStart=x+(b-x)/10,o.xEnd=v+(b-v)/10,o.yStart=S+(g-S)/10,o.yEnd=E+(g-E)/10},{passive:!1}));const N=d(NaN),h=d(NaN),z=d(NaN),C=d(NaN),D=T(o,m,N,h),w=T(o,m,z,C);return c(_(s,"pointermove",n=>{if(n.preventDefault(),Number.isNaN(N.value)||Number.isNaN(h.value))return;z.value=n.offsetX,C.value=n.offsetY;const x=(w.x-D.x)/2,v=w.y-D.y;o.xStart-=x,o.xEnd-=x,o.yStart-=v,o.yEnd-=v,N.value=n.offsetX,h.value=n.offsetY})),c(_(s,"pointerdown",n=>{s.setPointerCapture(n.pointerId),N.value=n.offsetX,h.value=n.offsetY})),c(_("pointerup",n=>{s.releasePointerCapture(n.pointerId),N.value=NaN,h.value=NaN})),r}const Z=X("p",null,[X("strong",null,"What is this?")],-1),$=X("p",null," This is a WebGL debug page. It should contain a crude rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),se=A({name:"WebglCoordinateDebug",setup(a){const t=d();return Q(t,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float xStart;
    uniform float xEnd;
    uniform float yStart;
    uniform float yEnd;

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
        return;
      }
    }`),(e,r)=>(J(),H(V,null,{options:L(()=>[Z,$]),default:L(()=>[X("canvas",{ref_key:"canvas",ref:t},null,512)]),_:1}))}});export{se as default};
