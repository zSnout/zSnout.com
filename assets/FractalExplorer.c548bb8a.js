import{d as w,o as d,c as g,w as a,n as G,f as K,p as L,g as N,a as f,b as l,e as O,t as j,a4 as q,k as c,A as J,I as W,u as M,x as E,m as C}from"./index.a1310079.js";import{b as P,_ as S,H as X,F as Y}from"./BookmarkIcon.e05c9dfb.js";import{D as Z}from"./Dropdown.c9868fcf.js";import{F as ee}from"./FullscreenDisplay.6f4d90d7.js";import{I as te}from"./InlineField.9a075872.js";import{I as U}from"./InlineCheckboxField.364c26f5.js";import{I as $}from"./InlineRangeField.ccad712a.js";import{L as p}from"./Labeled.8d5cfbc4.js";import{g as le}from"./useGlsl.b990d597.js";import{s as m}from"./useOption.b09d55b1.js";import{M as oe}from"./MovableCanvas2d.928c3878.js";import"./CoordinateCanvas2d.5f5fdb64.js";import"./WebGlCanvas.bb7b2735.js";const B=w({__name:"IconButton",setup(t){return(r,u)=>(d(),g(P,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:a(()=>[G(r.$slots,"default")]),_:3}))}});const ne={},ae=t=>(L("data-v-0298e8c4"),t=t(),N(),t),re={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ie=ae(()=>f("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),se=[ie];function ue(t,r){return d(),K("svg",re,se)}var ce=S(ne,[["render",ue],["__scopeId","data-v-0298e8c4"]]);const me={},de=t=>(L("data-v-079820ed"),t=t(),N(),t),fe={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},ve=de(()=>f("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),pe=[ve];function ge(t,r){return d(),K("svg",fe,pe)}var _e=S(me,[["render",ge],["__scopeId","data-v-079820ed"]]);const be=w({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(r,u)=>(d(),g(te,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":u[0]||(u[0]=i=>r.$emit("update:modelValue",+i))},null,8,["autocomplete","model-value","placeholder"]))}});const xe=w({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function r({target:u}){var i;(i=u.querySelector("input"))==null||i.focus()}return(u,i)=>(d(),g(X,null,{default:a(()=>[l(B,{onClick:i[0]||(i[0]=v=>u.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:a(()=>[l(ce)]),_:1}),f("p",{class:"label",onClick:r},[O(j(t.label)+" ",1),l(be,{"model-value":t.modelValue,"onUpdate:modelValue":i[1]||(i[1]=v=>u.$emit("update:modelValue",v))},null,8,["model-value"])]),l(B,{onClick:i[2]||(i[2]=v=>u.$emit("update:modelValue",t.increment(t.modelValue)))},{default:a(()=>[l(_e)]),_:1})]),_:1}))}});var D=S(xe,[["__scopeId","data-v-6b56d56b"]]);const he=O(" Apply "),ze=f("option",{value:"simple"},"Simple",-1),ye=f("option",{value:"gradient"},"Gradient",-1),Ve=f("option",{value:"rotation"},"Rotation",-1),Ce=f("option",{value:"trig"},"Trigonometric",-1),we=f("option",{value:"exp"},"Exponential",-1),Ie=f("option",{value:"newton"},"Newton's Method",-1),ke=O(" Reset Position "),Ne=w({__name:"FractalExplorer",setup(t){const r=q(100,5,1e3);m("detail",r);function u(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function i(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const v=q(2,.1,1/0);m("limit",v);function A(e){return e<=2?Math.ceil(10*(e-.1))/10:Math.ceil(e-1)}function R(e){return e<2?~~(10*(e+.1))/10:~~(e+1)}const _=c("z^2+c");m("equation",_);const s=c("simple");m("theme",s);const T={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},H=J(()=>T[s.value]),b=c(0);m("colorOffset",b);const x=c(1);m("repetition",x);const h=c(1);m("spectrum",h);const z=c(!1);m("darkness",z);const y=c(!1);m("split",y);const V=c(!1);m("altColors",V);const Q=`
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
  `,I=c(),k=c(),F=c();return W(()=>{if(!I.value)return;const e=new oe(I.value,{fragmentString:Q.replace("{{EQ}}",le(_.value)),saveBounds:!0});F.value=()=>setTimeout(()=>location.reload()),e.on("render",()=>{e.setUniform("detail",[r.value]),e.setUniform("limit",v.value),e.setUniformOfInt("theme",[H.value]),e.setUniform("colorOffset",b.value),e.setUniform("repetition",x.value),e.setUniform("spectrum",h.value),e.setUniformOfInt("darkness",[z.value]),e.setUniformOfInt("split",[y.value]),e.setUniformOfInt("altColors",[V.value])}),k.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,o)=>(d(),g(ee,null,{options:a(()=>[l(D,{modelValue:M(r),"onUpdate:modelValue":o[0]||(o[0]=n=>E(r)?r.value=n:null),decrement:u,increment:i,label:"Detail Level:"},null,8,["modelValue"]),l(D,{modelValue:M(v),"onUpdate:modelValue":o[1]||(o[1]=n=>E(v)?v.value=n:null),decrement:A,increment:R,label:"Fractal Size:"},null,8,["modelValue"]),l(p,{label:"Equation:"},{default:a(()=>[l(Y,{modelValue:_.value,"onUpdate:modelValue":o[2]||(o[2]=n=>_.value=n)},null,8,["modelValue"]),F.value?(d(),g(P,{key:0,style:{"white-space":"pre"},onClick:F.value},{default:a(()=>[he]),_:1},8,["onClick"])):C("",!0)]),_:1}),l(p,{label:"Theme:"},{default:a(()=>[l(Z,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=n=>s.value=n)},{default:a(()=>[ze,ye,Ve,Ce,we,Ie]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"Color Offset:"},{default:a(()=>[l($,{modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=n=>b.value=n),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),l(p,{label:"Color Repetition:"},{default:a(()=>[l($,{modelValue:x.value,"onUpdate:modelValue":o[5]||(o[5]=n=>x.value=n),max:10,min:1,step:"any"},null,8,["modelValue"])]),_:1}),l(p,{label:"Color Spectrum:"},{default:a(()=>[l($,{modelValue:h.value,"onUpdate:modelValue":o[6]||(o[6]=n=>h.value=n),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),l(p,{label:"Darkness Effect?"},{default:a(()=>[l(U,{modelValue:z.value,"onUpdate:modelValue":o[7]||(o[7]=n=>z.value=n)},null,8,["modelValue"])]),_:1}),s.value!=="newton"?(d(),g(p,{key:0,label:s.value==="simple"?"Mimic Newton's Method?":s.value==="rotation"?"Alternate Split?":s.value==="trig"?"Alternate Trig Functions?":s.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:a(()=>[l(U,{modelValue:y.value,"onUpdate:modelValue":o[8]||(o[8]=n=>y.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),s.value==="newton"||s.value==="trig"||s.value==="exp"?(d(),g(p,{key:1,label:s.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:a(()=>[l(U,{modelValue:V.value,"onUpdate:modelValue":o[9]||(o[9]=n=>V.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0)]),buttons:a(()=>[k.value?(d(),g(P,{key:0,onClick:k.value},{default:a(()=>[ke]),_:1},8,["onClick"])):C("",!0)]),default:a(()=>[f("canvas",{ref_key:"canvas",ref:I},null,512)]),_:1}))}});export{Ne as default};
