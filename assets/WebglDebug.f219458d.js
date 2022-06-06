import{_ as C,S as I,H as $,L as D,a as k,O as x,U,B as O,M as W}from"./Modal.a559877d.js";import{d as S,m as E,o as _,h as N,e as l,a as i,f as g,R as G,c as y,q as V,s as m,b as f,F as z,g as M,w as p,an as H,W as K,ao as Y,av as q,ac as X}from"./index.cab265f4.js";const j=M("OK"),J={class:"content"},Q=S({name:"FullscreenDisplay",props:{options:{type:Boolean}},setup(o){const a=E(!1);return(r,e)=>(_(),N(z,null,[l(g(U),{class:"nav",top:""},{default:i(()=>[l(I,null,{default:i(()=>[l($,{class:"padding"},{default:i(()=>[l(g(G),{to:"/"},{default:i(()=>[l(D,{class:"logo",invert:""})]),_:1}),l(k),r.$slots.options?(_(),y(x,{key:0,class:"options",role:"button",onClick:e[0]||(e[0]=n=>a.value=!a.value)})):V("",!0)]),_:1})]),_:1})]),_:1}),l(W,{open:a.value},{buttons:i(()=>[l(O,{cancel:"",onClick:e[1]||(e[1]=n=>a.value=!a.value)},{default:i(()=>[j]),_:1}),m(r.$slots,"buttons",{},void 0,!0)]),default:i(()=>[m(r.$slots,"options",{},void 0,!0)]),_:3},8,["open"]),f("div",J,[m(r.$slots,"default",{},void 0,!0)])],64))}});var Z=C(Q,[["__scopeId","data-v-2de08074"]]);function ee(o){return new Promise(a=>{p(()=>{const r=H(o);if(r instanceof HTMLCanvasElement){const{width:e,height:n}=K(r),s=[];p(()=>{r.width=e.value,r.height=n.value,s.forEach(u=>u())}),a({canvas:r,onResize:u=>s.push(u)})}})})}function A(o,a,r){const e=o.createShader(o[`${a}_SHADER`]);if(!e)throw new Error("An error occurred while compiling a shader.");if(o.shaderSource(e,`#version 300 es
`+r.trim()),o.compileShader(e),o.getShaderParameter(e,o.COMPILE_STATUS))return e;throw console.log(o.getShaderInfoLog(e)),o.deleteShader(e),new Error("An error occurred while compiling a shader.")}function oe(o,a,r){let e=o.createProgram();if(!e)throw new Error("An error occurred while creating a WebGL program.");let n=A(o,"VERTEX",a),s=A(o,"FRAGMENT",r);if(o.attachShader(e,n),o.attachShader(e,s),o.linkProgram(e),o.getProgramParameter(e,o.LINK_STATUS))return e;throw console.log(o.getProgramInfoLog(e)),o.deleteProgram(e),new Error("An error occurred while creating a WebGL program.")}const te=`
precision highp float;
in vec2 _pos;
out vec2 pos;

void main() {
  gl_Position = vec4(_pos, 0, 1);
  pos = _pos / vec2(2, 2) + vec2(0.5, 0.5);
}`;function re(o,a,r){let e=[];return Y(()=>e.forEach(n=>n())),new Promise(n=>{p(async()=>{const{canvas:s,onResize:u}=await ee(o),t=s.getContext("webgl2",{preserveDrawingBuffer:r==null?void 0:r.preserveDrawingBuffer});if(!t)throw new Error("An error occurred while initializing the context.");const d=oe(t,te,a);t.useProgram(d);const w=t.getAttribLocation(d,"_pos");t.enableVertexAttribArray(w);const L=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,L),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW),t.vertexAttribPointer(w,2,t.FLOAT,!1,0,0);function h(){t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.viewport(0,0,s.width,s.height),t.drawArrays(t.TRIANGLES,0,6)}let v=!1;const R=setInterval(()=>{v&&(v=!1,h())});e.push(()=>clearInterval(R)),u(h),n({canvas:s,gl:t,onResize:u,program:d,render:h,useUniform(B,T,F){const b=t.getUniformLocation(d,B);if(!b)return;const P=p(()=>{let c=g(F);typeof c=="number"&&(c=[c]),!(c.length<1||c.length>4)&&(t[`uniform${c.length}${T}v`](b,c),v=!0)});e.push(P)}})})})}const ae=f("p",null,[f("strong",null,"What is this?")],-1),ne=f("p",null," This is a WebGL debug page. The left side should be a yellow bar, the right a green bar, the top blue, and the bottom red. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. ",-1),le=S({name:"WebglDebug",setup(o){const a=E();return re(a,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      if (pos.x < left) {
        color = vec4(1, 1, 0, 1);
      } else if (pos.y < 0.01) {
        color = vec4(1, 0, 0, 1);
      } else if (pos.x > 0.99) {
        color = vec4(0, 1, 0, 1);
      } else if (pos.y > 0.99) {
        color = vec4(0, 0, 1, 1);
      } else {
        color = vec4(pos.x, pos.y, 0.5, 1);
      }
    }`).then(r=>{const e=q(10,{immediate:!0}),n=X(()=>e.value/1e3%1);r.useUniform("left","f",n)}),(r,e)=>(_(),y(Z,null,{options:i(()=>[ae,ne]),default:i(()=>[f("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{le as default};
