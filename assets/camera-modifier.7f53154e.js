import{u as n,_}from"./ColorSliders.bc9b3644.js";import{F as v}from"./FullscreenDisplay.5a111793.js";import{u as g}from"./useCanvas.46480de4.js";import{u as C,a as x}from"./useVideoFromStream.f4fc3d7c.js";import{W as h}from"./WebGlCanvas.5d560a97.js";import{d as w,q as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.f5a2dece.js";import"./useOption.f8174c54.js";import"./InlineRangeField.ff29af16.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.c6f37e49.js";import"./SharedNav.558f3db1.js";import"./Button.e744a3b4.js";import"./LogoLight.e12f2c72.js";const j=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};
