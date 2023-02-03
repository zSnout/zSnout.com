import{u as m}from"./index.dlnn8pzg.js";import{F as f}from"./FullscreenDisplay.od9apf4f.js";import{I as u}from"./Incrementable.4buzwvct.js";import{L as p}from"./Labeled.59ihovi6.js";import{s as c}from"./useOption.1pf10ib0.js";import{M as d}from"./MovableCanvas2d.4z89ub4m.js";import{l as v,r as g,o as x,x as b,C as _,D as t,F as n,u as h,i as y,a9 as i}from"./runtime-core.esm-bundler.47vl3tei.js";import"./main.200onzgm.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./InlineField.sq5fmr9m.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./WebGlCanvas.5wwm3cvm.js";const C=i("a",{href:"https://google.com/search?q=ulam+spiral",rel:"noreferrer",target:"_blank"}," Click for more information about the Ulam Spiral. ",-1),O=v({__name:"ulam-spiral",setup(k){const e=m(0,0,1/0);c("shift",e);const s=`
  uniform float shift;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  bool is_prime(float number) {
    float max = sqrt(number);

    for (float i = 2.0; i < 10000000.0; i++) {
      if (i > max) break;
      if (mod(number, i) == 0.0) return false;
    }

    return true;
  }

  vec3 color_for(float number) {
    if (is_prime(number)) {
      return vec3(0.0);
    } else {
      return vec3(1.0);
    }

    return hsv2rgb(
      vec3(
        number / 20.0,
        1.0,
        1.0
      )
    );
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    float x = floor(pos.x);
    float y = floor(pos.y);
    float ring = max(abs(x + 0.5) + 0.5, abs(y + 0.5) + 0.5);
    float prev = 2.0 * (ring - 1.0) * 2.0 * (ring - 1.0) + shift; // end of previous ring
    float adj = 2.0 * ring - 1.0;
    float number;

    if (x == -ring && y < ring - 1.0) {
      // left edge
      number = -y + prev + ring - 1.0;
    } else if (y == -ring) {
      // bottom edge
      number = x + prev + ring + adj;
    } else if (x == ring - 1.0) {
      // right edge
      number = y + prev + ring + 2.0 * adj;
    } else {
      // top edge
      number = -x + prev + ring - 1.0 + 3.0 * adj;
    }

    gl_FragColor = vec4(color_for(number), 1.0);
  }
  `,a=g();return x(()=>{if(!a.value)return;const r=Math.min(innerWidth,innerHeight)/8,o=new d(a.value,{fragmentString:s,saveBounds:!0,bounds:{xStart:-r,xEnd:r,yStart:-r,yEnd:r}});o.on("render",()=>{o.setUniform("shift",e.value)})}),(r,o)=>(b(),_(f,null,{options:t(()=>[n(p,{label:"Spiral Shift"},{default:t(()=>[n(u,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=l=>y(e)?e.value=l:null)},null,8,["modelValue"])]),_:1})]),help:t(()=>[C]),default:t(()=>[i("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});export{O as default};
