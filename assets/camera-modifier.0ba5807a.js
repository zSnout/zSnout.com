import{u as n,_}from"./ColorSliders.129bafb1.js";import{F as v}from"./FullscreenDisplay.97a7eba8.js";import{u as g}from"./useCanvas.05e68ec9.js";import{u as C,a as x}from"./useVideoFromStream.b5df2f5a.js";import{W as h}from"./WebGlCanvas.d3d8296f.js";import{d as w,m as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.2bc1071e.js";import"./useOption.bd2fff96.js";import"./InlineRangeField.ed08fc25.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.2f22cb29.js";import"./SharedNav.b6ca6276.js";import"./Button.385cc417.js";import"./LogoLight.c48f5ba5.js";const q=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{q as default};
