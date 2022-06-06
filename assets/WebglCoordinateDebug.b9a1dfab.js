var _=Object.defineProperty,S=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(o,t,e)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,g=(o,t)=>{for(var e in t||(t={}))N.call(t,e)&&v(o,e,t[e]);if(m)for(var e of m(t))w.call(t,e)&&v(o,e,t[e]);return o},y=(o,t)=>S(o,E(t));import{u as C,F as k}from"./useWebGL.5519b411.js";import{r as b,ad as c,d as W,m as B,aw as I,c as U,a as x,o as z,b as p}from"./index.07daa670.js";import"./Modal.790b4b1b.js";function D(o,t){const e=c(()=>{const{xStart:r,xEnd:l,yStart:i,yEnd:n}=o,d=r+l,u=i+n,f=(l-r)/2,h=(n-i)/2;let{width:{value:a},height:{value:s}}=t;return(Number.isNaN(a)||a===0)&&(a=s),(Number.isNaN(s)||s===0)&&(s=a),(Number.isNaN(a)||a===0)&&(a=s=1),a<s?{xStart:r,xEnd:l,yStart:u-s/a*h,yEnd:u+s/a*h}:{xStart:d-a/s*f,xEnd:d+a/s*f,yStart:i,yEnd:n}});return b({xStart:c(()=>e.value.xStart),xEnd:c(()=>e.value.xEnd),yStart:c(()=>e.value.yStart),yEnd:c(()=>e.value.yEnd)})}async function F(o,t,e){var f;const r=b((f=e==null?void 0:e.coordinates)!=null?f:{xStart:-2,xEnd:2,yStart:-2,yEnd:2}),l=`
precision highp float;
in vec2 _pos;
out vec2 pos;

uniform vec2 offset;
uniform vec2 scale;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos * scale + offset;
}`,i=await C(o,t,y(g({},e),{vertShader:l})),n=D(r,i.size),d=c(()=>[n.xStart,n.yStart]),u=c(()=>[n.xEnd-n.xStart,n.yEnd-n.yStart]);return i.useUniform("offset","f",d),i.useUniform("scale","f",u),Object.assign(i,{coordinates:r})}const G=p("p",null,[p("strong",null,"What is this?")],-1),L=p("p",null," This is a WebGL debug page. In the center of the screen, there should be a gradient with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. The black lines mark a grid on unit squares. If there is space around the gradient, it should have a left padding of yellow, a right padding of green, a top padding of blue, and a bottom padding of red. ",-1),O=W({name:"WebglCoordinateDebug",setup(o){const t=B();return F(t,`
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
    }`).then(e=>{const r=I(10,{immediate:!0}),l=c(()=>r.value/1e3%1);e.useUniform("left","f",l)}),(e,r)=>(z(),U(k,null,{options:x(()=>[G,L]),default:x(()=>[p("canvas",{ref_key:"canvas",ref:t},null,512)]),_:1}))}});export{O as default};
