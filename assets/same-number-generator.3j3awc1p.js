import{B,V as N}from"./VStack.xad5wxbj.js";import{D as k}from"./DocumentDisplay.633jhlro.js";import{F as U}from"./Field.2ydu2jt8.js";import{H as C,S as D}from"./BookmarkIcon.3wmuqdow.js";import{_ as M}from"./NumericField.vue_vue_type_script_setup_true_lang.5g1ob2jp.js";import{d as O,q as x,g as h,o as $,c as j,w as g,a as S,e as v,b as A,t as w,u as y,_ as G}from"./index.3672xjxd.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";var V={exports:{}};(function(s,i){i=s.exports=l,i.getSerialize=u;function l(r,n,a,d){return JSON.stringify(r,u(n,d),a)}function u(r,n){var a=[],d=[];return n==null&&(n=function(f,c){return a[0]===c?"[Circular ~]":"[Circular ~."+d.slice(0,a.indexOf(c)).join(".")+"]"}),function(f,c){if(a.length>0){var t=a.indexOf(this);~t?a.splice(t+1):a.push(this),~t?d.splice(t,1/0,f):d.push(f),~a.indexOf(c)&&(c=n.call(this,f,c))}else a.push(c);return r==null?c:r.call(this,f,c)}}})(V,V.exports);var E=V.exports,F=function(){var s=4022871197,i=function(l){if(l){l=l.toString();for(var u=0;u<l.length;u++){s+=l.charCodeAt(u);var r=.02519603282416938*s;s=r>>>0,r-=s,r*=s,s=r>>>0,r-=s,s+=r*4294967296}return(s>>>0)*23283064365386963e-26}else s=4022871197};return i},b=function(s){return function(){var i=48,l=1,u=i,r=new Array(i),n,a,d=0,f=new F;for(n=0;n<i;n++)r[n]=f(Math.random());var c=function(){++u>=i&&(u=0);var e=1768863*r[u]+l*23283064365386963e-26;return r[u]=e-(l=e|0)},t=function(e){return Math.floor(e*(c()+(c()*2097152|0)*11102230246251565e-32))};t.string=function(e){var m,p="";for(m=0;m<e;m++)p+=String.fromCharCode(33+t(94));return p};var o=function(){var e=Array.prototype.slice.call(arguments);for(n=0;n<e.length;n++)for(a=0;a<i;a++)r[a]-=f(e[n]),r[a]<0&&(r[a]+=1)};return t.cleanString=function(e){return e=e.replace(/(^\s*)|(\s*$)/gi,""),e=e.replace(/[\x00-\x1F]/gi,""),e=e.replace(/\n /,`
`),e},t.hashString=function(e){for(e=t.cleanString(e),f(e),n=0;n<e.length;n++)for(d=e.charCodeAt(n),a=0;a<i;a++)r[a]-=f(d),r[a]<0&&(r[a]+=1)},t.seed=function(e){(typeof e>"u"||e===null)&&(e=Math.random()),typeof e!="string"&&(e=E(e,function(m,p){return typeof p=="function"?p.toString():p})),t.initState(),t.hashString(e)},t.addEntropy=function(){var e=[];for(n=0;n<arguments.length;n++)e.push(arguments[n]);o(d+++new Date().getTime()+e.join("")+Math.random())},t.initState=function(){for(f(),n=0;n<i;n++)r[n]=f(" ");l=1,u=i},t.done=function(){f=null},typeof s<"u"&&t.seed(s),t.range=function(e){return t(e)},t.random=function(){return t(Number.MAX_VALUE-1)/Number.MAX_VALUE},t.floatBetween=function(e,m){return t.random()*(m-e)+e},t.intBetween=function(e,m){return Math.floor(t.random()*(m-e+1))+e},t}()};b.create=function(s){return new b(s)};var _=b;const L={class:"fields"},z={class:"result"},H={class:"result"},I=O({__name:"same-number-generator",setup(s){const i=x(1),l=x(10),u=x(1),r=x(""),n=h(()=>{u.value=1;const t=_.create(""+i.value).intBetween(0,16777215),o=_.create(""+l.value).intBetween(0,16777215);return{generator:_.create(r.value+t*o),values:[]}}),a=h(()=>{u.value=1;const t=_.create(""+i.value).intBetween(0,16777215),o=_.create(""+l.value).intBetween(0,16777215);return{generator:_.create(r.value+t*o),values:[]}}),d=h(()=>{var e,m;const{generator:t,values:o}=n.value;return(m=o[e=u.value])!=null?m:o[e]=t.intBetween(i.value,l.value)}),f=h(()=>{var e,m;const{generator:t,values:o}=a.value;return(m=o[e=u.value])!=null?m:o[e]=Array(d.value.toString().length).fill().map(()=>{const p=t.intBetween(0,35);return p>9?t.intBetween(0,1)?p.toString(36).toUpperCase():p.toString(36).toLowerCase():p.toString(36)}).join("")}),c=h(()=>{let t=u.value.toString();return t=t[t.length-1],u.value+([,"st","nd","rd"][+t]||"th")});return(t,o)=>($(),j(k,{center:""},{default:g(()=>[S("form",L,[v(N,{center:""},{default:g(()=>[v(C,{stretch:""},{default:g(()=>[v(M,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),placeholder:"Minimum"},null,8,["modelValue"]),v(M,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),placeholder:"Maximum"},null,8,["modelValue"])]),_:1}),v(U,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value=e),placeholder:"Optional password...",type:"password"},null,8,["modelValue"]),v(C,{stretch:""},{default:g(()=>[v(B,{disabled:u.value<=1,onClick:o[3]||(o[3]=e=>u.value--)},{default:g(()=>[A(" Previous number... ")]),_:1},8,["disabled"]),v(B,{onClick:o[4]||(o[4]=e=>u.value++)},{default:g(()=>[A("Next number...")]),_:1})]),_:1}),v(D),S("p",z,w(y(c))+" number: "+w(y(d)),1),S("p",H,w(y(c))+" string: "+w(y(f)),1)]),_:1})])]),_:1}))}});const R=G(I,[["__scopeId","data-v-41b30443"]]);export{R as default};
