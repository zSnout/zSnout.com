import{d as q,q as l,P as F,L as P,Y as T,C as V,o as x,c as d,w as n,b as i,j as h,u as S,a as _,e as C,_ as D}from"./index.2g1oawtf.js";import{B as z}from"./VStack.1y80766s.js";import{u as w,_ as L}from"./ColorSliders.vue_vue_type_script_setup_true_lang.5x2ux4ix.js";import{F as N,H as R}from"./BookmarkIcon.19otz2s5.js";import{F as $}from"./FullscreenDisplay.421pqk6v.js";import{L as A}from"./Labeled.29mn7ohi.js";import{g as H}from"./useGlsl.65muxzpz.js";import{s as I}from"./useOption.ujvp9hcq.js";import{M as Q}from"./MovableCanvas2d.3k2tk05z.js";import"./InlineRangeField.4poaov81.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./WebGlCanvas.1rb17qef.js";const U=C(" Apply "),X=C(" Reset Position "),j=["value"],G=q({__name:"complex-explorer",setup(O){const e=l(1),t=l(!1),c=l(!1),r=l(!1),s=l(),{width:y}=F(s);P(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function k(){e.value=1,t.value=!0,c.value=!0}function E(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(r.value=!0,(o=s.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(r.value=!1),r.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!r.value&&(a.preventDefault(),s.value)){const o=a.changedTouches[0].pageX-s.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const u=l("z^2");I("equation",u);const b=w(),M=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${w}

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
  `,f=l(),p=l(),m=l();return T(()=>{if(!f.value)return;const a=new Q(f.value,{fragmentString:M.replace("{{EQ}}",H(u.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{b.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),V("pointerup",v),(a,o)=>(x(),d($,null,{options:n(()=>[i(A,{label:"Equation:"},{default:n(()=>[i(N,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=g=>u.value=g)},null,8,["modelValue"]),m.value?(x(),d(z,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:n(()=>[U]),_:1},8,["onClick"])):h("",!0)]),_:1}),i(L,{sliders:S(b)},null,8,["sliders"])]),buttons:n(()=>[p.value?(x(),d(z,{key:0,onClick:p.value},{default:n(()=>[X]),_:1},8,["onClick"])):h("",!0)]),indicator:n(()=>[i(R,{style:{width:"100%","align-items":"center"}},{default:n(()=>[_("progress",{ref_key:"progress",ref:s,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,j),_("span",{class:"play",onClick:o[1]||(o[1]=g=>e.value===1?k():E())},"\u25B6")]),_:1})]),default:n(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});const ie=D(G,[["__scopeId","data-v-110174de"]]);export{ie as default};
