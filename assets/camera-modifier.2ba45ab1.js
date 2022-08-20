import{u as i,_}from"./ColorSliders.710443b5.js";import{F as v}from"./FullscreenDisplay.7003d5a1.js";import{u as g}from"./useCanvas.b447c3d1.js";import{u as C,a as x}from"./useVideoFromStream.36e9117b.js";import{W as h}from"./WebGlCanvas.ed6f0748.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.08441792.js";import"./useOption.d3747020.js";import"./InlineRangeField.fa462b8e.js";import"./VStack.2f484e9a.js";import"./Labeled.a9768d0b.js";import"./SharedNav.b331d2ea.js";const U=w({__name:"camera-modifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
