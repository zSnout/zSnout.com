import{u as i,_}from"./ColorSliders.2bf6f478.js";import{F as v}from"./FullscreenDisplay.de0ed3d0.js";import{u as g}from"./useCanvas.43aca520.js";import{u as C,a as x}from"./useVideoFromStream.cfd9b9c4.js";import{W as h}from"./WebGlCanvas.55c1ba96.js";import{d as k,k as u,o as w,c as F,w as o,b as S,u as b,a as l}from"./index.6fd38de8.js";import"./useOption.09504db0.js";import"./InlineRangeField.41b559c1.js";import"./VStack.0099a460.js";import"./Labeled.d8315c55.js";import"./BookmarkIcon.8dca6511.js";const U=k({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(w(),F(v,null,{options:o(()=>[S(_,{sliders:b(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
