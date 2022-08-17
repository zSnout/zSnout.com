import{F as s}from"./FullscreenDisplay.a8c334ca.js";import{M as n}from"./MovableCanvas2d.70f5ebed.js";import{d as r,k as i,aL as l,o as u,c as f,w as a,a as e}from"./index.b9970ef9.js";import"./BookmarkIcon.261f9e8c.js";import"./Button.c3a7b0cc.js";import"./CoordinateCanvas2d.18bdffaa.js";import"./useOption.d9c7abf2.js";import"./WebGlCanvas.e0c96e5c.js";const c=e("p",null,[e("strong",null,"What is this?")],-1),p=e("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),M=r({__name:"Mandelbrot",setup(_){const o=i(),t=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    gl_FragColor = vec4(0, 0, 0, 1);

    vec2 z;
    for (int i = 0; i < 100; i++) {
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

      if (z.x * z.x + z.y * z.y > 4.0) {
        gl_FragColor = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1.0);
        break;
      }
    }
  }`;return l(()=>{!o.value||new n(o.value,{fragmentString:t})}),(m,d)=>(u(),f(s,null,{options:a(()=>[c,p]),default:a(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{M as default};
