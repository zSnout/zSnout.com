import{F as s}from"./FullscreenDisplay.75rpamat.js";import{W as t}from"./WebGlCanvas.5wwm3cvm.js";import{d as l,r as n,j as c,$ as i,V as f,c as u,w as p,o as m,a as v}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const _=`
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
  }`,B=l({__name:"uniforms",setup(g){const e=n();return c(()=>{if(!e.value)return;const o=new t(e.value,{fragmentString:_}),r=i(10),a=f(()=>r.value/1e3%1);o.useUniform("left",a)}),(o,r)=>(m(),u(s,null,{default:p(()=>[v("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{B as default};
