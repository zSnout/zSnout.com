import{u as M}from"./index.5febba4b.js";import{B as $,_ as F}from"./VStack.137a1a4b.js";import{u as U,_ as Q}from"./ColorSliders.30300fec.js";import{D as j}from"./Dropdown.636dc14d.js";import{H as J,F as W}from"./BookmarkIcon.e4323aad.js";import{F as X}from"./FullscreenDisplay.93b5e434.js";import{d as V,o as c,c as p,w as r,n as Y,f as D,p as L,g as K,a as d,b as n,e as P,t as Z,k as f,a9 as ee,aL as te,u as k,aH as q,m as C}from"./index.1c7c9b41.js";import{I as le}from"./InlineField.acc8dd45.js";import{I}from"./InlineCheckboxField.020f9acf.js";import{L as b}from"./Labeled.bc464b30.js";import{g as oe}from"./useGlsl.63a1ed16.js";import{s as _}from"./useOption.67ef6fb6.js";import{M as ne}from"./MovableCanvas2d.16011337.js";import"./InlineRangeField.8fea1c12.js";import"./CoordinateCanvas2d.6c638996.js";import"./WebGlCanvas.58e81487.js";const E=V({__name:"IconButton",setup(t){return(i,u)=>(c(),p($,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:r(()=>[Y(i.$slots,"default")]),_:3}))}});const ae={},re=t=>(L("data-v-0298e8c4"),t=t(),K(),t),ie={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},se=re(()=>d("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),ue=[se];function ce(t,i){return c(),D("svg",ie,ue)}var de=F(ae,[["render",ce],["__scopeId","data-v-0298e8c4"]]);const me={},fe=t=>(L("data-v-079820ed"),t=t(),K(),t),pe={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},ve=fe(()=>d("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),_e=[ve];function ge(t,i){return c(),D("svg",pe,_e)}var be=F(me,[["render",ge],["__scopeId","data-v-079820ed"]]);const xe=V({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(t){return(i,u)=>(c(),p(le,{autocomplete:t.autocomplete,"model-value":""+t.modelValue,placeholder:t.placeholder,type:"number","onUpdate:modelValue":u[0]||(u[0]=s=>i.$emit("update:modelValue",+s))},null,8,["autocomplete","model-value","placeholder"]))}});const ze=V({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:t=>t-1},increment:{type:Function,default:t=>t+1},label:null},emits:["update:modelValue"],setup(t){function i({target:u}){var s;(s=u.querySelector("input"))==null||s.focus()}return(u,s)=>(c(),p(J,null,{default:r(()=>[n(E,{onClick:s[0]||(s[0]=m=>u.$emit("update:modelValue",t.decrement(t.modelValue)))},{default:r(()=>[n(de)]),_:1}),d("p",{class:"label",onClick:i},[P(Z(t.label)+" ",1),n(xe,{"model-value":t.modelValue,"onUpdate:modelValue":s[1]||(s[1]=m=>u.$emit("update:modelValue",m))},null,8,["model-value"])]),n(E,{onClick:s[2]||(s[2]=m=>u.$emit("update:modelValue",t.increment(t.modelValue)))},{default:r(()=>[n(be)]),_:1})]),_:1}))}});var B=F(ze,[["__scopeId","data-v-6b56d56b"]]);const ye=P(" Apply "),he=d("option",{value:"simple"},"Simple",-1),Ce=d("option",{value:"gradient"},"Gradient",-1),Ve=d("option",{value:"rotation"},"Rotation",-1),we=d("option",{value:"trig"},"Trigonometric",-1),ke=d("option",{value:"exp"},"Exponential",-1),Ie=d("option",{value:"newton"},"Newton's Method",-1),$e=P(" Reset Position "),Re=V({__name:"FractalExplorer",setup(t){const i=M(100,5,1e3);_("detail",i);function u(e){return e<=10?5:e<=25?5*Math.ceil((e-5)/5):e<=50?25:50*Math.ceil((e-50)/50)}function s(e){return e<10?10:e<25?5*~~((e+5)/5):e<50?50:50*~~((e+50)/50)}const m=M(2,.1,1/0);_("limit",m);function N(e){return e<=2?Math.ceil(10*(e-.1))/10:Math.ceil(e-1)}function T(e){return e<2?~~(10*(e+.1))/10:~~(e+1)}const v=f("z^2+c");_("equation",v);const a=f("simple");_("theme",a);const A={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},O=ee(()=>A[a.value]),S=U(),x=f(!1);_("darkness",x);const z=f(!1);_("split",z);const y=f(!1);_("altColors",y);const H=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;

  ${U.toString({addDarkness:"if (darkness && theme == 1) hsv.z = mod(i, 0.5);"})}

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 m;

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

    if (theme == 4 || theme == 1 && split) z = pos;

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
  `,h=f(),w=f(),g=f();return te(()=>{if(!h.value)return;const e=new ne(h.value,{fragmentString:H.replace("{{EQ}}",oe(v.value)),saveBounds:!0});h.value.addEventListener("contextmenu",l=>{var o;if(v.value.includes("m")){const{x:R,y:G}=e.mouseToCoords();l.preventDefault(),v.value=v.value.replaceAll("m",`(${R} + ${G}i)`),(o=g.value)==null||o.call(g)}}),g.value=()=>setTimeout(()=>location.reload()),e.on("render",()=>{e.setUniform("detail",[i.value]),e.setUniform("limit",m.value),e.setUniformOfInt("theme",[O.value]),e.setUniformOfInt("darkness",[x.value]),e.setUniformOfInt("split",[z.value]),e.setUniformOfInt("altColors",[y.value]),S.setGlsl(e)}),w.value=()=>{e.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(e,l)=>(c(),p(X,null,{options:r(()=>[n(B,{modelValue:k(i),"onUpdate:modelValue":l[0]||(l[0]=o=>q(i)?i.value=o:null),decrement:u,increment:s,label:"Detail Level:"},null,8,["modelValue"]),n(B,{modelValue:k(m),"onUpdate:modelValue":l[1]||(l[1]=o=>q(m)?m.value=o:null),decrement:N,increment:T,label:"Fractal Size:"},null,8,["modelValue"]),n(b,{label:"Equation:"},{default:r(()=>[n(W,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o)},null,8,["modelValue"]),g.value?(c(),p($,{key:0,style:{"white-space":"pre"},onClick:g.value},{default:r(()=>[ye]),_:1},8,["onClick"])):C("",!0)]),_:1}),n(b,{label:"Theme:"},{default:r(()=>[n(j,{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=o=>a.value=o)},{default:r(()=>[he,Ce,Ve,we,ke,Ie]),_:1},8,["modelValue"])]),_:1}),n(Q,{sliders:k(S)},null,8,["sliders"]),n(b,{label:"Darkness Effect?"},{default:r(()=>[n(I,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=o=>x.value=o)},null,8,["modelValue"])]),_:1}),a.value!=="newton"?(c(),p(b,{key:0,label:a.value==="simple"?"Mimic Newton's Method?":a.value==="rotation"?"Alternate Split?":a.value==="trig"?"Alternate Trig Functions?":a.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:r(()=>[n(I,{modelValue:z.value,"onUpdate:modelValue":l[5]||(l[5]=o=>z.value=o)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0),a.value==="newton"||a.value==="trig"||a.value==="exp"||a.value==="simple"?(c(),p(b,{key:1,label:a.value==="newton"?"3D Effect?":a.value==="simple"?"Reverse Coloring?":"Alternate Coloring?"},{default:r(()=>[n(I,{modelValue:y.value,"onUpdate:modelValue":l[6]||(l[6]=o=>y.value=o)},null,8,["modelValue"])]),_:1},8,["label"])):C("",!0)]),buttons:r(()=>[w.value?(c(),p($,{key:0,onClick:w.value},{default:r(()=>[$e]),_:1},8,["onClick"])):C("",!0)]),default:r(()=>[d("canvas",{ref_key:"canvas",ref:h},null,512)]),_:1}))}});export{Re as default};
