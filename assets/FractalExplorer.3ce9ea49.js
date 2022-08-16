import{u as M}from"./index.9d59ae2c.js";import{B as P,_ as S}from"./VStack.a8f4160e.js";import{u as q,_ as G}from"./ColorSliders.31570a7b.js";import{D as Z}from"./Dropdown.2279d959.js";import{H as J,F as W}from"./BookmarkIcon.55749bc2.js";import{F as X}from"./FullscreenDisplay.f8e66f59.js";import{d as $,o as m,c as _,w as s,n as Y,f as N,p as T,g as O,a as r,b as i,e as v,t as ee,k as p,a9 as te,aL as le,u as U,aH as B,m as C}from"./index.0a8dc34f.js";import{I as oe}from"./InlineField.3eb9e4d2.js";import{I as F}from"./InlineCheckboxField.5e7e77ff.js";import{L as h}from"./Labeled.e302585a.js";import{g as k}from"./useGlsl.e7d88fb3.js";import{s as b}from"./useOption.f896cd9a.js";import{M as ae}from"./MovableCanvas2d.f9bff539.js";import"./InlineRangeField.03981d7d.js";import"./CoordinateCanvas2d.2b4cd4f0.js";import"./WebGlCanvas.a8ac6cbf.js";const L=$({__name:"IconButton",setup(l){return(u,d)=>(m(),_(P,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:s(()=>[Y(u.$slots,"default")]),_:3}))}});const ne={},re=l=>(T("data-v-0298e8c4"),l=l(),O(),l),se={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ie=re(()=>r("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),ue=[ie];function ce(l,u){return m(),N("svg",se,ue)}var de=S(ne,[["render",ce],["__scopeId","data-v-0298e8c4"]]);const me={},fe=l=>(T("data-v-079820ed"),l=l(),O(),l),ve={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},pe=fe(()=>r("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),_e=[pe];function ge(l,u){return m(),N("svg",ve,_e)}var be=S(me,[["render",ge],["__scopeId","data-v-079820ed"]]);const xe=$({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(l){return(u,d)=>(m(),_(oe,{autocomplete:l.autocomplete,"model-value":""+l.modelValue,placeholder:l.placeholder,type:"number","onUpdate:modelValue":d[0]||(d[0]=c=>u.$emit("update:modelValue",+c))},null,8,["autocomplete","model-value","placeholder"]))}});const he=$({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:l=>l-1},increment:{type:Function,default:l=>l+1},label:null},emits:["update:modelValue"],setup(l){function u({target:d}){var c;(c=d.querySelector("input"))==null||c.focus()}return(d,c)=>(m(),_(J,null,{default:s(()=>[i(L,{onClick:c[0]||(c[0]=f=>d.$emit("update:modelValue",l.decrement(l.modelValue)))},{default:s(()=>[i(de)]),_:1}),r("p",{class:"label",onClick:u},[v(ee(l.label)+" ",1),i(xe,{"model-value":l.modelValue,"onUpdate:modelValue":c[1]||(c[1]=f=>d.$emit("update:modelValue",f))},null,8,["model-value"])]),i(L,{onClick:c[2]||(c[2]=f=>d.$emit("update:modelValue",l.increment(l.modelValue)))},{default:s(()=>[i(be)]),_:1})]),_:1}))}});var K=S(he,[["__scopeId","data-v-6b56d56b"]]);const ze=v(" Apply "),ye=r("option",{value:"simple"},"Simple",-1),we=r("option",{value:"gradient"},"Gradient",-1),Ve=r("option",{value:"rotation"},"Rotation",-1),Ce=r("option",{value:"trig"},"Trigonometric",-1),ke=r("option",{value:"exp"},"Exponential",-1),$e=r("option",{value:"newton"},"Newton's Method",-1),Ie=v(" Reset Position "),Ue=r("h1",null,"Moving the Explorer",-1),Fe=r("p",null,[v(" On mobile, "),r("br"),v(" move the image using one finger and "),r("br"),v(" pinch to zoom using two fingers. ")],-1),Pe=r("p",null,[v(" On desktop, "),r("br"),v(" click and drag using a mouse or trackpad to move the image and "),r("br"),v(" scroll using a mouse or pinch on a trackpad using two fingers to zoom. ")],-1),Se=r("h1",null,"Adjusting Detail",-1),Ee=r("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level". Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),De=r("h1",null,"Fractal Size",-1),We=$({__name:"FractalExplorer",setup(l){const u=M(100,5,1e3);b("detail",u);function d(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function c(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const f=M(2,.1,1/0);b("limit",f);function Q(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function A(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const t=p("z^2+c");b("equation",t);const a=p("simple");b("theme",a);const H={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},j=te(()=>H[a.value]),E=q(),z=p(!1);b("darkness",z);const g=p(!1);b("split",g);const y=p(!1);b("altColors",y);const D=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform vec2 z_offset;

  ${q.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

  ${["{{EQ}}","{{EQC}}"].map((e,o)=>`
  vec4 color${o}() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${o} == 0 && (theme == 4 || theme == 1 && split)) z = pos - 2.0 * z_offset;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = ${e};
      iter++;

      if (length(z) > 2.0) {
        if (theme == 1) {
          return vec4(simplePalette(iter), 1.0);
        } else if (theme == 2) {
          return vec4(gradientPalette(sz, iter), 1.0);
        } else if (theme == 3) {
          return vec4(rotationPalette(atan(sz.x, sz.y), iter), 1.0);
        } else if (theme == 5) {
          return vec4(trigPalette(iter), 1.0);
        } else if (theme == 6) {
          return vec4(expPalette(iter), 1.0);
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
      return vec4(gradientPalette(sz, iter), 1.0);
    } else if (theme == 3) {
      return vec4(rotationPalette(pi - atan(sz.y / sz.x), detail), 1.0);
    } else if (theme == 4) {
      if (altColors) z = nz;
      return vec4(newtonPalette(atan(z.y / z.x), iter), 1.0);
    } else return vec4(0.0, 0.0, 0.0, 1.0);
  }`).join("")}

  void main() {
    if (theme == 1 && altColors) {
      gl_FragColor = 0.6 * color0() + 0.4 * color1();
    } else {
      gl_FragColor = color0();
    }
  }
  `,w=p(),I=p(),x=p();return le(()=>{if(!w.value)return;const e=new ae(w.value,{fragmentString:D.replace("{{EQ}}",k(t.value)).replace("{{EQC}}",k(t.value.replace(/m/g,"c"))),saveBounds:!0});w.value.addEventListener("contextmenu",o=>{var n;if(o.preventDefault(),t.value.includes("m")||t.value.includes("t")){const{x:V,y:R}=e.mouseToCoords();t.value=t.value.replace(/m/g,`$(${V}+${R}i)`).replace(/t/g,`@(${e.time})`)}else t.value.includes("$")||t.value.includes("@")?(t.value=t.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"),a.value==="simple"&&(g.value=!0)):t.value.includes("c")?(t.value=t.value.replace(/c/g,"m"),a.value==="simple"&&(g.value=!0)):(t.value=t.value+"+m",a.value==="simple"&&(g.value=!0));(n=x.value)==null||n.call(x)}),x.value=()=>setTimeout(()=>e.load(D.replace("{{EQ}}",k(t.value)).replace("{{EQC}}",k(t.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[u.value]),e.setUniform("limit",f.value),e.setUniformOfInt("theme",[j.value]),e.setUniformOfInt("darkness",[z.value]),e.setUniformOfInt("split",[a.value==="simple"&&t.value.includes("m")||g.value]),e.setUniformOfInt("altColors",[(a.value!=="simple"||t.value.includes("m"))&&y.value]),E.setGlsl(e),t.value.includes("m")){const{x:o,y:n}=e.mouseToCoords();e.setUniform("z_offset",o,n)}else if(t.value.includes("$")){const o=t.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(o){const n=+o[1],V=+o[2];e.setUniform("z_offset",Number.isFinite(n)?n:0,Number.isFinite(V)?V:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),I.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,o)=>(m(),_(X,null,{options:s(()=>[i(K,{modelValue:U(u),"onUpdate:modelValue":o[0]||(o[0]=n=>B(u)?u.value=n:null),decrement:d,increment:c,label:"Detail Level:"},null,8,["modelValue"]),i(K,{modelValue:U(f),"onUpdate:modelValue":o[1]||(o[1]=n=>B(f)?f.value=n:null),decrement:Q,increment:A,label:"Fractal Size:"},null,8,["modelValue"]),i(h,{label:"Equation:"},{default:s(()=>[i(W,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value=n)},null,8,["modelValue"]),x.value?(m(),_(P,{key:0,style:{"white-space":"pre"},onClick:x.value},{default:s(()=>[ze]),_:1},8,["onClick"])):C("",!0)]),_:1}),i(h,{label:"Theme:"},{default:s(()=>[i(Z,{modelValue:a.value,"onUpdate:modelValue":o[3]||(o[3]=n=>a.value=n)},{default:s(()=>[ye,we,Ve,Ce,ke,$e]),_:1},8,["modelValue"])]),_:1}),i(G,{sliders:U(E)},null,8,["sliders"]),i(h,{label:"Darkness Effect?"},{default:s(()=>[i(F,{modelValue:z.value,"onUpdate:modelValue":o[4]||(o[4]=n=>z.value=n)},null,8,["modelValue"])]),_:1}),a.value!=="newton"&&(a.value!=="simple"||!t.value.includes("m"))?(m(),_(h,{key:0,label:a.value==="simple"?"Initialize Z?":a.value==="rotation"?"Alternate Split?":a.value==="trig"?"Alternate Trig Functions?":a.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:s(()=>[i(F,{modelValue:g.value,"onUpdate:modelValue":o[5]||(o[5]=n=>g.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),a.value==="newton"||a.value==="trig"||a.value==="exp"||a.value==="simple"&&t.value.includes("m")?(m(),_(h,{key:1,label:a.value==="newton"?"3D Effect?":a.value==="simple"?"Dual Coloring?":"Alternate Coloring?"},{default:s(()=>[i(F,{modelValue:y.value,"onUpdate:modelValue":o[6]||(o[6]=n=>y.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0)]),buttons:s(()=>[I.value?(m(),_(P,{key:0,onClick:I.value},{default:s(()=>[Ie]),_:1},8,["onClick"])):C("",!0)]),help:s(()=>[Ue,Fe,Pe,Se,Ee,De]),default:s(()=>[r("canvas",{ref_key:"canvas",ref:w},null,512)]),_:1}))}});export{We as default};
