import{F as s}from"./FullscreenDisplay.8acd0faf.js";import{C as r}from"./CoordinateCanvas2d.ba962525.js";import{d as n,m as i,aL as l,o as c,c as f,w as t,a as e}from"./index.ea2da45b.js";import"./SharedNav.16d49b20.js";import"./VStack.83086c78.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.2f372d92.js";import"./useOption.9c8694c0.js";import"./WebGlCanvas.7880dfb8.js";const u=e("h1",null,"What is this?",-1),p=e("p",null," This is a WebGL debug page. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. There should also be a grid of black lines. ",-1),k=n({__name:"Grid",setup(m){const o=i(),a=`
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
  }`;return l(()=>{!o.value||new r(o.value,{fragmentString:a})}),(_,d)=>(c(),f(s,null,{help:t(()=>[u,p]),default:t(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{k as default};
