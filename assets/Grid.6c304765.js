import{F as s}from"./FullscreenDisplay.deb8a43e.js";import{C as n}from"./CoordinateCanvas2d.93160d18.js";import{d as r,k as i,B as l,c as p,w as t,o as c,a as o}from"./index.ea562662.js";import"./BookmarkIcon.72a22b26.js";import"./WebGlCanvas.9cac64d0.js";import"./useOption.92615050.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),x=r({__name:"Grid",setup(u){const a=i(),e=`
  void main() {
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:e})}),(m,h)=>(c(),p(s,null,{options:t(()=>[f,d]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{x as default};
