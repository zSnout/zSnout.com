import{u as q}from"./index.1a6ff106.js";import{B as F,_ as U}from"./VStack.0099a460.js";import{u as E,_ as j}from"./ColorSliders.2bf6f478.js";import{D as J}from"./Dropdown.a3dcd251.js";import{H as W,F as X}from"./BookmarkIcon.8dca6511.js";import{F as Y}from"./FullscreenDisplay.de0ed3d0.js";import{d as w,o as d,c as p,w as s,n as Z,f as K,p as T,g as O,a as m,b as r,e as P,t as ee,k as v,a9 as te,aL as le,u as I,aH as B,m as V}from"./index.6fd38de8.js";import{I as oe}from"./InlineField.fb245849.js";import{I as $}from"./InlineCheckboxField.494dadff.js";import{L as x}from"./Labeled.d8315c55.js";import{g as D}from"./useGlsl.0c9126ed.js";import{s as _}from"./useOption.09504db0.js";import{M as ae}from"./MovableCanvas2d.24ccf8f2.js";import"./InlineRangeField.41b559c1.js";import"./CoordinateCanvas2d.54a74f40.js";import"./WebGlCanvas.55c1ba96.js";const L=w({__name:"IconButton",setup(t){return(i,c)=>(d(),p(F,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:s(()=>[Z(i.$slots,"default")]),_:3}))}});const ne={},re=t=>(T("data-v-0298e8c4"),t=t(),O(),t),se={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ie=re(()=>m("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),ue=[ie];function ce(t,i){return d(),K("svg",se,ue)}var de=U(ne,[["render",ce],["__scopeId","data-v-0298e8c4"]]);const me={},fe=t=>(T("data-v-079820ed"),t=t(),O(),t),ve={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},pe=fe(()=>m("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),_e=[pe];function ge(t,i){return d(),K("svg",ve,_e)}var be=U(me,[["render",ge],["__scopeId","data-v-079820ed"]]);const xe=w({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(i,c)=>(d(),p(oe,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":c[0]||(c[0]=u=>i.$emit("update:modelValue",+u))},null,8,["autocomplete","model-value","placeholder"]))}});const ze=w({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function i({target:c}){var u;(u=c.querySelector("input"))==null||u.focus()}return(c,u)=>(d(),p(W,null,{default:s(()=>[r(L,{onClick:u[0]||(u[0]=f=>c.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:s(()=>[r(de)]),_:1}),m("p",{class:"label",onClick:i},[P(ee(t.label)+" ",1),r(xe,{"model-value":t.modelValue,"onUpdate:modelValue":u[1]||(u[1]=f=>c.$emit("update:modelValue",f))},null,8,["model-value"])]),r(L,{onClick:u[2]||(u[2]=f=>c.$emit("update:modelValue",t.increment(t.modelValue)))},{default:s(()=>[r(be)]),_:1})]),_:1}))}});var N=U(ze,[["__scopeId","data-v-6b56d56b"]]);const ye=P(" Apply "),he=m("option",{value:"simple"},"Simple",-1),Ce=m("option",{value:"gradient"},"Gradient",-1),Ve=m("option",{value:"rotation"},"Rotation",-1),we=m("option",{value:"trig"},"Trigonometric",-1),ke=m("option",{value:"exp"},"Exponential",-1),Ie=m("option",{value:"newton"},"Newton's Method",-1),$e=P(" Reset Position "),Re=w({__name:"FractalExplorer",setup(t){const i=q(100,5,1e3);_("detail",i);function c(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function u(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const f=q(2,.1,1/0);_("limit",f);function A(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function H(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const o=v("z^2+c");_("equation",o);const n=v("simple");_("theme",n);const R={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},Q=te(()=>R[n.value]),S=E(),z=v(!1);_("darkness",z);const g=v(!1);_("split",g);const y=v(!1);_("altColors",y);const M=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform vec2 z_offset;

  ${E.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 mouse;
  uniform float time;

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
    if (altColors) {
      return use_color_sliders(-0.02 * i);
    } else {
      return use_color_sliders(0.02 * i);
    }
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

    if (theme == 4 || theme == 1 && split) z = pos - z_offset;

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
  `,h=v(),k=v(),b=v();return le(()=>{if(!h.value)return;const e=new ae(h.value,{fragmentString:M.replace("{{EQ}}",D(o.value)),saveBounds:!0});h.value.addEventListener("contextmenu",l=>{var a;if(l.preventDefault(),o.value.includes("m")||o.value.includes("t")){const{x:C,y:G}=e.mouseToCoords();o.value=o.value.replace(/m/g,`$(${C}+${G}i)`).replace(/t/g,`@(${e.time})`)}else o.value.includes("$")||o.value.includes("@")?o.value=o.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):o.value.includes("c")?(o.value=o.value.replace(/c/g,"m"),n.value==="simple"&&(g.value=!0)):(o.value=o.value+"+m",n.value==="simple"&&(g.value=!0));(a=b.value)==null||a.call(b)}),b.value=()=>{e.load(M.replace("{{EQ}}",D(o.value)))},e.on("render",()=>{if(e.setUniform("detail",[i.value]),e.setUniform("limit",f.value),e.setUniformOfInt("theme",[Q.value]),e.setUniformOfInt("darkness",[z.value]),e.setUniformOfInt("split",[g.value]),e.setUniformOfInt("altColors",[y.value]),S.setGlsl(e),o.value.includes("m")){const{x:l,y:a}=e.mouseToCoords();e.setUniform("z_offset",l,a)}else if(o.value.includes("$")){const l=o.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(l){const a=+l[1],C=+l[2];e.setUniform("z_offset",Number.isFinite(a)?a:0,Number.isFinite(C)?C:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),k.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,l)=>(d(),p(Y,null,{options:s(()=>[r(N,{modelValue:I(i),"onUpdate:modelValue":l[0]||(l[0]=a=>B(i)?i.value=a:null),decrement:c,increment:u,label:"Detail Level:"},null,8,["modelValue"]),r(N,{modelValue:I(f),"onUpdate:modelValue":l[1]||(l[1]=a=>B(f)?f.value=a:null),decrement:A,increment:H,label:"Fractal Size:"},null,8,["modelValue"]),r(x,{label:"Equation:"},{default:s(()=>[r(X,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=a=>o.value=a)},null,8,["modelValue"]),b.value?(d(),p(F,{key:0,style:{"white-space":"pre"},onClick:b.value},{default:s(()=>[ye]),_:1},8,["onClick"])):V("",!0)]),_:1}),r(x,{label:"Theme:"},{default:s(()=>[r(J,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=a=>n.value=a)},{default:s(()=>[he,Ce,Ve,we,ke,Ie]),_:1},8,["modelValue"])]),_:1}),r(j,{sliders:I(S)},null,8,["sliders"]),r(x,{label:"Darkness Effect?"},{default:s(()=>[r($,{modelValue:z.value,"onUpdate:modelValue":l[4]||(l[4]=a=>z.value=a)},null,8,["modelValue"])]),_:1}),n.value!=="newton"?(d(),p(x,{key:0,label:n.value==="simple"?"Mimic Newton's Method?":n.value==="rotation"?"Alternate Split?":n.value==="trig"?"Alternate Trig Functions?":n.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:s(()=>[r($,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=a=>g.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):V("",!0),n.value==="newton"||n.value==="trig"||n.value==="exp"||n.value==="simple"?(d(),p(x,{key:1,label:n.value==="newton"?"3D Effect?":n.value==="simple"?"Reverse Coloring?":"Alternate Coloring?"},{default:s(()=>[r($,{modelValue:y.value,"onUpdate:modelValue":l[6]||(l[6]=a=>y.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):V("",!0)]),buttons:s(()=>[k.value?(d(),p(F,{key:0,onClick:k.value},{default:s(()=>[$e]),_:1},8,["onClick"])):V("",!0)]),default:s(()=>[m("canvas",{ref_key:"canvas",ref:h},null,512)]),_:1}))}});export{Re as default};
