import{u as i,_}from"./ColorSliders.b8175a7c.js";import{F as v}from"./FullscreenDisplay.b0885eb9.js";import{u as g}from"./useCanvas.f587386c.js";import{u as C,a as x}from"./useVideoFromStream.045e9d2a.js";import{W as h}from"./WebGlCanvas.e5bcfc98.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as l}from"./index.fbb8a992.js";import"./useOption.fbbea796.js";import"./InlineRangeField.59c71e01.js";import"./VStack.bb8db39c.js";import"./Labeled.22c4f657.js";import"./SharedNav.f5ce5cb3.js";const U=w({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
