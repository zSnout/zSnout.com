import{u as A}from"./index.549208cd.js";import{B as T,_ as D}from"./VStack.c8a162cb.js";import{u as R,_ as ee}from"./ColorSliders.49ae42f8.js";import{d as V,o as m,f as B,a as l,t as M,F as te,c as h,w as u,m as le,p as H,g as G,b as i,e as w,s as p,a9 as K,aL as oe,u as P,aH as E,q as y}from"./index.f7adb33e.js";import{D as ae}from"./Dropdown.72e0d132.js";import{H as ne,F as se}from"./SharedNav.cf80e2c2.js";import{F as ie}from"./FullscreenDisplay.7ce53f2a.js";import{I as re}from"./InlineField.96793ee1.js";import{I as z}from"./InlineCheckboxField.b534f396.js";import{L as g}from"./Labeled.99182cb6.js";import{g as U}from"./useGlsl.e7d88fb3.js";import{s as v}from"./useOption.905e1fad.js";import{M as ue}from"./MovableCanvas2d.cfa4f203.js";import{I as ce}from"./InlineRangeField.4e678eea.js";import"./CoordinateCanvas2d.f18fdde5.js";import"./WebGlCanvas.c5ef6710.js";const de=l("h1",null,"Color Sliders",-1),me=V({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(o){return(c,f)=>(m(),B(te,null,[de,l("p",null,M(o.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+M(o.note&&` ${o.note}`),1)],64))}}),Z=V({__name:"IconButton",setup(o){return(c,f)=>(m(),h(T,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:u(()=>[le(c.$slots,"default")]),_:3}))}});const fe={},pe=o=>(H("data-v-0298e8c4"),o=o(),G(),o),ve={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},he=pe(()=>l("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),_e=[he];function ge(o,c){return m(),B("svg",ve,_e)}var be=D(fe,[["render",ge],["__scopeId","data-v-0298e8c4"]]);const ye={},xe=o=>(H("data-v-079820ed"),o=o(),G(),o),ze={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},we=xe(()=>l("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),Ve=[we];function ke(o,c){return m(),B("svg",ze,Ve)}var Ce=D(ye,[["render",ke],["__scopeId","data-v-079820ed"]]);const Ie=V({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(o){return(c,f)=>(m(),h(re,{autocomplete:o.autocomplete,"model-value":""+o.modelValue,placeholder:o.placeholder,type:"number","onUpdate:modelValue":f[0]||(f[0]=d=>c.$emit("update:modelValue",+d))},null,8,["autocomplete","model-value","placeholder"]))}});const $e=V({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:o=>o-1},increment:{type:Function,default:o=>o+1},label:null},emits:["update:modelValue"],setup(o){function c({target:f}){var d;(d=f.querySelector("input"))==null||d.focus()}return(f,d)=>(m(),h(ne,null,{default:u(()=>[i(Z,{onClick:d[0]||(d[0]=_=>f.$emit("update:modelValue",o.decrement(o.modelValue)))},{default:u(()=>[i(be)]),_:1}),l("p",{class:"label",onClick:c},[w(M(o.label)+" ",1),i(Ie,{"model-value":o.modelValue,"onUpdate:modelValue":d[1]||(d[1]=_=>f.$emit("update:modelValue",_))},null,8,["model-value"])]),i(Z,{onClick:d[2]||(d[2]=_=>f.$emit("update:modelValue",o.increment(o.modelValue)))},{default:u(()=>[i(Ce)]),_:1})]),_:1}))}});var Q=D($e,[["__scopeId","data-v-6b56d56b"]]);const Fe=w(" Apply "),Se=l("option",{value:"simple"},"Simple",-1),Pe=l("option",{value:"gradient"},"Gradient",-1),Ue=l("option",{value:"rotation"},"Rotation",-1),qe=l("option",{value:"trig"},"Trigonometric",-1),Ee=l("option",{value:"exp"},"Exponential",-1),Te=l("option",{value:"newton"},"Newton's Method",-1),Me=w(" Reset Position "),De=l("h1",null,"Moving the Explorer",-1),Be=l("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),Le=l("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),Ne=l("h1",null,"Adjusting Detail",-1),Oe=l("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level". Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),Ae=l("h1",null,"Fractal Size",-1),Re=l("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),Ke=l("h1",null,"The Equation",-1),Ze=l("p",null,[w(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),l("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),w(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Qe=l("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),He=l("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),Ge=l("h1",null,"Choosing a Theme",-1),je=l("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - f(z) / f'(z)), it is recommended to use "Newton's Method" or the "Simple" theme with "Initialize Z" checked. `,-1),We=l("h1",null,"Theme Checkboxes",-1),Ye=l("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),Je=l("h1",null,"Resolution",-1),Xe=l("p",null,' If you have a device with a large screen, zSnout may start to drag down the performance of your computer. To remedy this, decrease the "Resolution" slider. Lowering this slider will increase render speed but will decrease the image quality, so choose carefully. ',-1),et=l("p",null," If you start from a low resolution and switch to a high one, the canvas may be shrunk. In this case, reload the page to fix this and any other issues that may occur. ",-1),_t=V({__name:"FractalExplorer",setup(o){const c=A(100,5,1e3);v("detail",c);function f(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function d(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const _=A(2,.1,1/0);v("limit",_);function j(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function W(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const a=p("z^2+c");v("equation",a);const r=p("simple");v("theme",r);const Y={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},J=K(()=>Y[r.value]),L=R(),k=p(!1);v("darkness",k);const C=p(!1);v("split",C);const I=p(!1);v("altColors",I);const x=p(!1);v("initZ",x);const $=p(!1);v("dualPlot",$);const N=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform bool initZ;
  uniform bool dualPlot;
  uniform vec2 z_offset;

  ${R.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

  ${["{{EQ}}","{{EQC}}"].map((e,t)=>`
  vec4 color${t}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${t} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${t} == 0 && initZ) z = pos;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = ${e};
      iter++;

      if (length(z) > limit) {
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
    if (dualPlot) {
      vec2 pos = gl_FragCoord.xy / u_resolution;

      if (pos.y < 0.5 && pos.x > 0.5) {
        gl_FragColor = color0();
      } else {
        gl_FragColor = color1();
      }
    } else {
      gl_FragColor = color0();
    }
  }
  `,F=p(),q=p(),b=p(),O=p(1);let s;const S=K({get(){return O.value},set(e){O.value=e,s==null||s.setPixelRatio(e)}});return oe(()=>{!F.value||(s=new ue(F.value,{fragmentString:N.replace("{{EQ}}",U(a.value)).replace("{{EQC}}",U(a.value.replace(/m/g,"c"))),saveBounds:!0}),v("resolution",S),F.value.addEventListener("contextmenu",e=>{var t;if(e.preventDefault(),a.value.includes("m")||a.value.includes("t")){const{x:n,y:X}=s.mouseToCoords();a.value=a.value.replace(/m/g,`$(${n}+${X}i)`).replace(/t/g,`@(${s.time})`)}else a.value.includes("$")||a.value.includes("@")?a.value=a.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):a.value.includes("c")?a.value=a.value.replace(/c/g,"m"):a.value=a.value+"+m";r.value!=="newton"&&!a.value.includes("m")&&(x.value=!0),(t=b.value)==null||t.call(b)}),b.value=()=>setTimeout(()=>s.load(N.replace("{{EQ}}",U(a.value)).replace("{{EQC}}",U(a.value.replace(/m/g,"c"))))),s.on("render",()=>{if(s.setUniform("detail",[c.value]),s.setUniform("limit",_.value),s.setUniformOfInt("theme",[J.value]),s.setUniformOfInt("darkness",[k.value]),s.setUniformOfInt("split",[r.value==="simple"&&a.value.includes("m")||C.value]),s.setUniformOfInt("altColors",[(r.value!=="simple"||a.value.includes("m"))&&I.value]),s.setUniformOfInt("initZ",[r.value==="newton"||a.value.includes("m")||x.value]),s.setUniformOfInt("dualPlot",[r.value!=="newton"&&a.value.includes("m")&&$.value]),L.setGlsl(s),a.value.includes("m")){const{x:e,y:t}=s.mouseToCoords();s.setUniform("z_offset",e,t)}else if(a.value.includes("$")){const e=a.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(e){const t=+e[1],n=+e[2];s.setUniform("z_offset",Number.isFinite(t)?t:0,Number.isFinite(n)?n:0)}else s.setUniform("z_offset",0,0)}else s.setUniform("z_offset",0,0)}),q.value=()=>{s.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})})}),(e,t)=>(m(),h(ie,null,{options:u(()=>[i(Q,{modelValue:P(c),"onUpdate:modelValue":t[0]||(t[0]=n=>E(c)?c.value=n:null),decrement:f,increment:d,label:"Detail Level:"},null,8,["modelValue"]),i(Q,{modelValue:P(_),"onUpdate:modelValue":t[1]||(t[1]=n=>E(_)?_.value=n:null),decrement:j,increment:W,label:"Fractal Size:"},null,8,["modelValue"]),i(g,{label:"Equation:"},{default:u(()=>[i(se,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=n=>a.value=n)},null,8,["modelValue"]),b.value?(m(),h(T,{key:0,style:{"white-space":"pre"},onClick:b.value},{default:u(()=>[Fe]),_:1},8,["onClick"])):y("",!0)]),_:1}),i(g,{label:"Theme:"},{default:u(()=>[i(ae,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=n=>r.value=n)},{default:u(()=>[Se,Pe,Ue,qe,Ee,Te]),_:1},8,["modelValue"])]),_:1}),i(ee,{sliders:P(L)},null,8,["sliders"]),i(g,{label:"Darkness Effect?"},{default:u(()=>[i(z,{modelValue:k.value,"onUpdate:modelValue":t[4]||(t[4]=n=>k.value=n)},null,8,["modelValue"])]),_:1}),r.value!=="newton"&&r.value!=="simple"?(m(),h(g,{key:0,label:r.value==="rotation"?"Alternate Split?":r.value==="trig"?"Alternate Trig Functions?":r.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:u(()=>[i(z,{modelValue:C.value,"onUpdate:modelValue":t[5]||(t[5]=n=>C.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),r.value==="newton"||r.value==="trig"||r.value==="exp"?(m(),h(g,{key:1,label:r.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:u(()=>[i(z,{modelValue:I.value,"onUpdate:modelValue":t[6]||(t[6]=n=>I.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),r.value!=="newton"&&!a.value.includes("m")?(m(),h(g,{key:2,label:"Initialize Z?"},{default:u(()=>[i(z,{modelValue:x.value,"onUpdate:modelValue":t[7]||(t[7]=n=>x.value=n)},null,8,["modelValue"])]),_:1})):y("",!0),r.value==="newton"||a.value.includes("m")?(m(),h(g,{key:3,label:"Dual Coloring?"},{default:u(()=>[i(z,{modelValue:$.value,"onUpdate:modelValue":t[8]||(t[8]=n=>$.value=n)},null,8,["modelValue"])]),_:1})):y("",!0),i(g,{label:"Resolution:"},{default:u(()=>[i(ce,{modelValue:P(S),"onUpdate:modelValue":t[9]||(t[9]=n=>E(S)?S.value=n:null),min:.1,max:1,step:"any"},null,8,["modelValue","min"])]),_:1})]),buttons:u(()=>[q.value?(m(),h(T,{key:0,onClick:q.value},{default:u(()=>[Me]),_:1},8,["onClick"])):y("",!0)]),help:u(()=>[De,Be,Le,Ne,Oe,Ae,Re,Ke,Ze,Qe,He,Ge,je,We,Ye,i(me,{page:"Fractal Explorer",note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`}),Je,Xe,et]),default:u(()=>[l("canvas",{ref_key:"canvas",ref:F},null,512)]),_:1}))}});export{_t as default};
