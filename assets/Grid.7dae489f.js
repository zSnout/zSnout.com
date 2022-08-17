import{F as s}from"./FullscreenDisplay.a8c334ca.js";import{C as n}from"./CoordinateCanvas2d.18bdffaa.js";import{d as r,k as i,aL as l,o as u,c,w as t,a as o}from"./index.b9970ef9.js";import"./BookmarkIcon.261f9e8c.js";import"./Button.c3a7b0cc.js";import"./useOption.d9c7abf2.js";import"./WebGlCanvas.e0c96e5c.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),p=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),w=r({__name:"Grid",setup(_){const e=i(),a=`
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
  }`;return l(()=>{!e.value||new n(e.value,{fragmentString:a})}),(m,d)=>(u(),c(s,null,{options:t(()=>[f,p]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{w as default};
