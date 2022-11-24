import{u as f}from"./index.55wflef3.js";import{F as m}from"./FullscreenDisplay.hao6npqe.js";import{I as u}from"./Incrementable.44806nyw.js";import{L as p}from"./Labeled.29mn7ohi.js";import{s as c}from"./useOption.ujvp9hcq.js";import{M as d}from"./MovableCanvas2d.41imxryi.js";import{d as v,q as g,Y as b,o as x,c as _,w as a,e as n,u as h,M as y,a as i}from"./index.v5ospewp.js";import"./BookmarkIcon.1thszj4g.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./InlineField.1bs7kao1.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./WebGlCanvas.1rb17qef.js";const C=i("a",{href:"https://google.com/search?q=ulam+spiral",rel:"noreferrer",target:"_blank"}," Click for more information about the Ulam Spiral. ",-1),D=v({__name:"ulam-spiral",setup(k){const e=f(0,0,1/0);c("shift",e);const s=`
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
  `,t=g();return b(()=>{if(!t.value)return;const r=Math.min(innerWidth,innerHeight)/8,o=new d(t.value,{fragmentString:s,saveBounds:!0,bounds:{xStart:-r,xEnd:r,yStart:-r,yEnd:r}});o.on("render",()=>{o.setUniform("shift",e.value)})}),(r,o)=>(x(),_(m,null,{options:a(()=>[n(p,{label:"Spiral Shift"},{default:a(()=>[n(u,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=l=>y(e)?e.value=l:null)},null,8,["modelValue"])]),_:1})]),help:a(()=>[C]),default:a(()=>[i("canvas",{ref_key:"canvas",ref:t},null,512)]),_:1}))}});export{D as default};
