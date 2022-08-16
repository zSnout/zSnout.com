import{F as s}from"./FullscreenDisplay.e6d20e7e.js";import{M as n}from"./MovableCanvas2d.83db9928.js";import{d as r,k as i,aL as l,o as p,c,w as o,a as e}from"./index.8951f436.js";import"./BookmarkIcon.c98cc4e5.js";import"./VStack.599fd702.js";import"./CoordinateCanvas2d.3738553b.js";import"./useOption.7a63f64b.js";import"./WebGlCanvas.881b9f37.js";const f=e("p",null,[e("strong",null,"What is this?")],-1),d=e("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),M=r({__name:"Mandelbrot",setup(u){const a=i(),t=`
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
  }`;return l(()=>{!a.value||new n(a.value,{fragmentString:t})}),(m,_)=>(p(),c(s,null,{options:o(()=>[f,d]),default:o(()=>[e("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{M as default};
