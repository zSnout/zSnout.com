import{F as t}from"./FullscreenDisplay.5a111793.js";import{W as l}from"./WebGlCanvas.5d560a97.js";import{d as n,q as c,aM as i,bd as f,g as u,o as p,c as m,w as v,a as _}from"./index.f5a2dece.js";import"./SharedNav.558f3db1.js";import"./Button.e744a3b4.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.e12f2c72.js";const w=n({__name:"Uniforms",setup(g){const e=c(),a=`
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
  }`;return i(()=>{if(!e.value)return;const o=new l(e.value,{fragmentString:a}),r=f(10),s=u(()=>r.value/1e3%1);o.useUniform("left",s)}),(o,r)=>(p(),m(t,null,{default:v(()=>[_("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{w as default};
