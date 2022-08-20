import{u as O}from"./index.32a8f55f.js";import{B as E,_ as P}from"./VStack.d9a6c01a.js";import{u as B,_ as J}from"./ColorSliders.273a2c9e.js";import{d as I,o as m,f as D,a as l,t as M,F as X,c as v,w as u,q as ee,p as R,g as Q,b as s,e as V,s as p,ah as te,aG as le,j as oe,u as U,aR as K,m as z}from"./index.3457413b.js";import{D as ae}from"./Dropdown.f0c2092a.js";import{H as ne,F as ie}from"./SharedNav.720d082d.js";import{F as se}from"./FullscreenDisplay.980c9a14.js";import{I as re}from"./InlineField.34d5e0b7.js";import{I as C}from"./InlineCheckboxField.0019e235.js";import{L as b}from"./Labeled.f38250d7.js";import{g as q}from"./useGlsl.9495b1d0.js";import{s as _}from"./useOption.3e5be13a.js";import{M as ue}from"./MovableCanvas2d.1eda97e1.js";import"./InlineRangeField.b7d05533.js";import"./CoordinateCanvas2d.2e779bd0.js";import"./WebGlCanvas.ab3958d8.js";const ce=l("h1",null,"Color Sliders",-1),de=I({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(a){return(r,d)=>(m(),D(X,null,[ce,l("p",null,M(a.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+M(a.note&&` ${a.note}`),1)],64))}}),N=I({__name:"IconButton",setup(a){return(r,d)=>(m(),v(E,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:u(()=>[ee(r.$slots,"default")]),_:3}))}});const me={},fe=a=>(R("data-v-5f9d2042"),a=a(),Q(),a),pe={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ve=fe(()=>l("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),he=[ve];function _e(a,r){return m(),D("svg",pe,he)}var ge=P(me,[["render",_e],["__scopeId","data-v-5f9d2042"]]);const be={},xe=a=>(R("data-v-78d47d1a"),a=a(),Q(),a),ye={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},we=xe(()=>l("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),ze=[we];function ke(a,r){return m(),D("svg",ye,ze)}var Ce=P(be,[["render",ke],["__scopeId","data-v-78d47d1a"]]);const Ve=I({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(a){return(r,d)=>(m(),v(re,{autocomplete:a.autocomplete,"model-value":""+a.modelValue,placeholder:a.placeholder,type:"number","onUpdate:modelValue":d[0]||(d[0]=c=>r.$emit("update:modelValue",+c))},null,8,["autocomplete","model-value","placeholder"]))}});const Ie=I({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:a=>a-1},increment:{type:Function,default:a=>a+1},label:null},emits:["update:modelValue"],setup(a){function r({target:d}){var c;(c=d.querySelector("input"))==null||c.focus()}return(d,c)=>(m(),v(ne,null,{default:u(()=>[s(N,{onClick:c[0]||(c[0]=h=>d.$emit("update:modelValue",a.decrement(a.modelValue)))},{default:u(()=>[s(ge)]),_:1}),l("p",{class:"label",onClick:r},[V(M(a.label)+" ",1),s(Ve,{"model-value":a.modelValue,"onUpdate:modelValue":c[1]||(c[1]=h=>d.$emit("update:modelValue",h))},null,8,["model-value"])]),s(N,{onClick:c[2]||(c[2]=h=>d.$emit("update:modelValue",a.increment(a.modelValue)))},{default:u(()=>[s(Ce)]),_:1})]),_:1}))}});var Z=P(Ie,[["__scopeId","data-v-6b56d56b"]]);const $e=V(" Apply "),Fe=l("option",{value:"simple"},"Simple",-1),Se=l("option",{value:"gradient"},"Gradient",-1),Te=l("option",{value:"rotation"},"Rotation",-1),qe=l("option",{value:"trig"},"Trigonometric",-1),Ue=l("option",{value:"exp"},"Exponential",-1),Ee=l("option",{value:"newton"},"Newton's Method",-1),Me=V(" Reset Position "),Pe=l("h1",null,"Moving the Explorer",-1),De=l("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),Ae=l("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),Le=l("h1",null,"Adjusting Detail",-1),Oe=l("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level." Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),Be=l("h1",null,"Fractal Size",-1),Ke=l("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),Ne=l("h1",null,"The Equation",-1),Ze=l("p",null,[V(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),l("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),V(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Re=l("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),Qe=l("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),je=l("h1",null,"Choosing a Theme",-1),Ge=l("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - (z^3 - 1) / 3z^2), it is recommended to use "Newton's Method" or check "Initialize Z". `,-1),He=l("h1",null,"Theme Checkboxes",-1),We=l("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),Ye=l("h1",null,"Quick Actions",-1),Je=l("p",null," Right-clicking the canvas modifies your equation. It will primarily swap M and T for your current mouse position and time. If the current equation does not contain M or T, right-clicking will swap all instances of C for M. ",-1),Xe=l("p",null,' Double clicking will toggle "Dual Coloring" or "Initialize Z," depending on which one is currently shown. ',-1),et=l("p",null,"The left and right arrow keys swap through the various themes.",-1),tt=l("p",null,"The up and down arrows adjust the detail level.",-1),lt=l("p",null,"The R button resets the position of your fractal.",-1),bt=I({__name:"fractal-explorer",setup(a){const r=O(100,5,1e3);_("detail",r);function d(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function c(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const h=O(2,.1,1/0);_("limit",h);function j(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function G(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const o=p("z^2+c");_("equation",o);const i=p("simple");_("theme",i);const H={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},W=te(()=>H[i.value]),A=B(),$=p(!1);_("darkness",$);const F=p(!1);_("split",F);const S=p(!1);_("altColors",S);const g=p(!1);_("initZ",g);const x=p(!1);_("dualPlot",x);const L=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform bool initZ;
  uniform bool dualPlot;
  uniform vec2 z_offset;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 mouse;
  uniform float time;

  const float maxIterations = 1000.0;
  const float pi = 3.1415926535;

  ${B.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

  vec2 div(vec2 a, vec2 b);

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

  #define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
  #define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))

  vec2 cx_tan(vec2 a) {
    return div(cx_sin(a), cx_cos(a));
  }

  vec2 cx_log(vec2 a) {
    float rpart = length(a);
    float ipart = atan(a.y, a.x);
    if (ipart > pi) ipart = ipart - 2.0 * pi;
    return vec2(log(rpart), ipart);
  }

  // This power function is only meant for numbers of the form
  // z ^ c, where c is a complex number like x + 0i.
  vec2 cx_pow(vec2 a, vec2 b) {
    float n = b.x;
    float angle = atan(a.y, a.x);
    float r = length(a);
    float real = pow(r, n) * cos(n*angle);
    float im = pow(r, n) * sin(n*angle);
    return vec2(real, im);
  }

  vec2 cx_exp(vec2 n) {
    return exp(n.x) * vec2(cos(n.y), sin(n.y));
  }

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

  ${["{{EQ}}","{{EQC}}"].map((e,n)=>`
  vec4 color${n}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${n} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${n} == 0 && initZ || theme == 4) z = pos;

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
  `,k=p(),y=p(),w=p();return le(()=>{if(!k.value)return;const e=new ue(k.value,{fragmentString:L.replace("{{EQ}}",q(o.value)).replace("{{EQC}}",q(o.value.replace(/m/g,"c"))),saveBounds:!0}),n=["simple","gradient","rotation","trig","exp","newton"];oe("keydown",t=>{var f;if(t.target===document.body&&!t.ctrlKey&&!t.altKey&&!t.metaKey)switch(t.preventDefault(),t.key){case"ArrowLeft":i.value=n[(n.indexOf(i.value)-1+n.length)%n.length];break;case"ArrowRight":i.value=n[(n.indexOf(i.value)+1)%n.length];break;case"ArrowUp":r.value=c(r.value);break;case"ArrowDown":r.value=d(r.value);break;case"R":case"r":(f=y.value)==null||f.call(y);break}}),k.value.addEventListener("dblclick",t=>{t.preventDefault(),i.value!=="newton"&&!o.value.includes("m")?g.value=!g.value:o.value.includes("m")&&(x.value=!x.value)}),k.value.addEventListener("contextmenu",t=>{var f;if(t.preventDefault(),o.value.includes("m")||o.value.includes("t")){const{x:T,y:Y}=e.mouseToCoords();o.value=o.value.replace(/m/g,`$(${T}+${Y}i)`).replace(/t/g,`@(${e.time})`)}else o.value.includes("$")||o.value.includes("@")?o.value=o.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):o.value.includes("c")?o.value=o.value.replace(/c/g,"m"):o.value=o.value+"+m";i.value!=="newton"&&!o.value.includes("m")&&(g.value=!0),(f=w.value)==null||f.call(w)}),w.value=()=>setTimeout(()=>e.load(L.replace("{{EQ}}",q(o.value)).replace("{{EQC}}",q(o.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[r.value]),e.setUniform("limit",h.value),e.setUniformOfInt("theme",[W.value]),e.setUniformOfInt("darkness",[$.value]),e.setUniformOfInt("split",[i.value==="simple"&&o.value.includes("m")||F.value]),e.setUniformOfInt("altColors",[(i.value!=="simple"||o.value.includes("m"))&&S.value]),e.setUniformOfInt("initZ",[i.value==="newton"||o.value.includes("m")||g.value]),e.setUniformOfInt("dualPlot",[o.value.includes("m")&&x.value]),A.setGlsl(e),o.value.includes("m")){const{x:t,y:f}=e.mouseToCoords();e.setUniform("z_offset",t,f)}else if(o.value.includes("$")){const t=o.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(t){const f=+t[1],T=+t[2];e.setUniform("z_offset",Number.isFinite(f)?f:0,Number.isFinite(T)?T:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),y.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,n)=>(m(),v(se,null,{options:u(()=>[s(Z,{modelValue:U(r),"onUpdate:modelValue":n[0]||(n[0]=t=>K(r)?r.value=t:null),decrement:d,increment:c,label:"Detail Level:"},null,8,["modelValue"]),s(Z,{modelValue:U(h),"onUpdate:modelValue":n[1]||(n[1]=t=>K(h)?h.value=t:null),decrement:j,increment:G,label:"Fractal Size:"},null,8,["modelValue"]),s(b,{label:"Equation:"},{default:u(()=>[s(ie,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=t=>o.value=t)},null,8,["modelValue"]),w.value?(m(),v(E,{key:0,style:{"white-space":"pre"},onClick:w.value},{default:u(()=>[$e]),_:1},8,["onClick"])):z("",!0)]),_:1}),s(b,{label:"Theme:"},{default:u(()=>[s(ae,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=t=>i.value=t)},{default:u(()=>[Fe,Se,Te,qe,Ue,Ee]),_:1},8,["modelValue"])]),_:1}),s(J,{sliders:U(A)},null,8,["sliders"]),s(b,{label:"Darkness Effect?"},{default:u(()=>[s(C,{modelValue:$.value,"onUpdate:modelValue":n[4]||(n[4]=t=>$.value=t)},null,8,["modelValue"])]),_:1}),i.value!=="newton"&&i.value!=="simple"?(m(),v(b,{key:0,label:i.value==="rotation"?"Alternate Split?":i.value==="trig"?"Alternate Trig Functions?":i.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:u(()=>[s(C,{modelValue:F.value,"onUpdate:modelValue":n[5]||(n[5]=t=>F.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):z("",!0),i.value==="newton"||i.value==="trig"||i.value==="exp"?(m(),v(b,{key:1,label:i.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:u(()=>[s(C,{modelValue:S.value,"onUpdate:modelValue":n[6]||(n[6]=t=>S.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):z("",!0),i.value!=="newton"&&!o.value.includes("m")?(m(),v(b,{key:2,label:"Initialize Z?"},{default:u(()=>[s(C,{modelValue:g.value,"onUpdate:modelValue":n[7]||(n[7]=t=>g.value=t)},null,8,["modelValue"])]),_:1})):z("",!0),o.value.includes("m")?(m(),v(b,{key:3,label:"Dual Coloring?"},{default:u(()=>[s(C,{modelValue:x.value,"onUpdate:modelValue":n[8]||(n[8]=t=>x.value=t)},null,8,["modelValue"])]),_:1})):z("",!0)]),buttons:u(()=>[y.value?(m(),v(E,{key:0,onClick:y.value},{default:u(()=>[Me]),_:1},8,["onClick"])):z("",!0)]),help:u(()=>[Pe,De,Ae,Le,Oe,Be,Ke,Ne,Ze,Re,Qe,je,Ge,He,We,s(de,{note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`,page:"Fractal Explorer"}),Ye,Je,Xe,et,tt,lt]),default:u(()=>[l("canvas",{ref_key:"canvas",ref:k},null,512)]),_:1}))}});export{bt as default};
