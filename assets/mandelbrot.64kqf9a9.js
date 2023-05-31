import{F as a}from"./FullscreenDisplay.od9apf4f.js";import{M as r}from"./MovableCanvas2d.4z89ub4m.js";import{d as s,r as i,j as n,c as l,w as t,o as f,a as o}from"./index.4z0bzixf.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./useOption.1pf10ib0.js";import"./WebGlCanvas.5wwm3cvm.js";const u=o("h1",null,"What is this?",-1),c=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),p=`
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
  }`,w=s({__name:"mandelbrot",setup(m){const e=i();return n(()=>{e.value&&new r(e.value,{fragmentString:p})}),(_,d)=>(f(),l(a,null,{help:t(()=>[u,c]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{w as default};
