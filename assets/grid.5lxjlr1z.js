import{F as r}from"./FullscreenDisplay.od9apf4f.js";import{C as s}from"./CoordinateCanvas2d.4rt8wdf9.js";import{l as i,r as n,o as l,x as p,C as f,D as t,a8 as e}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./main.200onzgm.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./useOption.1pf10ib0.js";import"./WebGlCanvas.5wwm3cvm.js";const u=e("h1",null,"What is this?",-1),c=e("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),T=i({__name:"grid",setup(m){const o=n(),a=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{o.value&&new s(o.value,{fragmentString:a})}),(_,d)=>(p(),f(r,null,{help:t(()=>[u,c]),default:t(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{T as default};
