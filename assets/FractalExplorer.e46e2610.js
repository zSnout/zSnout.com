import{d as _,o as m,c as g,w as n,n as G,f as q,p as N,g as R,a as p,ar as j,b as l,e as M,t as J,aC as E,k as d,ae as W,B as X,u as B,x as D,m as w}from"./index.19cf4057.js";import{b as O,_ as k,H as Y,F as Z}from"./BookmarkIcon.bf41e31c.js";import{D as ee}from"./Dropdown.880b9fe0.js";import{F as te}from"./FullscreenDisplay.1f106124.js";import{I as P}from"./InlineCheckboxField.84fa2878.js";import{I as S}from"./InlineRangeField.0428e335.js";import{L as v}from"./Labeled.d0b6aa80.js";import{g as le}from"./useGlsl.b990d597.js";import{s as f}from"./useOption.5bf65870.js";import{M as oe}from"./MovableCanvas2d.96113ccc.js";import"./CoordinateCanvas2d.3f1c2d5c.js";import"./WebGlCanvas.12f6e669.js";const K=_({__name:"IconButton",setup(e){return(i,s)=>(m(),g(O,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:n(()=>[G(i.$slots,"default")]),_:3}))}});const ae={},ne=e=>(N("data-v-0298e8c4"),e=e(),R(),e),re={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ie=ne(()=>p("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),se=[ie];function ue(e,i){return m(),q("svg",re,se)}var ce=k(ae,[["render",ue],["__scopeId","data-v-0298e8c4"]]);const de={},me=e=>(N("data-v-079820ed"),e=e(),R(),e),fe={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},pe=me(()=>p("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),ve=[pe];function ge(e,i){return m(),q("svg",fe,ve)}var _e=k(de,[["render",ge],["__scopeId","data-v-079820ed"]]);const be=["autocomplete","placeholder","type","value"],xe=_({__name:"InlineField",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(i,s)=>{var r,c;return m(),q("input",{class:"field",autocomplete:(r=e.autocomplete)!=null?r:"off",placeholder:e.placeholder,style:j({width:e.modelValue.length+2+"ch"}),type:(c=e.type)!=null?c:"text",value:e.modelValue,onInput:s[0]||(s[0]=I=>i.$emit("update:modelValue",I.target.value))},null,44,be)}}});var he=k(xe,[["__scopeId","data-v-3d0155ac"]]);const ye=_({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(i,s)=>(m(),g(he,{autocomplete:e.autocomplete,"model-value":""+e.modelValue,placeholder:e.placeholder,type:"number","onUpdate:modelValue":s[0]||(s[0]=r=>i.$emit("update:modelValue",+r))},null,8,["autocomplete","model-value","placeholder"]))}});const ze=_({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:e=>e-1},increment:{type:Function,default:e=>e+1},label:null},emits:["update:modelValue"],setup(e){function i({target:s}){var r;(r=s.querySelector("input"))==null||r.focus()}return(s,r)=>(m(),g(Y,null,{default:n(()=>[l(K,{onClick:r[0]||(r[0]=c=>s.$emit("update:modelValue",e.decrement(e.modelValue)))},{default:n(()=>[l(ce)]),_:1}),p("p",{class:"label",onClick:i},[M(J(e.label)+" ",1),l(ye,{"model-value":e.modelValue,"onUpdate:modelValue":r[1]||(r[1]=c=>s.$emit("update:modelValue",c))},null,8,["model-value"])]),l(K,{onClick:r[2]||(r[2]=c=>s.$emit("update:modelValue",e.increment(e.modelValue)))},{default:n(()=>[l(_e)]),_:1})]),_:1}))}});var L=k(ze,[["__scopeId","data-v-6b56d56b"]]);const Ve=M(" Apply "),Ce=p("option",{value:"simple"},"Simple",-1),we=p("option",{value:"gradient"},"Gradient",-1),ke=p("option",{value:"rotation"},"Rotation",-1),Ie=p("option",{value:"trig"},"Trigonometric",-1),Fe=p("option",{value:"exp"},"Exponential",-1),$e=p("option",{value:"newton"},"Newton's Method",-1),Ue=M(" Reset Position "),Te=_({__name:"FractalExplorer",setup(e){const i=E(100,5,1e3);f("detail",i);function s(t){return t<=10?5:t<=25?5*Math.ceil((t-5)/5):t<=50?25:50*Math.ceil((t-50)/50)}function r(t){return t<10?10:t<25?5*~~((t+5)/5):t<50?50:50*~~((t+50)/50)}const c=E(2,.1,1/0);f("limit",c);function I(t){return t<=2?Math.ceil(10*(t-.1))/10:Math.ceil(t-1)}function T(t){return t<2?~~(10*(t+.1))/10:~~(t+1)}const b=d("z^2+c");f("equation",b);const u=d("simple");f("theme",u);const A={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},H=W(()=>A[u.value]),x=d(0);f("colorOffset",x);const h=d(1);f("repetition",h);const y=d(1);f("spectrum",y);const z=d(!1);f("darkness",z);const V=d(!1);f("split",V);const C=d(!1);f("altColors",C);const Q=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform float colorOffset;
  uniform float repetition;
  uniform float spectrum;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;

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
    float hue = mod(0.02 * repetition * i, 1.0);
    vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);

    if (darkness) hsv.z = mod(0.02 * i, 1.0);
    hsv.x = mod(hsv.x + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec3 gradientPalette(vec3 sz, float i) {
    sz = abs(sz) / i * repetition;

    vec3 hsv = rgb2hsv(sin(abs(sz * 5.0)) * 0.45 + 0.5);
    vec3 rgb = hsv2rgb(vec3(hsv.x * spectrum + colorOffset, hsv.yz));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 rotationPalette(float t, float i) {
    float hue = mod(2.0 * t / pi * repetition, 1.0);

    vec3 rgb = hsv2rgb(vec3(1.0 - hue * spectrum + colorOffset, 1.0, 1.0));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 newtonPalette(float t, float i) {
    float hue = mod(t / pi * repetition, 1.0) * spectrum;
    hue = mod(hue + colorOffset, 1.0);

    vec3 rgb = hsv2rgb(vec3(1.0 - hue, 1.0, 1.0));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

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
      rgb = vec3(n2, n1, n2);
    } else {
      rgb = vec3(n1, n2, split ? 0.5 : 1.0);
    }

    if (darkness) rgb *= mod(i * 0.02, 1.0);

    vec3 hsv = rgb2hsv(rgb);
    hsv.x = mod(hsv.x * spectrum + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec3 expPalette(float i) {
    float t = i * 0.1 * repetition;

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
      rgb = vec3(n2, n1, n2);
    } else {
      rgb = vec3(n1, n2, split ? 0.5 : 1.0);
    }

    if (darkness) rgb *= mod(i * 0.02, 1.0);

    vec3 hsv = rgb2hsv(rgb);
    hsv.x = mod(hsv.x * spectrum + colorOffset, 1.0);

    return hsv2rgb(hsv);
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
  `,F=d(),$=d(),U=d();return X(()=>{if(!F.value)return;const t=new oe(F.value,{fragmentString:Q.replace("{{EQ}}",le(b.value)),saveBounds:!0});U.value=()=>setTimeout(()=>location.reload()),t.on("render",()=>{t.setUniform("detail",[i.value]),t.setUniform("limit",c.value),t.setUniformOfInt("theme",[H.value]),t.setUniform("colorOffset",x.value),t.setUniform("repetition",h.value),t.setUniform("spectrum",y.value),t.setUniformOfInt("darkness",[z.value]),t.setUniformOfInt("split",[V.value]),t.setUniformOfInt("altColors",[C.value])}),$.value=()=>{t.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(t,o)=>(m(),g(te,null,{options:n(()=>[l(L,{modelValue:B(i),"onUpdate:modelValue":o[0]||(o[0]=a=>D(i)?i.value=a:null),decrement:s,increment:r,label:"Detail Level:"},null,8,["modelValue"]),l(L,{modelValue:B(c),"onUpdate:modelValue":o[1]||(o[1]=a=>D(c)?c.value=a:null),decrement:I,increment:T,label:"Fractal Size:"},null,8,["modelValue"]),l(v,{label:"Equation:"},{default:n(()=>[l(Z,{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=a=>b.value=a)},null,8,["modelValue"]),U.value?(m(),g(O,{key:0,style:{"white-space":"pre"},onClick:U.value},{default:n(()=>[Ve]),_:1},8,["onClick"])):w("",!0)]),_:1}),l(v,{label:"Theme:"},{default:n(()=>[l(ee,{modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=a=>u.value=a)},{default:n(()=>[Ce,we,ke,Ie,Fe,$e]),_:1},8,["modelValue"])]),_:1}),l(v,{label:"Color Offset:"},{default:n(()=>[l(S,{modelValue:x.value,"onUpdate:modelValue":o[4]||(o[4]=a=>x.value=a),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),l(v,{label:"Color Repetition:"},{default:n(()=>[l(S,{modelValue:h.value,"onUpdate:modelValue":o[5]||(o[5]=a=>h.value=a),max:10,min:1,step:"any"},null,8,["modelValue"])]),_:1}),l(v,{label:"Color Spectrum:"},{default:n(()=>[l(S,{modelValue:y.value,"onUpdate:modelValue":o[6]||(o[6]=a=>y.value=a),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),l(v,{label:"Darkness Effect?"},{default:n(()=>[l(P,{modelValue:z.value,"onUpdate:modelValue":o[7]||(o[7]=a=>z.value=a)},null,8,["modelValue"])]),_:1}),u.value!=="newton"?(m(),g(v,{key:0,label:u.value==="simple"?"Mimic Newton's Method?":u.value==="rotation"?"Alternate Split?":u.value==="trig"?"Alternate Trig Functions?":u.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:n(()=>[l(P,{modelValue:V.value,"onUpdate:modelValue":o[8]||(o[8]=a=>V.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):w("",!0),u.value==="newton"||u.value==="trig"||u.value==="exp"?(m(),g(v,{key:1,label:u.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:n(()=>[l(P,{modelValue:C.value,"onUpdate:modelValue":o[9]||(o[9]=a=>C.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):w("",!0)]),buttons:n(()=>[$.value?(m(),g(O,{key:0,onClick:$.value},{default:n(()=>[Ue]),_:1},8,["onClick"])):w("",!0)]),default:n(()=>[p("canvas",{ref_key:"canvas",ref:F},null,512)]),_:1}))}});export{Te as default};
