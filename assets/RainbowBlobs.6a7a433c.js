import{d as _,k as a,I as g,a0 as C,c as y,w as l,o as z,b as o,m as V,a as h,e as k}from"./index.a25085ae.js";import{b as q}from"./BookmarkIcon.41f4f1ab.js";import{F as N}from"./FullscreenDisplay.81fca273.js";import{I as b}from"./InlineCheckboxField.f33214df.js";import{I as f}from"./InlineRangeField.46739be6.js";import{L as n}from"./Labeled.8165d8b1.js";import{s as r}from"./useOption.9418d714.js";import{M as U}from"./MovableCanvas2d.3bccbafa.js";import"./CoordinateCanvas2d.ee0a140b.js";import"./WebGlCanvas.effdf53a.js";const O=k(" Reset Position "),L=_({__name:"RainbowBlobs",setup(I){const v=a(0);r("colorOffset",v);const c=a(1);r("repetition",c);const i=a(1);r("spectrum",i);const x=a(!1);r("darkness",x);const m=a(!1);r("split",m);const w=`
  uniform float colorOffset;
  uniform float repetition;
  uniform float spectrum;
  uniform float time;
  uniform bool darkness;
  uniform bool split;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec3 palette(float i, float v) {
    if (split) {
      if (v > 0.5 && i < 0.5) i += 0.5;
      else if (v < 0.5 && i > 0.5) i -= 0.5;
    }

    float hue = mod(repetition * i, 1.0);

    vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);

    if (darkness) {
      hsv.y = v > 0.0 ? 1.0 - v : 1.0;
      hsv.z = v < 0.0 ? (split ? -v : 1.0 - -v) : 1.0;
    }

    hsv.x = mod(hsv.x + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec4 permute(vec4 x) {
    return mod((34.0 * x + 1.0) * x, 289.0);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
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
    vec4 p = permute(
      permute(
        permute(
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
    vec4 norm = taylorInvSqrt(
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

  float noise(vec3 v) {
    return (snoise(v) + 1.0) / 2.0;
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    float n = noise(vec3(pos.x, pos.y, time));
    float v = snoise(vec3(time, pos.x, pos.y));

    gl_FragColor = vec4(palette(n, v), 1.0);
  }
  `,u=a(),p=a();let d=Math.random()*10006;return g(()=>{if(!u.value)return;const t=new U(u.value,{fragmentString:w,saveBounds:!0});t.on("render",()=>{t.setUniform("colorOffset",v.value),t.setUniform("repetition",c.value),t.setUniform("spectrum",i.value),t.setUniformOfInt("darkness",[x.value]),t.setUniformOfInt("split",[m.value]),t.setUniform("time",d)}),p.value=()=>{t.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})},C(()=>d+=.01)}),(t,e)=>(z(),y(N,null,{options:l(()=>[o(n,{label:"Color Offset:"},{default:l(()=>[o(f,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),o(n,{label:"Color Repetition:"},{default:l(()=>[o(f,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=s=>c.value=s),max:10,min:1,step:"any"},null,8,["modelValue"])]),_:1}),o(n,{label:"Color Spectrum:"},{default:l(()=>[o(f,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=s=>i.value=s),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),o(n,{label:"Darkness Effect?"},{default:l(()=>[o(b,{modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=s=>x.value=s)},null,8,["modelValue"])]),_:1}),o(n,{label:"Split Effect?"},{default:l(()=>[o(b,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=s=>m.value=s)},null,8,["modelValue"])]),_:1})]),buttons:l(()=>[p.value?(z(),y(q,{key:0,onClick:p.value},{default:l(()=>[O]),_:1},8,["onClick"])):V("",!0)]),default:l(()=>[h("canvas",{ref_key:"canvas",ref:u},null,512)]),_:1}))}});export{L as default};
