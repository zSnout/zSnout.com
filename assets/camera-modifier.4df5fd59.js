import{u as i,_}from"./ColorSliders.273a2c9e.js";import{F as v}from"./FullscreenDisplay.980c9a14.js";import{u as g}from"./useCanvas.231d3e77.js";import{u as C,a as x}from"./useVideoFromStream.4d6c4963.js";import{W as h}from"./WebGlCanvas.ab3958d8.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.3457413b.js";import"./useOption.3e5be13a.js";import"./InlineRangeField.b7d05533.js";import"./VStack.d9a6c01a.js";import"./Labeled.f38250d7.js";import"./SharedNav.720d082d.js";const U=w({__name:"camera-modifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
