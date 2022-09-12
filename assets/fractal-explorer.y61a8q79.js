import{u as M}from"./index.55wflef3.js";import{B as S}from"./Button.49gbgcb2.js";import{u as $,_ as j}from"./ColorSliders.vue_vue_type_script_setup_true_lang.5x2ux4ix.js";import{d as L,o as m,h as G,a as o,t as A,F as W,q as c,g as Y,aO as H,aA as J,c as p,w as i,b as r,u as F,aI as O,j as x,e as q}from"./index.3wtsgydi.js";import{D as X}from"./Dropdown.5andrccq.js";import{F as ee}from"./SharedNav.40at9hg6.js";import{F as te}from"./FullscreenDisplay.6alzznsv.js";import{I as K}from"./Incrementable.44806nyw.js";import{I as z}from"./InlineCheckboxField.67ybze61.js";import{L as v}from"./Labeled.29mn7ohi.js";import{g as T}from"./useGlsl.65muxzpz.js";import{s as d}from"./useOption.ujvp9hcq.js";import{M as le}from"./MovableCanvas2d.3k2tk05z.js";import"./_plugin-vue_export-helper.35ltfn2z.js";import"./InlineRangeField.4poaov81.js";import"./LogoLight.539ztpd2.js";import"./InlineField.1bs7kao1.js";import"./CoordinateCanvas2d.ui5o1n16.js";import"./WebGlCanvas.1rb17qef.js";const oe=o("h1",null,"Color Sliders",-1),ae=L({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(w){return(s,E)=>(m(),G(W,null,[oe,o("p",null,A(w.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+A(w.note&&` ${w.note}`),1)],64))}}),ne=q(" Apply "),ie=o("option",{value:"simple"},"Simple",-1),re=o("option",{value:"gradient"},"Gradient",-1),se=o("option",{value:"rotation"},"Rotation",-1),ue=o("option",{value:"trig"},"Trigonometric",-1),ce=o("option",{value:"exp"},"Exponential",-1),de=o("option",{value:"newton"},"Newton's Method",-1),me=q(" Reset Position "),fe=o("h1",null,"Moving the Explorer",-1),pe=o("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),ve=o("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),he=o("h1",null,"Adjusting Detail",-1),ge=o("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level." Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),be=o("h1",null,"Fractal Size",-1),xe=o("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),_e=o("h1",null,"The Equation",-1),ye=o("p",null,[q(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),o("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),q(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),ze=o("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),we=o("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),ke=o("h1",null,"Choosing a Theme",-1),Ce=o("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - (z^3 - 1) / 3z^2), it is recommended to use "Newton's Method" or check "Initialize Z". `,-1),Ve=o("h1",null,"Theme Checkboxes",-1),Ie=o("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),Te=o("h1",null,"Quick Actions",-1),qe=o("p",null," Right-clicking the canvas modifies your equation. It will primarily swap M and T for your current mouse position and time. If the current equation does not contain M or T, right-clicking will swap all instances of C for M. ",-1),Ee=o("p",null,' Double clicking will toggle "Dual Coloring" or "Initialize Z," depending on which one is currently shown. ',-1),Fe=o("p",null,"The left and right arrow keys swap through the various themes.",-1),Ue=o("p",null,"The up and down arrows adjust the detail level.",-1),Pe=o("p",null,"The R button resets the position of your fractal.",-1),Xe=L({__name:"fractal-explorer",setup(w){const s=M(100,5,1e3);d("detail",s);function E(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function U(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const _=M(2,.1,1/0);d("limit",_);function N(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function Z(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const l=c("z^2+c");d("equation",l);const n=c("simple");d("theme",n);const B={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},Q=Y(()=>B[n.value]),P=$(),k=c(!1);d("darkness",k);const C=c(!1);d("split",C);const V=c(!1);d("altColors",V);const f=c(!1);d("initZ",f);const h=c(!1);d("dualPlot",h);const D=`
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

  ${$.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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
  `,y=c(),g=c(),b=c();return H(()=>{if(!y.value)return;const e=new le(y.value,{fragmentString:D.replace("{{EQ}}",T(l.value)).replace("{{EQC}}",T(l.value.replace(/m/g,"c"))),saveBounds:!0}),a=["simple","gradient","rotation","trig","exp","newton"];J("keydown",t=>{var u;if(t.target===document.body&&!t.ctrlKey&&!t.altKey&&!t.metaKey)switch(t.preventDefault(),t.key){case"ArrowLeft":n.value=a[(a.indexOf(n.value)-1+a.length)%a.length];break;case"ArrowRight":n.value=a[(a.indexOf(n.value)+1)%a.length];break;case"ArrowUp":s.value=U(s.value);break;case"ArrowDown":s.value=E(s.value);break;case"R":case"r":(u=g.value)==null||u.call(g);break}}),y.value.addEventListener("dblclick",t=>{t.preventDefault(),n.value!=="newton"&&!l.value.includes("m")?f.value=!f.value:l.value.includes("m")&&(h.value=!h.value)}),y.value.addEventListener("contextmenu",t=>{var u;if(t.preventDefault(),l.value.includes("m")||l.value.includes("t")){const{x:I,y:R}=e.mouseToCoords();l.value=l.value.replace(/m/g,`$(${I}+${R}i)`).replace(/t/g,`@(${e.time})`)}else l.value.includes("$")||l.value.includes("@")?l.value=l.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):l.value.includes("c")?l.value=l.value.replace(/c/g,"m"):l.value=l.value+"+m";n.value!=="newton"&&!l.value.includes("m")&&(f.value=!0),(u=b.value)==null||u.call(b)}),b.value=()=>setTimeout(()=>e.load(D.replace("{{EQ}}",T(l.value)).replace("{{EQC}}",T(l.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[s.value]),e.setUniform("limit",_.value),e.setUniformOfInt("theme",[Q.value]),e.setUniformOfInt("darkness",[k.value]),e.setUniformOfInt("split",[n.value==="simple"&&l.value.includes("m")||C.value]),e.setUniformOfInt("altColors",[(n.value!=="simple"||l.value.includes("m"))&&V.value]),e.setUniformOfInt("initZ",[n.value==="newton"||l.value.includes("m")||f.value]),e.setUniformOfInt("dualPlot",[l.value.includes("m")&&h.value]),P.setGlsl(e),l.value.includes("m")){const{x:t,y:u}=e.mouseToCoords();e.setUniform("z_offset",t,u)}else if(l.value.includes("$")){const t=l.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(t){const u=+t[1],I=+t[2];e.setUniform("z_offset",Number.isFinite(u)?u:0,Number.isFinite(I)?I:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),g.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,a)=>(m(),p(te,null,{options:i(()=>[r(K,{modelValue:F(s),"onUpdate:modelValue":a[0]||(a[0]=t=>O(s)?s.value=t:null),decrement:E,increment:U,label:"Detail Level:"},null,8,["modelValue"]),r(K,{modelValue:F(_),"onUpdate:modelValue":a[1]||(a[1]=t=>O(_)?_.value=t:null),decrement:N,increment:Z,label:"Fractal Size:"},null,8,["modelValue"]),r(v,{label:"Equation:"},{default:i(()=>[r(ee,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value=t)},null,8,["modelValue"]),b.value?(m(),p(S,{key:0,style:{"white-space":"pre"},onClick:b.value},{default:i(()=>[ne]),_:1},8,["onClick"])):x("",!0)]),_:1}),r(v,{label:"Theme:"},{default:i(()=>[r(X,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=t=>n.value=t)},{default:i(()=>[ie,re,se,ue,ce,de]),_:1},8,["modelValue"])]),_:1}),r(j,{sliders:F(P)},null,8,["sliders"]),r(v,{label:"Darkness Effect?"},{default:i(()=>[r(z,{modelValue:k.value,"onUpdate:modelValue":a[4]||(a[4]=t=>k.value=t)},null,8,["modelValue"])]),_:1}),n.value!=="newton"&&n.value!=="simple"?(m(),p(v,{key:0,label:n.value==="rotation"?"Alternate Split?":n.value==="trig"?"Alternate Trig Functions?":n.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:i(()=>[r(z,{modelValue:C.value,"onUpdate:modelValue":a[5]||(a[5]=t=>C.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):x("",!0),n.value==="newton"||n.value==="trig"||n.value==="exp"?(m(),p(v,{key:1,label:n.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:i(()=>[r(z,{modelValue:V.value,"onUpdate:modelValue":a[6]||(a[6]=t=>V.value=t)},null,8,["modelValue"])]),_:1},8,["label"])):x("",!0),n.value!=="newton"&&!l.value.includes("m")?(m(),p(v,{key:2,label:"Initialize Z?"},{default:i(()=>[r(z,{modelValue:f.value,"onUpdate:modelValue":a[7]||(a[7]=t=>f.value=t)},null,8,["modelValue"])]),_:1})):x("",!0),l.value.includes("m")?(m(),p(v,{key:3,label:"Dual Coloring?"},{default:i(()=>[r(z,{modelValue:h.value,"onUpdate:modelValue":a[8]||(a[8]=t=>h.value=t)},null,8,["modelValue"])]),_:1})):x("",!0)]),buttons:i(()=>[g.value?(m(),p(S,{key:0,onClick:g.value},{default:i(()=>[me]),_:1},8,["onClick"])):x("",!0)]),help:i(()=>[fe,pe,ve,he,ge,be,xe,_e,ye,ze,we,ke,Ce,Ve,Ie,r(ae,{note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`,page:"Fractal Explorer"}),Te,qe,Ee,Fe,Ue,Pe]),default:i(()=>[o("canvas",{ref_key:"canvas",ref:y},null,512)]),_:1}))}});export{Xe as default};
