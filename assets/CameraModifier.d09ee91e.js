import{u as i,_}from"./ColorSliders.fe880f5a.js";import{F as v}from"./FullscreenDisplay.b5d9daed.js";import{u as g}from"./useCanvas.1b27b266.js";import{u as C,a as x}from"./useVideoFromStream.8f55cb49.js";import{W as h}from"./WebGlCanvas.c0d48ea0.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.2691e7b8.js";import"./useOption.2217933d.js";import"./InlineRangeField.33eedf6b.js";import"./VStack.b4498dae.js";import"./Labeled.04664cfc.js";import"./BookmarkIcon.2d870479.js";const U=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
