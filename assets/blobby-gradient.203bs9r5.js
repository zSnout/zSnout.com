import{d as z,o as N,h as W,A,_ as L,q as w,L as D,c as U,w as g,b as f,u as j,M as O,a as _,p as X,l as Y}from"./index.3j8l6v6z.js";import{u as J}from"./index.55wflef3.js";import{F as K}from"./FullscreenDisplay.421pqk6v.js";import{H as Q}from"./BookmarkIcon.108uetaj.js";import{L as R}from"./Labeled.29mn7ohi.js";import{u as Z}from"./useCanvas.87p0yoq7.js";import{s as F}from"./useOption.ujvp9hcq.js";import{r as E}from"./useRandint.4l2grpuh.js";import{I as ee}from"./InlineRangeField.4poaov81.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.6b66y862.js";import"./VStack.6d7g92uw.js";const ae=["autocomplete","value"],le=z({__name:"ColorField",props:{autocomplete:null,modelValue:null},emits:["update:modelValue"],setup(e){return(a,t)=>(N(),W("input",{class:"shadow field focusline",autocomplete:e.autocomplete||"off",style:A(`background-color: ${e.modelValue}`),value:e.modelValue,type:"color",onChange:t[0]||(t[0]=r=>a.$emit("update:modelValue",r.target.value)),onInput:t[1]||(t[1]=r=>a.$emit("update:modelValue",r.target.value))},null,44,ae))}});const S=L(le,[["__scopeId","data-v-3d807d16"]]);var te={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const y="a-f\\d",re=`#?[${y}]{3}[${y}]?`,ne=`#?[${y}]{6}([${y}]{2})?`,se=new RegExp(`[^#${y}]`,"gi"),oe=new RegExp(`^${re}$|^${ne}$`,"i");var ie=(e,a={})=>{if(typeof e!="string"||se.test(e)||!oe.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let t=1;e.length===8&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(t=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const r=Number.parseInt(e,16),l=r>>16,s=r>>8&255,i=r&255,n=typeof a.alpha=="number"?a.alpha:t;if(a.format==="array")return[l,s,i,n];if(a.format==="css"){const o=n===1?"":` / ${Number((n*100).toFixed(2))}%`;return`rgb(${l} ${s} ${i}${o})`}return{red:l,green:s,blue:i,alpha:n}};const ue=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var ce=new RegExp(ue,"i");const M="-?\\d*(?:\\.\\d+)",v=`(${M}?)`,d=`(${M}?%)`,b=`(${M}?%?)`,de=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${d}\\s*,
    \\s*${d}\\s*
    (?:,\\s*${b}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var pe=new RegExp(de);const me=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${d}
    \\s+${d}
    \\s*(?:\\s*\\/\\s*${b}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var ge=new RegExp(me);const fe=`^
  rgba?\\(
    \\s*${v}\\s*,
    \\s*${v}\\s*,
    \\s*${v}\\s*
    (?:,\\s*${b}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var he=new RegExp(fe);const ve=`^
  rgba?\\(
    \\s*${d}\\s*,
    \\s*${d}\\s*,
    \\s*${d}\\s*
    (?:,\\s*${b}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var be=new RegExp(ve);const $e=`^
  rgba?\\(
    \\s*${v}
    \\s+${v}
    \\s+${v}
    \\s*(?:\\s*\\/\\s*${b}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ye=new RegExp($e);const we=`^
  rgba?\\(
    \\s*${d}
    \\s+${d}
    \\s+${d}
    \\s*(?:\\s*\\/\\s*${b}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ke=new RegExp(we);const _e=/^transparent$/;var xe=new RegExp(_e,"i");const C=(e,a,t)=>Math.min(Math.max(a,e),t),Re=e=>{let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)*255/100:parseFloat(a)),C(Math.round(a),0,255)},I=e=>C(parseFloat(e),0,100);function P(e){let a=e;return typeof a!="number"&&(a=a.endsWith("%")?parseFloat(a)/100:parseFloat(a)),C(a,0,1)}function Fe(e){const[a,t,r,l]=ie(e,{format:"array"});return x([null,a,t,r,l])}function Me([,e,a,t,r=1]){let l=e;return l.endsWith("turn")?l=parseFloat(l)*360/1:l.endsWith("rad")?l=Math.round(parseFloat(l)*180/Math.PI):l=parseFloat(l),{type:"hsl",values:[l,I(a),I(t)],alpha:P(r===null?1:r)}}function x([,e,a,t,r=1]){return{type:"rgb",values:[e,a,t].map(Re),alpha:P(r===null?1:r)}}/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const Ce=e=>{if(typeof e!="string")return null;const a=ce.exec(e);if(a)return Fe(a[0]);const t=ge.exec(e)||pe.exec(e);if(t)return Me(t);const r=ye.exec(e)||ke.exec(e)||he.exec(e)||be.exec(e);if(r)return x(r);if(xe.exec(e))return x([null,0,0,0,0]);const l=te[e.toLowerCase()];return l?x([null,l[0],l[1],l[2],1]):null};function Ve(e){var a=e[0]/360,t=e[1]/100,r=e[2]/100,l,s,i,n,o;if(t==0)return o=r*255,[o,o,o];r<.5?s=r*(1+t):s=r+t-r*t,l=2*r-s,n=[0,0,0];for(var u=0;u<3;u++)i=a+1/3*-(u-1),i<0&&i++,i>1&&i--,6*i<1?o=l+(s-l)*6*i:2*i<1?o=s:3*i<2?o=l+(s-l)*(2/3-i)*6:o=l,n[u]=o*255;return n}var Ee=Ve;function Se(e,a,t){return Math.min(Math.max(e,a),t)}var Ie=Se,He=Ie;function k(e){var a=Math.round(He(e,0,255)),t=a.toString(16);return t.length==1?"0"+t:t}function qe(e){var a=e.length===4?k(e[3]*255):"";return"#"+k(e[0])+k(e[1])+k(e[2])+a}var H=qe;function ze(e){var a=e[0]/255,t=e[1]/255,r=e[2]/255,l=Math.min(a,t,r),s=Math.max(a,t,r),i=s-l,n,o,u;return s==l?n=0:a==s?n=(t-r)/i:t==s?n=2+(r-a)/i:r==s&&(n=4+(a-t)/i),n=Math.min(n*60,360),n<0&&(n+=360),u=(l+s)/2,s==l?o=0:u<=.5?o=i/(s+l):o=i/(2-s-l),[n,o*100,u*100]}var Ne=ze;/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */function q(e){const a=Ce(e);return a===null?null:(a.type==="hsl"&&(a.values=Ee(a.values)),a)}function Le(e,a,t=50){const r=q(e),l=q(a);if(!r||!l)return null;const s=Math.min(Math.max(0,t),100)/100,i=s*2-1,n=r.alpha-l.alpha,o=((i*n===-1?i:(i+n)/(1+i*n))+1)/2,u=1-o,[h,p,m]=r.values.map((B,$)=>Math.round(r.values[$]*o+l.values[$]*u)),c=parseFloat((r.alpha*s+l.alpha*(1-s)).toFixed(8));return{hex:H([h,p,m]),hexa:H([h,p,m,c]),rgba:[h,p,m,c],hsla:[...Ne([h,p,m]).map(Math.round),c]}}const Pe=e=>(X("data-v-09682917"),e=e(),Y(),e),Be=Pe(()=>_("span",null,"/",-1)),Ge=z({__name:"blobby-gradient",setup(e){const a=w(),t=w(),r=w("#0000ff");F("first",r);const l=w("#ff0000");F("second",l);const s=J(50,5,1e3);return F("size",s),Z(a,{useDevicePixelRatio:!1}).then(i=>{const{canvas:n,onDispose:o,onResize:u,size:h}=i,{width:p,height:m}=h,c=n.getContext("2d");if(!c)throw new Error("Your device doesn't support HTML5 canvases.");t.value=()=>{c.fillStyle="white",c.fillRect(0,0,p.value,m.value)},t.value(),u(t.value),o(D(()=>{for(let B of Array(10)){const $=E(0,p.value),V=E(0,m.value),G=100*($+V)/(p.value+m.value),T=Le(l.value,r.value,G);c.fillStyle=`rgba(${T.rgba.join(", ")})`,c.beginPath(),c.ellipse($,V,s.value,s.value,0,0,2*Math.PI),c.fill()}}).pause)}),(i,n)=>(N(),U(K,null,{options:g(()=>[f(R,{label:"Top-Left"},{default:g(()=>[f(S,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Bottom-Right"},{default:g(()=>[f(S,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=o=>l.value=o)},null,8,["modelValue"])]),_:1}),f(R,{label:"Size"},{default:g(()=>[f(ee,{modelValue:j(s),"onUpdate:modelValue":n[2]||(n[2]=o=>O(s)?s.value=o:null),max:100,min:5},null,8,["modelValue"])]),_:1})]),indicator:g(()=>[f(Q,null,{default:g(()=>[_("span",{class:"button",onClick:n[3]||(n[3]=o=>s.value-=1)},"Smaller"),Be,_("span",{class:"button",onClick:n[4]||(n[4]=o=>s.value+=1)},"Larger")]),_:1})]),default:g(()=>[_("canvas",{ref_key:"canvas",ref:a},null,512)]),_:1}))}});const Ze=L(Ge,[["__scopeId","data-v-09682917"]]);export{Ze as default};
