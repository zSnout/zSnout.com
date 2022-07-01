import{F as l}from"./FullscreenDisplay.22f9a697.js";import{W as n}from"./WebGlCanvas.776fe178.js";import{d as t,k as c,B as f,aI as i,ac as u,c as p,w as v,o as _,a as m}from"./index.2501c986.js";import"./Modal.19a63a28.js";const y=t({__name:"Uniforms",setup(g){const e=c(),s=`
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
  }`;return f(()=>{if(!e.value)return;const o=new n(e.value,{fragmentString:s}),a=i(10),r=u(()=>a.value/1e3%1);o.useUniform("left",r)}),(o,a)=>(_(),p(l,null,{default:v(()=>[m("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{y as default};
