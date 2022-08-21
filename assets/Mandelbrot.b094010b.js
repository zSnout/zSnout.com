import{F as s}from"./FullscreenDisplay.f5d7fe1c.js";import{M as r}from"./MovableCanvas2d.66450f2c.js";import{d as i,s as n,aM as l,o as f,c as u,w as a,a as o}from"./index.5081a4d9.js";import"./SharedNav.de900e72.js";import"./VStack.ce9b91bf.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.9c1b4e00.js";import"./CoordinateCanvas2d.e93e81b2.js";import"./useOption.2c375787.js";import"./WebGlCanvas.cbf158f5.js";const c=o("h1",null,"What is this?",-1),p=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),k=i({__name:"Mandelbrot",setup(m){const e=n(),t=`
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
  }`;return l(()=>{!e.value||new r(e.value,{fragmentString:t})}),(_,d)=>(f(),u(s,null,{help:a(()=>[c,p]),default:a(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{k as default};