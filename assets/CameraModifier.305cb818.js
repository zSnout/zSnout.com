import{u as i,_}from"./ColorSliders.65005663.js";import{F as v}from"./FullscreenDisplay.cdaef9d7.js";import{u as g}from"./useCanvas.c00e184a.js";import{u as C,a as x}from"./useVideoFromStream.8073b47b.js";import{W as h}from"./WebGlCanvas.5f3e9c5e.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as l}from"./index.60c5bb9e.js";import"./useOption.da62bab3.js";import"./InlineRangeField.00d15d90.js";import"./VStack.5f861068.js";import"./Labeled.1d56cc19.js";import"./SharedNav.c05e4eb8.js";const U=w({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
