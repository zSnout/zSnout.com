import{F as t}from"./FullscreenDisplay.od9apf4f.js";import{W as l}from"./WebGlCanvas.5wwm3cvm.js";import{H as n}from"./main.200onzgm.js";import{l as i,r as c,o as f,a as p,x as m,C as u,D as v,a8 as _}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const W=i({__name:"uniforms",setup(g){const o=c(),a=`
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
  }`;return f(()=>{if(!o.value)return;const e=new l(o.value,{fragmentString:a}),r=n(10),s=p(()=>r.value/1e3%1);e.useUniform("left",s)}),(e,r)=>(m(),u(t,null,{default:v(()=>[_("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{W as default};
