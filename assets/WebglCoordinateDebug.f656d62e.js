var _=Object.defineProperty,S=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(o,t,e)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))w.call(t,e)&&m(o,e,t[e]);if(v)for(var e of v(t))N.call(t,e)&&m(o,e,t[e]);return o},x=(o,t)=>S(o,E(t));import{u as C,F as W}from"./useWebGL.ddca3fb9.js";import{r as g,ad as c,w as k,d as B,m as U,aw as z,c as D,a as b,o as F,b as p}from"./index.06bea12c.js";import"./Modal.f7f4a646.js";function G(o,t){const e=c(()=>{const{xStart:r,xEnd:l,yStart:i,yEnd:s}=o,u=r+l,d=i+s,f=(l-r)/2,h=(s-i)/2;let{width:{value:a},height:{value:n}}=t;return(Number.isNaN(a)||a===0)&&(a=n),(Number.isNaN(n)||n===0)&&(n=a),(Number.isNaN(a)||a===0)&&(a=n=1),a<n?{xStart:r,xEnd:l,yStart:d-n/a*h,yEnd:d+n/a*h}:{xStart:u-a/n*f,xEnd:u+a/n*f,yStart:i,yEnd:s}});return k(()=>console.log(e.value)),g({xStart:c(()=>e.value.xStart),xEnd:c(()=>e.value.xEnd),yStart:c(()=>e.value.yStart),yEnd:c(()=>e.value.yEnd)})}async function L(o,t,e){var f;const r=g((f=e==null?void 0:e.coordinates)!=null?f:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),l=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,i=await C(o,t,x(y({},e),{vertShader:l})),s=G(r,i.size),u=c(()=>[s.xStart,s.yStart]),d=c(()=>[s.xEnd-s.xStart,s.yEnd-s.yStart]);return i.useUniform("offset","f",u),i.useUniform("scale","f",d),Object.assign(i,{coordinates:r})}const R=p("p",null,[p("strong",null,"What is this?")],-1),T=p("p",null," This is a WebGL debug page. The left side should be a yellow bar, the right a green bar, the top blue, and the bottom red. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. ",-1),P=B({name:"WebglCoordinateDebug",setup(o){const t=U();return L(t,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      if (pos.x < -2.0) {
        color = vec4(1, 1, 0, 1);
      } else if (pos.y < -2.0) {
        color = vec4(1, 0, 0, 1);
      } else if (pos.x > 2.0) {
        color = vec4(0, 1, 0, 1);
      } else if (pos.y > 2.0) {
        color = vec4(0, 0, 1, 1);
      } else {
        color = vec4(pos.x, pos.y, 0.5, 1);
      }

      if (abs(float(int(pos.x)) - pos.x) < 0.01) {
        color = vec4(0, 0, 0, 1);
      }

      if (abs(float(int(pos.y)) - pos.y) < 0.01) {
        color = vec4(0, 0, 0, 1);
      }
    }`).then(e=>{const r=z(10,{immediate:!0}),l=c(()=>r.value/1e3%1);e.useUniform("left","f",l)}),(e,r)=>(F(),D(W,null,{options:b(()=>[R,T]),default:b(()=>[p("canvas",{ref_key:"canvas",ref:t},null,512)]),_:1}))}});export{P as default};
