import{u as n,_}from"./ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js";import{F as v}from"./FullscreenDisplay.od9apf4f.js";import{u as g}from"./useCanvas.3phirwm2.js";import{u as C,a as x}from"./useVideoFromStream.1vimuw6x.js";import{W as h}from"./WebGlCanvas.5wwm3cvm.js";import{l as F,r as l,x as S,C as k,D as o,F as w,u as y,a8 as u}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./main.200onzgm.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./useOption.1pf10ib0.js";import"./InlineRangeField.gs0iuoop.js";import"./Labeled.59ihovi6.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const H=F({__name:"color-effects",setup(D){const s=l(),a=n(),e=l("user"),{stream:c,setOpts:m}=C({audio:!1,video:{facingMode:{ideal:e.value}}});function p(){e.value=e.value==="user"?"environment":"user",m({audio:!1,video:{facingMode:{ideal:e.value}}})}const d=x(c,!0),f=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${n}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return g(s).then(t=>{const{canvas:i}=t,r=new h(i,{fragmentString:f});r.setTexture("u_texture",d),r.on("render",()=>a.setGlsl(r))}),(t,i)=>(S(),k(v,null,{options:o(()=>[w(_,{sliders:y(a)},null,8,["sliders"])]),indicator:o(()=>[u("span",{style:{cursor:"pointer"},onClick:p},"Switch Camera")]),default:o(()=>[u("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{H as default};
