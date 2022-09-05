import{u as n,_}from"./ColorSliders.95897726.js";import{F as v}from"./FullscreenDisplay.348db946.js";import{u as g}from"./useCanvas.0e1633f4.js";import{u as C,a as x}from"./useVideoFromStream.c2edcfa8.js";import{W as h}from"./WebGlCanvas.aaf6c83a.js";import{d as w,q as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.b750fc01.js";import"./useOption.d743b7a2.js";import"./InlineRangeField.28ae1345.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.66e3f168.js";import"./SharedNav.6ef85c65.js";import"./Button.f50eaa40.js";import"./LogoLight.bc31d144.js";const j=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};
