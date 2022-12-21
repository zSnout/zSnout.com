import{u as v}from"./index.dlnn8pzg.js";import{F as c}from"./FullscreenDisplay.od9apf4f.js";import{I as g}from"./Incrementable.4buzwvct.js";import{u as S}from"./useCanvas.3phirwm2.js";import{u as z,a as _}from"./useVideoFromStream.1vimuw6x.js";import{W as x}from"./WebGlCanvas.5wwm3cvm.js";import{l as C,r,x as B,C as D,D as f,F as h,u as y,i as A,a8 as n}from"./runtime-core.esm-bundler.55v0mz3f.js";import"./main.200onzgm.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./InlineField.sq5fmr9m.js";const E=C({__name:"edges",setup(F){const o=r(),a=r("user"),i=v(10,1,100),{stream:l,setOpts:u}=z({audio:!1,video:{facingMode:{ideal:a.value}}});function m(){a.value=a.value==="user"?"environment":"user",u({audio:!1,video:{facingMode:{ideal:a.value}}})}const d=_(l,!0),p=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform float sampleSize;

  float avg(vec2 inputs) {
    return (inputs.x + inputs.y) / 2.0;
  }

  float avg(vec3 inputs) {
    return (inputs.x + inputs.y + inputs.z) / 2.0;
  }

  float avg(vec4 inputs) {
    return (inputs.x + inputs.y + inputs.z + inputs.w) / 2.0;
  }

  float diff(vec2 other) {
    vec3 self = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    vec3 neighbor = texture2D(u_texture, (gl_FragCoord.xy + other) / u_resolution).rgb;
    vec3 diff = self - neighbor;

    return avg(diff);
  }

  void main() {
    float diffA = diff(vec2(-sampleSize, 0));
    float diffB = diff(vec2(0, -sampleSize));
    float diffC = diff(vec2(sampleSize, 0));
    float diffD = diff(vec2(0, sampleSize));
    float avgA = avg(vec4(diffA, diffB, diffC, diffD));

    diffA = diff(vec2(-sampleSize, -sampleSize));
    diffB = diff(vec2(sampleSize, -sampleSize));
    diffC = diff(vec2(-sampleSize, sampleSize));
    diffD = diff(vec2(sampleSize, sampleSize));
    float avgB = avg(vec4(diffA, diffB, diffC, diffD));

    float diffAvg = avg(vec2(avgA, avgB));

    gl_FragColor = vec4(vec3(diffAvg), 1.0);
  }
  `;return S(o).then(s=>{const{canvas:t}=s,e=new x(t,{fragmentString:p});e.setTexture("u_texture",d),e.on("render",()=>{e.setUniform("sampleSize",i.value)})}),(s,t)=>(B(),D(c,null,{options:f(()=>[h(g,{modelValue:y(i),"onUpdate:modelValue":t[0]||(t[0]=e=>A(i)?i.value=e:null)},null,8,["modelValue"])]),indicator:f(()=>[n("span",{style:{cursor:"pointer"},onClick:m},"Switch Camera")]),default:f(()=>[n("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{E as default};
