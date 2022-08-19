import{d as F,s as l,S,aG as T,aM as V,j as q,o as x,c as d,w as n,b as i,m as h,u as P,a as _,e as w}from"./index.c0079452.js";import{_ as D,B as C}from"./VStack.9958415f.js";import{u as z,_ as N}from"./ColorSliders.206a3648.js";import{F as R,H as L}from"./SharedNav.8fabc7b7.js";import{F as $}from"./FullscreenDisplay.caa8f0d9.js";import{L as A}from"./Labeled.1203552a.js";import{g as G}from"./useGlsl.9495b1d0.js";import{s as H}from"./useOption.f72b23cc.js";import{M as I}from"./MovableCanvas2d.2224d99c.js";import"./InlineRangeField.0f29f0f3.js";import"./CoordinateCanvas2d.e3131de3.js";import"./WebGlCanvas.d5a10803.js";const Q=w(" Apply "),U=w(" Reset Position "),X=["value"],j=F({__name:"ComplexExplorer",setup(O){const e=l(1),t=l(!1),c=l(!1),r=l(!1),s=l(),{width:y}=S(s);T(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function k(){e.value=1,t.value=!0,c.value=!0}function E(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(r.value=!0,(o=s.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(r.value=!1),r.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!r.value&&(a.preventDefault(),s.value)){const o=a.changedTouches[0].pageX-s.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const u=l("z^2");H("equation",u);const g=z(),M=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${z}

  #define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
  #define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))

  vec2 cx_tan(vec2 a) {
    return div(cx_sin(a), cx_cos(a));
  }

  vec2 cx_log(vec2 a) {
    float rpart = length(a);
    float ipart = atan(a.y, a.x);
    if (ipart > pi) ipart = ipart - 2.0 * pi;
    return vec2(log(rpart), ipart);
  }

  // This power function is only meant for numbers of the form
  // z ^ c, where c is a complex number like x + 0i.
  vec2 cx_pow(vec2 a, vec2 b) {
    float n = b.x;
    float angle = atan(a.y, a.x);
    float r = length(a);
    float real = pow(r, n) * cos(n*angle);
    float im = pow(r, n) * sin(n*angle);
    return vec2(real, im);
  }

  vec2 cx_exp(vec2 n) {
    return exp(n.x) * vec2(cos(n.y), sin(n.y));
  }

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
  `,f=l(),p=l(),m=l();return V(()=>{if(!f.value)return;const a=new I(f.value,{fragmentString:M.replace("{{EQ}}",G(u.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{g.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),q("pointerup",v),(a,o)=>(x(),d($,null,{options:n(()=>[i(A,{label:"Equation:"},{default:n(()=>[i(R,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=b=>u.value=b)},null,8,["modelValue"]),m.value?(x(),d(C,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:n(()=>[Q]),_:1},8,["onClick"])):h("",!0)]),_:1}),i(N,{sliders:P(g)},null,8,["sliders"])]),buttons:n(()=>[p.value?(x(),d(C,{key:0,onClick:p.value},{default:n(()=>[U]),_:1},8,["onClick"])):h("",!0)]),indicator:n(()=>[i(L,{style:{width:"100%","align-items":"center"}},{default:n(()=>[_("progress",{ref_key:"progress",ref:s,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,X),_("span",{class:"play",onClick:o[1]||(o[1]=b=>e.value===1?k():E())},"\u25B6")]),_:1})]),default:n(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});var re=D(j,[["__scopeId","data-v-4f3f63c1"]]);export{re as default};
