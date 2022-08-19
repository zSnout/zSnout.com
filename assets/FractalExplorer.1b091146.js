import{u as K}from"./index.5bb4d8df.js";import{B as P,_ as A}from"./VStack.1c4fdd7b.js";import{u as N,_ as te}from"./ColorSliders.c8e3f8df.js";import{d as I,o as f,f as L,a as t,t as D,F as le,c as h,w as u,q as oe,p as G,g as H,b as r,e as V,s as p,ah as Z,aM as ae,j as ne,u as U,aI as M,m as z}from"./index.103f168a.js";import{D as ie}from"./Dropdown.394a632f.js";import{H as se,F as re}from"./SharedNav.8af10a76.js";import{F as ue}from"./FullscreenDisplay.eafb7b2f.js";import{I as ce}from"./InlineField.72dc575f.js";import{I as C}from"./InlineCheckboxField.cbedbf7d.js";import{L as g}from"./Labeled.7dbaff3b.js";import{g as E}from"./useGlsl.9495b1d0.js";import{s as v}from"./useOption.fa7266bd.js";import{M as de}from"./MovableCanvas2d.2030e073.js";import{I as me}from"./InlineRangeField.b93965fa.js";import"./CoordinateCanvas2d.12b4f2a5.js";import"./WebGlCanvas.3e712317.js";const fe=t("h1",null,"Color Sliders",-1),pe=I({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(a){return(c,m)=>(f(),L(le,null,[fe,t("p",null,D(a.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them and experiment on various pages."+D(a.note&&` ${a.note}`),1)],64))}}),Q=I({__name:"IconButton",setup(a){return(c,m)=>(f(),h(P,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:u(()=>[oe(c.$slots,"default")]),_:3}))}});const ve={},he=a=>(G("data-v-5f9d2042"),a=a(),H(),a),_e={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ge=he(()=>t("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),ye=[ge];function be(a,c){return f(),L("svg",_e,ye)}var xe=A(ve,[["render",be],["__scopeId","data-v-5f9d2042"]]);const we={},ze=a=>(G("data-v-78d47d1a"),a=a(),H(),a),ke={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},Ce=ze(()=>t("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),Ve=[Ce];function Ie(a,c){return f(),L("svg",ke,Ve)}var $e=A(we,[["render",Ie],["__scopeId","data-v-78d47d1a"]]);const Fe=I({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(a){return(c,m)=>(f(),h(ce,{autocomplete:a.autocomplete,"model-value":""+a.modelValue,placeholder:a.placeholder,type:"number","onUpdate:modelValue":m[0]||(m[0]=d=>c.$emit("update:modelValue",+d))},null,8,["autocomplete","model-value","placeholder"]))}});const Se=I({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:a=>a-1},increment:{type:Function,default:a=>a+1},label:null},emits:["update:modelValue"],setup(a){function c({target:m}){var d;(d=m.querySelector("input"))==null||d.focus()}return(m,d)=>(f(),h(se,null,{default:u(()=>[r(Q,{onClick:d[0]||(d[0]=_=>m.$emit("update:modelValue",a.decrement(a.modelValue)))},{default:u(()=>[r(xe)]),_:1}),t("p",{class:"label",onClick:c},[V(D(a.label)+" ",1),r(Fe,{"model-value":a.modelValue,"onUpdate:modelValue":d[1]||(d[1]=_=>m.$emit("update:modelValue",_))},null,8,["model-value"])]),r(Q,{onClick:d[2]||(d[2]=_=>m.$emit("update:modelValue",a.increment(a.modelValue)))},{default:u(()=>[r($e)]),_:1})]),_:1}))}});var j=A(Se,[["__scopeId","data-v-6b56d56b"]]);const Te=V(" Apply "),qe=t("option",{value:"simple"},"Simple",-1),Ue=t("option",{value:"gradient"},"Gradient",-1),Ee=t("option",{value:"rotation"},"Rotation",-1),Me=t("option",{value:"trig"},"Trigonometric",-1),Pe=t("option",{value:"exp"},"Exponential",-1),De=t("option",{value:"newton"},"Newton's Method",-1),Ae=V(" Reset Position "),Le=t("h1",null,"Moving the Explorer",-1),Re=t("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),Oe=t("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),Be=t("h1",null,"Adjusting Detail",-1),Ke=t("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level." Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),Ne=t("h1",null,"Fractal Size",-1),Ze=t("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),Qe=t("h1",null,"The Equation",-1),je=t("p",null,[V(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),t("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),V(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Ge=t("p",null,' Setting a new equation requires modifying several aspects of a program, so it will not be automatically applied unless you select the "Apply" button. ',-1),He=t("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),We=t("h1",null,"Choosing a Theme",-1),Ye=t("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - (z^3 - 1) / 3z^2), it is recommended to use "Newton's Method" or check "Initialize Z". `,-1),Je=t("h1",null,"Theme Checkboxes",-1),Xe=t("p",null," At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. The best way to understand what they do is to play around with them and learn by doing, not reading. ",-1),et=t("h1",null,"Resolution",-1),tt=t("p",null,' If you have a device with a large screen, zSnout may start to drag down the performance of your computer. To remedy this, decrease the "Resolution" slider. Lowering this slider will increase render speed but will decrease the image quality, so choose carefully. ',-1),lt=t("p",null," If you start from a low resolution and switch to a high one, the canvas may be shrunk. In this case, reload the page to fix this and any other issues that may occur. ",-1),ot=t("h1",null,"Quick Actions",-1),at=t("p",null," Right-clicking the canvas modifies your equation. It will primarily swap M and T for your current mouse position and time. If the current equation does not contain M or T, right-clicking will swap all instances of C for M. ",-1),nt=t("p",null,' Double clicking will toggle "Dual Coloring" or "Initialize Z," depending on which one is currently shown. ',-1),it=t("p",null,"The left and right arrow keys swap through the various themes.",-1),st=t("p",null,"The up and down arrows adjust the detail level.",-1),rt=t("p",null,"The R button resets the position of your fractal.",-1),Ct=I({__name:"FractalExplorer",setup(a){const c=K(100,5,1e3);v("detail",c);function m(l){return l<=10?5:l<=25?5*Math.ceil((l-5)/5):l<=50?25:50*Math.ceil((l-50)/50)}function d(l){return l<10?10:l<25?5*~~((l+5)/5):l<50?50:50*~~((l+50)/50)}const _=K(2,.1,1/0);v("limit",_);function W(l){return l<=2?(Math.ceil(10*l)-1)/10:Math.ceil(l-1)}function Y(l){return l<2?(~~(10*l)+1)/10:~~(l+1)}const o=p("z^2+c");v("equation",o);const i=p("simple");v("theme",i);const J={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},X=Z(()=>J[i.value]),R=N(),$=p(!1);v("darkness",$);const F=p(!1);v("split",F);const S=p(!1);v("altColors",S);const y=p(!1);v("initZ",y);const b=p(!1);v("dualPlot",b);const O=`
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

  ${["{{EQ}}","{{EQC}}"].map((l,e)=>`
  vec4 color${e}() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    if (${e} == 0 && dualPlot) pos = 2.0 * pos - vec2(1.0, 0.0);
    pos = pos * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${e} == 0 && initZ || theme == 4) z = pos;

    float iter = 0.0;
    for (float i = 0.0; i < maxIterations; i++) {
      if (i >= detail) break;
      ppz = pz;
      pz = z;
      z = ${l};
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
  `,k=p(),x=p(),w=p(),B=p(1);let s;const T=Z({get(){return B.value},set(l){B.value=l,s==null||s.setPixelRatio(l)}});return ae(()=>{if(!k.value)return;s=new de(k.value,{fragmentString:O.replace("{{EQ}}",E(o.value)).replace("{{EQC}}",E(o.value.replace(/m/g,"c"))),saveBounds:!0}),v("resolution",T);const l=["simple","gradient","rotation","trig","exp","newton"];ne("keydown",e=>{var n;if(e.target===document.body&&!e.ctrlKey&&!e.altKey&&!e.metaKey)switch(e.preventDefault(),e.key){case"ArrowLeft":i.value=l[(l.indexOf(i.value)-1+l.length)%l.length];break;case"ArrowRight":i.value=l[(l.indexOf(i.value)+1)%l.length];break;case"ArrowUp":c.value=d(c.value);break;case"ArrowDown":c.value=m(c.value);break;case"R":case"r":(n=x.value)==null||n.call(x);break}}),k.value.addEventListener("dblclick",e=>{e.preventDefault(),i.value!=="newton"&&!o.value.includes("m")?y.value=!y.value:o.value.includes("m")&&(b.value=!b.value)}),k.value.addEventListener("contextmenu",e=>{var n;if(e.preventDefault(),o.value.includes("m")||o.value.includes("t")){const{x:q,y:ee}=s.mouseToCoords();o.value=o.value.replace(/m/g,`$(${q}+${ee}i)`).replace(/t/g,`@(${s.time})`)}else o.value.includes("$")||o.value.includes("@")?o.value=o.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"):o.value.includes("c")?o.value=o.value.replace(/c/g,"m"):o.value=o.value+"+m";i.value!=="newton"&&!o.value.includes("m")&&(y.value=!0),(n=w.value)==null||n.call(w)}),w.value=()=>setTimeout(()=>s.load(O.replace("{{EQ}}",E(o.value)).replace("{{EQC}}",E(o.value.replace(/m/g,"c"))))),s.on("render",()=>{if(s.setUniform("detail",[c.value]),s.setUniform("limit",_.value),s.setUniformOfInt("theme",[X.value]),s.setUniformOfInt("darkness",[$.value]),s.setUniformOfInt("split",[i.value==="simple"&&o.value.includes("m")||F.value]),s.setUniformOfInt("altColors",[(i.value!=="simple"||o.value.includes("m"))&&S.value]),s.setUniformOfInt("initZ",[i.value==="newton"||o.value.includes("m")||y.value]),s.setUniformOfInt("dualPlot",[o.value.includes("m")&&b.value]),R.setGlsl(s),o.value.includes("m")){const{x:e,y:n}=s.mouseToCoords();s.setUniform("z_offset",e,n)}else if(o.value.includes("$")){const e=o.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(e){const n=+e[1],q=+e[2];s.setUniform("z_offset",Number.isFinite(n)?n:0,Number.isFinite(q)?q:0)}else s.setUniform("z_offset",0,0)}else s.setUniform("z_offset",0,0)}),x.value=()=>{s.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(l,e)=>(f(),h(ue,null,{options:u(()=>[r(j,{modelValue:U(c),"onUpdate:modelValue":e[0]||(e[0]=n=>M(c)?c.value=n:null),decrement:m,increment:d,label:"Detail Level:"},null,8,["modelValue"]),r(j,{modelValue:U(_),"onUpdate:modelValue":e[1]||(e[1]=n=>M(_)?_.value=n:null),decrement:W,increment:Y,label:"Fractal Size:"},null,8,["modelValue"]),r(g,{label:"Equation:"},{default:u(()=>[r(re,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=n=>o.value=n)},null,8,["modelValue"]),w.value?(f(),h(P,{key:0,style:{"white-space":"pre"},onClick:w.value},{default:u(()=>[Te]),_:1},8,["onClick"])):z("",!0)]),_:1}),r(g,{label:"Theme:"},{default:u(()=>[r(ie,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=n=>i.value=n)},{default:u(()=>[qe,Ue,Ee,Me,Pe,De]),_:1},8,["modelValue"])]),_:1}),r(te,{sliders:U(R)},null,8,["sliders"]),r(g,{label:"Darkness Effect?"},{default:u(()=>[r(C,{modelValue:$.value,"onUpdate:modelValue":e[4]||(e[4]=n=>$.value=n)},null,8,["modelValue"])]),_:1}),i.value!=="newton"&&i.value!=="simple"?(f(),h(g,{key:0,label:i.value==="rotation"?"Alternate Split?":i.value==="trig"?"Alternate Trig Functions?":i.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:u(()=>[r(C,{modelValue:F.value,"onUpdate:modelValue":e[5]||(e[5]=n=>F.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):z("",!0),i.value==="newton"||i.value==="trig"||i.value==="exp"?(f(),h(g,{key:1,label:i.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:u(()=>[r(C,{modelValue:S.value,"onUpdate:modelValue":e[6]||(e[6]=n=>S.value=n)},null,8,["modelValue"])]),_:1},8,["label"])):z("",!0),i.value!=="newton"&&!o.value.includes("m")?(f(),h(g,{key:2,label:"Initialize Z?"},{default:u(()=>[r(C,{modelValue:y.value,"onUpdate:modelValue":e[7]||(e[7]=n=>y.value=n)},null,8,["modelValue"])]),_:1})):z("",!0),o.value.includes("m")?(f(),h(g,{key:3,label:"Dual Coloring?"},{default:u(()=>[r(C,{modelValue:b.value,"onUpdate:modelValue":e[8]||(e[8]=n=>b.value=n)},null,8,["modelValue"])]),_:1})):z("",!0),r(g,{label:"Resolution:"},{default:u(()=>[r(me,{modelValue:U(T),"onUpdate:modelValue":e[9]||(e[9]=n=>M(T)?T.value=n:null),max:1,min:.1,step:"any"},null,8,["modelValue","min"])]),_:1})]),buttons:u(()=>[x.value?(f(),h(P,{key:0,onClick:x.value},{default:u(()=>[Ae]),_:1},8,["onClick"])):z("",!0)]),help:u(()=>[Le,Re,Oe,Be,Ke,Ne,Ze,Qe,je,Ge,He,We,Ye,Je,Xe,r(pe,{note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`,page:"Fractal Explorer"}),et,tt,lt,ot,at,nt,it,st,rt]),default:u(()=>[t("canvas",{ref_key:"canvas",ref:k},null,512)]),_:1}))}});export{Ct as default};
