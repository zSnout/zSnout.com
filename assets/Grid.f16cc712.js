import{F as s}from"./FullscreenDisplay.22f9a697.js";import{C as n}from"./CoordinateCanvas2d.2ea21244.js";import{d as r,k as i,B as l,c as p,w as t,o as c,a as o}from"./index.2501c986.js";import"./Modal.19a63a28.js";import"./WebGlCanvas.776fe178.js";import"./useOption.bcd6cf94.js";const f=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),x=r({__name:"Grid",setup(u){const a=i(),e=`
  void main() {
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:e})}),(m,h)=>(c(),p(s,null,{options:t(()=>[f,d]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{x as default};
