import{F as s}from"./FullscreenDisplay.26e96a2b.js";import{M as n}from"./MovableCanvas2d.13cd5320.js";import{d as r,k as i,G as l,o as c,c as f,w as o,a as e}from"./index.5bcce4fc.js";import"./BookmarkIcon.929a48f2.js";import"./CoordinateCanvas2d.97f87385.js";import"./WebGlCanvas.9d9b40d0.js";import"./useOption.05608264.js";const p=e("p",null,[e("strong",null,"What is this?")],-1),d=e("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),C=r({__name:"Mandelbrot",setup(u){const a=i(),t=`
  void main() {
    gl_FragColor = vec4(0, 0, 0, 1);

    vec2 z;
    for (int i = 0; i < 100; i++) {
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

      if (z.x * z.x + z.y * z.y > 4.0) {
        gl_FragColor = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1.0);
        break;
      }
    }
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:t})}),(m,_)=>(c(),f(s,null,{options:o(()=>[p,d]),default:o(()=>[e("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{C as default};
