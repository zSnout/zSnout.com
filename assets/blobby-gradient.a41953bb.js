import{d as z,o as N,f as W,aw as D,s as w,aG as U,c as j,w as g,b as f,u as A,aI as O,a as _,p as X,g as Y}from"./index.5081a4d9.js";import{u as J}from"./index.88bcea5e.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{F as K}from"./FullscreenDisplay.f5d7fe1c.js";import{H as Q}from"./SharedNav.de900e72.js";import{L as R}from"./Labeled.777a3eee.js";import{u as Z}from"./useCanvas.9acbff07.js";import{s as F}from"./useOption.2c375787.js";import{r as E}from"./useRandint.07e5b532.js";import{I as ee}from"./InlineRangeField.982baddc.js";import"./LogoLight.9c1b4e00.js";import"./VStack.ce9b91bf.js";const ae=["autocomplete","value"],re=z({__name:"ColorField",props:{autocomplete:null,modelValue:null},emits:["update:modelValue"],setup(e){return(a,l)=>(N(),W("input",{class:"shadow field focusline",autocomplete:e.autocomplete||"off",style:D(`background-color: ${e.modelValue}`),value:e.modelValue,type:"color",onChange:l[0]||(l[0]=t=>a.$emit("update:modelValue",t.target.value)),onInput:l[1]||(l[1]=t=>a.$emit("update:modelValue",t.target.value))},null,44,ae))}});var S=P(re,[["__scopeId","data-v-48f18f5a"]]),le={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const y="a-f\\d",te=`#?[${y}]{3}[${y}]?`,ne=`#?[${y}]{6}([${y}]{2})?`,se=new RegExp(`[^#${y}]`,"gi"),oe=new RegExp(`^${te}$|^${ne}$`,"i");var ie=(e,a={})=>{if(typeof e!="string"||se.test(e)||!oe.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let l=1;e.length===8&&(l=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(l=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=Number.parseInt(e,16),r=t>>16,s=t>>8&255,i=t&255,n=typeof a.alpha=="number"?a.alpha:l;if(a.format==="array")return[r,s,i,n];if(a.format==="css"){const o=n===1?"":` / ${Number((n*100).toFixed(2))}%`;return`rgb(${r} ${s} ${i}${o})`}return{red:r,green:s,blue:i,alpha:n}};const ue=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var ce=new RegExp(ue,"i");const C="-?\\d*(?:\\.\\d+)",b=`(${C}?)`,d=`(${C}?%)`,h=`(${C}?%?)`,de=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${d}\\s*,
    \\s*${d}\\s*
    (?:,\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var pe=new RegExp(de);const me=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${d}
    \\s+${d}
    \\s*(?:\\s*\\/\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var ge=new RegExp(me);const fe=`^
  rgba?\\(
    \\s*${b}\\s*,
    \\s*${b}\\s*,
    \\s*${b}\\s*
    (?:,\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var ve=new RegExp(fe);const be=`^
  rgba?\\(
    \\s*${d}\\s*,
    \\s*${d}\\s*,
    \\s*${d}\\s*
    (?:,\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var he=new RegExp(be);const $e=`^
  rgba?\\(
    \\s*${b}
    \\s+${b}
    \\s+${b}
    \\s*(?:\\s*\\/\\s*${h}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ye=new RegExp($e);const we=`^
  rgba?\\(
    \\s*${d}
    \\s+${d}
    \\s+${d}
    \\s*(?:\\s*\\/\\s*${h}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ke=new RegExp(we);const _e=/^transparent$/;var xe=new RegExp(_e,"i");const M=(e,a,l)=>Math.min(Math.max(a,e),l),Re=e=>{let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)*255/100:parseFloat(a)),M(Math.round(a),0,255)},I=e=>M(parseFloat(e),0,100);function B(e){let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)/100:parseFloat(a)),M(a,0,1)}function Fe(e){const[a,l,t,r]=ie(e,{format:"array"});return x([null,a,l,t,r])}function Ce([,e,a,l,t=1]){let r=e;return r.endsWith("turn")?r=parseFloat(r)*360/1:r.endsWith("rad")?r=Math.round(parseFloat(r)*180/Math.PI):r=parseFloat(r),{type:"hsl",values:[r,I(a),I(l)],alpha:B(t===null?1:t)}}function x([,e,a,l,t=1]){return{type:"rgb",values:[e,a,l].map(Re),alpha:B(t===null?1:t)}}/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const Me=e=>{if(typeof e!="string")return null;const a=ce.exec(e);if(a)return Fe(a[0]);const l=ge.exec(e)||pe.exec(e);if(l)return Ce(l);const t=ye.exec(e)||ke.exec(e)||ve.exec(e)||he.exec(e);if(t)return x(t);if(xe.exec(e))return x([null,0,0,0,0]);const r=le[e.toLowerCase()];return r?x([null,r[0],r[1],r[2],1]):null};function Ve(e){var a=e[0]/360,l=e[1]/100,t=e[2]/100,r,s,i,n,o;if(l==0)return o=t*255,[o,o,o];t<.5?s=t*(1+l):s=t+l-t*l,r=2*t-s,n=[0,0,0];for(var u=0;u<3;u++)i=a+1/3*-(u-1),i<0&&i++,i>1&&i--,6*i<1?o=r+(s-r)*6*i:2*i<1?o=s:3*i<2?o=r+(s-r)*(2/3-i)*6:o=r,n[u]=o*255;return n}var Ee=Ve;function Se(e,a,l){return Math.min(Math.max(e,a),l)}var Ie=Se,He=Ie;function k(e){var a=Math.round(He(e,0,255)),l=a.toString(16);return l.length==1?"0"+l:l}function qe(e){var a=e.length===4?k(e[3]*255):"";return"#"+k(e[0])+k(e[1])+k(e[2])+a}var H=qe;function ze(e){var a=e[0]/255,l=e[1]/255,t=e[2]/255,r=Math.min(a,l,t),s=Math.max(a,l,t),i=s-r,n,o,u;return s==r?n=0:a==s?n=(l-t)/i:l==s?n=2+(t-a)/i:t==s&&(n=4+(a-l)/i),n=Math.min(n*60,360),n<0&&(n+=360),u=(r+s)/2,s==r?o=0:u<=.5?o=i/(s+r):o=i/(2-s-r),[n,o*100,u*100]}var Ne=ze;/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */function q(e){const a=Me(e);return a===null?null:(a.type==="hsl"&&(a.values=Ee(a.values)),a)}function Pe(e,a,l=50){const t=q(e),r=q(a);if(!t||!r)return null;const s=Math.min(Math.max(0,l),100)/100,i=s*2-1,n=t.alpha-r.alpha,o=((i*n===-1?i:(i+n)/(1+i*n))+1)/2,u=1-o,[v,p,m]=t.values.map((L,$)=>Math.round(t.values[$]*o+r.values[$]*u)),c=parseFloat((t.alpha*s+r.alpha*(1-s)).toFixed(8));return{hex:H([v,p,m]),hexa:H([v,p,m,c]),rgba:[v,p,m,c],hsla:[...Ne([v,p,m]).map(Math.round),c]}}const Be=e=>(X("data-v-23cb2396"),e=e(),Y(),e),Le=Be(()=>_("span",null,"/",-1)),Ge=z({__name:"blobby-gradient",setup(e){const a=w(),l=w(),t=w("#0000ff");F("first",t);const r=w("#ff0000");F("second",r);const s=J(50,5,1e3);return F("size",s),Z(a,{useDevicePixelRatio:!1}).then(i=>{const{canvas:n,onDispose:o,onResize:u,size:v}=i,{width:p,height:m}=v,c=n.getContext("2d");if(!c)throw new Error("Your device doesn't support HTML5 canvases.");l.value=()=>{c.fillStyle="white",c.fillRect(0,0,p.value,m.value)},l.value(),u(l.value),o(U(()=>{for(let L of Array(10)){const $=E(0,p.value),V=E(0,m.value),G=100*($+V)/(p.value+m.value),T=Pe(r.value,t.value,G);c.fillStyle=`rgba(${T.rgba.join(", ")})`,c.beginPath(),c.ellipse($,V,s.value,s.value,0,0,2*Math.PI),c.fill()}}).pause)}),(i,n)=>(N(),j(K,null,{options:g(()=>[f(R,{label:"Top-Left"},{default:g(()=>[f(S,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Bottom-Right"},{default:g(()=>[f(S,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=o=>r.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Size"},{default:g(()=>[f(ee,{modelValue:A(s),"onUpdate:modelValue":n[2]||(n[2]=o=>O(s)?s.value=o:null),max:100,min:5},null,8,["modelValue"])]),_:1})]),indicator:g(()=>[f(Q,null,{default:g(()=>[_("span",{class:"button",onClick:n[3]||(n[3]=o=>s.value-=1)},"Smaller"),Le,_("span",{class:"button",onClick:n[4]||(n[4]=o=>s.value+=1)},"Larger")]),_:1})]),default:g(()=>[_("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});var Ze=P(Ge,[["__scopeId","data-v-23cb2396"]]);export{Ze as default};
