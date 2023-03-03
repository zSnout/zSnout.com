import{u as i,_}from"./ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js";import{F as v}from"./FullscreenDisplay.od9apf4f.js";import{u as g}from"./useCanvas.3phirwm2.js";import{u as C,a as x}from"./useVideoFromStream.1vimuw6x.js";import{W as h}from"./WebGlCanvas.5wwm3cvm.js";import{d as w,r as c,o as F,c as S,w as o,e as k,u as y,a as l}from"./index.4z0bzixf.js";import"./useOption.1pf10ib0.js";import"./InlineRangeField.gs0iuoop.js";import"./Labeled.59ihovi6.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const A=w({__name:"color-effects",setup(b){const s=c(),a=i(),e=c("user"),{stream:u,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function d(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const f=x(u,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${i}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:n}=t,r=new h(n,{fragmentString:p});r.setTexture("u_texture",f),r.on("render",()=>a.setGlsl(r))}),(t,n)=>(F(),S(v,null,{options:o(()=>[k(_,{sliders:y(a)},null,8,["sliders"])]),indicator:o(()=>[l("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:o(()=>[l("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{A as default};
