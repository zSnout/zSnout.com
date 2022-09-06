import{u as n,_}from"./ColorSliders.12r88cc6jki8.js";import{F as v}from"./FullscreenDisplay.2pmkxxoua4y0.js";import{u as g}from"./useCanvas.87p0yoq7nt80.js";import{u as C,a as x}from"./useVideoFromStream.r6hxu1ykqxc0.js";import{W as h}from"./WebGlCanvas.1rb17qef21sw.js";import{d as w,q as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.5044v8rtsf00.js";import"./useOption.ujvp9hcq9ds0.js";import"./InlineRangeField.4y4yst1nfm00.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./Labeled.x87dtudfywg0.js";import"./SharedNav.1lm7nnzuivvk.js";import"./Button.32h7782uxra0.js";import"./LogoLight.11xzt69hf600.js";const j=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};
