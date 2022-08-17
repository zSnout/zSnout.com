import{C as a}from"./WebGlCanvas.e9ad0b8c.js";import{F as r}from"./FullscreenDisplay.2a7ae4cd.js";import{M as n}from"./MovableCanvas2d.d2d559a1.js";import{d as t,s,aL as i,o as c,c as l,w as v,a as f}from"./index.80e7fb4e.js";import"./SharedNav.c43960c8.js";import"./VStack.ae3d12ba.js";import"./CoordinateCanvas2d.5f5df793.js";import"./useOption.28ced838.js";const k=t({__name:"3Dimensions",setup(_){const o=s(),e=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  varying vec4 v_position;
  varying vec4 v_normal;
  varying vec4 v_color;

  void main() {
    // vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    // gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);

    // vec2 z;
    // for (int i = 0; i < 100; i++) {
    //   z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + pos;

    //   if (z.x * z.x + z.y * z.y > 4.0) {
    //     gl_FragColor = vec4(float(i) / 100.0, float(i) / 100.0, float(i) / 100.0, 1.0);
    //     break;
    //   }
    // }

    gl_FragColor = vec4(0.5 * (v_normal.xyz + v_color.xyz), 1.0);
  }`;return i(()=>{!o.value||new n(o.value,{fragmentString:e,mode:a.Box})}),(m,u)=>(c(),l(r,null,{default:v(()=>[f("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{k as default};
