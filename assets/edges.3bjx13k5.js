import{u as p}from"./index.dlnn8pzg.js";import{F as c}from"./FullscreenDisplay.75rpamat.js";import{I as v}from"./Incrementable.4buzwvct.js";import{u as g}from"./useCanvas.3phirwm2.js";import{u as S,a as z}from"./useVideoFromStream.1vimuw6x.js";import{W as _}from"./WebGlCanvas.5wwm3cvm.js";import{d as x,r,c as C,w as f,o as B,e as h,u as y,i as A,a as n}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./InlineField.sq5fmr9m.js";const D=`
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
  `,j=x({__name:"edges",setup(b){const s=r(),a=r("user"),i=p(10,1,100),{stream:l,setOpts:u}=S({audio:!1,video:{facingMode:{ideal:a.value}}});function d(){a.value=a.value==="user"?"environment":"user",u({audio:!1,video:{facingMode:{ideal:a.value}}})}const m=z(l,!0);return g(s).then(o=>{const{canvas:t}=o,e=new _(t,{fragmentString:D});e.setTexture("u_texture",m),e.on("render",()=>{e.setUniform("sampleSize",i.value)})}),(o,t)=>(B(),C(c,null,{options:f(()=>[h(v,{modelValue:y(i),"onUpdate:modelValue":t[0]||(t[0]=e=>A(i)?i.value=e:null)},null,8,["modelValue"])]),indicator:f(()=>[n("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:f(()=>[n("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{j as default};