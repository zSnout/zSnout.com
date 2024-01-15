import{F as a}from"./FullscreenDisplay.75rpamat.js";import{C as s}from"./CoordinateCanvas2d.4rt8wdf9.js";import{d as r,r as n,j as i,c as l,w as t,o as c,a as e}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./useOption.1pf10ib0.js";import"./WebGlCanvas.5wwm3cvm.js";const f=e("h1",null,"What is this?",-1),p=e("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),u=`
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
  }`,B=r({__name:"grid",setup(m){const o=n();return i(()=>{o.value&&new s(o.value,{fragmentString:u})}),(_,d)=>(c(),l(a,null,{help:t(()=>[f,p]),default:t(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{B as default};
