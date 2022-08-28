import{F as t}from"./FullscreenDisplay.1b26e18e.js";import{W as l}from"./WebGlCanvas.34042cbc.js";import{d as n,m as c,aM as i,bb as f,g as u,o as p,c as m,w as v,a as _}from"./index.7cf42d56.js";import"./SharedNav.089cb081.js";import"./Button.36184581.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.382d1bf4.js";const k=n({__name:"Uniforms",setup(g){const e=c(),a=`
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
  }`;return i(()=>{if(!e.value)return;const o=new l(e.value,{fragmentString:a}),r=f(10),s=u(()=>r.value/1e3%1);o.useUniform("left",s)}),(o,r)=>(p(),m(t,null,{default:v(()=>[_("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{k as default};
