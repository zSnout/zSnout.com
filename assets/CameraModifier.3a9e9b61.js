import{u as i,_}from"./ColorSliders.206a3648.js";import{F as v}from"./FullscreenDisplay.caa8f0d9.js";import{u as g}from"./useCanvas.6e9db0b0.js";import{u as C,a as x}from"./useVideoFromStream.8d22cab0.js";import{W as h}from"./WebGlCanvas.d5a10803.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as l}from"./index.c0079452.js";import"./useOption.f72b23cc.js";import"./InlineRangeField.0f29f0f3.js";import"./VStack.9958415f.js";import"./Labeled.1203552a.js";import"./SharedNav.8fabc7b7.js";const U=w({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
