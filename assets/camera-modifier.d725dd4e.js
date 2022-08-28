import{u as n,_}from"./ColorSliders.e3a679dd.js";import{F as v}from"./FullscreenDisplay.397a21e4.js";import{u as g}from"./useCanvas.ce327d5c.js";import{u as C,a as x}from"./useVideoFromStream.48e394e4.js";import{W as h}from"./WebGlCanvas.abe0efc1.js";import{d as w,q as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.047d4d3b.js";import"./useOption.e026a708.js";import"./InlineRangeField.b4b2d079.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.f4e63d19.js";import"./SharedNav.b32f36e8.js";import"./Button.53c52a14.js";import"./LogoLight.c35e8cf3.js";const j=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};
