import{F as s}from"./FullscreenDisplay.93b5e434.js";import{C as n}from"./CoordinateCanvas2d.6c638996.js";import{d as r,k as i,aL as l,o as p,c,w as t,a as o}from"./index.1c7c9b41.js";import"./BookmarkIcon.e4323aad.js";import"./VStack.137a1a4b.js";import"./useOption.67ef6fb6.js";import"./WebGlCanvas.58e81487.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),y=r({__name:"Grid",setup(m){const a=i(),e=`
  void main() {
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:e})}),(u,h)=>(p(),c(s,null,{options:t(()=>[f,d]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{y as default};
