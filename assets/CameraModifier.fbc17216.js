import{u as i,_}from"./ColorSliders.c5ded698.js";import{F as v}from"./FullscreenDisplay.68737168.js";import{u as g}from"./useCanvas.0ef2612e.js";import{u as C,a as x}from"./useVideoFromStream.94a55164.js";import{W as h}from"./WebGlCanvas.6feda650.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.4e71ea6a.js";import"./useOption.edfcb5ef.js";import"./InlineRangeField.23237bc4.js";import"./VStack.8e265c0c.js";import"./Labeled.745ffa47.js";import"./BookmarkIcon.dd545e5c.js";const U=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
