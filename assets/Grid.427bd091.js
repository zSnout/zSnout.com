import{F as s}from"./FullscreenDisplay.1be57afb.js";import{C as r}from"./CoordinateCanvas2d.ca80d526.js";import{d as n,s as i,aM as l,o as c,c as f,w as a,a as e}from"./index.a8171189.js";import"./SharedNav.48cd01f2.js";import"./VStack.3d6ae560.js";import"./useOption.38bf31fd.js";import"./WebGlCanvas.90b32b51.js";const u=e("h1",null,"What is this?",-1),p=e("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),w=n({__name:"Grid",setup(_){const o=i(),t=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    gl_FragColor = vec4(pos.x, pos.y, 0.5, 1);

    if (
      abs(float(int(pos.x)) - pos.x) < 0.01 ||
      abs(float(int(pos.y)) - pos.y) < 0.01
    ) {
      gl_FragColor = vec4(0, 0, 0, 1);
    }
  }`;return l(()=>{!o.value||new r(o.value,{fragmentString:t})}),(m,d)=>(c(),f(s,null,{help:a(()=>[u,p]),default:a(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{w as default};
