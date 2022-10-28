import{u as i,_}from"./ColorSliders.vue_vue_type_script_setup_true_lang.55nmm5y1.js";import{F as v}from"./FullscreenDisplay.hao6npqe.js";import{u as g}from"./useCanvas.87p0yoq7.js";import{u as C,a as x}from"./useVideoFromStream.r6hxu1yk.js";import{W as h}from"./WebGlCanvas.1rb17qef.js";import{d as w,q as c,o as F,c as S,w as r,e as k,u as y,a as l}from"./index.5g74v6w3.js";import"./useOption.ujvp9hcq.js";import"./InlineRangeField.4poaov81.js";import"./Labeled.29mn7ohi.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const A=w({__name:"color-effects",setup(b){const s=c(),a=i(),e=c("user"),{stream:u,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(u,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,o=new h(n,{fragmentString:p});o.setTexture("u_texture",f),o.on("render",()=>a.setGlsl(o))}),(t,n)=>(F(),S(v,null,{options:r(()=>[k(_,{sliders:y(a)},null,8,["sliders"])]),indicator:r(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:r(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{A as default};
