import{u as i,_}from"./ColorSliders.fda5bbd4.js";import{F as v}from"./FullscreenDisplay.340041a3.js";import{u as g}from"./useCanvas.df50f72a.js";import{u as C,a as x}from"./useVideoFromStream.3ea5f095.js";import{W as h}from"./WebGlCanvas.40dd46c9.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.e8a5d947.js";import"./useOption.bfd3ca90.js";import"./InlineRangeField.ed663bcc.js";import"./BookmarkIcon.274dcaf8.js";import"./Labeled.f8d26032.js";const T=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{T as default};
