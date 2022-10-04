import{d as Z,o as p,h as W,a,t as A,F as H,q as u,g as J,Y as X,C as ee,c as h,w as r,e as i,u as q,M as O,b as F,i as y}from"./index.4uw6pj49.js";import{u as K}from"./index.55wflef3.js";import{B as L}from"./VStack.34lxtf3d.js";import{u as N,_ as te}from"./ColorSliders.vue_vue_type_script_setup_true_lang.55nmm5y1.js";import{D as le}from"./Dropdown.5andrccq.js";import{F as oe}from"./Field.2ydu2jt8.js";import{F as ae}from"./FullscreenDisplay.hao6npqe.js";import{I as B}from"./Incrementable.44806nyw.js";import{I as k}from"./InlineCheckboxField.67ybze61.js";import{L as f}from"./Labeled.29mn7ohi.js";import{g as E}from"./useGlsl.65muxzpz.js";import{s as m}from"./useOption.ujvp9hcq.js";import{M as ne}from"./MovableCanvas2d.41imxryi.js";import{I as ie}from"./InlineRangeField.4poaov81.js";const re=a("h1",null,"Color Sliders",-1),se=Z({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(_){return(M,s)=>(p(),W(H,null,[re,a("p",null,A(_.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+A(_.note&&` ${_.note}`),1)],64))}}),ue=a("option",{value:"simple"},"Simple",-1),ce=a("option",{value:"gradient"},"Gradient",-1),de=a("option",{value:"rotation"},"Rotation",-1),me=a("option",{value:"trig"},"Trigonometric",-1),fe=a("option",{value:"exp"},"Exponential",-1),pe=a("option",{value:"newton"},"Newton's Method",-1),ve=a("h1",null,"Moving the Explorer",-1),he=a("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),ge=a("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),be=a("h1",null,"Adjusting Detail",-1),xe=a("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level." Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),ye=a("h1",null,"Fractal Size",-1),_e=a("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),ze=a("h1",null,"The Equation",-1),we=a("p",null,[F(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),a("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),F(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),ke=a("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),Ce=a("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),Ve=a("h1",null,"Choosing a Theme",-1),Ie=a("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - (z^3 - 1) / 3z^2), it is recommended to use "Newton's Method" or check "Initialize Z". `,-1),Te=a("h1",null,"Theme Checkboxes",-1),Ue=a("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),qe=a("h1",null,"Quick Actions",-1),Ee=a("p",null," Right-clicking the canvas modifies your equation. It will primarily swap M and T for your current mouse position and time. If the current equation does not contain M or T, right-clicking will swap all instances of C for M. ",-1),Fe=a("p",null,' Double clicking will toggle "Dual Coloring" or "Initialize Z," depending on which one is currently shown. ',-1),Me=a("p",null,"The left and right arrow keys swap through the various themes.",-1),Se=a("p",null,"The up and down arrows adjust the detail level.",-1),Pe=a("p",null,"The R button resets the position of your fractal.",-1),We=Z({__name:"fractal-explorer",props:{noSave:{type:Boolean}},setup(_){const{noSave:M}=_,s=!M,c=K(100,5,1e3);s&&m("detail",c);function S(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function P(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const z=K(2,.1,1/0);s&&m("limit",z);function R(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function Q(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const l=u("z^2+c");s&&m("equation",l);const n=u("simple");s&&m("theme",n);const j={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},G=J(()=>j[n.value]),D=N({save:s}),C=u(0);s&&m("minIter",C);const V=u(!1);s&&m("darkness",V);const I=u(!1);s&&m("split",I);const T=u(!1);s&&m("altColors",T);const v=u(!1);s&&m("initZ",v);const g=u(!1);s&&m("dualPlot",g);const $=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform float minIter;
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

  ${N.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

  ${["{{EQ}}","{{EQC}}"].map((e,o)=>`
  vec4 color${o}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${o} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${o} == 0 && initZ || theme == 4) z = pos;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = ${e};
      iter++;

      if (length(z) > limit) {
        if (iter < minIter) return vec4(1.0, 1.0, 1.0, 1.0);

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
  `,w=u(),b=u(),x=u();return X(()=>{if(!w.value)return;const e=new ne(w.value,{fragmentString:$.replace("{{EQ}}",E(l.value)).replace("{{EQC}}",E(l.value.replace(/m/g,"c"))),saveBounds:s}),o=["simple","gradient","rotation","trig","exp","newton"];ee("keydown",t=>{var d;if(t.target===document.body&&!t.ctrlKey&&!t.altKey&&!t.metaKey)switch(t.preventDefault(),t.key){case"ArrowLeft":n.value=o[(o.indexOf(n.value)-1+o.length)%o.length];break;case"ArrowRight":n.value=o[(o.indexOf(n.value)+1)%o.length];break;case"ArrowUp":c.value=P(c.value);break;case"ArrowDown":c.value=S(c.value);break;case"R":case"r":(d=b.value)==null||d.call(b);break}}),w.value.addEventListener("dblclick",t=>{t.preventDefault(),n.value!=="newton"&&!l.value.includes("m")?v.value=!v.value:l.value.includes("m")&&(g.value=!g.value)}),w.value.addEventListener("contextmenu",t=>{var d;if(t.preventDefault(),l.value.includes("m")||l.value.includes("t")){const{x:U,y:Y}=e.mouseToCoords();l.value=l.value.replace(/m/g,`$(${U}+${Y}i)`).replace(/t/g,`@(${e.time})`)}else l.value.includes("$")||l.value.includes("@")?l.value=l.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):l.value.includes("c")?l.value=l.value.replace(/c/g,"m"):l.value=l.value+"+m";n.value!=="newton"&&!l.value.includes("m")&&(v.value=!0),(d=x.value)==null||d.call(x)}),x.value=()=>setTimeout(()=>e.load($.replace("{{EQ}}",E(l.value)).replace("{{EQC}}",E(l.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[c.value]),e.setUniform("limit",z.value),e.setUniformOfInt("theme",[G.value]),e.setUniformOfInt("darkness",[V.value]),e.setUniform("minIter",C.value),e.setUniformOfInt("split",[n.value==="simple"&&l.value.includes("m")||I.value]),e.setUniformOfInt("altColors",[(n.value!=="simple"||l.value.includes("m"))&&T.value]),e.setUniformOfInt("initZ",[n.value==="newton"||l.value.includes("m")||v.value]),e.setUniformOfInt("dualPlot",[l.value.includes("m")&&g.value]),D.setGlsl(e),l.value.includes("m")){const{x:t,y:d}=e.mouseToCoords();e.setUniform("z_offset",t,d)}else if(l.value.includes("$")){const t=l.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(t){const d=+t[1],U=+t[2];e.setUniform("z_offset",Number.isFinite(d)?d:0,Number.isFinite(U)?U:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),b.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,o)=>(p(),h(ae,null,{options:r(()=>[i(B,{modelValue:q(c),"onUpdate:modelValue":o[0]||(o[0]=t=>O(c)?c.value=t:null),decrement:S,increment:P,label:"Detail Level:"},null,8,["modelValue"]),i(B,{modelValue:q(z),"onUpdate:modelValue":o[1]||(o[1]=t=>O(z)?z.value=t:null),decrement:R,increment:Q,label:"Fractal Size:"},null,8,["modelValue"]),i(f,{label:"Equation:"},{default:r(()=>[i(oe,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=t=>l.value=t)},null,8,["modelValue"]),x.value?(p(),h(L,{key:0,style:{"white-space":"pre"},onClick:x.value},{default:r(()=>[F(" Apply ")]),_:1},8,["onClick"])):y("",!0)]),_:1}),i(f,{label:"Theme:"},{default:r(()=>[i(le,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=t=>n.value=t)},{default:r(()=>[ue,ce,de,me,fe,pe]),_:1},8,["modelValue"])]),_:1}),i(te,{sliders:q(D)},null,8,["sliders"]),i(f,{label:"Darkness Effect?"},{default:r(()=>[i(k,{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=t=>V.value=t)},null,8,["modelValue"])]),_:1}),n.value!=="newton"&&n.value!=="simple"?(p(),h(f,{key:0,label:n.value==="rotation"?"Alternate Split?":n.value==="trig"?"Alternate Trig Functions?":n.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:r(()=>[i(k,{modelValue:I.value,"onUpdate:modelValue":o[5]||(o[5]=t=>I.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),n.value==="newton"||n.value==="trig"||n.value==="exp"?(p(),h(f,{key:1,label:n.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:r(()=>[i(k,{modelValue:T.value,"onUpdate:modelValue":o[6]||(o[6]=t=>T.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),n.value!=="newton"&&!l.value.includes("m")?(p(),h(f,{key:2,label:"Initialize Z?"},{default:r(()=>[i(k,{modelValue:v.value,"onUpdate:modelValue":o[7]||(o[7]=t=>v.value=t)},null,8,["modelValue"])]),_:1})):y("",!0),l.value.includes("m")?(p(),h(f,{key:3,label:"Dual Coloring?"},{default:r(()=>[i(k,{modelValue:g.value,"onUpdate:modelValue":o[8]||(o[8]=t=>g.value=t)},null,8,["modelValue"])]),_:1})):y("",!0),i(f,{label:"Minimum Iterations"},{default:r(()=>[i(ie,{modelValue:C.value,"onUpdate:modelValue":o[9]||(o[9]=t=>C.value=t),max:q(c),min:0},null,8,["modelValue","max"])]),_:1})]),buttons:r(()=>[b.value?(p(),h(L,{key:0,onClick:b.value},{default:r(()=>[F(" Reset Position ")]),_:1},8,["onClick"])):y("",!0)]),help:r(()=>[ve,he,ge,be,xe,ye,_e,ze,we,ke,Ce,Ve,Ie,Te,Ue,i(se,{note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`,page:"Fractal Explorer"}),qe,Ee,Fe,Me,Se,Pe]),default:r(()=>[a("canvas",{ref_key:"canvas",ref:w},null,512)]),_:1}))}});export{We as _};
