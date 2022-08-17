import{u as N}from"./index.9a124d31.js";import{B as E,_ as M}from"./VStack.ae3d12ba.js";import{u as L,_ as Y}from"./ColorSliders.afd05d73.js";import{d as w,o as d,f as T,a as n,t as q,F as J,c as p,w as r,m as X,p as Z,g as Q,b as s,e as z,s as f,a9 as ee,aL as te,u as U,aH as O,q as b}from"./index.80e7fb4e.js";import{D as le}from"./Dropdown.70b815ce.js";import{H as oe,F as ne}from"./SharedNav.c43960c8.js";import{F as ae}from"./FullscreenDisplay.2a7ae4cd.js";import{I as ie}from"./InlineField.6436088f.js";import{I as y}from"./InlineCheckboxField.e97ead04.js";import{L as _}from"./Labeled.24f13414.js";import{g as F}from"./useGlsl.e7d88fb3.js";import{s as h}from"./useOption.28ced838.js";import{M as se}from"./MovableCanvas2d.d2d559a1.js";import"./InlineRangeField.833a5daa.js";import"./CoordinateCanvas2d.5f5df793.js";import"./WebGlCanvas.e9ad0b8c.js";const re=n("h1",null,"Color Sliders",-1),ue=w({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(t){return(u,m)=>(d(),T(J,null,[re,n("p",null,q(t.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+q(t.note&&` ${t.note}`),1)],64))}}),A=w({__name:"IconButton",setup(t){return(u,m)=>(d(),p(E,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:r(()=>[X(u.$slots,"default")]),_:3}))}});const ce={},de=t=>(Z("data-v-0298e8c4"),t=t(),Q(),t),me={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},fe=de(()=>n("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),pe=[fe];function ve(t,u){return d(),T("svg",me,pe)}var he=M(ce,[["render",ve],["__scopeId","data-v-0298e8c4"]]);const _e={},ge=t=>(Z("data-v-079820ed"),t=t(),Q(),t),be={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},xe=ge(()=>n("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),ye=[xe];function ze(t,u){return d(),T("svg",be,ye)}var we=M(_e,[["render",ze],["__scopeId","data-v-079820ed"]]);const ke=w({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(u,m)=>(d(),p(ie,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":m[0]||(m[0]=c=>u.$emit("update:modelValue",+c))},null,8,["autocomplete","model-value","placeholder"]))}});const Ve=w({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function u({target:m}){var c;(c=m.querySelector("input"))==null||c.focus()}return(m,c)=>(d(),p(oe,null,{default:r(()=>[s(A,{onClick:c[0]||(c[0]=v=>m.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:r(()=>[s(he)]),_:1}),n("p",{class:"label",onClick:u},[z(q(t.label)+" ",1),s(ke,{"model-value":t.modelValue,"onUpdate:modelValue":c[1]||(c[1]=v=>m.$emit("update:modelValue",v))},null,8,["model-value"])]),s(A,{onClick:c[2]||(c[2]=v=>m.$emit("update:modelValue",t.increment(t.modelValue)))},{default:r(()=>[s(we)]),_:1})]),_:1}))}});var K=M(Ve,[["__scopeId","data-v-6b56d56b"]]);const Ce=z(" Apply "),Ie=n("option",{value:"simple"},"Simple",-1),$e=n("option",{value:"gradient"},"Gradient",-1),Se=n("option",{value:"rotation"},"Rotation",-1),Fe=n("option",{value:"trig"},"Trigonometric",-1),Pe=n("option",{value:"exp"},"Exponential",-1),Ue=n("option",{value:"newton"},"Newton's Method",-1),Ee=z(" Reset Position "),qe=n("h1",null,"Moving the Explorer",-1),Me=n("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),Te=n("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),De=n("h1",null,"Adjusting Detail",-1),Be=n("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level". Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),Ne=n("h1",null,"Fractal Size",-1),Le=n("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),Oe=n("h1",null,"The Equation",-1),Ae=n("p",null,[z(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),n("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),z(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Ke=n("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),Ze=n("h1",null,"Choosing a Theme",-1),Qe=n("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - f(z) / f'(z)), it is recommended to use "Newton's Method" or the "Simple" theme with "Initialize Z" checked. `,-1),He=n("h1",null,"Theme Checkboxes",-1),Ge=n("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),ct=w({__name:"FractalExplorer",setup(t){const u=N(100,5,1e3);h("detail",u);function m(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function c(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const v=N(2,.1,1/0);h("limit",v);function H(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function G(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const l=f("z^2+c");h("equation",l);const i=f("simple");h("theme",i);const j={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},R=ee(()=>j[i.value]),D=L(),k=f(!1);h("darkness",k);const V=f(!1);h("split",V);const C=f(!1);h("altColors",C);const x=f(!1);h("initZ",x);const I=f(!1);h("dualPlot",I);const B=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform bool initZ;
  uniform bool dualPlot;
  uniform vec2 z_offset;

  ${L.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

    if (${o} == 0 && initZ) z = pos - 2.0 * z_offset;

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
      gl_FragColor = 0.6 * color0() + 0.4 * color1();
    } else {
      gl_FragColor = color0();
    }
  }
  `,$=f(),P=f(),g=f();return te(()=>{if(!$.value)return;const e=new se($.value,{fragmentString:B.replace("{{EQ}}",F(l.value)).replace("{{EQC}}",F(l.value.replace(/m/g,"c"))),saveBounds:!0});$.value.addEventListener("contextmenu",o=>{var a;if(o.preventDefault(),l.value.includes("m")||l.value.includes("t")){const{x:S,y:W}=e.mouseToCoords();l.value=l.value.replace(/m/g,`$(${S}+${W}i)`).replace(/t/g,`@(${e.time})`)}else l.value.includes("$")||l.value.includes("@")?l.value=l.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):l.value.includes("c")?l.value=l.value.replace(/c/g,"m"):l.value=l.value+"+m";i.value!=="newton"&&!l.value.includes("m")&&(x.value=!0),(a=g.value)==null||a.call(g)}),g.value=()=>setTimeout(()=>e.load(B.replace("{{EQ}}",F(l.value)).replace("{{EQC}}",F(l.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[u.value]),e.setUniform("limit",v.value),e.setUniformOfInt("theme",[R.value]),e.setUniformOfInt("darkness",[k.value]),e.setUniformOfInt("split",[i.value==="simple"&&l.value.includes("m")||V.value]),e.setUniformOfInt("altColors",[(i.value!=="simple"||l.value.includes("m"))&&C.value]),e.setUniformOfInt("initZ",[i.value==="newton"||l.value.includes("m")||x.value]),e.setUniformOfInt("dualPlot",[i.value!=="newton"&&l.value.includes("m")&&I.value]),D.setGlsl(e),l.value.includes("m")){const{x:o,y:a}=e.mouseToCoords();e.setUniform("z_offset",o,a)}else if(l.value.includes("$")){const o=l.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(o){const a=+o[1],S=+o[2];e.setUniform("z_offset",Number.isFinite(a)?a:0,Number.isFinite(S)?S:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),P.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,o)=>(d(),p(ae,null,{options:r(()=>[s(K,{modelValue:U(u),"onUpdate:modelValue":o[0]||(o[0]=a=>O(u)?u.value=a:null),decrement:m,increment:c,label:"Detail Level:"},null,8,["modelValue"]),s(K,{modelValue:U(v),"onUpdate:modelValue":o[1]||(o[1]=a=>O(v)?v.value=a:null),decrement:H,increment:G,label:"Fractal Size:"},null,8,["modelValue"]),s(_,{label:"Equation:"},{default:r(()=>[s(ne,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value=a)},null,8,["modelValue"]),g.value?(d(),p(E,{key:0,style:{"white-space":"pre"},onClick:g.value},{default:r(()=>[Ce]),_:1},8,["onClick"])):b("",!0)]),_:1}),s(_,{label:"Theme:"},{default:r(()=>[s(le,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=a=>i.value=a)},{default:r(()=>[Ie,$e,Se,Fe,Pe,Ue]),_:1},8,["modelValue"])]),_:1}),s(Y,{sliders:U(D)},null,8,["sliders"]),s(_,{label:"Darkness Effect?"},{default:r(()=>[s(y,{modelValue:k.value,"onUpdate:modelValue":o[4]||(o[4]=a=>k.value=a)},null,8,["modelValue"])]),_:1}),i.value!=="newton"&&i.value!=="simple"?(d(),p(_,{key:0,label:i.value==="rotation"?"Alternate Split?":i.value==="trig"?"Alternate Trig Functions?":i.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:r(()=>[s(y,{modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=a=>V.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0),i.value==="newton"||i.value==="trig"||i.value==="exp"?(d(),p(_,{key:1,label:i.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:r(()=>[s(y,{modelValue:C.value,"onUpdate:modelValue":o[6]||(o[6]=a=>C.value=a)},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0),i.value!=="newton"&&!l.value.includes("m")?(d(),p(_,{key:2,label:"Initialize Z?"},{default:r(()=>[s(y,{modelValue:x.value,"onUpdate:modelValue":o[7]||(o[7]=a=>x.value=a)},null,8,["modelValue"])]),_:1})):b("",!0),i.value==="newton"||l.value.includes("m")?(d(),p(_,{key:3,label:"Dual Coloring?"},{default:r(()=>[s(y,{modelValue:I.value,"onUpdate:modelValue":o[8]||(o[8]=a=>I.value=a)},null,8,["modelValue"])]),_:1})):b("",!0)]),buttons:r(()=>[P.value?(d(),p(E,{key:0,onClick:P.value},{default:r(()=>[Ee]),_:1},8,["onClick"])):b("",!0)]),help:r(()=>[qe,Me,Te,De,Be,Ne,Le,Oe,Ae,Ke,Ze,Qe,He,Ge,s(ue,{page:"Fractal Explorer",note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`})]),default:r(()=>[n("canvas",{ref_key:"canvas",ref:$},null,512)]),_:1}))}});export{ct as default};
