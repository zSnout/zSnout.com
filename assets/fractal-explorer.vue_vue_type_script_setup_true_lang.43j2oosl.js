import{a as H}from"./main.200onzgm.js";import{u as A}from"./index.dlnn8pzg.js";import{B as K}from"./VStack.3evi6szx.js";import{u as O,_ as J}from"./ColorSliders.vue_vue_type_script_setup_true_lang.3veqopt4.js";import{l as N,x as v,y as X,a9 as o,I as Z,G as ee,r as c,b as te,o as le,C as h,D as r,F as i,u as U,i as B,H as F,E as y}from"./runtime-core.esm-bundler.47vl3tei.js";import{D as ae}from"./Dropdown.5phpgqpn.js";import{F as oe}from"./Field.5c7fkv56.js";import{F as ne}from"./FullscreenDisplay.od9apf4f.js";import{I as L}from"./Incrementable.4buzwvct.js";import{I as C}from"./InlineCheckboxField.3g4tyklv.js";import{L as p}from"./Labeled.59ihovi6.js";import{g as q}from"./useGlsl.1gjlgo68.js";import{s as f}from"./useOption.1pf10ib0.js";import{M as ie}from"./MovableCanvas2d.4z89ub4m.js";import{I as re}from"./InlineRangeField.gs0iuoop.js";const se=o("h1",null,"Color Sliders",-1),ue=N({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(_){return(P,s)=>(v(),X(ee,null,[se,o("p",null,Z(_.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+Z(_.note&&` ${_.note}`),1)],64))}}),ce=o("option",{value:"simple"},"Simple",-1),de=o("option",{value:"gradient"},"Gradient",-1),fe=o("option",{value:"rotation"},"Rotation",-1),me=o("option",{value:"trig"},"Trigonometric",-1),pe=o("option",{value:"exp"},"Exponential",-1),ve=o("option",{value:"newton"},"Newton's Method",-1),he=o("h1",null,"Moving the Explorer",-1),ge=o("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),be=o("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),xe=o("h1",null,"Adjusting Detail",-1),ye=o("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level." Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),_e=o("h1",null,"Fractal Size",-1),ze=o("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),we=o("h1",null,"The Equation",-1),ke=o("p",null,[F(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),o("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),F(" for more information. Additionally, zSnout provides M (the current mouse position), P (also the mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Ce=o("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),Ie=o("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),Ve=o("h1",null,"Choosing a Theme",-1),Te=o("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - (z^3 - 1) / 3z^2), it is recommended to use "Newton's Method" or check "Initialize Z". `,-1),Ee=o("p",null,' If your equation has M, "Initialize Z" will automatically be checked and hidden. This does not apply to P. ',-1),Ue=o("h1",null,"Theme Checkboxes",-1),qe=o("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),Fe=o("h1",null,"Quick Actions",-1),Pe=o("p",null," Right-clicking the canvas modifies your equation. It will primarily swap M and T for your current mouse position and time, while leaving P unaffected. If the current equation does not contain M or T, right-clicking will swap all instances of C for M. ",-1),De=o("p",null,' Double clicking will toggle "Dual Coloring" or "Initialize Z," depending on which one is currently shown. ',-1),Me=o("p",null,"The left and right arrow keys swap through the various themes.",-1),Se=o("p",null,"The up and down arrows adjust the detail level.",-1),$e=o("p",null,"The R button resets the position of your fractal.",-1),Xe=N({__name:"fractal-explorer",props:{noSave:{type:Boolean}},setup(_){const{noSave:P}=_,s=!P,d=A(100,5,1e3);s&&f("detail",d);function D(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function M(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const z=A(2,.1,1/0);s&&f("limit",z);function R(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function Q(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const t=c("z^2+c");s&&f("equation",t);const n=c("simple");s&&f("theme",n);const G={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},j=te(()=>G[n.value]),S=O({save:s}),I=c(0);s&&f("minIter",I);const V=c(!1);s&&f("darkness",V);const T=c(!1);s&&f("split",T);const E=c(!1);s&&f("altColors",E);const m=c(!1);s&&f("initZ",m);const g=c(!1);s&&f("dualPlot",g);const $=`
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

  ${O.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

  ${["{{EQ}}","{{EQC}}"].map((e,a)=>`
  vec4 color${a}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${a} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${a} == 0 && initZ || theme == 4) z = pos;

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
  `,w=c(),b=c(),x=c();return le(()=>{if(!w.value)return;const e=new ie(w.value,{fragmentString:$.replace("{{EQ}}",q(t.value)).replace("{{EQC}}",q(t.value.replace(/m|p/g,"c"))),saveBounds:s,preserveDrawingBuffer:!0}),a=["simple","gradient","rotation","trig","exp","newton"];H("keydown",l=>{var u;if(l.target===document.body&&!l.ctrlKey&&!l.altKey&&!l.metaKey)switch(l.preventDefault(),l.key){case"ArrowLeft":n.value=a[(a.indexOf(n.value)-1+a.length)%a.length];break;case"ArrowRight":n.value=a[(a.indexOf(n.value)+1)%a.length];break;case"ArrowUp":d.value=M(d.value);break;case"ArrowDown":d.value=D(d.value);break;case"R":case"r":(u=b.value)==null||u.call(b);break}}),w.value.addEventListener("dblclick",l=>{l.preventDefault(),n.value!=="newton"&&!t.value.includes("m")?m.value=!m.value:t.value.includes("m")&&(g.value=!g.value)}),w.value.addEventListener("contextmenu",l=>{var k;if(l.metaKey)return;l.preventDefault();let u=!0;if(t.value.includes("m")||t.value.includes("p")||t.value.includes("t")){t.value.includes("p")&&(u=!1);const{x:W,y:Y}=e.mouseToCoords();t.value=t.value.replace(/m|p/g,`$(${W}+${Y}i)`).replace(/t/g,`@(${e.time})`)}else t.value.includes("$")||t.value.includes("@")?m.value?t.value=t.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):(t.value=t.value.replace(/\$\s*\([^)]*\)/g,"p").replace(/@\s*\([^)]*\)/g,"t"),u=!1):t.value.includes("c")?t.value=t.value.replace(/c/g,"m"):t.value=t.value+"+m";n.value!=="newton"&&!t.value.includes("m")&&(m.value=u),(k=x.value)==null||k.call(x)}),x.value=()=>setTimeout(()=>e.load($.replace("{{EQ}}",q(t.value)).replace("{{EQC}}",q(t.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[d.value]),e.setUniform("limit",z.value),e.setUniformOfInt("theme",[j.value]),e.setUniformOfInt("darkness",[V.value]),e.setUniform("minIter",I.value),e.setUniformOfInt("split",[n.value==="simple"&&t.value.includes("m")||T.value]),e.setUniformOfInt("altColors",[(n.value!=="simple"||t.value.includes("m"))&&E.value]),e.setUniformOfInt("initZ",[n.value==="newton"||t.value.includes("m")||m.value]),e.setUniformOfInt("dualPlot",[(t.value.includes("m")||t.value.includes("p"))&&g.value]),S.setGlsl(e),t.value.includes("m")){const{x:l,y:u}=e.mouseToCoords();e.setUniform("z_offset",l,u)}else if(t.value.includes("$")){const l=t.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(l){const u=+l[1],k=+l[2];e.setUniform("z_offset",Number.isFinite(u)?u:0,Number.isFinite(k)?k:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),b.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,a)=>(v(),h(ne,null,{options:r(()=>[i(L,{modelValue:U(d),"onUpdate:modelValue":a[0]||(a[0]=l=>B(d)?d.value=l:null),decrement:D,increment:M,label:"Detail Level:"},null,8,["modelValue"]),i(L,{modelValue:U(z),"onUpdate:modelValue":a[1]||(a[1]=l=>B(z)?z.value=l:null),decrement:R,increment:Q,label:"Fractal Size:"},null,8,["modelValue"]),i(p,{label:"Equation:"},{default:r(()=>[i(oe,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=l=>t.value=l)},null,8,["modelValue"]),x.value?(v(),h(K,{key:0,style:{"white-space":"pre"},onClick:x.value},{default:r(()=>[F(" Apply ")]),_:1},8,["onClick"])):y("",!0)]),_:1}),i(p,{label:"Theme:"},{default:r(()=>[i(ae,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value=l)},{default:r(()=>[ce,de,fe,me,pe,ve]),_:1},8,["modelValue"])]),_:1}),i(J,{sliders:U(S)},null,8,["sliders"]),i(p,{label:"Darkness Effect?"},{default:r(()=>[i(C,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=l=>V.value=l)},null,8,["modelValue"])]),_:1}),n.value!=="newton"&&n.value!=="simple"?(v(),h(p,{key:0,label:n.value==="rotation"?"Alternate Split?":n.value==="trig"?"Alternate Trig Functions?":n.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:r(()=>[i(C,{modelValue:T.value,"onUpdate:modelValue":a[5]||(a[5]=l=>T.value=l)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),n.value==="newton"||n.value==="trig"||n.value==="exp"?(v(),h(p,{key:1,label:n.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:r(()=>[i(C,{modelValue:E.value,"onUpdate:modelValue":a[6]||(a[6]=l=>E.value=l)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),n.value!=="newton"&&!t.value.includes("m")?(v(),h(p,{key:2,label:"Initialize Z?"},{default:r(()=>[i(C,{modelValue:m.value,"onUpdate:modelValue":a[7]||(a[7]=l=>m.value=l)},null,8,["modelValue"])]),_:1})):y("",!0),t.value.includes("m")||t.value.includes("p")?(v(),h(p,{key:3,label:"Dual Coloring?"},{default:r(()=>[i(C,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=l=>g.value=l)},null,8,["modelValue"])]),_:1})):y("",!0),i(p,{label:"Minimum Iterations"},{default:r(()=>[i(re,{modelValue:I.value,"onUpdate:modelValue":a[9]||(a[9]=l=>I.value=l),max:U(d),min:0},null,8,["modelValue","max"])]),_:1})]),buttons:r(()=>[b.value?(v(),h(K,{key:0,onClick:b.value},{default:r(()=>[F(" Reset Position ")]),_:1},8,["onClick"])):y("",!0)]),help:r(()=>[he,ge,be,xe,ye,_e,ze,we,ke,Ce,Ie,Ve,Te,Ee,Ue,qe,i(ue,{note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`,page:"Fractal Explorer"}),Fe,Pe,De,Me,Se,$e]),default:r(()=>[o("canvas",{ref_key:"canvas",ref:w},null,512)]),_:1}))}});export{Xe as _};
