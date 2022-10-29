import{u as l}from"./index.55wflef3.js";import{F as f}from"./FullscreenDisplay.hao6npqe.js";import{I as m}from"./Incrementable.44806nyw.js";import{L as u}from"./Labeled.29mn7ohi.js";import{s as p}from"./useOption.ujvp9hcq.js";import{M as c}from"./MovableCanvas2d.41imxryi.js";import{d,q as v,Y as g,o as x,c as b,w as t,e as a,u as _,M as y,a as h}from"./index.3672xjxd.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./InlineField.1bs7kao1.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./WebGlCanvas.1rb17qef.js";const U=d({__name:"ulam-spiral",setup(w){const e=l(0,0,1/0);p("shift",e);const i=`
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
  `,n=v();return g(()=>{if(!n.value)return;const r=Math.min(innerWidth,innerHeight)/8,o=new c(n.value,{fragmentString:i,saveBounds:!0,bounds:{xStart:-r,xEnd:r,yStart:-r,yEnd:r}});o.on("render",()=>{o.setUniform("shift",e.value)})}),(r,o)=>(x(),b(f,null,{options:t(()=>[a(u,{label:"Spiral Shift"},{default:t(()=>[a(m,{modelValue:_(e),"onUpdate:modelValue":o[0]||(o[0]=s=>y(e)?e.value=s:null)},null,8,["modelValue"])]),_:1})]),default:t(()=>[h("canvas",{ref_key:"canvas",ref:n},null,512)]),_:1}))}});export{U as default};
