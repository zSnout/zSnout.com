import{F as r}from"./FullscreenDisplay.od9apf4f.js";import{M as s}from"./MovableCanvas2d.4z89ub4m.js";import{l as i,r as n,o as l,x as f,C as u,D as t,a9 as o}from"./runtime-core.esm-bundler.47vl3tei.js";import"./main.200onzgm.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./useOption.1pf10ib0.js";import"./WebGlCanvas.5wwm3cvm.js";const p=o("h1",null,"What is this?",-1),c=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. ",-1),D=i({__name:"mandelbrot",setup(m){const e=n(),a=`
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
  }`;return l(()=>{e.value&&new s(e.value,{fragmentString:a})}),(_,d)=>(f(),u(r,null,{help:t(()=>[p,c]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{D as default};
