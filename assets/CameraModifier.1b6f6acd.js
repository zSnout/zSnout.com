import{u as i,_}from"./ColorSliders.e6c36954.js";import{F as v}from"./FullscreenDisplay.e6d20e7e.js";import{u as g}from"./useCanvas.6dd3f01e.js";import{u as C,a as x}from"./useVideoFromStream.92a4a4c9.js";import{W as h}from"./WebGlCanvas.881b9f37.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.8951f436.js";import"./useOption.7a63f64b.js";import"./InlineRangeField.4b236387.js";import"./VStack.599fd702.js";import"./Labeled.8cf0c6d9.js";import"./BookmarkIcon.c98cc4e5.js";const U=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
