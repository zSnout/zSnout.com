import{u as c}from"./index.55wflef3jm40.js";import{F as v}from"./FullscreenDisplay.2pmkxxoua4y0.js";import{I as g}from"./Incrementable.5okigj4y2q00.js";import{u as S}from"./useCanvas.87p0yoq7nt80.js";import{u as z,a as _}from"./useVideoFromStream.r6hxu1ykqxc0.js";import{W as x}from"./WebGlCanvas.1rb17qef21sw.js";import{d as C,q as r,o as B,c as h,w as f,b as y,u as A,aL as D,a as n}from"./index.5eygmsavjzc0.js";import"./SharedNav.3q0ndchopua0.js";import"./Button.32h7782uxra0.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./LogoLight.11xzt69hf600.js";import"./InlineField.4cyna052kc20.js";const O=C({__name:"edges",setup(b){const s=r(),a=r("user"),i=c(10,1,100),{stream:l,setOpts:u}=z({audio:!1,video:{facingMode:{ideal:a.value}}});function d(){a.value=a.value==="user"?"environment":"user",u({audio:!1,video:{facingMode:{ideal:a.value}}})}const m=_(l,!0),p=`
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
  `;return S(s).then(o=>{const{canvas:t}=o,e=new x(t,{fragmentString:p});e.setTexture("u_texture",m),e.on("render",()=>{e.setUniform("sampleSize",i.value)})}),(o,t)=>(B(),h(v,null,{options:f(()=>[y(g,{modelValue:A(i),"onUpdate:modelValue":t[0]||(t[0]=e=>D(i)?i.value=e:null)},null,8,["modelValue"])]),indicator:f(()=>[n("span",{style:{cursor:"pointer"},onClick:d},"Switch Camera")]),default:f(()=>[n("canvas",{ref_key:"canvas",ref:s},null,512)]),_:1}))}});export{O as default};
