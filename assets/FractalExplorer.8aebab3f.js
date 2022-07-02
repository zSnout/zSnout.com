import{d as z,o as h,c as _,w as d,n as ae,f as A,p as Z,g as J,a as g,aq as se,b as i,e as q,t as W,ac as N,u as x,as as H,k as f,B as re,an as ie,x as Q,m as S}from"./index.70e8d914.js";import{B as R,_ as U,H as ue}from"./Modal.dc2c4486.js";import{D as ce}from"./Dropdown.2fc0435d.js";import{F as de}from"./Field.fbcee86d.js";import{F as pe}from"./FullscreenDisplay.97a481dc.js";import{I as D}from"./InlineCheckboxField.6a9bba34.js";import{I as K}from"./InlineRangeField.d107cdbe.js";import{L as b}from"./Labeled.a6f40f2f.js";import{s as v}from"./useOption.675ef537.js";import{M as fe}from"./MovableCanvas2d.453077cb.js";import"./CoordinateCanvas2d.cc97fa30.js";import"./WebGlCanvas.0a2cbbcc.js";const G=z({__name:"IconButton",setup(e){return(a,l)=>(h(),_(R,{center:"",style:{width:"2.5em",height:"2.25em"}},{default:d(()=>[ae(a.$slots,"default")]),_:3}))}});const me={},ve=e=>(Z("data-v-0298e8c4"),e=e(),J(),e),he={class:"icon",viewBox:"0 0 485.064 485.064",xmlns:"http://www.w3.org/2000/svg"},ge=ve(()=>g("path",{d:`M458.736,181.097H26.334C11.793,181.097,0,192.884,0,207.425v70.215c0,14.541,11.787,26.328,26.334,26.328h432.402\r
      c14.541,0,26.328-11.787,26.328-26.328v-70.215C485.07,192.884,473.283,181.097,458.736,181.097z`},null,-1)),be=[ge];function xe(e,a){return h(),A("svg",he,be)}var _e=U(me,[["render",xe],["__scopeId","data-v-0298e8c4"]]);const ze={},ye=e=>(Z("data-v-079820ed"),e=e(),J(),e),Ve={class:"icon",viewBox:"0 0 60.364 60.364",xmlns:"http://www.w3.org/2000/svg"},we=ye(()=>g("path",{d:`M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269\r
		L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91\r
		c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z`},null,-1)),ke=[we];function Ce(e,a){return h(),A("svg",Ve,ke)}var $e=U(ze,[["render",Ce],["__scopeId","data-v-079820ed"]]);const Ie=["autocomplete","placeholder","type","value"],Fe=z({__name:"InlineField",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(a,l)=>{var t,n;return h(),A("input",{class:"field",autocomplete:(t=e.autocomplete)!=null?t:"off",placeholder:e.placeholder,style:se({width:e.modelValue.length+2+"ch"}),type:(n=e.type)!=null?n:"text",value:e.modelValue,onInput:l[0]||(l[0]=r=>a.$emit("update:modelValue",r.target.value))},null,44,Ie)}}});var Se=U(Fe,[["__scopeId","data-v-3d0155ac"]]);const Ue=z({__name:"InlineNumericField",props:{modelValue:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(e){return(a,l)=>(h(),_(Se,{autocomplete:e.autocomplete,"model-value":""+e.modelValue,placeholder:e.placeholder,type:"number","onUpdate:modelValue":l[0]||(l[0]=t=>a.$emit("update:modelValue",+t))},null,8,["autocomplete","model-value","placeholder"]))}});const Pe=z({__name:"Incrementable",props:{modelValue:null,decrement:{type:Function,default:e=>e-1},increment:{type:Function,default:e=>e+1},label:null},emits:["update:modelValue"],setup(e){function a({target:l}){var t;(t=l.querySelector("input"))==null||t.focus()}return(l,t)=>(h(),_(ue,null,{default:d(()=>[i(G,{onClick:t[0]||(t[0]=n=>l.$emit("update:modelValue",e.decrement(e.modelValue)))},{default:d(()=>[i(_e)]),_:1}),g("p",{class:"label",onClick:a},[q(W(e.label)+" ",1),i(Ue,{"model-value":e.modelValue,"onUpdate:modelValue":t[1]||(t[1]=n=>l.$emit("update:modelValue",n))},null,8,["model-value"])]),i(G,{onClick:t[2]||(t[2]=n=>l.$emit("update:modelValue",e.increment(e.modelValue)))},{default:d(()=>[i($e)]),_:1})]),_:1}))}});var j=U(Pe,[["__scopeId","data-v-6b56d56b"]]);const Oe={"+":2,"-":2,"*":3,"#":3,"/":3,"**":4,"^":5};function X(e){return e==="("?0:Oe[e]||1}const Ee={"+":"l","-":"l","*":"l","#":"l","/":"l"};function Le(e){return Ee[e]||"r"}const Me=["+","-","*","#","/","^","("];function Y(e){return!Me.includes(e)}function Be(e){const a=[];let l=!1;for(;;){let s;if(e.length===0)break;(s=e.match(/^\d+(?:\.\d+)?/))?(l&&a.push("**"),l=!0,a.push(+s[0]),e=e.slice(s[0].length)):(s=e.match(/^(sin|cos|tan|exp|log|abs|min|max)/))?(l&&a.push("**"),l=!1,a.push(s[0]),e=e.slice(s[0].length)):(s=e.match(/^(pi|pz|ppz|sz|e|i|c|z|fx|fy)/))?(l&&a.push("**"),l=!0,a.push(s[0]),e=e.slice(s[0].length)):((s=e.match(/^[-+*#\/^()]/))&&(l&&s[0]==="("&&a.push("**"),l=!1,s[0]===")"&&(l=!0),a.push(s[0])),e=e.slice(1))}const t=[],n=[];let r;for(;r=a.shift();)if(typeof r=="number"||r.match(/^(pi|pz|ppz|sz|e|i|c|z|fx|fy)$/))t.push(r);else if(r===")"){for(;n[n.length-1]!=="(";){const m=n[n.length-1];if(!m)return["z"];n.pop(),t.push(m)}if(n.pop()!=="(")return["z"];const s=n[n.length-1];if(!s)continue;Y(s)&&(n.pop(),t.push(s))}else if(r==="("||Y(r))n.push(r);else{const s=r;let m;for(;(m=n[n.length-1])&&m!=="(";){const p=X(s),y=X(m);if(!(y>p||p===y&&Le(s)==="l"))break;t.push((n.pop(),m))}n.push(s)}for(;r=n.pop();){if(r==="("||r===")")return["z"];t.push(r)}return t}function De(e){var a;try{const l=[];for(let t of e)if(typeof t=="number")l.push(`vec2(${t}, 0)`);else if(t==="i")l.push("vec2(0, 1)");else if(t==="pi")l.push("vec2(3.141592653589793, 0)");else if(t==="e")l.push("vec2(2.718281828459045, 0)");else if(t==="fx")l.push("vec2(1, -1)");else if(t==="fy")l.push("vec2(-1, 1)");else if(t.match(/^(pz|ppz|sz|c|z)$/))l.push(t);else if(t==="+"||t==="-"||t==="#"){const n=l.pop(),r=(a=l.pop())!=null?a:"";l.push(`${r} ${t==="#"?"*":t} ${n}`)}else if(t==="*"||t==="**"||t==="/"||t==="^"||t==="min"||t==="max"){t==="/"?t="div":t==="^"?t="power":(t==="*"||t==="**")&&(t="mult");const n=l.pop(),r=l.pop();l.push(`${t}(${r}, ${n})`)}else(t==="sin"||t==="cos"||t==="tan"||t==="exp"||t==="log"||t==="abs")&&l.push(`${t}(${l.pop()})`);return l.length!==1?"z":l[0]}catch{return"z"}}function ee(e){return De(Be(e))}Object.assign(window,{glsl:ee});function T(e,a=1e6){return N({get(){return~~(x(a)*e.value)/x(a)},set(l){e.value=l}})}const Ke=q(" Apply Equation "),Te=g("option",{value:"simple"},"Simple",-1),Ne=g("option",{value:"gradient"},"Gradient",-1),Re=g("option",{value:"rotation"},"Rotation",-1),Ae=g("option",{value:"trig"},"Trigonometric",-1),qe=g("option",{value:"exp"},"Exponential",-1),He=g("option",{value:"newton"},"Newton's Method",-1),Qe=q(" Reset Position "),at=z({__name:"FractalExplorer",setup(e){const a=H(100,5,1e3);v("detail",a);function l(o){return o<=10?5:o<=25?5*Math.ceil((o-5)/5):o<=50?25:50*Math.ceil((o-50)/50)}function t(o){return o<10?10:o<25?5*~~((o+5)/5):o<50?50:50*~~((o+50)/50)}const n=H(2,.1,1/0);v("limit",n);function r(o){return o<=2?Math.ceil(10*(o-.1))/10:Math.ceil(o-1)}function s(o){return o<2?~~(10*(o+.1))/10:~~(o+1)}const m=f("z^2+c");v("equation",m);const p=f("simple");v("theme",p);const y={simple:1,gradient:2,rotation:3,newton:4,trig:5,exp:6},te=N(()=>y[p.value]),V=f(0);v("colorOffset",V);const w=f(1);v("repetition",w);const k=f(1);v("spectrum",k);const C=f(!1);v("darkness",C);const $=f(!1);v("split",$);const I=f(!1);v("altColors",I);const le=`
  uniform float detail;
  uniform float limit;
  uniform int theme;
  uniform float colorOffset;
  uniform float repetition;
  uniform float spectrum;
  uniform bool darkness;
  uniform bool split;
  uniform bool altColors;

  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;

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
    float hue = mod(0.02 * repetition * i, 1.0);
    vec3 hsv = vec3(1.0 - hue * spectrum, 1.0, 1.0);

    if (darkness) hsv.z = mod(0.02 * i, 1.0);
    hsv.x = mod(hsv.x + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec3 gradientPalette(vec3 sz, float i) {
    sz = abs(sz) / i * repetition;

    vec3 hsv = rgb2hsv(sin(abs(sz * 5.0)) * 0.45 + 0.5);
    vec3 rgb = hsv2rgb(vec3(hsv.x * spectrum + colorOffset, hsv.yz));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 rotationPalette(float t, float i) {
    float hue = mod(2.0 * t / pi * repetition, 1.0);

    vec3 rgb = hsv2rgb(vec3(1.0 - hue * spectrum + colorOffset, 1.0, 1.0));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

    return rgb;
  }

  vec3 newtonPalette(float t, float i) {
    float hue = mod(t / pi * repetition, 1.0) * spectrum;
    hue = mod(hue + colorOffset, 1.0);

    vec3 rgb = hsv2rgb(vec3(1.0 - hue, 1.0, 1.0));
    if (darkness) rgb *= mod(i * 0.02, 1.0);

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
      rgb = vec3(n2, n1, n2);
    } else {
      rgb = vec3(n1, n2, split ? 0.5 : 1.0);
    }

    if (darkness) rgb *= mod(i * 0.02, 1.0);

    vec3 hsv = rgb2hsv(rgb);
    hsv.x = mod(hsv.x * spectrum + colorOffset, 1.0);

    return hsv2rgb(hsv);
  }

  vec3 expPalette(float i) {
    float t = i * 0.1 * repetition;

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
      rgb = vec3(n2, n1, n2);
    } else {
      rgb = vec3(n1, n2, split ? 0.5 : 1.0);
    }

    if (darkness) rgb *= mod(i * 0.02, 1.0);

    vec3 hsv = rgb2hsv(rgb);
    hsv.x = mod(hsv.x * spectrum + colorOffset, 1.0);

    return hsv2rgb(hsv);
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
  `,F=f("zoomLevel");v("indicator",F);function oe(){F.value={zoomLevel:"position",position:"zoomLevel"}[F.value]||"position"}const P=T(f(1),100),O=T(f(0)),E=T(f(0)),ne=N(()=>(x(O),x(E),x(P),F.value==="position"?`Position: (${O.value}, ${E.value})`:`Zoom Level: ${P.value.toLocaleString()}`)),L=f(),M=f(),B=f();return re(()=>{if(!L.value)return;const o=new fe(L.value,{fragmentString:le.replace("{{EQ}}",ee(m.value)),saveBounds:!0});B.value=()=>setTimeout(()=>location.reload()),o.on("render",()=>{o.setUniform("detail",[a.value]),o.setUniform("limit",n.value),o.setUniformOfInt("theme",[te.value]),o.setUniform("colorOffset",V.value),o.setUniform("repetition",w.value),o.setUniform("spectrum",k.value),o.setUniformOfInt("darkness",[C.value]),o.setUniformOfInt("split",[$.value]),o.setUniformOfInt("altColors",[I.value])}),ie(()=>{P.value=4/(o.bounds.xEnd-o.bounds.xStart),O.value=(o.bounds.xEnd+o.bounds.xStart)/2,E.value=(o.bounds.yEnd+o.bounds.yStart)/2}),M.value=()=>{o.setBounds({xStart:-2,xEnd:2,yStart:-2,yEnd:2})}}),(o,u)=>(h(),_(pe,null,{options:d(()=>[i(j,{modelValue:x(a),"onUpdate:modelValue":u[0]||(u[0]=c=>Q(a)?a.value=c:null),decrement:l,increment:t,label:"Detail Level:"},null,8,["modelValue"]),i(j,{modelValue:x(n),"onUpdate:modelValue":u[1]||(u[1]=c=>Q(n)?n.value=c:null),decrement:r,increment:s,label:"Fractal Size:"},null,8,["modelValue"]),i(b,{label:"Equation:"},{default:d(()=>[i(de,{modelValue:m.value,"onUpdate:modelValue":u[2]||(u[2]=c=>m.value=c)},null,8,["modelValue"]),B.value?(h(),_(R,{key:0,style:{"white-space":"pre"},onClick:B.value},{default:d(()=>[Ke]),_:1},8,["onClick"])):S("",!0)]),_:1}),i(b,{label:"Theme:"},{default:d(()=>[i(ce,{modelValue:p.value,"onUpdate:modelValue":u[3]||(u[3]=c=>p.value=c)},{default:d(()=>[Te,Ne,Re,Ae,qe,He]),_:1},8,["modelValue"])]),_:1}),i(b,{label:"Color Offset:"},{default:d(()=>[i(K,{modelValue:V.value,"onUpdate:modelValue":u[4]||(u[4]=c=>V.value=c),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),i(b,{label:"Color Repetition:"},{default:d(()=>[i(K,{modelValue:w.value,"onUpdate:modelValue":u[5]||(u[5]=c=>w.value=c),max:10,min:0,step:"any"},null,8,["modelValue"])]),_:1}),i(b,{label:"Color Spectrum:"},{default:d(()=>[i(K,{modelValue:k.value,"onUpdate:modelValue":u[6]||(u[6]=c=>k.value=c),max:1,min:0,step:"any"},null,8,["modelValue"])]),_:1}),i(b,{label:"Darkness Effect?"},{default:d(()=>[i(D,{modelValue:C.value,"onUpdate:modelValue":u[7]||(u[7]=c=>C.value=c)},null,8,["modelValue"])]),_:1}),p.value!=="newton"?(h(),_(b,{key:0,label:p.value==="simple"?"Mimic Newton's Method?":p.value==="rotation"?"Alternate Split?":p.value==="trig"?"Alternate Trig Functions?":p.value==="exp"?"Invert Exponentials?":"Split Effect?"},{default:d(()=>[i(D,{modelValue:$.value,"onUpdate:modelValue":u[8]||(u[8]=c=>$.value=c)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),p.value==="newton"||p.value==="trig"||p.value==="exp"?(h(),_(b,{key:1,label:p.value==="newton"?"3D Effect?":"Alternate Coloring?"},{default:d(()=>[i(D,{modelValue:I.value,"onUpdate:modelValue":u[9]||(u[9]=c=>I.value=c)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0)]),buttons:d(()=>[M.value?(h(),_(R,{key:0,onClick:M.value},{default:d(()=>[Qe]),_:1},8,["onClick"])):S("",!0)]),indicator:d(()=>[g("div",{style:{cursor:"pointer"},onClick:oe},W(x(ne)),1)]),default:d(()=>[g("canvas",{ref_key:"canvas",ref:L},null,512)]),_:1}))}});export{at as default};
