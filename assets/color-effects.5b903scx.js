import{u as i,_}from"./ColorSliders.12r88cc6.js";import{F as v}from"./FullscreenDisplay.2pmkxxou.js";import{u as g}from"./useCanvas.87p0yoq7.js";import{u as C,a as x}from"./useVideoFromStream.r6hxu1yk.js";import{W as h}from"./WebGlCanvas.1rb17qef.js";import{d as w,q as c,o as F,c as S,w as r,b,u as k,a as l}from"./index.5eygmsav.js";import"./useOption.ujvp9hcq.js";import"./InlineRangeField.4y4yst1n.js";import"./plugin-vue_export-helper.62h235na.js";import"./Labeled.x87dtudf.js";import"./SharedNav.3q0ndcho.js";import"./Button.32h7782u.js";import"./LogoLight.11xzt69h.js";const j=w({__name:"color-effects",setup(y){const s=c(),a=i(),e=c("user"),{stream:u,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(u,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,o=new h(n,{fragmentString:p});o.setTexture("u_texture",f),o.on("render",()=>a.setGlsl(o))}),(t,n)=>(F(),S(v,null,{options:r(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:r(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:r(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};
