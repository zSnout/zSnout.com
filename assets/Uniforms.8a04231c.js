import{F as l}from"./FullscreenDisplay.5962c21d.js";import{W as n}from"./WebGlCanvas.ca3a0ffe.js";import{d as t,s as c,aM as i,b6 as f,ah as u,o as p,c as v,w as _,a as m}from"./index.8cc95afd.js";import"./SharedNav.09f2adfd.js";import"./VStack.f7aa5462.js";const h=t({__name:"Uniforms",setup(g){const e=c(),s=`
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
  }`;return i(()=>{if(!e.value)return;const o=new n(e.value,{fragmentString:s}),a=f(10),r=u(()=>a.value/1e3%1);o.useUniform("left",r)}),(o,a)=>(p(),v(l,null,{default:_(()=>[m("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{h as default};
