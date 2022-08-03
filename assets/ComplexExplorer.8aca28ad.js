import{d as F,k as l,$ as S,a0 as V,I as q,j as P,c as d,w as s,o as x,b as i,m as C,u as T,a as _,e as k}from"./index.f235fda5.js";import{_ as D,F as N,b as h,H as R}from"./BookmarkIcon.8ac6d5c6.js";import{u as z,_ as $}from"./ColorSliders.871ed5e9.js";import{F as I}from"./FullscreenDisplay.6f790d1d.js";import{L}from"./Labeled.e5ea23b1.js";import{g as A}from"./useGlsl.b990d597.js";import{s as H}from"./useOption.dece71b1.js";import{M as Q}from"./MovableCanvas2d.8237998d.js";import"./InlineRangeField.6f304087.js";import"./CoordinateCanvas2d.0c8ea8ee.js";import"./WebGlCanvas.7eac4bc0.js";const U=k(" Apply "),X=k(" Reset Position "),j=["value"],G=F({__name:"ComplexExplorer",setup(O){const e=l(1),t=l(!1),c=l(!1),n=l(!1),u=l(),{width:y}=S(u);V(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function E(){e.value=1,t.value=!0,c.value=!0}function w(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(n.value=!0,(o=u.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(n.value=!1),n.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!n.value&&(a.preventDefault(),u.value)){const o=a.changedTouches[0].pageX-u.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const r=l("z^2");H("equation",r);const b=z(),M=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${z.toString({addDarkness:`
vec2 z2 = z * z;
float d = sqrt(z2.x + z2.y);
if (d < 1.0) hsv.z *= d;`})}

  vec3 palette(vec2 z) {
    return use_color_sliders(atan(z.y, z.x) / pi2);
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
  `,f=l(),p=l(),m=l();return q(()=>{if(!f.value)return;const a=new Q(f.value,{fragmentString:M.replace("{{EQ}}",A(r.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{b.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),P("pointerup",v),(a,o)=>(x(),d(I,null,{options:s(()=>[i(L,{label:"Equation:"},{default:s(()=>[i(N,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=g=>r.value=g)},null,8,["modelValue"]),m.value?(x(),d(h,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:s(()=>[U]),_:1},8,["onClick"])):C("",!0)]),_:1}),i($,{sliders:T(b)},null,8,["sliders"])]),buttons:s(()=>[p.value?(x(),d(h,{key:0,onClick:p.value},{default:s(()=>[X]),_:1},8,["onClick"])):C("",!0)]),indicator:s(()=>[i(R,{style:{width:"100%","align-items":"center"}},{default:s(()=>[_("progress",{ref_key:"progress",ref:u,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,j),_("span",{class:"play",onClick:o[1]||(o[1]=g=>e.value===1?E():w())},"\u25B6")]),_:1})]),default:s(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});var ue=D(G,[["__scopeId","data-v-c7c33134"]]);export{ue as default};
