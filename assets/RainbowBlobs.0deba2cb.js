import{d as b,k as a,I as C,a0 as w,c as m,w as o,ad as h,o as u,b as s,u as k,m as g,a as N,e as S}from"./index.f235fda5.js";import{b as V}from"./BookmarkIcon.8ac6d5c6.js";import{u as d}from"./ColorSliders.871ed5e9.js";import{F as B}from"./FullscreenDisplay.6f790d1d.js";import{I as p}from"./InlineCheckboxField.369ef4e0.js";import{L as f}from"./Labeled.e5ea23b1.js";import{s as y}from"./useOption.dece71b1.js";import{M as F}from"./MovableCanvas2d.8237998d.js";import"./InlineRangeField.6f304087.js";import"./CoordinateCanvas2d.0c8ea8ee.js";import"./WebGlCanvas.7eac4bc0.js";const I=S(" Reset Position "),$=b({__name:"RainbowBlobs",setup(D){const c=d(),t=a(!1);y("darkness",t);const n=a(!1);y("split",n);const _=`
  uniform float time;
  uniform bool darkness;
  uniform bool split;

  ${d.toString({addDarkness:`
if (darkness) {
  hsv.y = v > 0.0 ? 1.0 - v : 1.0;
  hsv.z = v < 0.0 ? (split ? -v : 1.0 - -v) : 1.0;
}`})}

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  vec3 palette(float i, float v) {
    if (split) {
      if (v > 0.5 && i < 0.5) i += 0.5;
      else if (v < 0.5 && i > 0.5) i -= 0.5;
    }

    return use_color_sliders(i);
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
  `,l=a(),i=a();let x=Math.random()*10006;return C(()=>{if(!l.value)return;const e=new F(l.value,{fragmentString:_,saveBounds:!0});e.on("render",()=>{e.setUniformOfInt("darkness",[t.value]),e.setUniformOfInt("split",[n.value]),e.setUniform("time",x),c.setGlsl(e)}),i.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})},w(()=>x+=.01)}),(e,r)=>{const z=h("ColorSliders");return u(),m(B,null,{options:o(()=>[s(z,{sliders:k(c)},null,8,["sliders"]),s(f,{label:"Darkness Effect?"},{default:o(()=>[s(p,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v)},null,8,["modelValue"])]),_:1}),s(f,{label:"Split Effect?"},{default:o(()=>[s(p,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=v=>n.value=v)},null,8,["modelValue"])]),_:1})]),buttons:o(()=>[i.value?(u(),m(V,{key:0,onClick:i.value},{default:o(()=>[I]),_:1},8,["onClick"])):g("",!0)]),default:o(()=>[N("canvas",{ref_key:"canvas",ref:l},null,512)]),_:1})}}});export{$ as default};
