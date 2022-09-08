import{q as a,aG as z,d as b,o as g,h as w,b as r,w as v,u as t,aH as n,F as V}from"./index.3a6d11oo.js";import{s as c}from"./useOption.ujvp9hcq.js";import{I as i}from"./InlineRangeField.4poaov81.js";import{L as m}from"./Labeled.29mn7ohi.js";function _(){const o=a(0);c("colorOffset",o);const u=a(0);c("grayscale",u);const e=a(1);c("repetition",e);const x=a(0);c("noise",x);const f=a(0);c("separation",f);const d=a(1);c("spectrum",d);const p=a(0);c("overcolor",p);const h=a(Math.random()*1e4);return z(()=>h.value+=.01),{colorOffset:o,grayscale:u,noiseLevel:x,overcolor:p,repetition:e,separation:f,spectrum:d,time:h,setGlsl:U}}(o=>{function u(e){return`
uniform float colorOffset;
uniform float grayscale_amount;
uniform float noiseLevel;
uniform float overcolor_amount;
uniform float repetition;
uniform float spectrum;
uniform float separation;
uniform float c_time;

vec3 c_rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 c_hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec4 c_permute(vec4 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec4 c_taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float c_snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  // x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = c_permute(
    c_permute(
      c_permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0)
      ) + i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  // Gradients
  // N*N points uniformly over a square, mapped onto an octahedron.
  float n_ = 1.0 / 7.0; // N = 7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); // mod(p, N * N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j, N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm = c_taylorInvSqrt(
    vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
  );

  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(
    0.6 -
      vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0
  );

  m = m * m;
  return 42.0 * dot(
    m*m, vec4(dot(p0, x0), dot(p1,x1), dot(p2, x2), dot(p3, x3))
  );
}

float c_noise(vec3 v) {
  return (c_snoise(v) + 1.0) / 2.0;
}

vec3 grayscale(vec3 hsv) {
  vec3 other = vec3(hsv.x, 0.0, hsv.z);

  if (hsv.y < grayscale_amount || hsv.z < grayscale_amount) {
    return vec3(hsv.x, 0.0, hsv.z);
  }

  return hsv;
}

vec3 overcolor(vec3 hsv) {
  vec3 other = vec3(hsv.x, 1.0, 1.0);

  if (hsv.y < grayscale_amount || hsv.z < grayscale_amount) {
    return vec3(hsv.x, 0.0, hsv.z);
  }

  return (1.0 - overcolor_amount) * hsv + overcolor_amount * other;
}

vec3 use_color_sliders(float i) {
  float hue = mod(repetition * i, 1.0);
  if (noiseLevel > 0.0) hue = mod(hue + noiseLevel * c_snoise(vec3(i, i, c_time)), 1.0);
  vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);
  if (separation > 0.0) hsv.x = hsv.x - mod(hsv.x, separation);
  hsv.x = mod(hsv.x + colorOffset, 1.0);

  ${(e==null?void 0:e.addDarkness)||""}

  if (overcolor_amount > 0.0) hsv = overcolor(hsv);
  else if (grayscale_amount > 0.0) hsv = grayscale(hsv);
  return c_hsv2rgb(hsv);
}

vec3 use_color_sliders(vec3 rgb) {
  vec3 hsv = c_rgb2hsv(rgb);
  float i = hsv.x;
  hsv.x = mod(hsv.x * repetition, 1.0);
  if (noiseLevel > 0.0) hsv.x = mod(hsv.x + noiseLevel * c_snoise(vec3(i, i, c_time)), 1.0);
  hsv.x = 1.0 - hsv.x * spectrum;
  if (separation > 0.0) hsv.x = hsv.x - mod(hsv.x, separation);
  hsv.x = mod(hsv.x + colorOffset, 1.0);

  ${(e==null?void 0:e.addDarkness)||""}

  if (overcolor_amount > 0.0) hsv = overcolor(hsv);
  else if (grayscale_amount > 0.0) hsv = grayscale(hsv);
  return c_hsv2rgb(hsv);
}

vec3 use_color_sliders(vec3 rgb, bool no_repetition) {
  vec3 hsv = c_rgb2hsv(rgb);
  float i = hsv.x;
  hsv.x = 1.0 - hsv.x * spectrum;
  if (noiseLevel > 0.0) hsv.x = mod(hsv.x + noiseLevel * c_snoise(vec3(i, i, c_time)), 1.0);
  if (separation > 0.0) hsv.x = hsv.x - mod(hsv.x, separation);
  hsv.x = mod(hsv.x + colorOffset, 1.0);

  ${(e==null?void 0:e.addDarkness)||""}

  if (overcolor_amount > 0.0) hsv = overcolor(hsv);
  else if (grayscale_amount > 0.0) hsv = grayscale(hsv);
  return c_hsv2rgb(hsv);
}
      `}o.toString=u})(_||(_={}));function U(o){o.setUniform("colorOffset",this.colorOffset.value),o.setUniform("grayscale_amount",this.grayscale.value),o.setUniform("noiseLevel",this.noiseLevel.value),o.setUniform("repetition",this.repetition.value),o.setUniform("separation",this.separation.value),o.setUniform("overcolor_amount",this.overcolor.value),o.setUniform("spectrum",this.spectrum.value),o.setUniform("c_time",this.time.value)}const N=b({__name:"ColorSliders",props:{sliders:null},setup(o){const{sliders:u}=o,{colorOffset:e,grayscale:x,noiseLevel:f,overcolor:d,repetition:p,separation:h,spectrum:y}=u;return(C,s)=>(g(),w(V,null,[r(m,{label:"Color Offset:"},{default:v(()=>[r(i,{modelValue:t(e),"onUpdate:modelValue":s[0]||(s[0]=l=>n(e)?e.value=l:null),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),r(m,{label:"Color Repetition:"},{default:v(()=>[r(i,{modelValue:t(p),"onUpdate:modelValue":s[1]||(s[1]=l=>n(p)?p.value=l:null),max:10,min:1,step:"any"},null,8,["modelValue"])]),_:1}),r(m,{label:"Color Spectrum:"},{default:v(()=>[r(i,{modelValue:t(y),"onUpdate:modelValue":s[2]||(s[2]=l=>n(y)?y.value=l:null),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),r(m,{label:"Separation:"},{default:v(()=>[r(i,{modelValue:t(h),"onUpdate:modelValue":s[3]||(s[3]=l=>n(h)?h.value=l:null),max:.5,min:0,step:"any"},null,8,["modelValue","max"])]),_:1}),r(m,{label:"Randomness:"},{default:v(()=>[r(i,{modelValue:t(f),"onUpdate:modelValue":s[4]||(s[4]=l=>n(f)?f.value=l:null),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),r(m,{label:"Grayscale:"},{default:v(()=>[r(i,{modelValue:t(x),"onUpdate:modelValue":s[5]||(s[5]=l=>n(x)?x.value=l:null),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),r(m,{label:"Overcoloring:"},{default:v(()=>[r(i,{modelValue:t(d),"onUpdate:modelValue":s[6]||(s[6]=l=>n(d)?d.value=l:null),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1})],64))}});export{N as _,_ as u};
