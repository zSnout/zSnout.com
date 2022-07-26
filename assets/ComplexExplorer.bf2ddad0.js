import{d as U,k as o,W as O,az as P,B as R,j as S,c as z,w as l,o as h,b as s,m as q,a as C,e as E}from"./index.633aee0b.js";import{_ as T,F as D,b as k,H as I}from"./BookmarkIcon.2a3ef552.js";import{F as N}from"./FullscreenDisplay.32508d91.js";import{I as w}from"./InlineRangeField.b511b0e0.js";import{L as p}from"./Labeled.3250c9e7.js";import{g as L}from"./useGlsl.b990d597.js";import{s as d}from"./useOption.3c659360.js";import{M as A}from"./MovableCanvas2d.1eb03bae.js";import"./CoordinateCanvas2d.52b64ace.js";import"./WebGlCanvas.5adbb184.js";const H=E(" Apply "),Q=E(" Reset Position "),X=["value"],j=U({__name:"ComplexExplorer",setup(W){const t=o(1),u=o(!1),x=o(!1),i=o(!1),r=o(),{width:V}=O(r);P(()=>{!u.value||(t.value>1?(u.value=!1,t.value=1):t.value<0?(x.value=!1,t.value=0):x.value?t.value=(200*t.value-10)/200:u.value&&(t.value=(200*t.value+1)/200))});function B(){t.value=1,u.value=!0,x.value=!0}function F(){u.value?u.value=!1:u.value=!0}function y(e){var a;e.preventDefault(),e.type==="pointerdown"?(i.value=!0,(a=r.value)==null||a.setPointerCapture(e.pointerId)):e.type==="pointerup"&&(i.value=!1),i.value&&(t.value=Math.min(1,Math.max(0,e.offsetX/V.value)),u.value=!1)}function K(e){if(!!i.value&&(e.preventDefault(),r.value)){const a=e.changedTouches[0].pageX-r.value.getBoundingClientRect().x;t.value=Math.min(1,Math.max(0,a/V.value)),u.value=!1}}const v=o("z^2");d("equation",v);const c=o(0);d("colorOffset",c);const f=o(1);d("repetition",f);const m=o(1);d("spectrum",m);const M=`
  uniform float colorOffset;
  uniform float repetition;
  uniform float spectrum;
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec3 palette(vec2 z) {
    float i = atan(z.y, z.x) / pi2;
    float hue = mod(repetition * i, 1.0);
    vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);

    hsv.x = mod(hsv.x + colorOffset, 1.0);
    vec2 z2 = z * z;
    float d = sqrt(z2.x + z2.y);
    if (d < 1.0) hsv.z *= d;

    return hsv2rgb(hsv);
  }

  vec2 cube(vec2 a) {
    float x2 = a.x * a.x;
    float y2 = a.y * a.y;
    float d = x2 - y2;
    return vec2(a.x * (d - y2 - y2), a.y * (d + x2 + x2));
  }

  vec2 sqr(vec2 a) {
    return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
  }

  vec2 mult(vec2 a, vec2 b) {
    float x = a.x * b.x - a.y * b.y;
    float y = a.x * b.y + a.y * b.x;
    return vec2(x, y);
  }

  vec2 div(vec2 a, vec2 b) {
    float denom = 1.0 / (b.x * b.x + b.y * b.y);
    return vec2(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y) * denom;
  }

  vec2 power(vec2 a, vec2 b) {
    int count = int(b.x);
    if (count <= 1) return a;

    vec2 result = a;
    for (int i = 1; i < 10; i++) {
      if (i >= count) break;
      result = mult(result, a);
    }

    return result;
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    vec2 z = pos;
    z = {{EQ}};
    z = time * z + (1.0 - time) * pos;

    gl_FragColor = vec4(palette(z), 1.0);
  }
  `,_=o(),b=o(),g=o();return R(()=>{if(!_.value)return;const e=new A(_.value,{fragmentString:M.replace("{{EQ}}",L(v.value)),saveBounds:!0});g.value=()=>setTimeout(()=>location.reload()),e.on("render",()=>{e.setUniform("colorOffset",c.value),e.setUniform("repetition",f.value),e.setUniform("spectrum",m.value),e.setUniform("time",t.value)}),b.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),S("pointerup",y),(e,a)=>(h(),z(N,null,{options:l(()=>[s(p,{label:"Equation:"},{default:l(()=>[s(D,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=n=>v.value=n)},null,8,["modelValue"]),g.value?(h(),z(k,{key:0,style:{"white-space":"pre"},onClick:g.value},{default:l(()=>[H]),_:1},8,["onClick"])):q("",!0)]),_:1}),s(p,{label:"Color Offset:"},{default:l(()=>[s(w,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=n=>c.value=n),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),s(p,{label:"Color Repetition:"},{default:l(()=>[s(w,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=n=>f.value=n),max:10,min:1,step:"any"},null,8,["modelValue"])]),_:1}),s(p,{label:"Color Spectrum:"},{default:l(()=>[s(w,{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=n=>m.value=n),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1})]),buttons:l(()=>[b.value?(h(),z(k,{key:0,onClick:b.value},{default:l(()=>[Q]),_:1},8,["onClick"])):q("",!0)]),indicator:l(()=>[s(I,{style:{width:"100%","align-items":"center"}},{default:l(()=>[C("progress",{ref_key:"progress",ref:r,class:"progress",value:t.value,max:"1",onPointerdown:y,onPointermove:y,onTouchmove:K},null,40,X),C("span",{class:"play",onClick:a[4]||(a[4]=n=>t.value===1?B():F())},"\u25B6")]),_:1})]),default:l(()=>[C("canvas",{ref_key:"canvas",ref:_},null,512)]),_:1}))}});var ue=T(j,[["__scopeId","data-v-2c5c88ac"]]);export{ue as default};
