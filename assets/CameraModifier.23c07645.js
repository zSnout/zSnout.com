import{u as i,_}from"./ColorSliders.7ca7d04a.js";import{F as v}from"./FullscreenDisplay.49ab2058.js";import{u as g}from"./useCanvas.03db7725.js";import{u as C,a as x}from"./useVideoFromStream.32786010.js";import{W as h}from"./WebGlCanvas.12e8fa2f.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as l}from"./index.d9c71436.js";import"./useOption.44a96272.js";import"./InlineRangeField.edf0288e.js";import"./VStack.ce99e420.js";import"./Labeled.8a958ee3.js";import"./SharedNav.2f3b6f6c.js";const U=w({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
