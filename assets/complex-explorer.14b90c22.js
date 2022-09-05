import{d as q,q as l,U as F,aG as T,aM as V,aA as P,o as x,c as d,w as n,b as i,k as h,u as S,a as _,e as w}from"./index.b750fc01.js";import{B as z}from"./Button.f50eaa40.js";import{u as k,_ as D}from"./ColorSliders.95897726.js";import{F as N,H as R}from"./SharedNav.6ef85c65.js";import{F as A}from"./FullscreenDisplay.348db946.js";import{L}from"./Labeled.66e3f168.js";import{g as U}from"./useGlsl.9495b1d0.js";import{s as $}from"./useOption.d743b7a2.js";import{M as G}from"./MovableCanvas2d.b4640077.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./InlineRangeField.28ae1345.js";import"./LogoLight.bc31d144.js";import"./CoordinateCanvas2d.a92cd5a9.js";import"./WebGlCanvas.aaf6c83a.js";const I=w(" Apply "),Q=w(" Reset Position "),X=["value"],O=q({__name:"complex-explorer",setup(j){const e=l(1),t=l(!1),c=l(!1),s=l(!1),r=l(),{width:y}=F(r);T(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function C(){e.value=1,t.value=!0,c.value=!0}function E(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(s.value=!0,(o=r.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(s.value=!1),s.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!s.value&&(a.preventDefault(),r.value)){const o=a.changedTouches[0].pageX-r.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const u=l("z^2");$("equation",u);const g=k(),M=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${k}

  vec2 div(vec2 a, vec2 b);

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

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
  `,f=l(),p=l(),m=l();return V(()=>{if(!f.value)return;const a=new G(f.value,{fragmentString:M.replace("{{EQ}}",U(u.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{g.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),P("pointerup",v),(a,o)=>(x(),d(A,null,{options:n(()=>[i(L,{label:"Equation:"},{default:n(()=>[i(N,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=b=>u.value=b)},null,8,["modelValue"]),m.value?(x(),d(z,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:n(()=>[I]),_:1},8,["onClick"])):h("",!0)]),_:1}),i(D,{sliders:S(g)},null,8,["sliders"])]),buttons:n(()=>[p.value?(x(),d(z,{key:0,onClick:p.value},{default:n(()=>[Q]),_:1},8,["onClick"])):h("",!0)]),indicator:n(()=>[i(R,{style:{width:"100%","align-items":"center"}},{default:n(()=>[_("progress",{ref_key:"progress",ref:r,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,X),_("span",{class:"play",onClick:o[1]||(o[1]=b=>e.value===1?C():E())},"\u25B6")]),_:1})]),default:n(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});var ie=H(O,[["__scopeId","data-v-54c18a24"]]);export{ie as default};
