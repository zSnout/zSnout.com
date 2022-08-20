import{d as z,o as N,f as U,aw as W,s as w,aS as D,c as j,w as m,b as f,u as A,aU as O,a as _,p as X,g as Y}from"./index.60732d6f.js";import{u as J}from"./index.e40272ef.js";import{_ as P}from"./VStack.503e3c99.js";import{F as K}from"./FullscreenDisplay.7762b611.js";import{H as Q}from"./SharedNav.064fa836.js";import{L as R}from"./Labeled.cdcd71e4.js";import{u as Z}from"./useCanvas.eba47d21.js";import{s as F}from"./useOption.5e8911ca.js";import{r as S}from"./useRandint.07e5b532.js";import{I as ee}from"./InlineRangeField.419e0df0.js";const ae=["autocomplete","value"],le=z({__name:"ColorField",props:{autocomplete:null,modelValue:null},emits:["update:modelValue"],setup(e){return(a,r)=>(N(),U("input",{class:"shadow field focusline",autocomplete:e.autocomplete||"off",style:W(`background-color: ${e.modelValue}`),value:e.modelValue,type:"color",onChange:r[0]||(r[0]=t=>a.$emit("update:modelValue",t.target.value)),onInput:r[1]||(r[1]=t=>a.$emit("update:modelValue",t.target.value))},null,44,ae))}});var E=P(le,[["__scopeId","data-v-48f18f5a"]]),re={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const y="a-f\\d",te=`#?[${y}]{3}[${y}]?`,ne=`#?[${y}]{6}([${y}]{2})?`,se=new RegExp(`[^#${y}]`,"gi"),oe=new RegExp(`^${te}$|^${ne}$`,"i");var ue=(e,a={})=>{if(typeof e!="string"||se.test(e)||!oe.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let r=1;e.length===8&&(r=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=Number.parseInt(e,16),l=t>>16,s=t>>8&255,u=t&255,n=typeof a.alpha=="number"?a.alpha:r;if(a.format==="array")return[l,s,u,n];if(a.format==="css"){const o=n===1?"":` / ${Number((n*100).toFixed(2))}%`;return`rgb(${l} ${s} ${u}${o})`}return{red:l,green:s,blue:u,alpha:n}};const ie=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var ce=new RegExp(ie,"i");const C="-?\\d*(?:\\.\\d+)",b=`(${C}?)`,d=`(${C}?%)`,h=`(${C}?%?)`,de=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${d}\\s*,
    \\s*${d}\\s*
    (?:,\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var pe=new RegExp(de);const ge=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${d}
    \\s+${d}
    \\s*(?:\\s*\\/\\s*${h}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var me=new RegExp(ge);const fe=`^
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
`.replace(/\n|\s/g,"");var ke=new RegExp(we);const _e=/^transparent$/;var xe=new RegExp(_e,"i");const M=(e,a,r)=>Math.min(Math.max(a,e),r),Re=e=>{let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)*255/100:parseFloat(a)),M(Math.round(a),0,255)},I=e=>M(parseFloat(e),0,100);function B(e){let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)/100:parseFloat(a)),M(a,0,1)}function Fe(e){const[a,r,t,l]=ue(e,{format:"array"});return x([null,a,r,t,l])}function Ce([,e,a,r,t=1]){let l=e;return l.endsWith("turn")?l=parseFloat(l)*360/1:l.endsWith("rad")?l=Math.round(parseFloat(l)*180/Math.PI):l=parseFloat(l),{type:"hsl",values:[l,I(a),I(r)],alpha:B(t===null?1:t)}}function x([,e,a,r,t=1]){return{type:"rgb",values:[e,a,r].map(Re),alpha:B(t===null?1:t)}}/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const Me=e=>{if(typeof e!="string")return null;const a=ce.exec(e);if(a)return Fe(a[0]);const r=me.exec(e)||pe.exec(e);if(r)return Ce(r);const t=ye.exec(e)||ke.exec(e)||ve.exec(e)||he.exec(e);if(t)return x(t);if(xe.exec(e))return x([null,0,0,0,0]);const l=re[e.toLowerCase()];return l?x([null,l[0],l[1],l[2],1]):null};function Ve(e){var a=e[0]/360,r=e[1]/100,t=e[2]/100,l,s,u,n,o;if(r==0)return o=t*255,[o,o,o];t<.5?s=t*(1+r):s=t+r-t*r,l=2*t-s,n=[0,0,0];for(var i=0;i<3;i++)u=a+1/3*-(i-1),u<0&&u++,u>1&&u--,6*u<1?o=l+(s-l)*6*u:2*u<1?o=s:3*u<2?o=l+(s-l)*(2/3-u)*6:o=l,n[i]=o*255;return n}var Se=Ve;function Ee(e,a,r){return Math.min(Math.max(e,a),r)}var Ie=Ee,He=Ie;function k(e){var a=Math.round(He(e,0,255)),r=a.toString(16);return r.length==1?"0"+r:r}function qe(e){var a=e.length===4?k(e[3]*255):"";return"#"+k(e[0])+k(e[1])+k(e[2])+a}var H=qe;function ze(e){var a=e[0]/255,r=e[1]/255,t=e[2]/255,l=Math.min(a,r,t),s=Math.max(a,r,t),u=s-l,n,o,i;return s==l?n=0:a==s?n=(r-t)/u:r==s?n=2+(t-a)/u:t==s&&(n=4+(a-r)/u),n=Math.min(n*60,360),n<0&&(n+=360),i=(l+s)/2,s==l?o=0:i<=.5?o=u/(s+l):o=u/(2-s-l),[n,o*100,i*100]}var Ne=ze;/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */function q(e){const a=Me(e);return a===null?null:(a.type==="hsl"&&(a.values=Se(a.values)),a)}function Pe(e,a,r=50){const t=q(e),l=q(a);if(!t||!l)return null;const s=Math.min(Math.max(0,r),100)/100,u=s*2-1,n=t.alpha-l.alpha,o=((u*n===-1?u:(u+n)/(1+u*n))+1)/2,i=1-o,[v,p,g]=t.values.map((L,$)=>Math.round(t.values[$]*o+l.values[$]*i)),c=parseFloat((t.alpha*s+l.alpha*(1-s)).toFixed(8));return{hex:H([v,p,g]),hexa:H([v,p,g,c]),rgba:[v,p,g,c],hsla:[...Ne([v,p,g]).map(Math.round),c]}}const Be=e=>(X("data-v-23cb2396"),e=e(),Y(),e),Le=Be(()=>_("span",null,"/",-1)),Ge=z({__name:"blobby-gradient",setup(e){const a=w(),r=w(),t=w("#0000ff");F("first",t);const l=w("#ff0000");F("second",l);const s=J(50,5,1e3);return F("size",s),Z(a,{useDevicePixelRatio:!1}).then(u=>{const{canvas:n,onDispose:o,onResize:i,size:v}=u,{width:p,height:g}=v,c=n.getContext("2d");if(!c)throw new Error("Your device doesn't support HTML5 canvases.");r.value=()=>{c.fillStyle="white",c.fillRect(0,0,p.value,g.value)},r.value(),i(r.value),o(D(()=>{for(let L of Array(10)){const $=S(0,p.value),V=S(0,g.value),G=100*($+V)/(p.value+g.value),T=Pe(l.value,t.value,G);c.fillStyle=`rgba(${T.rgba.join(", ")})`,c.beginPath(),c.ellipse($,V,s.value,s.value,0,0,2*Math.PI),c.fill()}}).pause)}),(u,n)=>(N(),j(K,null,{options:m(()=>[f(R,{label:"Top-Left"},{default:m(()=>[f(E,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Bottom-Right"},{default:m(()=>[f(E,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=o=>l.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Size"},{default:m(()=>[f(ee,{modelValue:A(s),"onUpdate:modelValue":n[2]||(n[2]=o=>O(s)?s.value=o:null),max:100,min:5},null,8,["modelValue"])]),_:1})]),indicator:m(()=>[f(Q,null,{default:m(()=>[_("span",{class:"button",onClick:n[3]||(n[3]=o=>s.value-=1)},"Smaller"),Le,_("span",{class:"button",onClick:n[4]||(n[4]=o=>s.value+=1)},"Larger")]),_:1})]),default:m(()=>[_("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});var Ke=P(Ge,[["__scopeId","data-v-23cb2396"]]);export{Ke as default};
