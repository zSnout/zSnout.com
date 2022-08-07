import{F as l}from"./FullscreenDisplay.e56ee7f0.js";import{W as n}from"./WebGlCanvas.d85fec66.js";import{d as t,k as c,G as f,ar as i,A as u,o as p,c as v,w as _,a as m}from"./index.b28acfcf.js";import"./BookmarkIcon.90b7aed7.js";const y=t({__name:"Uniforms",setup(g){const e=c(),r=`
  uniform vec2 u_resolution;
  uniform float left;

  varying vec4 v_position;

  void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    if (pos.x < left) {
      gl_FragColor = vec4(1, 1, 0, 1);
    } else if (pos.y < 0.01) {
      gl_FragColor = vec4(1, 0, 0, 1);
    } else if (pos.x > 0.99) {
      gl_FragColor = vec4(0, 1, 0, 1);
    } else if (pos.y > 0.99) {
      gl_FragColor = vec4(0, 0, 1, 1);
    } else {
      gl_FragColor = vec4(pos.xy, 0.5, 1);
    }
  }`;return f(()=>{if(!e.value)return;const o=new n(e.value,{fragmentString:r}),a=i(10),s=u(()=>a.value/1e3%1);o.useUniform("left",s)}),(o,a)=>(p(),v(l,null,{default:_(()=>[m("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{y as default};
