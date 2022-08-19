import{u as i,_}from"./ColorSliders.c8e3f8df.js";import{F as v}from"./FullscreenDisplay.eafb7b2f.js";import{u as g}from"./useCanvas.9936c8fa.js";import{u as C,a as x}from"./useVideoFromStream.d14d7522.js";import{W as h}from"./WebGlCanvas.3e712317.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as l}from"./index.103f168a.js";import"./useOption.fa7266bd.js";import"./InlineRangeField.b93965fa.js";import"./VStack.1c4fdd7b.js";import"./Labeled.7dbaff3b.js";import"./SharedNav.8af10a76.js";const U=w({__name:"CameraModifier",setup(y){const s=u(),a=i(),e=u("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(c,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{U as default};
