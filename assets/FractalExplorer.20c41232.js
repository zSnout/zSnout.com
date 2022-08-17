import{u as D}from"./index.f45f62cf.js";import{B as F,_ as M}from"./Button.c3a7b0cc.js";import{u as N,_ as Z}from"./ColorSliders.a4e6ffb1.js";import{d as x,o as m,f as T,a as l,t as E,F as j,h as Y,c as h,w as i,n as J,p as A,g as K,b as s,e as b,k as p,a9 as X,aL as ee,u as S,aH as B,m as V}from"./index.b9970ef9.js";import{D as te}from"./Dropdown.b46b1528.js";import{H as oe,F as le}from"./BookmarkIcon.261f9e8c.js";import{F as ae}from"./FullscreenDisplay.a8c334ca.js";import{I as ne}from"./InlineField.f6092d31.js";import{I as q}from"./InlineCheckboxField.8e25b7ed.js";import{L as y}from"./Labeled.5cfc5b36.js";import{g as I}from"./useGlsl.e7d88fb3.js";import{s as g}from"./useOption.d9c7abf2.js";import{M as re}from"./MovableCanvas2d.70f5ebed.js";import"./InlineRangeField.6a75b4b5.js";import"./CoordinateCanvas2d.18bdffaa.js";import"./WebGlCanvas.e0c96e5c.js";const se=l("h1",null,"Color Sliders",-1),ie=Y("<p><strong>Color Offset</strong> rotates through the color wheel. If you slide it a bit, red will turn to orange, orange to yellow, etc. If you slide it a lot, red will turn to green, orange to blue, etc. </p><p><strong>Color Repetition</strong> modifies how often colors appear. By moving it, you may make a color cycle of red-orange-yellow-green-blue-purple change to red-green-blue-red-green-blue in the same amount of space. Notice how red appears more often now. </p><p><strong>Color Spectrum</strong> changes how many colors appear. By setting this to halfway, only half of the colors on the color wheel will appear (e.g. red, orange, and yellow). </p><p><strong>Separation</strong> changes the level of smoothness between colors. If you increase &quot;Separation&quot;, the fractal may only use two or three colors instead of a range of many. For example, a palette using every color in the rainbow may switch to only using red, lime, turquoise, and purple. </p><p><strong>Randomness</strong> changes each color in the scene by a random amount. This amount is animated and changes from frame to frame. The slider controls how much each color is allowed to deviate from its normal value. </p><p><strong>Grayscale</strong> forces colors that are within a range of grayness to turn completely gray. For example, setting &quot;Grayscale&quot; to a low value would only turn white, black, and very dark or very light colors into their grayscale forms, while preserving other colors. </p><p><strong>Overcoloring</strong> chooses how much to &quot;overcolorify&quot; pixels. A fully overcolored frame will transform any light red and dark red to the brightest form of red possible. While similar to saturation, this has a different effect. </p>",7),ue=x({__name:"ColorSlidersHelp",props:{page:null,note:null},setup(t){return(u,d)=>(m(),T(j,null,[se,l("p",null,E(t.page)+" and many other pages on zSnout share the same set of sliders, so it's good to get used to them. The best way to understand the sliders is to play with them, although a description is included anyway."+E(t.note&&` ${t.note}`),1),ie],64))}}),L=x({__name:"IconButton",setup(t){return(u,d)=>(m(),h(F,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:i(()=>[J(u.$slots,"default")]),_:3}))}});const ce={},de=t=>(A("data-v-0298e8c4"),t=t(),K(),t),me={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},fe=de(()=>l("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),pe=[fe];function he(t,u){return m(),T("svg",me,pe)}var ve=M(ce,[["render",he],["__scopeId","data-v-0298e8c4"]]);const ge={},_e=t=>(A("data-v-079820ed"),t=t(),K(),t),ye={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},be=_e(()=>l("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),xe=[be];function we(t,u){return m(),T("svg",ye,xe)}var ze=M(ge,[["render",we],["__scopeId","data-v-079820ed"]]);const ke=x({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(u,d)=>(m(),h(ne,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":d[0]||(d[0]=c=>u.$emit("update:modelValue",+c))},null,8,["autocomplete","model-value","placeholder"]))}});const Ce=x({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function u({target:d}){var c;(c=d.querySelector("input"))==null||c.focus()}return(d,c)=>(m(),h(oe,null,{default:i(()=>[s(L,{onClick:c[0]||(c[0]=f=>d.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:i(()=>[s(ve)]),_:1}),l("p",{class:"label",onClick:u},[b(E(t.label)+" ",1),s(ke,{"model-value":t.modelValue,"onUpdate:modelValue":c[1]||(c[1]=f=>d.$emit("update:modelValue",f))},null,8,["model-value"])]),s(L,{onClick:c[2]||(c[2]=f=>d.$emit("update:modelValue",t.increment(t.modelValue)))},{default:i(()=>[s(ze)]),_:1})]),_:1}))}});var O=M(Ce,[["__scopeId","data-v-6b56d56b"]]);const Ve=b(" Apply "),Ie=l("option",{value:"simple"},"Simple",-1),$e=l("option",{value:"gradient"},"Gradient",-1),Se=l("option",{value:"rotation"},"Rotation",-1),qe=l("option",{value:"trig"},"Trigonometric",-1),Fe=l("option",{value:"exp"},"Exponential",-1),Ee=l("option",{value:"newton"},"Newton's Method",-1),Me=b(" Reset Position "),Te=l("h1",null,"Moving the Explorer",-1),Ue=l("p",null," On mobile, move the image using one finger and pinch to zoom using two fingers. ",-1),Pe=l("p",null," On desktop, click and drag using a mouse or trackpad to move the image and scroll using a mouse or pinch on a trackpad using two fingers to zoom. ",-1),De=l("h1",null,"Adjusting Detail",-1),Ne=l("p",null,' If you zoom in for a while, the fractal will start to have flat edges. To combat this, increase the "Detail Level". Increasing it makes your computer slower and uses more battery, so adjust this carefully. ',-1),Be=l("h1",null,"Fractal Size",-1),Le=l("p",null,' If you see sharp cutoffs at the edges of a fractal, try increasing the "Fractal Size" to see more of the image. Alternatively, shrink the value to crop certain parts of your fractal. ',-1),Oe=l("h1",null,"The Equation",-1),Ae=l("p",null,[b(' When creating a fractal, try putting interesting equations into the "Equation" field. The Z and C variables are standard in fractals. Check out '),l("a",{href:"https://www.youtube.com/watch?v=FFftmWSzgmk&ab_channel=Numberphile",target:"_blank"}," this video behind the Mandelbrot Set "),b(" for more information. Additionally, zSnout provides M (the current mouse position), T (the time that the page has been loaded for), and e, i, and pi. You may use the +, -, *, /, and ^ operators. ")],-1),Ke=l("p",null," If you have an equation with M and/or T, right-click the canvas to replace the M and T variables with their values. ",-1),Ge=l("h1",null,"Choosing a Theme",-1),Qe=l("p",null,` The Fractal Explorer has six different color themes. You may select one via a dropdown. When using an equation without C or M (e.g. z - f(z) / f'(z)), it is recommended to use "Newton's Method" or the "Simple" theme with "Initialize Z" checked. `,-1),He=l("h1",null,"Theme Checkboxes",-1),Re=l("p",null,' At the bottom of the options page, you will find two to three checkboxes. These are specific to each theme. You may select or deselect any of these to produce unique results for each theme. Note that the "Simple" theme has two checkboxes ("Initialize Z" and "Dual Coloring") that may be hidden depending on whether your equation uses M. ',-1),ct=x({__name:"FractalExplorer",setup(t){const u=D(100,5,1e3);g("detail",u);function d(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function c(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const f=D(2,.1,1/0);g("limit",f);function G(e){return e<=2?(Math.ceil(10*e)-1)/10:Math.ceil(e-1)}function Q(e){return e<2?(~~(10*e)+1)/10:~~(e+1)}const o=p("z^2+c");g("equation",o);const n=p("simple");g("theme",n);const H={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},R=X(()=>H[n.value]),U=N(),w=p(!1);g("darkness",w);const v=p(!1);g("split",v);const z=p(!1);g("altColors",z);const P=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;
  uniform vec2 z_offset;

  ${N.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

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

  ${["{{EQ}}","{{EQC}}"].map((e,a)=>`
  vec4 color${a}() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;

    vec2 pz, ppz, nz, c = pos, z;
    vec3 sz;

    if (${a} == 0 && (theme == 4 || theme == 1 && split)) z = pos - 2.0 * z_offset;

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
    if (theme == 1 && altColors) {
      gl_FragColor = 0.6 * color0() + 0.4 * color1();
    } else {
      gl_FragColor = color0();
    }
  }
  `,k=p(),$=p(),_=p();return ee(()=>{if(!k.value)return;const e=new re(k.value,{fragmentString:P.replace("{{EQ}}",I(o.value)).replace("{{EQC}}",I(o.value.replace(/m/g,"c"))),saveBounds:!0});k.value.addEventListener("contextmenu",a=>{var r;if(a.preventDefault(),o.value.includes("m")||o.value.includes("t")){const{x:C,y:W}=e.mouseToCoords();o.value=o.value.replace(/m/g,`$(${C}+${W}i)`).replace(/t/g,`@(${e.time})`)}else o.value.includes("$")||o.value.includes("@")?(o.value=o.value.replace(/\$\s*\([^)]*\)/g,"m").replace(/@\s*\([^)]*\)/g,"t"),n.value==="simple"&&(v.value=!0)):o.value.includes("c")?(o.value=o.value.replace(/c/g,"m"),n.value==="simple"&&(v.value=!0)):(o.value=o.value+"+m",n.value==="simple"&&(v.value=!0));(r=_.value)==null||r.call(_)}),_.value=()=>setTimeout(()=>e.load(P.replace("{{EQ}}",I(o.value)).replace("{{EQC}}",I(o.value.replace(/m/g,"c"))))),e.on("render",()=>{if(e.setUniform("detail",[u.value]),e.setUniform("limit",f.value),e.setUniformOfInt("theme",[R.value]),e.setUniformOfInt("darkness",[w.value]),e.setUniformOfInt("split",[n.value==="simple"&&o.value.includes("m")||v.value]),e.setUniformOfInt("altColors",[(n.value!=="simple"||o.value.includes("m"))&&z.value]),U.setGlsl(e),o.value.includes("m")){const{x:a,y:r}=e.mouseToCoords();e.setUniform("z_offset",a,r)}else if(o.value.includes("$")){const a=o.value.match(/\$\s*\(\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)i\s*\)/);if(a){const r=+a[1],C=+a[2];e.setUniform("z_offset",Number.isFinite(r)?r:0,Number.isFinite(C)?C:0)}else e.setUniform("z_offset",0,0)}else e.setUniform("z_offset",0,0)}),$.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,a)=>(m(),h(ae,null,{options:i(()=>[s(O,{modelValue:S(u),"onUpdate:modelValue":a[0]||(a[0]=r=>B(u)?u.value=r:null),decrement:d,increment:c,label:"Detail Level:"},null,8,["modelValue"]),s(O,{modelValue:S(f),"onUpdate:modelValue":a[1]||(a[1]=r=>B(f)?f.value=r:null),decrement:G,increment:Q,label:"Fractal Size:"},null,8,["modelValue"]),s(y,{label:"Equation:"},{default:i(()=>[s(le,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=r=>o.value=r)},null,8,["modelValue"]),_.value?(m(),h(F,{key:0,style:{"white-space":"pre"},onClick:_.value},{default:i(()=>[Ve]),_:1},8,["onClick"])):V("",!0)]),_:1}),s(y,{label:"Theme:"},{default:i(()=>[s(te,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=r=>n.value=r)},{default:i(()=>[Ie,$e,Se,qe,Fe,Ee]),_:1},8,["modelValue"])]),_:1}),s(Z,{sliders:S(U)},null,8,["sliders"]),s(y,{label:"Darkness Effect?"},{default:i(()=>[s(q,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=r=>w.value=r)},null,8,["modelValue"])]),_:1}),n.value!=="newton"&&(n.value!=="simple"||!o.value.includes("m"))?(m(),h(y,{key:0,label:n.value==="simple"?"Initialize Z?":n.value==="rotation"?"Alternate Split?":n.value==="trig"?"Alternate Trig Functions?":n.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:i(()=>[s(q,{modelValue:v.value,"onUpdate:modelValue":a[5]||(a[5]=r=>v.value=r)},null,8,["modelValue"])]),_:1},8,["label"])):V("",!0),n.value==="newton"||n.value==="trig"||n.value==="exp"||n.value==="simple"&&o.value.includes("m")?(m(),h(y,{key:1,label:n.value==="newton"?"3D Effect?":n.value==="simple"?"Dual Coloring?":"Alternate Coloring?"},{default:i(()=>[s(q,{modelValue:z.value,"onUpdate:modelValue":a[6]||(a[6]=r=>z.value=r)},null,8,["modelValue"])]),_:1},8,["label"])):V("",!0)]),buttons:i(()=>[$.value?(m(),h(F,{key:0,onClick:$.value},{default:i(()=>[Me]),_:1},8,["onClick"])):V("",!0)]),help:i(()=>[Te,Ue,Pe,De,Ne,Be,Le,Oe,Ae,Ke,Ge,Qe,He,Re,s(ue,{page:"Fractal Explorer",note:`Note that
    "Grayscale" and "Overcoloring" only have effects in themes with gray colors
    ("Gradient", "Trigonometric", and "Exponential").`})]),default:i(()=>[l("canvas",{ref_key:"canvas",ref:k},null,512)]),_:1}))}});export{ct as default};
