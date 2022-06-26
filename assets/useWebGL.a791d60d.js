import{u as P}from"./useCanvas.ba6b23bf.js";import{an as _,u as T}from"./index.cea50084.js";function A(r,c,o){const t=r.createShader(r[`${c}_SHADER`]);if(!t)throw new Error("An error occurred while initializing a shader.");if(r.shaderSource(t,`#version 300 es
precision highp float;
`+o.trim()),r.compileShader(t),r.getShaderParameter(t,r.COMPILE_STATUS))return t;throw console.log(r.getShaderInfoLog(t)),r.deleteShader(t),new Error("An error occurred while compiling a shader.")}function x(r,c,o){const t=r.createProgram();if(!t)throw new Error("An error occurred while initializing a WebGL program.");const a=A(r,"VERTEX",c),f=A(r,"FRAGMENT",o);if(r.attachShader(t,a),r.attachShader(t,f),r.linkProgram(t),r.getProgramParameter(t,r.LINK_STATUS))return{program:t,vertex:a,fragment:f};throw console.log(r.getProgramInfoLog(t)),r.deleteProgram(t),new Error("An error occurred while creating a WebGL program.")}const B=`
in vec2 _pos;
out vec2 pos;

void main() {
  gl_Position = vec4(pos = _pos, 0, 1);
}`;async function C(r,c,o){var g;const t=await P(r,o),{canvas:a,onResize:f,onDispose:i}=t,e=a.getContext("webgl2",{preserveDrawingBuffer:o==null?void 0:o.preserveDrawingBuffer});if(!e)throw new Error("An error occurred while initializing the context.");const{program:s,vertex:v,fragment:S}=x(e,(g=o==null?void 0:o.vertShader)!=null?g:B,c);e.useProgram(s),i(()=>e.deleteProgram(s)),i(()=>e.deleteShader(v)),i(()=>e.deleteShader(S));const l=e.getAttribLocation(s,"_pos");e.enableVertexAttribArray(l);const m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,1,1,0,0,0]),e.STATIC_DRAW),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0),i(()=>e.deleteBuffer(m));function h(){e.isContextLost()||(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.viewport(-a.width,-a.height,2*a.width,2*a.height),e.drawArrays(e.TRIANGLES,0,6))}let u=!1;const p=setInterval(()=>{u&&(u=!1,h())});i(()=>clearInterval(p)),f(h);function E(L,R,b){if(e.isContextLost())return;const w=e.getUniformLocation(s,L);!w||i(_(()=>{let n=T(b);typeof n=="number"&&(n=[n]),typeof n=="boolean"&&(n=[n]),!(n.length<1||n.length>4)&&(e[`uniform${n.length}${R}v`](w,n.map(d=>d===!0?1:d===!1?0:d)),u=!0)}))}return Object.assign(t,{gl:e,program:s,render:h,useUniform:E,destroy(){t.dispose()}})}export{C as u};
