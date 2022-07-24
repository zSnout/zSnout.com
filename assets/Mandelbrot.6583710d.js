import{F as s}from"./FullscreenDisplay.d9ca21ad.js";import{M as n}from"./MovableCanvas2d.a5d6df48.js";import{d as r,k as i,B as l,c,w as o,o as f,a as e}from"./index.902ccf35.js";import"./BookmarkIcon.bc6211a5.js";import"./CoordinateCanvas2d.919f89db.js";import"./WebGlCanvas.be6a19e1.js";import"./useOption.ceb61026.js";const p=e("p",null,[e("strong",null,"What is this?")],-1),d=e("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),C=r({__name:"Mandelbrot",setup(u){const a=i(),t=`
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
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:t})}),(m,_)=>(f(),c(s,null,{options:o(()=>[p,d]),default:o(()=>[e("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{C as default};
