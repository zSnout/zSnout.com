import{d as M,s as l,P as q,aF as P,aL as V,j as S,o as d,c as x,w as s,b as i,q as C,u as T,a as _,e as k}from"./index.5ecff434.js";import{_ as D,B as h}from"./VStack.0cf8ef58.js";import{u as z,_ as L}from"./ColorSliders.68dedec0.js";import{F as N,H as R}from"./SharedNav.04ff8d8d.js";import{F as $}from"./FullscreenDisplay.96367436.js";import{L as A}from"./Labeled.0709afd8.js";import{g as H}from"./useGlsl.e7d88fb3.js";import{s as I}from"./useOption.91348ca0.js";import{M as Q}from"./MovableCanvas2d.d221d518.js";import"./InlineRangeField.23f7190e.js";import"./CoordinateCanvas2d.5020e198.js";import"./WebGlCanvas.4130eb45.js";const U=k(" Apply "),X=k(" Reset Position "),j=["value"],G=M({__name:"ComplexExplorer",setup(O){const e=l(1),t=l(!1),c=l(!1),u=l(!1),r=l(),{width:y}=q(r);P(()=>{!t.value||(e.value>1?(t.value=!1,e.value=1):e.value<0?(c.value=!1,e.value=0):c.value?e.value=(200*e.value-10)/200:t.value&&(e.value=(200*e.value+1)/200))});function E(){e.value=1,t.value=!0,c.value=!0}function w(){t.value?t.value=!1:t.value=!0}function v(a){var o;a.preventDefault(),a.type==="pointerdown"?(u.value=!0,(o=r.value)==null||o.setPointerCapture(a.pointerId)):a.type==="pointerup"&&(u.value=!1),u.value&&(e.value=Math.min(1,Math.max(0,a.offsetX/y.value)),t.value=!1)}function B(a){if(!!u.value&&(a.preventDefault(),r.value)){const o=a.changedTouches[0].pageX-r.value.getBoundingClientRect().x;e.value=Math.min(1,Math.max(0,o/y.value)),t.value=!1}}const n=l("z^2");I("equation",n);const b=z(),F=`
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
  `,f=l(),p=l(),m=l();return V(()=>{if(!f.value)return;const a=new Q(f.value,{fragmentString:F.replace("{{EQ}}",H(n.value)),saveBounds:!0});m.value=()=>setTimeout(()=>location.reload()),a.on("render",()=>{b.setGlsl(a),a.setUniform("time",e.value)}),p.value=()=>{a.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),S("pointerup",v),(a,o)=>(d(),x($,null,{options:s(()=>[i(A,{label:"Equation:"},{default:s(()=>[i(N,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=g=>n.value=g)},null,8,["modelValue"]),m.value?(d(),x(h,{key:0,style:{"white-space":"pre"},onClick:m.value},{default:s(()=>[U]),_:1},8,["onClick"])):C("",!0)]),_:1}),i(L,{sliders:T(b)},null,8,["sliders"])]),buttons:s(()=>[p.value?(d(),x(h,{key:0,onClick:p.value},{default:s(()=>[X]),_:1},8,["onClick"])):C("",!0)]),indicator:s(()=>[i(R,{style:{width:"100%","align-items":"center"}},{default:s(()=>[_("progress",{ref_key:"progress",ref:r,class:"progress",value:e.value,max:"1",onPointerdown:v,onPointermove:v,onTouchmove:B},null,40,j),_("span",{class:"play",onClick:o[1]||(o[1]=g=>e.value===1?E():w())},"\u25B6")]),_:1})]),default:s(()=>[_("canvas",{ref_key:"canvas",ref:f},null,512)]),_:1}))}});var ue=D(G,[["__scopeId","data-v-4ca0406c"]]);export{ue as default};
