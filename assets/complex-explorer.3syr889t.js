import{h as M,f as T,a as V}from"./main.200onzgm.js";import{B as h}from"./VStack.3evi6szx.js";import{u as z,_ as q}from"./ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js";import{F as P}from"./Field.5c7fkv56.js";import{F as S}from"./FullscreenDisplay.od9apf4f.js";import{H as D}from"./BookmarkIcon.46krkaf8.js";import{L as N}from"./Labeled.59ihovi6.js";import{g as R}from"./useGlsl.1gjlgo68.js";import{s as H}from"./useOption.1pf10ib0.js";import{M as L}from"./MovableCanvas2d.4z89ub4m.js";import{l as $,r as l,o as A,x,C as d,D as r,F as i,H as C,E as k,u as I,a9 as y}from"./runtime-core.esm-bundler.47vl3tei.js";import{a as Q}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./InlineRangeField.gs0iuoop.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./WebGlCanvas.5wwm3cvm.js";const U=["value"],X=$({__name:"complex-explorer",setup(G){const e=l(1),t=l(!1),c=l(!1),s=l(!1),n=l(),{width:_}=M(n);T(()=>{t.value&&(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function w(){e.value=1,t.value=!0,c.value=!0}function E(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(s.value=!0,(o=n.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(s.value=!1),s.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/_.value)),t.value=!1)}function B(a){if(s.value&&(a.preventDefault(),n.value)){const o=a.changedTouches[0].pageX-n.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/_.value)),t.value=!1}}const u=l("z^2");H("equation",u);const b=z(),F=`
  uniform float time;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float pi = 3.1415926535;
  const float pi2 = 6.28318530718;

  ${z}

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
  `,f=l(),p=l(),m=l();return A(()=>{if(!f.value)return;const a=new L(f.value,{fragmentString:F.replace("{{EQ}}",R(u.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{b.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),V("pointerup",v),(a,o)=>(x(),d(S,null,{options:r(()=>[i(N,{label:"Equation:"},{default:r(()=>[i(P,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=g=>u.value=g)},null,8,["modelValue"]),m.value?(x(),d(h,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:r(()=>[C(" Apply ")]),_:1},8,["onClick"])):k("",!0)]),_:1}),i(q,{sliders:I(b)},null,8,["sliders"])]),buttons:r(()=>[p.value?(x(),d(h,{key:0,onClick:p.value},{default:r(()=>[C(" Reset Position ")]),_:1},8,["onClick"])):k("",!0)]),indicator:r(()=>[i(D,{style:{width:"100%","align-items":"center"}},{default:r(()=>[y("progress",{ref_key:"progress",ref:n,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,U),y("span",{class:"play",onClick:o[1]||(o[1]=g=>e.value===1?w():E())},"▶")]),_:1})]),default:r(()=>[y("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});const ce=Q(X,[["__scopeId","data-v-110174de"]]);export{ce as default};
