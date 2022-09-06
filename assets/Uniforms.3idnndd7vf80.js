import{F as t}from"./FullscreenDisplay.2pmkxxoua4y0.js";import{W as l}from"./WebGlCanvas.1rb17qef21sw.js";import{d as n,q as c,aM as i,bd as f,g as u,o as p,c as m,w as v,a as _}from"./index.4gjs789qwis0.js";import"./SharedNav.1lm7nnzuivvk.js";import"./Button.32h7782uxra0.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./LogoLight.11xzt69hf600.js";const w=n({__name:"Uniforms",setup(g){const e=c(),a=`
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
