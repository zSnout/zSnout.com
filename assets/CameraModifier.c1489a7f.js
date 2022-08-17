import{u as i,_}from"./ColorSliders.69339d94.js";import{F as v}from"./FullscreenDisplay.548281d3.js";import{u as g}from"./useCanvas.dcb93a45.js";import{u as C,a as x}from"./useVideoFromStream.eef52a7d.js";import{W as h}from"./WebGlCanvas.959e5f16.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.1496218b.js";import"./useOption.49b935cd.js";import"./InlineRangeField.e46a4b28.js";import"./Button.86e1e0d9.js";import"./Labeled.92edccc4.js";import"./BookmarkIcon.b6cef27c.js";const U=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
