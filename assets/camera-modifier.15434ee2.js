import{u as n,_}from"./ColorSliders.55bb5317.js";import{F as v}from"./FullscreenDisplay.7432c06f.js";import{u as g}from"./useCanvas.7e05b8b8.js";import{u as C,a as x}from"./useVideoFromStream.5f0735a4.js";import{W as h}from"./WebGlCanvas.89c7022b.js";import{d as w,m as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.2148704c.js";import"./useOption.b7be2e37.js";import"./InlineRangeField.f8ae156e.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.85289d69.js";import"./SharedNav.4f264098.js";import"./Button.49e3d367.js";import"./LogoLight.e95f066b.js";const q=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{q as default};
