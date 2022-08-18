import{d as F,s as l,S,aG as V,aM as q,j as P,o as d,c as x,w as s,b as i,m as C,u as T,a as _,e as k}from"./index.8cc95afd.js";import{_ as D,B as h}from"./VStack.f7aa5462.js";import{u as z,_ as N}from"./ColorSliders.8f44f9c0.js";import{F as R,H as L}from"./SharedNav.09f2adfd.js";import{F as $}from"./FullscreenDisplay.5962c21d.js";import{L as A}from"./Labeled.206d29d2.js";import{g as G}from"./useGlsl.e7d88fb3.js";import{s as H}from"./useOption.0c728f02.js";import{M as I}from"./MovableCanvas2d.b16d745c.js";import"./InlineRangeField.7ed6d6a0.js";import"./CoordinateCanvas2d.3ab21b10.js";import"./WebGlCanvas.ca3a0ffe.js";const Q=k(" Apply "),U=k(" Reset Position "),X=["value"],j=F({__name:"ComplexExplorer",setup(O){const e=l(1),t=l(!1),c=l(!1),u=l(!1),r=l(),{width:y}=S(r);V(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function E(){e.value=1,t.value=!0,c.value=!0}function w(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(u.value=!0,(o=r.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(u.value=!1),u.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!u.value&&(a.preventDefault(),r.value)){const o=a.changedTouches[0].pageX-r.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const n=l("z^2");H("equation",n);const b=z(),M=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${z}

  vec3 palette(vec2 z) {
    vec3 rgb = use_color_sliders(atan(z.y, z.x) / pi2);
    vec2 z2 = z * z;
    float d = sqrt(z2.x + z2.y);
    if (d < 1.0) rgb *= d;

    return rgb;
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
  `,f=l(),p=l(),m=l();return q(()=>{if(!f.value)return;const a=new I(f.value,{fragmentString:M.replace("{{EQ}}",G(n.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{b.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),P("pointerup",v),(a,o)=>(d(),x($,null,{options:s(()=>[i(A,{label:"Equation:"},{default:s(()=>[i(R,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=g=>n.value=g)},null,8,["modelValue"]),m.value?(d(),x(h,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:s(()=>[Q]),_:1},8,["onClick"])):C("",!0)]),_:1}),i(N,{sliders:T(b)},null,8,["sliders"])]),buttons:s(()=>[p.value?(d(),x(h,{key:0,onClick:p.value},{default:s(()=>[U]),_:1},8,["onClick"])):C("",!0)]),indicator:s(()=>[i(L,{style:{width:"100%","align-items":"center"}},{default:s(()=>[_("progress",{ref_key:"progress",ref:r,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,X),_("span",{class:"play",onClick:o[1]||(o[1]=g=>e.value===1?E():w())},"\u25B6")]),_:1})]),default:s(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});var ue=D(j,[["__scopeId","data-v-4ca0406c"]]);export{ue as default};
