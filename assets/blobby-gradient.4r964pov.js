import{d as z,o as P,f as W,n as j,_ as B,r as k,g as U,c as A,w as g,e as f,u as O,i as X,a as x,p as Y,h as J}from"./index.xh0zaea0.js";import{u as K}from"./index.dlnn8pzg.js";import{F as Q}from"./FullscreenDisplay.75rpamat.js";import{H as Z}from"./BookmarkIcon.1ijfs95x.js";import{L as F}from"./Labeled.59ihovi6.js";import{u as ee}from"./useCanvas.3phirwm2.js";import{s as C}from"./useOption.1pf10ib0.js";import{r as S}from"./useRandint.48fktzm0.js";import{g as w}from"./_commonjsHelpers.40x35aen.js";import{I as ae}from"./InlineRangeField.gs0iuoop.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";const te=["autocomplete","value"],re=z({__name:"ColorField",props:{autocomplete:{},modelValue:{}},emits:["update:modelValue"],setup(e){return(a,r)=>(P(),W("input",{class:"shadow field focusline",autocomplete:a.autocomplete||"off",style:j(`background-color: ${a.modelValue}`),value:a.modelValue,type:"color",onChange:r[0]||(r[0]=l=>a.$emit("update:modelValue",l.target.value)),onInput:r[1]||(r[1]=l=>a.$emit("update:modelValue",l.target.value))},null,44,te))}});const I=B(re,[["__scopeId","data-v-3d807d16"]]);var le={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const ne=w(le),y="a-f\\d",se=`#?[${y}]{3}[${y}]?`,oe=`#?[${y}]{6}([${y}]{2})?`,ie=new RegExp(`[^#${y}]`,"gi"),ue=new RegExp(`^${se}$|^${oe}$`,"i");var pe=(e,a={})=>{if(typeof e!="string"||ie.test(e)||!ue.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let r=1;e.length===8&&(r=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const l=Number.parseInt(e,16),t=l>>16,s=l>>8&255,i=l&255,n=typeof a.alpha=="number"?a.alpha:r;if(a.format==="array")return[t,s,i,n];if(a.format==="css"){const o=n===1?"":` / ${Number((n*100).toFixed(2))}%`;return`rgb(${t} ${s} ${i}${o})`}return{red:t,green:s,blue:i,alpha:n}};const ce=w(pe),de=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var me=new RegExp(de,"i");const M="-?\\d*(?:\\.\\d+)",b=`(${M}?)`,c=`(${M}?%)`,v=`(${M}?%?)`,ge=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${c}\\s*,
    \\s*${c}\\s*
    (?:,\\s*${v}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var fe=new RegExp(ge);const he=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${c}
    \\s+${c}
    \\s*(?:\\s*\\/\\s*${v}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var be=new RegExp(he);const ve=`^
  rgba?\\(
    \\s*${b}\\s*,
    \\s*${b}\\s*,
    \\s*${b}\\s*
    (?:,\\s*${v}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var $e=new RegExp(ve);const ye=`^
  rgba?\\(
    \\s*${c}\\s*,
    \\s*${c}\\s*,
    \\s*${c}\\s*
    (?:,\\s*${v}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var we=new RegExp(ye);const ke=`^
  rgba?\\(
    \\s*${b}
    \\s+${b}
    \\s+${b}
    \\s*(?:\\s*\\/\\s*${v}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var _e=new RegExp(ke);const xe=`^
  rgba?\\(
    \\s*${c}
    \\s+${c}
    \\s+${c}
    \\s*(?:\\s*\\/\\s*${v}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var Re=new RegExp(xe);const Fe=/^transparent$/;var Ce=new RegExp(Fe,"i");const V=(e,a,r)=>Math.min(Math.max(a,e),r),Me=e=>{let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)*255/100:parseFloat(a)),V(Math.round(a),0,255)},H=e=>V(parseFloat(e),0,100);function L(e){let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)/100:parseFloat(a)),V(a,0,1)}function Ve(e){const[a,r,l,t]=ce(e,{format:"array"});return R([null,a,r,l,t])}function Ee([,e,a,r,l=1]){let t=e;return t.endsWith("turn")?t=parseFloat(t)*360/1:t.endsWith("rad")?t=Math.round(parseFloat(t)*180/Math.PI):t=parseFloat(t),{type:"hsl",values:[t,H(a),H(r)],alpha:L(l===null?1:l)}}function R([,e,a,r,l=1]){return{type:"rgb",values:[e,a,r].map(Me),alpha:L(l===null?1:l)}}/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const Se=e=>{if(typeof e!="string")return null;const a=me.exec(e);if(a)return Ve(a[0]);const r=be.exec(e)||fe.exec(e);if(r)return Ee(r);const l=_e.exec(e)||Re.exec(e)||$e.exec(e)||we.exec(e);if(l)return R(l);if(Ce.exec(e))return R([null,0,0,0,0]);const t=ne[e.toLowerCase()];return t?R([null,t[0],t[1],t[2],1]):null};function Ie(e){var a=e[0]/360,r=e[1]/100,l=e[2]/100,t,s,i,n,o;if(r==0)return o=l*255,[o,o,o];l<.5?s=l*(1+r):s=l+r-l*r,t=2*l-s,n=[0,0,0];for(var u=0;u<3;u++)i=a+1/3*-(u-1),i<0&&i++,i>1&&i--,6*i<1?o=t+(s-t)*6*i:2*i<1?o=s:3*i<2?o=t+(s-t)*(2/3-i)*6:o=t,n[u]=o*255;return n}var He=Ie;const Ne=w(He);function qe(e,a,r){return Math.min(Math.max(e,a),r)}var ze=qe,Pe=ze;function _(e){var a=Math.round(Pe(e,0,255)),r=a.toString(16);return r.length==1?"0"+r:r}function Be(e){var a=e.length===4?_(e[3]*255):"";return"#"+_(e[0])+_(e[1])+_(e[2])+a}var Le=Be;const N=w(Le);function De(e){var a=e[0]/255,r=e[1]/255,l=e[2]/255,t=Math.min(a,r,l),s=Math.max(a,r,l),i=s-t,n,o,u;return s==t?n=0:a==s?n=(r-l)/i:r==s?n=2+(l-a)/i:l==s&&(n=4+(a-r)/i),n=Math.min(n*60,360),n<0&&(n+=360),u=(t+s)/2,s==t?o=0:u<=.5?o=i/(s+t):o=i/(2-s-t),[n,o*100,u*100]}var Ge=De;const Te=w(Ge);/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */function q(e){const a=Se(e);return a===null?null:(a.type==="hsl"&&(a.values=Ne(a.values)),a)}function We(e,a,r=50){const l=q(e),t=q(a);if(!l||!t)return null;const s=Math.min(Math.max(0,r),100)/100,i=s*2-1,n=l.alpha-t.alpha,o=((i*n===-1?i:(i+n)/(1+i*n))+1)/2,u=1-o,[h,d,m]=l.values.map((D,$)=>Math.round(l.values[$]*o+t.values[$]*u)),p=parseFloat((l.alpha*s+t.alpha*(1-s)).toFixed(8));return{hex:N([h,d,m]),hexa:N([h,d,m,p]),rgba:[h,d,m,p],hsla:[...Te([h,d,m]).map(Math.round),p]}}const je=e=>(Y("data-v-09682917"),e=e(),J(),e),Ue=je(()=>x("span",null,"/",-1)),Ae=z({__name:"blobby-gradient",setup(e){const a=k(),r=k(),l=k("#0000ff");C("first",l);const t=k("#ff0000");C("second",t);const s=K(50,5,1e3);return C("size",s),ee(a,{useDevicePixelRatio:!1}).then(i=>{const{canvas:n,onDispose:o,onResize:u,size:h}=i,{width:d,height:m}=h,p=n.getContext("2d");if(!p)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{p.fillStyle="white",p.fillRect(0,0,d.value,m.value)},r.value(),u(r.value),o(U(()=>{for(let D of Array(10)){const $=S(0,d.value),E=S(0,m.value),G=100*($+E)/(d.value+m.value),T=We(t.value,l.value,G);p.fillStyle=`rgba(${T.rgba.join(", ")})`,p.beginPath(),p.ellipse($,E,s.value,s.value,0,0,2*Math.PI),p.fill()}}).pause)}),(i,n)=>(P(),A(Q,null,{options:g(()=>[f(F,{label:"Top-Left"},{default:g(()=>[f(I,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o)},null,8,["modelValue"])]),_:1}),f(F,{label:"Bottom-Right"},{default:g(()=>[f(I,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=o=>t.value=o)},null,8,["modelValue"])]),_:1}),f(F,{label:"Size"},{default:g(()=>[f(ae,{modelValue:O(s),"onUpdate:modelValue":n[2]||(n[2]=o=>X(s)?s.value=o:null),max:100,min:5},null,8,["modelValue"])]),_:1})]),indicator:g(()=>[f(Z,null,{default:g(()=>[x("span",{class:"button",onClick:n[3]||(n[3]=o=>s.value-=1)},"Smaller"),Ue,x("span",{class:"button",onClick:n[4]||(n[4]=o=>s.value+=1)},"Larger")]),_:1})]),default:g(()=>[x("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});const oa=B(Ae,[["__scopeId","data-v-09682917"]]);export{oa as default};
