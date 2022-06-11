import{F as a}from"./useWebGL.b90fb6b3.js";import{u as s}from"./useMovableCanvas.81267c32.js";import{d as n,m as l,c as i,a as t,o as r,b as o}from"./index.35819a72.js";import"./Modal.6ad5f26b.js";const c=o("p",null,[o("strong",null,"What is this?")],-1),p=o("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),v=n({name:"Grid",setup(f){const e=l();return s(e,`
    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      color = vec4(pos.x, pos.y, 0.5, 1);

      if (
        abs(float(int(pos.x)) - pos.x) < 0.01 ||
        abs(float(int(pos.y)) - pos.y) < 0.01
      ) {
        color = vec4(0, 0, 0, 1);
      }
    }`),(u,m)=>(r(),i(a,null,{options:t(()=>[c,p]),default:t(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{v as default};
