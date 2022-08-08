import{d as h,o as c,c as p,w as o,n as H,f as D,p as K,g as L,a as d,b as l,e as $,t as R,a4 as q,k as f,A as Q,G as j,u as k,x as M,m as y}from"./index.50ca0d9a.js";import{b as F,_ as P,H as J,F as W}from"./BookmarkIcon.a9c3c2f1.js";import{u as U,_ as X}from"./ColorSliders.a219db9a.js";import{D as Y}from"./Dropdown.cd1d17bb.js";import{F as Z}from"./FullscreenDisplay.204b00b9.js";import{I as ee}from"./InlineField.4c42435f.js";import{I}from"./InlineCheckboxField.d52c5a53.js";import{L as _}from"./Labeled.c8b9026f.js";import{g as te}from"./useGlsl.b990d597.js";import{s as v}from"./useOption.3e8a62f9.js";import{M as le}from"./MovableCanvas2d.fe79799f.js";import"./InlineRangeField.21114ddd.js";import"./CoordinateCanvas2d.9cc8689b.js";import"./WebGlCanvas.ae60b118.js";const E=h({__name:"IconButton",setup(t){return(a,u)=>(c(),p(F,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:o(()=>[H(a.$slots,"default")]),_:3}))}});const oe={},ne=t=>(K("data-v-0298e8c4"),t=t(),L(),t),ae={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},re=ne(()=>d("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),ie=[re];function se(t,a){return c(),D("svg",ae,ie)}var ue=P(oe,[["render",se],["__scopeId","data-v-0298e8c4"]]);const ce={},de=t=>(K("data-v-079820ed"),t=t(),L(),t),me={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},fe=de(()=>d("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),pe=[fe];function ve(t,a){return c(),D("svg",me,pe)}var _e=P(ce,[["render",ve],["__scopeId","data-v-079820ed"]]);const ge=h({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(a,u)=>(c(),p(ee,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":u[0]||(u[0]=r=>a.$emit("update:modelValue",+r))},null,8,["autocomplete","model-value","placeholder"]))}});const be=h({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function a({target:u}){var r;(r=u.querySelector("input"))==null||r.focus()}return(u,r)=>(c(),p(J,null,{default:o(()=>[l(E,{onClick:r[0]||(r[0]=m=>u.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:o(()=>[l(ue)]),_:1}),d("p",{class:"label",onClick:a},[$(R(t.label)+" ",1),l(ge,{"model-value":t.modelValue,"onUpdate:modelValue":r[1]||(r[1]=m=>u.$emit("update:modelValue",m))},null,8,["model-value"])]),l(E,{onClick:r[2]||(r[2]=m=>u.$emit("update:modelValue",t.increment(t.modelValue)))},{default:o(()=>[l(_e)]),_:1})]),_:1}))}});var B=P(be,[["__scopeId","data-v-6b56d56b"]]);const xe=$(" Apply "),ze=d("option",{value:"simple"},"Simple",-1),ye=d("option",{value:"gradient"},"Gradient",-1),he=d("option",{value:"rotation"},"Rotation",-1),Ve=d("option",{value:"trig"},"Trigonometric",-1),Ce=d("option",{value:"exp"},"Exponential",-1),we=d("option",{value:"newton"},"Newton's Method",-1),ke=$(" Reset Position "),Ae=h({__name:"FractalExplorer",setup(t){const a=q(100,5,1e3);v("detail",a);function u(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function r(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const m=q(2,.1,1/0);v("limit",m);function N(e){return e<=2?Math.ceil(10*(e-.1))/10:Math.ceil(e-1)}function A(e){return e<2?~~(10*(e+.1))/10:~~(e+1)}const g=f("z^2+c");v("equation",g);const i=f("simple");v("theme",i);const O={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},T=Q(()=>O[i.value]),S=U(),b=f(!1);v("darkness",b);const x=f(!1);v("split",x);const z=f(!1);v("altColors",z);const G=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;

  ${U.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

  const float maxIterations = 1000.0;
  const float pi = 3.1415926535;

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

  vec3 simplePalette(float i) {
    return use_color_sliders(0.02 * i);
  }

  vec3 gradientPalette(vec3 sz, float i) {
    sz = abs(sz) / i;

    vec3 rgb = use_color_sliders(sin(abs(sz * 5.0)) * 0.45 + 0.5);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 rotationPalette(float t, float i) {
    vec3 rgb = use_color_sliders(2.0 * t / pi);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 newtonPalette(float t, float i) {
    vec3 rgb = use_color_sliders(t / pi);
    if (darkness) rgb *= mod(0.02 * i, 1.0);

    return rgb;
  }

  vec3 trigPalette(float i) {
    float t = i * 0.1 * repetition;

    float n1, n2;
    if (split) {
      n1 = 1.0 / sin(t) * 0.5 + 0.5;
      n2 = 1.0 / tan(t) * 0.5 + 0.5;
    } else {
      n1 = sin(t) * 0.5 + 0.5;
      n2 = cos(t) * 0.5 + 0.5;
    }

    vec3 rgb;
    if (altColors) {
      rgb = vec3(n2, n2, n1);
    } else {
      rgb = vec3(n1, split ? 0.5 : 1.0, n2);
    }

    rgb = use_color_sliders(rgb, false);
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 expPalette(float i) {
    float t = 0.1 * i * repetition;

    float n1, n2;
    if (split) {
      n1 = 1.0 / log(t);
      n2 = 1.0 / exp(t);
    } else {
      n1 = log(t);
      n2 = exp(t);
    }

    n1 = mod(n1, 1.0);
    n2 = mod(n2, 1.0);

    vec3 rgb;
    if (altColors) {
      rgb = vec3(n2, n2, n1);
    } else {
      rgb = vec3(n1, split ? 0.5 : 1.0, n2);
    }

    rgb = use_color_sliders(rgb, false);
    if (darkness) rgb *= mod(i * 0.02, 1.0);

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

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (theme == 4 || theme == 1 && split) z = pos;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = {{EQ}};
      iter++;

      if (length(z) > limit) {
        if (theme == 1) {
          gl_FragColor = vec4(simplePalette(iter), 1.0);
          return;
        } else if (theme == 2) {
          gl_FragColor = vec4(gradientPalette(sz, iter), 1.0);
          return;
        } else if (theme == 3) {
          gl_FragColor = vec4(rotationPalette(atan(sz.x, sz.y), iter), 1.0);
          return;
        } else if (theme == 5) {
          gl_FragColor = vec4(trigPalette(iter), 1.0);
          return;
        } else if (theme == 6) {
          gl_FragColor = vec4(expPalette(iter), 1.0);
          return;
        }
      }

      if (theme == 4 && length(nz) > limit) iter--;

      nz += z;
      sz.x += dot(z - pz, pz - ppz);
      sz.y += dot(z - pz, z - pz);
      sz.z += dot(z - ppz, z - ppz);

      if (split) {
        sz += sign(vec3(float(z), float(pz), float(ppz)));
      }

      if (theme == 3 && !split) {
        sz -= sign(vec3(float(z), float(pz), float(ppz)));
      }
    }

    if (theme == 2) {
      gl_FragColor = vec4(gradientPalette(sz, iter), 1.0);
    } else if (theme == 3) {
      gl_FragColor = vec4(rotationPalette(pi - atan(sz.y / sz.x), detail), 1.0);
    } else if (theme == 4) {
      if (altColors) z = nz;
      gl_FragColor = vec4(newtonPalette(atan(z.y / z.x), iter), 1.0);
    } else gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
  `,V=f(),C=f(),w=f();return j(()=>{if(!V.value)return;const e=new le(V.value,{fragmentString:G.replace("{{EQ}}",te(g.value)),saveBounds:!0});w.value=()=>setTimeout(()=>location.reload()),e.on("render",()=>{e.setUniform("detail",[a.value]),e.setUniform("limit",m.value),e.setUniformOfInt("theme",[T.value]),e.setUniformOfInt("darkness",[b.value]),e.setUniformOfInt("split",[x.value]),e.setUniformOfInt("altColors",[z.value]),S.setGlsl(e)}),C.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,n)=>(c(),p(Z,null,{options:o(()=>[l(B,{modelValue:k(a),"onUpdate:modelValue":n[0]||(n[0]=s=>M(a)?a.value=s:null),decrement:u,increment:r,label:"Detail Level:"},null,8,["modelValue"]),l(B,{modelValue:k(m),"onUpdate:modelValue":n[1]||(n[1]=s=>M(m)?m.value=s:null),decrement:N,increment:A,label:"Fractal Size:"},null,8,["modelValue"]),l(_,{label:"Equation:"},{default:o(()=>[l(W,{modelValue:g.value,"onUpdate:modelValue":n[2]||(n[2]=s=>g.value=s)},null,8,["modelValue"]),w.value?(c(),p(F,{key:0,style:{"white-space":"pre"},onClick:w.value},{default:o(()=>[xe]),_:1},8,["onClick"])):y("",!0)]),_:1}),l(_,{label:"Theme:"},{default:o(()=>[l(Y,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=s=>i.value=s)},{default:o(()=>[ze,ye,he,Ve,Ce,we]),_:1},8,["modelValue"])]),_:1}),l(X,{sliders:k(S)},null,8,["sliders"]),l(_,{label:"Darkness Effect?"},{default:o(()=>[l(I,{modelValue:b.value,"onUpdate:modelValue":n[4]||(n[4]=s=>b.value=s)},null,8,["modelValue"])]),_:1}),i.value!=="newton"?(c(),p(_,{key:0,label:i.value==="simple"?"Mimic Newton's Method?":i.value==="rotation"?"Alternate Split?":i.value==="trig"?"Alternate Trig Functions?":i.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:o(()=>[l(I,{modelValue:x.value,"onUpdate:modelValue":n[5]||(n[5]=s=>x.value=s)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),i.value==="newton"||i.value==="trig"||i.value==="exp"?(c(),p(_,{key:1,label:i.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:o(()=>[l(I,{modelValue:z.value,"onUpdate:modelValue":n[6]||(n[6]=s=>z.value=s)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0)]),buttons:o(()=>[C.value?(c(),p(F,{key:0,onClick:C.value},{default:o(()=>[ke]),_:1},8,["onClick"])):y("",!0)]),default:o(()=>[d("canvas",{ref_key:"canvas",ref:V},null,512)]),_:1}))}});export{Ae as default};
