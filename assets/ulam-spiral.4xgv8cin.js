import{u as l}from"./index.dlnn8pzg.js";import{F as f}from"./FullscreenDisplay.75rpamat.js";import{I as m}from"./Incrementable.4buzwvct.js";import{L as u}from"./Labeled.59ihovi6.js";import{s as p}from"./useOption.1pf10ib0.js";import{M as c}from"./MovableCanvas2d.4z89ub4m.js";import{d,r as v,j as g,c as b,w as a,o as x,e as n,u as _,i as h,a as i}from"./index.xh0zaea0.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./InlineField.sq5fmr9m.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./WebGlCanvas.5wwm3cvm.js";const y=i("a",{href:"https://google.com/search?q=ulam+spiral",rel:"noreferrer",target:"_blank"}," Click for more information about the Ulam Spiral. ",-1),C=`
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
  `,D=d({__name:"ulam-spiral",setup(k){const e=l(0,0,1/0);p("shift",e);const t=v();return g(()=>{if(!t.value)return;const r=Math.min(innerWidth,innerHeight)/8,o=new c(t.value,{fragmentString:C,saveBounds:!0,bounds:{xStart:-r,xEnd:r,yStart:-r,yEnd:r}});o.on("render",()=>{o.setUniform("shift",e.value)})}),(r,o)=>(x(),b(f,null,{options:a(()=>[n(u,{label:"Spiral Shift"},{default:a(()=>[n(m,{modelValue:_(e),"onUpdate:modelValue":o[0]||(o[0]=s=>h(e)?e.value=s:null)},null,8,["modelValue"])]),_:1})]),help:a(()=>[y]),default:a(()=>[i("canvas",{ref_key:"canvas",ref:t},null,512)]),_:1}))}});export{D as default};
