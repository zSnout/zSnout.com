import{u as n,_}from"./ColorSliders.355a3256.js";import{F as v}from"./FullscreenDisplay.d63693d1.js";import{u as g}from"./useCanvas.15af3683.js";import{u as C,a as x}from"./useVideoFromStream.51210637.js";import{W as h}from"./WebGlCanvas.2890f34a.js";import{d as w,s as u,o as F,c as S,w as o,b,u as k,a as c}from"./index.307c9757.js";import"./useOption.32e6a30d.js";import"./InlineRangeField.d00decc2.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Labeled.c69bdb91.js";import"./SharedNav.13deb094.js";import"./VStack.a5267f59.js";import"./LogoLight.1b2c95c2.js";const q=w({__name:"camera-modifier",setup(y){const s=u(),a=n(),e=u("user"),{stream:l,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(F(),S(v,null,{options:o(()=>[b(_,{sliders:k(a)},null,8,["sliders"])]),indicator:o(()=>[c("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[c("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{q as default};
