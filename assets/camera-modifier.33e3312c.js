import{u as n,_}from"./ColorSliders.55a89fe6.js";import{F as v}from"./FullscreenDisplay.9816f84a.js";import{u as g}from"./useCanvas.e7fa1738.js";import{u as C,a as x}from"./useVideoFromStream.fa2c8ad9.js";import{W as h}from"./WebGlCanvas.2b7570b7.js";import{d as w,m as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.5b06f34c.js";import"./useOption.21800d91.js";import"./InlineRangeField.7e3f2539.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.cee5950c.js";import"./SharedNav.c6285947.js";import"./Button.a63d841c.js";import"./LogoLight.5d203cc1.js";const q=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{q as default};
