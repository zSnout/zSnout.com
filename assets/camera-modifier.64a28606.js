import{u as n,_}from"./ColorSliders.9f5e2207.js";import{F as v}from"./FullscreenDisplay.d252a8ec.js";import{u as g}from"./useCanvas.08db8e9a.js";import{u as C,a as x}from"./useVideoFromStream.ccfa688d.js";import{W as h}from"./WebGlCanvas.1a906b39.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.b2185335.js";import"./useOption.16b918e3.js";import"./InlineRangeField.8d284938.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.022f7598.js";import"./SharedNav.9124e0d9.js";import"./VStack.efeb4d27.js";import"./LogoLight.c7b00eba.js";const q=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{q as default};
