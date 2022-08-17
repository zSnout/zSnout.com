import{F as s}from"./FullscreenDisplay.2bbe75a1.js";import{M as r}from"./MovableCanvas2d.8c8ba2c5.js";import{d as n,s as i,aL as l,o as f,c as u,w as a,a as o}from"./index.8357e48f.js";import"./SharedNav.fef3e396.js";import"./VStack.3890b92a.js";import"./CoordinateCanvas2d.cbc7b8d5.js";import"./useOption.35cf7fcb.js";import"./WebGlCanvas.a4713718.js";const c=o("h1",null,"What is this?",-1),p=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),M=n({__name:"Mandelbrot",setup(_){const e=i(),t=`
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
  }`;return l(()=>{!e.value||new r(e.value,{fragmentString:t})}),(m,d)=>(f(),u(s,null,{help:a(()=>[c,p]),default:a(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{M as default};
