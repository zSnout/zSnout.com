import{F as s}from"./FullscreenDisplay.7a2d1c8c.js";import{C as n}from"./CoordinateCanvas2d.91432842.js";import{d as r,k as i,G as l,o as p,c,w as t,a as o}from"./index.15748092.js";import"./BookmarkIcon.fd3553c6.js";import"./WebGlCanvas.3b7c9a3c.js";import"./useOption.ac5dad0a.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),x=r({__name:"Grid",setup(u){const a=i(),e=`
  void main() {
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:e})}),(m,h)=>(p(),c(s,null,{options:t(()=>[f,d]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{x as default};
